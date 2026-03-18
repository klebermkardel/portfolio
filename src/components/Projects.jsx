import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import pcStoreImg from '../assets/img/projects-images/pc-store.png';

const Projects = () => {
  const projectsList = [
    {
      title: "PC Store",
      image: pcStoreImg,
      description: "E-commerce fullstack de hardware com vitrine, carrinho, checkout em etapas, autenticação JWT com refresh token automático e painel administrativo completo.",
      techs: ["React", "Node.js", "MySQL", "TailwindCSS", "JWT"],
      github: "https://github.com/klebermkardel/pc-store",
      link: "#"
    },
    {
      title: "Projeto Exemplo 2",
      image: "/assets/IMG/projects/projeto2.jpg",
      description: "Explicação sobre as funcionalidades principais e tecnologias envolvidas.",
      techs: ["JavaScript", "CSS Semântico"],
      github: "https://github.com/klebermkardel",
      link: "#"
    }
  ];

  return (
    <section id="projetos" className="projects">
      <h2 className="projects-title">Meus Projetos</h2>
      <p className="projects-subtitle">Alguns dos trabalhos que desenvolvi recentemente.</p>

      <div className="projects-grid">
        {projectsList.map((project, index) => (
          <article className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={`Screenshot do ${project.title}`} />
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-techs">
                {project.techs.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} /> Code
                </a>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;