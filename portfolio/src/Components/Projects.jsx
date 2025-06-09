import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "Modern Developer Portfolio",
      description: "A sleek and dynamic personal portfolio showcasing projects, skills, experience, and a smart contact system. Fully responsive and optimized for hiring visibility.",
      fullDescription: "A personal portfolio web app designed and developed from scratch using React.js for the frontend and Node.js for backend email handling. It features a responsive layout, animated hero section, categorized project showcase, downloadable resume, and an integrated contact form powered by Nodemailer. Built to demonstrate real-world full-stack development skills, optimized for recruiters and hiring managers.",
      techStack: ["React.js", "Node.js", "Nodemailer"],
      githubLink: "https://github.com/your-username/portfolio",
      demoLink: "https://shaikahamedalisha.onrender.com",
      category: "Full Stack",
      featured: true
    },
    {
      title: "Expense Tracker App",
      description: "A comprehensive budget-based expense tracking application featuring real-time interactive charts...",
      fullDescription: "A full-stack budget and expense management application enabling users to track their income, expenses, and savings efficiently. Includes monthly budgeting goals, pie and bar charts (via Chart.js), and persistent data with MongoDB. Built with React.js for the user interface and Node.js/Express.js for the backend API. The app also supports dynamic filtering, real-time visual analytics, and mobile responsiveness.",
      techStack: ["React.js", "Node.js", "MongoDB", "Chart.js"],
      githubLink: "https://github.com",
      demoLink: "",
      category: "Full Stack",
      featured: true
    },
    {
      title: "Knowledge Graph Embeddings",
      description: "Advanced machine learning project implementing temporal knowledge graph embeddings...",
      fullDescription: "An academic research project exploring temporal knowledge graphs using graph embedding techniques. Leveraged NetworkX for graph construction, Word2Vec for semantic embedding, and NumPy for computational operations. The goal was to model and represent evolving relationships in knowledge networks over time, which has applications in NLP and AI-driven recommendation systems. Developed entirely in Python for experimentation and analysis.",
      techStack: ["Python", "NetworkX", "Word2Vec", "NumPy"],
      githubLink: "https://github.com",
      demoLink: "/Demo/Knowledge.pptx", // No demo available
      category: "Machine Learning"
    },
    {
      title: "Accident Detection System",
      description: "Intelligent vehicle collision detection system leveraging OpenCV computer vision technologies...",
     fullDescription: "A smart surveillance system that detects road accidents using computer vision techniques in real-time. Developed using Python, OpenCV for motion detection, and Django for the web interface. SQLite was used for storing logs, and Twilio was integrated to send emergency SMS alerts automatically. The system aims to provide a proactive safety mechanism for smart cities and autonomous vehicles.",
      techStack: ["Python", "OpenCV", "Django", "SQLite", "Twilio"],
      githubLink: "https://github.com",
      demoLink: "/Demo/Accident.pdf",
      category: "Computer Vision"
    }
  ];

  const categories = ['All', 'Full Stack', 'Machine Learning', 'Computer Vision'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card card">
              {project.featured && (
                <div className="featured-badge">Featured</div>
              )}
              <div className="project-image">
                <div className="project-placeholder">
                  <span>
                    {project.category === 'Full Stack' && '💼'}
                    {project.category === 'Machine Learning' && '🧠'}
                    {project.category === 'Computer Vision' && '👁️'}
                  </span>
                </div>
                <div className="project-overlay">
                  <span className="view-details">View Details</span>
                </div>
              </div>
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-details">
                  <p className="project-full-description">{project.fullDescription}</p>
                </div>
                <div className="tech-stack">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.githubLink}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>📂</span> GitHub
                  </a>
                  {project.demoLink ? (
                    <a
                      href={project.demoLink}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>🚀</span> View Demo
                    </a>
                  ) : (
                    <button
                      className="btn btn-primary disabled-link"
                      disabled
                      title="Demo not available"
                    >
                      <span>🚫</span> No Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
