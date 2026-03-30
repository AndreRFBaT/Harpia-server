#!/bin/bash

echo "Iniciando stream..."

# Esperar câmera
while [ ! -e /dev/video0 ]; do
  echo "Aguardando /dev/video0..."
  sleep 2
done

# Esperar MediaMTX
while ! nc -z localhost 8554; do
  echo "Aguardando MediaMTX..."
  sleep 2
done

# Evitar race condition
sleep 3

echo "Tudo pronto. Iniciando FFmpeg..."

exec /usr/bin/ffmpeg \
-f v4l2 -i /dev/video0 \
-f alsa -i hw:0,0 \
-map 0:v -map 1:a \
-vcodec libx264 -preset veryfast -tune zerolatency -pix_fmt yuv420p \
-acodec libopus -ar 48000 -b:a 96k -ac 2 \
-af volume=5,aresample=async=1:first_pts=0 \
-f rtsp rtsp://localhost:8554/mystream


# rum permissions
# sudo chmod +x /usr/local/bin/start-stream.sh