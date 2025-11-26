import React from 'react';
import Header from '../components/portfolio/Header';
import Hero from '../components/portfolio/Hero';
import About from '../components/portfolio/About';
import Skills from '../components/portfolio/Skills';
import CareerJourney from '../components/portfolio/CareerJourney';
import Projects from '../components/portfolio/Projects';
import Contact from '../components/portfolio/Contact';
import Footer from '../components/portfolio/Footer';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-[#1a1c1b]">
      <Header />
      <Hero />
      <About />
      <Skills />
      <CareerJourney />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default PortfolioPage;