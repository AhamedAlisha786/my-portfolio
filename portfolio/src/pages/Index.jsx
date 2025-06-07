import React from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import Experience from '../Components/Experience';
import Education from '../Components/Education';
import Certifications from '../Components/Certification';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import './Index.css';

const Index = () => {
  return (
    <div className="portfolio">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
