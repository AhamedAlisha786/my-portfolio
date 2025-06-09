import React from 'react';
import './About.css';
import profileImg from '../assets/profile.jpg';
import { toast } from 'sonner';
import * as Tooltip from '@radix-ui/react-tooltip';

const About = () => {
  const handleConnectClick = () => {
    toast.success("Thanks for reaching out! Let's talk soon 🚀");
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="profile-card">
              <img src={profileImg} alt="Shaik Ahamed Alisha" className="profile-image" />
              <div className="profile-stats">
                <div className="stat-item">
                  <span className="stat-number">Always</span>
                  <span className="stat-label">Curious</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">Driven</span>
                  <span className="stat-label">Passion</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">Ready</span>
                  <span className="stat-label">to Contribute</span>
                </div>
              </div>
            </div>
          </div>
          <div className="about-text">
            <div className="intro-badge">
              <span className="badge-icon">🚀</span>
              <span>Full Stack Developer</span>
            </div>
            <h3 className="about-subtitle">Turning Ideas Into Digital Reality</h3>
            <p className="about-description">
              I graduated with a B.Tech in Computer Science from IIIT Nuzvid, where my journey 
              began with curiosity and evolved into a passionate pursuit of creating innovative, 
              scalable solutions. I specialize in full-stack development, combining modern frontend 
              frameworks with robust backend architectures.
            </p>
            <p className="about-description">
              My approach to development goes beyond just writing code—I focus on understanding 
              user needs, designing intuitive interfaces, and building systems that can grow and 
              adapt. Whether working solo or collaborating with teams, I bring creative 
              problem-solving and attention to detail to every project.
            </p>
            <div className="expertise-tags">
              <span className="expertise-tag">Problem Solver</span>
              <span className="expertise-tag">Team Player</span>
              <span className="expertise-tag">Quick Learner</span>
              <span className="expertise-tag">UI/UX Minded</span>
            </div>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-icon">🎓</span>
                <div>
                  <strong>Education:</strong>
                  <span>B.Tech CSE at IIIT Nuzvid</span>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">📍</span>
                <div>
                  <strong>Location:</strong>
                  <span>Andhra Pradesh, India</span>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">💼</span>
                <div>
                  <strong>GitHub:</strong>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <a href=" https://github.com/AhamedAlisha786" target="_blank" rel="noopener noreferrer">
                        github.com/alisha
                      </a>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content className="tooltip-content" sideOffset={5}>
                        Visit my GitHub
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">🔗</span>
                <div>
                  <strong>LinkedIn:</strong>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <a href="https://www.linkedin.com/in/shaik-ahamed-alisha-9a9295252" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/shaik-ahamed-alisha
                      </a>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content className="tooltip-content" sideOffset={5}>
                        Visit my LinkedIn
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">🎯</span>
                <div>
                  <strong>Current Focus:</strong>
                  <span>React.js, Node.js & ML</span>
                </div>
              </div>
            </div>
            <div className="cta-buttons">
              <a onClick={handleConnectClick} href="#contact" className="btn btn-primary">
                Let's Connect
              </a>
              <a href="/Shaik%20Ahamed%20Alisha%20Resume%20.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer" download>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
