
import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: "Edubot",
      position: "Full Stack Developer Intern",
      duration: "May 2024 – June 2024",
      description: "Developed a responsive, full-stack Expense Tracker web app with React.js frontend featuring Chart.js visualizations, Node.js & MongoDB backend for secure data management, focusing on user experience, form validation, and real-time financial insights.",
      technologies: ["React.js", "Node.js", "MongoDB", "Chart.js"]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item card">
              <div className="experience-header">
                <div className="company-info">
                  <h3 className="position">{exp.position}</h3>
                  <h4 className="company">{exp.company}</h4>
                </div>
                <div className="duration">{exp.duration}</div>
              </div>
              <p className="experience-description">{exp.description}</p>
              <div className="experience-tech">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
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

export default Experience;
