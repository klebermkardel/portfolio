import React from 'react';

const Skills = () => {
  const skillsList = [
    { name: "HTML5", icon: "fa-brands fa-html5" },
    { name: "CSS3", icon: "fa-brands fa-css3-alt" },
    { name: "JavaScript", icon: "fa-brands fa-js" },
    { name: "React", icon: "fa-brands fa-react" },
    { name: "Node.js", icon: "fa-brands fa-node-js" },
    { name: "SQL / NoSQL", icon: "fa-solid fa-database" },
    { name: "Git", icon: "fa-brands fa-git-alt" },
  ];

  return (
    <section id="habilidades" className="skills">
      <h2 className="skills-title">Minhas Habilidades</h2>
      <p className="skills-subtitle">Tecnologias e ferramentas que utilizo no meu dia a dia.</p>

      <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <div className="skill-card" key={index}>
            <i className={skill.icon} aria-hidden="true"></i>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;