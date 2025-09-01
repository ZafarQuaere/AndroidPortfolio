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
    <section id="home" className="hero-section bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 min-h-screen flex items-center relative overflow-hidden">
      {/* Android-themed Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-400 rounded-full opacity-20" />
        <div className="absolute top-32 right-20 w-16 h-16 bg-green-400 rounded-full opacity-30" />
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-lime-400 rounded-full opacity-25" />
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-teal-400 rounded-full opacity-20" />
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-emerald-300 rounded-full opacity-40" />
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-green-300 rounded-full opacity-35" />
      </div>

      {/* Code-like Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 text-emerald-400 font-mono text-xs">
          public class AndroidDeveloper {'{'}
        </div>
        <div className="absolute bottom-32 right-1/4 text-green-400 font-mono text-xs">
          implementation 'androidx.compose:compose-ui:1.5.0'
        </div>
        <div className="absolute top-1/2 left-10 text-lime-400 font-mono text-xs">
          @Override
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-teal-400 font-mono text-xs">
          fun onCreate(savedInstanceState: Bundle?)
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          {/* Greeting */}
          <div className="mb-6">
            <p className="caption text-emerald-300 uppercase tracking-wider font-mono">
              &lt;Hello, I'm /&gt;
            </p>
          </div>

          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-none text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-3xl mt-4 font-semibold text-emerald-300">
              {personalInfo.title}
            </h2>
          </div>

          {/* Tagline */}
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-slate-900 px-8 py-4 rounded-full font-semibold uppercase tracking-wide hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-full font-semibold uppercase tracking-wide hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 mb-8">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 group"
            >
              <Github size={24} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 group"
            >
              <Linkedin size={24} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 group"
            >
              <Mail size={24} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>

          {/* Scroll Indicator - Reduced margin */}
          <div className="flex items-center space-x-3 mb-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 group flex items-center space-x-2"
            >
              <span className="caption uppercase tracking-wider font-mono">&lt;scroll to explore /&gt;</span>
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Android Logo Section */}
      <div className="absolute bottom-8 right-8 opacity-30">
        <img
          src={personalInfo.androidLogo}
          alt="Android Development"
          className="w-32 h-32 object-contain rounded-2xl"
        />
      </div>

      {/* Floating Code Elements */}
      <div className="absolute top-1/4 right-8 text-emerald-400/20 font-mono text-sm rotate-12">
        fun buildApp()
      </div>
      <div className="absolute bottom-1/4 left-8 text-green-400/20 font-mono text-sm -rotate-12">
        class MainActivity
      </div>
    </section>
  );
};

export default Hero;