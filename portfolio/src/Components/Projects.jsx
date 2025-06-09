import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "Modern Developer Portfolio",
      description: "A sleek and dynamic personal portfolio showcasing projects, skills, experience, and a smart contact system. Fully responsive and optimized for hiring visibility.",
      fullDescription: "This portfolio application is designed to highlight my professional profile with a visually appealing, mobile-friendly UI...",
      techStack: ["React.js", "Node.js", "Nodemailer"],
      githubLink: "https://github.com/your-username/portfolio",
      demoLink: "https://shaikahamedalisha.onrender.com",
      category: "Full Stack",
      featured: true
    },
    {
      title: "Expense Tracker App",
      description: "A comprehensive budget-based expense tracking application featuring real-time interactive charts...",
      fullDescription: "This full-stack application helps users manage their finances with advanced features like monthly budget goals...",
      techStack: ["React.js", "Node.js", "MongoDB", "Chart.js"],
      githubLink: "https://github.com",
      demoLink: "",
      category: "Full Stack",
      featured: true
    },
    {
      title: "Knowledge Graph Embeddings",
      description: "Advanced machine learning project implementing temporal knowledge graph embeddings...",
      fullDescription: "This research-focused project explores the intersection of graph theory and natural language processing...",
      techStack: ["Python", "NetworkX", "Word2Vec", "NumPy"],
      githubLink: "https://github.com",
      demoLink: "/Demo/Knowedge.pptx", // No demo available
      category: "Machine Learning"
    },
    {
      title: "Accident Detection System",
      description: "Intelligent vehicle collision detection system leveraging OpenCV computer vision technologies...",
      fullDescription: "A life-saving application that uses computer vision to detect vehicle accidents in real-time...",
      techStack: ["Python", "OpenCV", "Django", "SQLite", "Twilio"],
      githubLink: "https://github.com",
      demoLink: "/demo/Accident.pdf",
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
