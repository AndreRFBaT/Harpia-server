import "./Developers.css";

// import DeveloperCard from "../../components/DevelopersCard/DeveloperCard.jsx";
import DevelopersCard from "../../components/DevelopersCard/DevelopersCard.jsx";

import { developers } from "../../data/DevelopersData.js";

function Developers() {
    return (
        <section id="developers">
            <h2>Desenvolvedores e contributores</h2>

            <div className="developers-container">
                {developers.map((developer) => (
                    <DevelopersCard
                        key={developer.name}
                        {...developer}
                    />
                ))}
            </div>
        </section>
    );
}

export default Developers;