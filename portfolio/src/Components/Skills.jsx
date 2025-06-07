
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "JavaScript", "HTML", "CSS", "SQL"]
    },
    {
      title: "Frameworks",
      skills: ["React.js", "Node.js","Bootstrap"]
    },
    {
      title: "Tools",
      skills: ["Git", "MongoDB", "VS Code", "PyCharm"]
    },
    {
      title: "Libraries",
      skills: ["Pandas", "NumPy", "NetworkX", "Chart.js"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Professional Toolbelt</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category card">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
