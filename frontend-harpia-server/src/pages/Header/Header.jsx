import "./Header.css";
// Certifique-se de salvar a imagem do olho na sua pasta de assets
import olhoImg from "../../assets/olho_cyberharpia.png"; 

function Header() {
  return (
    <header>
        <nav>
            <a href="#harpia" className="logo-container">
                {/* Estrutura do efeito cibernético */}
                <div className="cyber-eye-wrapper">
                    <div className="outer-arc"></div>
                    <div className="inner-arc"></div>
                    <img src={olhoImg} alt="Cyber Eye" className="center-eye" />
                </div>
                <h2>Harpia Server</h2>
            </a>
            
            <a href="#about"><h2>Sobre</h2></a>
            <a href="#live_stations" className="live-link">
              <span className="live-indicator"></span>
              <h2>Estações ao Vivo</h2>
            </a>
            <a href="#developers"><h2>Desenvolvedores</h2></a>
            <a href="#contact"><h2>Contato</h2></a>
        </nav>
    </header>
  );
}

export default Header;
