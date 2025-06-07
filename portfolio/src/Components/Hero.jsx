
import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  const subtitles = [
    "Full Stack Developer",
    "CSE graduate", 
    "Tech Explorer",
    "React & Node.js Enthusiast"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hey, I'm Shaik Ahamed Alisha <span className="wave-emoji">👋</span>
          </h1>
          <p className="hero-description">
            I'm a Computer Science student passionate about full-stack development, 
            creative problem-solving, and transforming ideas into functional software.
          </p>
          <div className="hero-subtitle">
            <span className="subtitle-text">{subtitles[currentSubtitle]}</span>
          </div>
          <div className="hero-buttons">
            <a href="/Shaik%20Ahamed%20Alisha%20Resume%20.pdf"  className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              🧾 View Resume
            </a>
            <button onClick={scrollToProjects} className="btn btn-outline">
              🔍 Explore My Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
