import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
  faHtml5, 
  faCss3Alt, 
  faJs, 
  faReact, 
  faNodeJs, 
  faGitAlt 
} from '@fortawesome/free-brands-svg-icons';

import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const skillsList = [
    { name: "HTML5", icon: faHtml5 },
    { name: "CSS3", icon: faCss3Alt },
    { name: "JavaScript", icon: faJs },
    { name: "React", icon: faReact },
    { name: "Node.js", icon: faNodeJs },
    { name: "SQL / NoSQL", icon: faDatabase },
    { name: "Git", icon: faGitAlt },
  ];

  return (
    <section id="habilidades" className="skills">
      <h2 className="skills-title">Minhas Habilidades</h2>
      <p className="skills-subtitle">Tecnologias e ferramentas que utilizo no meu dia a dia.</p>

      <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <div className="skill-card" key={index}>
            <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;