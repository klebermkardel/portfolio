import React, { useState, useEffect, useRef } from 'react';
import avatarImg from '../assets/img/avatar.png';

const Hero = () => {
    const [text, setText] = useState("");
    const fullText = "Kleber M Kardel";
    const indexRef = useRef(0);

    useEffect(() => {
        // Removemos o setText("") daqui de cima para evitar o aviso do ESLint.
        // O estado inicial já é "" (definido no useState).
        
        indexRef.current = 0;

        const timer = setInterval(() => {
            if (indexRef.current < fullText.length) {
                const char = fullText.charAt(indexRef.current);
                setText((prev) => prev + char);
                indexRef.current += 1;
            } else {
                clearInterval(timer);
            }
        }, 100);

        return () => {
            clearInterval(timer);
            // Opcional: limpa o texto quando o utilizador sai da seção
            // Mas para um Typewriter de entrada, geralmente não é necessário.
        };
    }, []);

    return (
        <section id="inicio" className="hero">
            <div className="hero-content">
                <h1 className="hero-title">{text}</h1>
                <h2 className="hero-subtitle">Desenvolvedor Fullstack</h2>
                <p className='hero-description'>
                    Apaixonado por criar soluções digitais completas, do back-end ao front-end.
                    Focado em escrever código limpo e eficiente.
                </p>
                <a href="#projetos" className="btn-primary">Ver Projetos</a>
            </div>
            <div className="hero-image">
                <div className="art-container">
                    <img 
                        src={avatarImg}
                        alt="Avatar de Kleber M Kardel"
                        className="avatar-animated"    
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;