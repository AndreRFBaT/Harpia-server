import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function DevelopersCard({
    name,
    photo,
    linkedin,
    github,
    email,
    description
}) {
    return (
        <div className="developers-card">
            <img
                src={photo}
                alt={name}
                className="developers-photo"
            />

            <h3 className="developers-name">
                {linkedin ? (
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <FaLinkedin />
                    {name}
                </a>
                ) : (
                    name
                )}
            </h3>

            <div className="developers-links">
                {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                        {github}
                    </a>
                )}
                {email && (
                    <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                        <FaEnvelope />
                        {email}
                    </a>
                )}

            </div>

            <p className="developers-description">
                {description}
            </p>
        </div>
    );
}

export default DevelopersCard;