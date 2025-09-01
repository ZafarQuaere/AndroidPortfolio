import React from 'react';
import Header from '../components/portfolio/Header';
import Hero from '../components/portfolio/Hero';
import About from '../components/portfolio/About';
import Skills from '../components/portfolio/Skills';
import Experience from '../components/portfolio/Experience';
import Projects from '../components/portfolio/Projects';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-[#1a1c1b]">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
};

export default PortfolioPage;