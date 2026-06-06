import "./Footer.css";
import eyeImage from "../../assets//olho_cyberharpia.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-eye">

        <div className="cyber-eye-wrapper">

          <div className="outer-arc"></div>

          <div className="inner-arc"></div>

          <img
            src={eyeImage}
            alt="Harpia"
            className="center-eye"
          />

        </div>

      </div>

      <h1>Harpia Server</h1>

      <p>
        Harpia Server 2026 - Estação IoT de Observação de Pássaros
      </p>

    </footer>
  );
}

export default Footer;