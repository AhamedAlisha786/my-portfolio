
import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      institution: "IIIT Nuzvid",
      degree: "B.Tech in Computer Science",
      duration: "2021 – 2025",
      type: "Graduated"
    },
    {
      institution: "IIIT Nuzvid",
      degree: "Pre-University Course",
      duration: "2019 – 2021",
      type: "Pre-University"
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-item card">
              <div className="education-content">
                <div className="education-icon">🎓</div>
                <div className="education-details">
                  <h3 className="institution-name">{edu.institution}</h3>
                  <h4 className="degree-name">{edu.degree}</h4>
                  <p className="duration">{edu.duration}</p>
                  <span className="education-type">{edu.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
