
import React from 'react';
import './Certification.css';

const Certifications = () => {
  const certifications = [
    {
      title: "50 Days of SQL Challenge",
      issuer: "Completed",
      date: "Dec 2024",
      type: "Challenge",
      icon: "🎓"
    },
    {
      title: "Java Programming: A Hands-on Introduction",
      issuer: "Codio",
      date: "2023",
      type: "Certification",
      icon: "☕"
    },
    {
      title: "Python Programming: A Hands-on Introduction",
      issuer: "Codio",
      date: "2022",
      type: "Certification",
      icon: "🐍"
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card card">
              <div className="cert-icon">{cert.icon}</div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-date">{cert.date}</p>
              <span className="cert-type">{cert.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
