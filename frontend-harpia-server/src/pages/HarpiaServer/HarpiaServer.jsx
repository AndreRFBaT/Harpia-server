import "./HarpiaServer.css";

import fundoTela from "../../assets/fundo_tela_inicial.jpg";
import harpiaImg from "../../assets/harpia_tela_inicial.png";

function HarpiaServer() {
  return (
    <section
        id="harpia"
        style={{ backgroundImage: `url(${fundoTela})` }}
        >
            <div className="hero-content">
                <div className="hero-text">

                    <h1>HARPIA SERVER</h1>
                        <h2>Uma rede colaborativa de estações EOP-IoT.</h2>
                        <p>O Harpia Server é uma rede de estações de observação de pássaros IoT que transmitem em tempo real imagens de pássaros de diversas localidades. Qualquer pessoa pode adquirir e instalar uma estação em sua localidade, bastando fornecer alimento adequado para pássaros como atrativo e uma conexão com a internet através de Wi-Fi ou cabo. As estações são portáteis e podem ser fixadas em árvores, bases ou edificações. Cada estação tem capacidade para fornecer imagens de alta resolução que permitem observar cores, detalhes, canto e padrões, seja para a apreciação ou para a observação técnica da espécie. O Harpia Server é uma iniciativa que visa conectar admiradores e estudiosos de pássaros como uma rede de alta granularidade e altamente distribuída, melhorando a experiência de observação e viabilizando um contato ainda mais abrangente com a natureza.</p>
                        {/* <a href="#live_stations"><button>Veja as estações ao vivo</button></a> */}
                </div>
                <div className="hero-image">
                    <img
                        src={harpiaImg}
                        alt="Harpia Server"/>
                </div>
            </div>
    </section>
  );
}

export default HarpiaServer;