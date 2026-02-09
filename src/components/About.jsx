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
                        Me chamo <strong>Kleber M. Kardel</strong>, desenvolvedor Fullstack graduado em 
                        <strong> Ciência da Computação</strong> pela FAM - Faculdades das Américas. 
                        Minha base acadêmica sólida me permite transitar com segurança por toda a camada de 
                        desenvolvimento, desde a estruturação de dados até a interface final.
                    </p>
                    <p>
                        Especializado em construir aplicações modernas, foco no equilíbrio entre a entrega 
                        de valor ao negócio e a excelência técnica. Utilizo o pensamento analítico e as 
                        melhores práticas de engenharia de software para transformar desafios complexos em 
                        soluções digitais escaláveis, eficientes e de alta performance.
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