import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faGitAlt 
} from '@fortawesome/free-brands-svg-icons';
import { SiTailwindcss } from "react-icons/si";
import { faDatabase, faTimes } from '@fortawesome/free-solid-svg-icons';
const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillsList = [
    { 
        name: "HTML5", 
        icon: faHtml5, 
        description: "Linguagem de marcação para estruturação web com foco em semântica e acessibilidade." 
    },
    { 
        name: "CSS3", 
        icon: faCss3Alt, 
        description: "Estilização avançada com Flexbox, Grid Layout e animações para interfaces responsivas." 
    },
    { 
        name: "JavaScript", 
        icon: faJs, 
        description: "Desenvolvimento de lógica complexa, manipulação de DOM e consumo de APIs assíncronas." 
    },
    {
      name: "TailwindCSS",
      icon: SiTailwindcss,
      description: "Estilização utilitária de alta performance, construção de interfaces responsivas e design system consistente via classes atômicas."
    },
    { 
        name: "React", 
        icon: faReact, 
        description: "Criação de SPAs (Single Page Applications) escaláveis com arquitetura baseada em componentes." 
    },
    { 
        name: "Node.js", 
        icon: faNodeJs, 
        description: "Construção de back-end escalável, APIs RESTful e integração com bancos de dados." 
    },
    { 
        name: "SQL / NoSQL", 
        icon: faDatabase, 
        description: "Modelagem e gerenciamento de dados com foco em integridade e performance de consultas." 
    },
    { 
        name: "Git", 
        icon: faGitAlt, 
        description: "Controle de versão e colaboração técnica utilizando fluxos de trabalho Gitflow." 
    },
  ];

  return (
    <section id="habilidades" className="skills">
      <h2 className="skills-title">Minhas Habilidades</h2>
      <p className="skills-subtitle">Tecnologias e ferramentas que utilizo no meu dia a dia.</p>
      <p className="call-to-action">Clique em uma tecnologia para saber mais.</p>

      <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <div 
            className="skill-card" 
            key={index} 
            onClick={() => setSelectedSkill(skill)}
            style={{ cursor: 'pointer' }}
          >
            <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>

      {/* Estrutura do Modal */}
      {selectedSkill && (
        <div className="modal-overlay" onClick={() => setSelectedSkill(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedSkill(null)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <FontAwesomeIcon icon={selectedSkill.icon} className="modal-icon" />
            <h3>{selectedSkill.name}</h3>
            <p>{selectedSkill.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;