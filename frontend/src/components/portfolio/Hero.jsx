import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/mock';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section bg-[#1a1c1b] min-h-screen flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d9fb06]/10 via-transparent to-[#3f4816]/10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Greeting */}
          <div className="mb-6">
            <p className="caption text-[#888680] uppercase tracking-wider">
              Hello, I'm
            </p>
          </div>

          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="brand-display text-[#d9fb06] font-black uppercase leading-none">
              {personalInfo.name}
            </h1>
            <h2 className="heading-4 text-[#d9fb06] mt-4 font-semibold">
              {personalInfo.title}
            </h2>
          </div>

          {/* Tagline */}
          <div className="mb-12">
            <p className="body-large text-[#d9fb06] max-w-2xl leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary bg-[#d9fb06] text-[#1a1c1b] px-8 py-4 rounded-full font-semibold uppercase tracking-wide hover:scale-105 transition-transform duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary border border-[#d9fb06] text-[#d9fb06] px-8 py-4 rounded-full font-semibold uppercase tracking-wide hover:bg-[#d9fb06] hover:text-[#1a1c1b] transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 mb-12">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888680] hover:text-[#d9fb06] transition-colors duration-300 group"
            >
              <Github size={24} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888680] hover:text-[#d9fb06] transition-colors duration-300 group"
            >
              <Linkedin size={24} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-[#888680] hover:text-[#d9fb06] transition-colors duration-300 group"
            >
              <Mail size={24} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#888680] hover:text-[#d9fb06] transition-colors duration-300 group flex items-center space-x-2"
            >
              <span className="caption uppercase tracking-wider">Scroll to explore</span>
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-8 w-2 h-32 bg-gradient-to-b from-[#d9fb06]/20 to-transparent opacity-60" />
      <div className="absolute bottom-1/4 left-8 w-2 h-24 bg-gradient-to-t from-[#3f4816]/40 to-transparent opacity-60" />
    </section>
  );
};

export default Hero;