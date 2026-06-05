import "./EOP_IoT.css";

import hardware from "../../assets/hardware.png";

function EOP_IoT() {
  return (
    <section id="eop_iot">
      <div className="eop_iot-content">
        <div className="eop_iot-text">
          <h1>EOP-IoT</h1>
            <h2>Estação de Observação de Pássaros
              conectada por Internet das Coisas</h2>

            <p>As EOP-IoT (Estação de Observação de Pássaros - Internet of Things) são estações desenvolvidas
               especificamente para a observação remota de pássaros. Cada estação é equipada com uma câmera de alta 
               resolução conectada a uma placa de controle que atua como um servidor local, capturando e transmitindo 
               imagens dos pássaros que pousam na estação para consumir alimentos. As estações foram desenvolvidas para 
               atuar no ambiente urbano e em zonas de transição entre o ambiente urbano e florestas como: chácaras, 
               sítios, parques e áreas de conservação. São portáteis, acessíveis ao público, capturam som e imagem.
            </p>
        </div>

        <div className="eop_iot-image">
          <img
            src={hardware} alt="Hardware"/>
        </div>
      </div>
    </section>
  );
}

export default EOP_IoT;