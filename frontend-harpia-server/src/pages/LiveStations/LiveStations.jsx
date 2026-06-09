import "./LiveStations.css";
import FundoTela from "../../assets/fundo_tela_inicial.jpg";

import {
  FaMapMarkerAlt,
  FaWind,
  FaCloudSun,
  FaThermometerHalf,
  FaTint,
  FaBroadcastTower
} from "react-icons/fa";

import { MdAir } from "react-icons/md";

function LiveStations() {
    return (
        <section
            id="live_stations"
            style={{ backgroundImage: `url(${FundoTela})` }}
        >
            <div className="live-stations-content">
                <h1>Estações ao vivo</h1>
                <h2>Acesse as estações de observação online</h2>

                <div className="station-card">
                    <div className="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/nDLUV_-B-D4?autoplay=1"
                        title="EOP - IoT - 01"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    </div>

                    <div className="station-info">
                        <div className="station-header">
                            <h3>EOP - IOT - Estação 01</h3>
                            <span className="channel-box">
                                <strong>Canal:</strong> Hapia Server
                            </span>
                        </div>

                        <div className="info-grid">
                            <div>
                                <FaMapMarkerAlt className="info-icon" /> <strong>Local:</strong> Descalvado - SP
                            </div>

                            {/* <div>
                                <FaBroadcastTower className="info-icon" /> <strong>Canal:</strong> Hapia Server
                            </div> */}

                            <div>
                                <FaCloudSun className="info-icon" /> <strong>Clima:</strong> Ensolarado
                            </div>

                            <div>
                                <FaThermometerHalf className="info-icon" /> <strong>Temperatura:</strong> 26°C
                            </div>

                            <div>
                                <FaTint className="info-icon" /> <strong>Umidade:</strong> 65%
                            </div>

                            <div>
                                <FaWind className="info-icon" /> <strong>Vento:</strong> 3 km/h
                            </div>

                            <div>
                                <MdAir className="info-icon" /> <strong>Qualidade do ar:</strong> 37
                            </div>
                        </div>
                    </div>

                    <div className="map-container">
                        <iframe
                            title="Mapa da estação"
                            src="https://maps.google.com/maps?q=Descalvado,SP&t=&z=13&ie=UTF8&iwloc=&output=embed">
                        </iframe>

                    </div>
                </div>
            </div>

        </section>
    );
}

export default LiveStations;