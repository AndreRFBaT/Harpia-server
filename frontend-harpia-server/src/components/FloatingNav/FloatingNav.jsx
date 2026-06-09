import {useEffect, useState} from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link, useLocation } from 'react-router-dom';

import "./FloatingNav.css";

function FloatingNav() {
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            // console.log(window.scrollY);
            const currentScroll = window.scrollY;

            const passedHero = currentScroll > 300; // Ajuste esse valor conforme necessário

            if (passedHero) {
                setIsVisible(currentScroll < lastScrollY); // Mostra ao rolar para cima, esconde ao rolar para cima
            } else {
                setIsVisible(false); // Esconde se estiver acima do ponto definido
            }

            setLastScrollY(currentScroll);
        };
    
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav className={`floating-nav ${isVisible ? "show" : ""}`}>
            <HashLink smooth to="/#harpia" >
                Home
            </HashLink>

            <HashLink smooth to="/#about" >
                Sobre
            </HashLink>

            <HashLink smooth to="/live-stations" >
                Estações ao vivo
            </HashLink>

            <HashLink smooth to="/#developers" >
                Desenvolvedores
            </HashLink>

            <HashLink smooth to="/#contact" >
                Contato
            </HashLink>
        </nav>
    );
}

export default FloatingNav;