import React from 'react';

const Projects = () => {
  const projectsList = [
    {
      title: "Projeto Exemplo 1",
      image: "/assets/IMG/projects/projeto1.jpg", // Caminho da imagem
      description: "Uma breve descrição do que o projeto faz e qual problema ele resolve.",
      techs: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/klebermkardel",
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
            {/* Imagem do Projeto */}
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
                  <i className="fa-brands fa-github"></i> Code
                </a>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
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