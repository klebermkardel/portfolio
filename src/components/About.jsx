import React from 'react';
import perfilImg from '../assets/img/perfil.png';

const About = () => {
    return (
        <section id="sobre" className="about">
            <div className="about-content">
                <div className="about-image">
                    <img 
                        src={perfilImg} 
                        alt="Foto de Kleber M Kardel"
                        className="profile-img"    
                    />
                </div>

                <div className="about-text">
                    <h2 className="section-title">Sobre Mim</h2>
                    <p>
                        Olá! Eu sou o Kleber, um desenvolvedor focado em construir aplicações robustas e escaláveis. 
                        Minha jornada na programação começou com a curiosidade de entender como as coisas funcionam "por baixo do capô", 
                        o que me levou a explorar o ecossistema Fullstack.
                    </p>
                    <p>
                    Hoje, dedico meu tempo a criar interfaces intuitivas e APIs eficientes, sempre buscando 
                    as melhores práticas de mercado e performance. Acredito que a tecnologia é uma ferramenta 
                    para resolver problemas reais e transformar ideias em realidade.
                    </p>
                    <a href="#habilidades" className="btn-secondary">
                        Conhecer minhas Habilidades
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;