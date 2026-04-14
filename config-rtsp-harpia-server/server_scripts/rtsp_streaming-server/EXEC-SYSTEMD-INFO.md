# Setup de Serviços (MediaMTX + FFmpeg)

**Todos os comandos necessários** para preparar permissões, registrar serviços no systemd e garantir execução automática no boot após a criação dos scripts.

---

# Create stream script files

## 1. Criat script do FFmpeg

```bash
sudo nano /usr/local/bin/start-stream.sh
```

```bash
#!/bin/bash

echo "Iniciando stream..."

# Esperar câmera existir
while [ ! -e /dev/video0 ]; do
  echo "Aguardando /dev/video0..."
  sleep 2
done

# Esperar MediaMTX (porta 8554)
while ! nc -z localhost 8554; do
  echo "Aguardando MediaMTX..."
  sleep 2
done

echo "Tudo pronto. Iniciando FFmpeg..."

exec /usr/bin/ffmpeg \
-f v4l2 -i /dev/video0 \
-f alsa -i hw:0,0 \
-map 0:v -map 1:a \
-vcodec libx264 -preset veryfast -tune zerolatency -pix_fmt yuv420p \
-acodec libopus -ar 48000 -b:a 96k -ac 2 \
-af volume=5,aresample=async=1:first_pts=0 \
-f rtsp rtsp://localhost:8554/mystream
```

## 2. Criar serviço do MediaMTX

```bash
sudo nano /etc/systemd/system/mediamtx.service
```

```bash
[Unit]
Description=MediaMTX Streaming Server
After=network-online.target
Wants=network-online.target

StartLimitIntervalSec=60
StartLimitBurst=5

[Service]
ExecStart=~/streaming_video/mediamtx ~/streaming_video/mediamtx.yml
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
```

## 3. Criar serviço FFmpeg

```bash
sudo nano /etc/systemd/system/ffmpeg-stream.service
```

```bash
[Unit]
Description=FFmpeg Streaming
After=network-online.target mediamtx.service
Wants=network-online.target
Requires=mediamtx.service

StartLimitIntervalSec=60
StartLimitBurst=5

[Service]
ExecStart=/usr/local/bin/start-stream.sh
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

# Permission and info

## 1. Dar permissão de execução ao script

```bash
sudo chmod +x /usr/local/bin/start-stream.sh
```

---

## 2. Copiar serviços para o systemd (se ainda não estiverem lá)

```bash
sudo cp mediamtx.service /etc/systemd/system/
sudo cp ffmpeg-stream.service /etc/systemd/system/
```

---

## 3. Recarregar o systemd

```bash
sudo systemctl daemon-reexec
sudo systemctl daemon-reload
```

---

## 4. Habilitar serviços no boot

```bash
sudo systemctl enable mediamtx
sudo systemctl enable ffmpeg-stream
```

---

## 5. Iniciar serviços manualmente (primeira vez)

```bash
sudo systemctl start mediamtx
sudo systemctl start ffmpeg-stream
```

---

## 6. Verificar status dos serviços

```bash
systemctl status mediamtx
systemctl status ffmpeg-stream
```

Esperado:

```
Active: active (running)
```

---

## 7. Ver logs em tempo real

### MediaMTX

```bash
journalctl -u mediamtx -f
```

### FFmpeg

```bash
journalctl -u ffmpeg-stream -f
```

---

## 8. Testar stream

Abra no navegador:

```
http://SEU_IP:8554/mystream
```

---

## 9. Teste de reinicialização (produção)

Reinicie o servidor:

```bash
sudo reboot
```

Após subir:

```bash
systemctl status mediamtx
systemctl status ffmpeg-stream
```

---

## 10. Ver logs do boot atual

```bash
journalctl -u ffmpeg-stream -b
```

---

## Checklist

* [ ] Script com permissão de execução
* [ ] Serviços copiados para `/etc/systemd/system/`
* [ ] systemd recarregado
* [ ] Serviços habilitados (`enable`)
* [ ] Serviços iniciados (`start`)
* [ ] Status ativo (`running`)
* [ ] Stream acessível no VLC

---

### Se algo falhar no boot:

```bash
journalctl -xe
```

Isso mostra erros detalhados do systemd.

---
