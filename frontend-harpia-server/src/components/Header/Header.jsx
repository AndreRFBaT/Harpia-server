import { Link } from "react-router-dom";
import "./Header.css";
// Certifique-se de salvar a imagem do olho na sua pasta de assets
import olhoImg from "../../assets/olho_cyberharpia.png"; 

function Header() {
  return (
    <header>
        <nav>
            <Link to ="/#home" className="logo-container">
                {/* Estrutura do efeito cibernético */}
                <div className="cyber-eye-wrapper">
                    <div className="outer-arc"></div>
                    <div className="inner-arc"></div>
                    <img src={olhoImg} alt="Cyber Eye" className="center-eye" />
                </div>
                <h2>Harpia Server</h2>
            </Link>

            <a href="/#about"><h2>Sobre</h2></a>
            <Link to="/live-stations" className="live-link">
              <span className="live-indicator"></span>
              <h2>Estações ao Vivo</h2>
            </Link>
            <a href="/#developers"><h2>Desenvolvedores</h2></a>
            <a href="/#contact"><h2>Contato</h2></a>
        </nav>
    </header>
  );
}

export default Header;
