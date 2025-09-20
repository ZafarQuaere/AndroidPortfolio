import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm border-b border-emerald-500/30' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="text-emerald-400 font-bold text-xl cursor-pointer font-mono"
            onClick={() => scrollToSection('home')}
          >
            &lt;ZI /&gt;
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-emerald-300 hover:text-emerald-400 transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 hover:text-emerald-400 transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 hover:text-emerald-400 transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-emerald-300 hover:text-emerald-400 transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 top-0 left-0 right-0 bottom-0 z-50"
            style={{ backgroundColor: '#020617' }} // Force solid color via inline style
            onClick={(e) => {
              // Close menu if clicking on overlay background
              if (e.target === e.currentTarget) {
                setIsMenuOpen(false);
              }
            }}
          >
            {/* Additional solid background layer */}
            <div className="absolute inset-0 bg-slate-950 opacity-100"></div>
            
            {/* Full Screen Mobile Menu */}
            <div className="relative flex flex-col h-full pt-20 px-8 bg-slate-950 z-10">
              {/* Navigation Items */}
              <nav className="flex flex-col space-y-6 flex-1">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-white hover:text-emerald-400 transition-all duration-300 text-left font-bold text-3xl py-4 px-6 rounded-xl border hover:border-emerald-500/50 hover:scale-105 transform shadow-lg"
                    style={{
                      backgroundColor: '#1e293b', // Solid slate-800 color
                      borderColor: '#334155', // Solid slate-700 color
                      animationDelay: `${index * 100}ms`,
                      animation: 'fadeInUp 0.6s ease-out forwards'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#334155'; // Solid slate-700 color on hover
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#1e293b'; // Back to slate-800
                    }}
                  >
                    <span className="font-mono text-emerald-400 mr-4 text-xl">&lt;</span>
                    <span className="text-emerald-100">{item.label}</span>
                    <span className="font-mono text-emerald-400 ml-4 text-xl">/&gt;</span>
                  </button>
                ))}
              </nav>
              
              {/* Social Links - Mobile */}
              <div className="border-t border-emerald-500/50 pt-8 pb-8 rounded-t-2xl mx-4" style={{ backgroundColor: '#0f172a' }}>
                <p className="text-emerald-400 font-mono text-lg mb-6 uppercase tracking-wider text-center font-bold">
                  &lt;Connect with me /&gt;
                </p>
                <div className="flex items-center justify-center space-x-8">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-emerald-400 transition-all duration-300 hover:scale-110 transform p-4 rounded-xl border shadow-lg"
                    style={{ backgroundColor: '#1e293b', borderColor: '#334155' }}
                  >
                    <Github size={32} />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-emerald-400 transition-all duration-300 hover:scale-110 transform p-4 rounded-xl border shadow-lg"
                    style={{ backgroundColor: '#1e293b', borderColor: '#334155' }}
                  >
                    <Linkedin size={32} />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-white hover:text-emerald-400 transition-all duration-300 hover:scale-110 transform p-4 rounded-xl border shadow-lg"
                    style={{ backgroundColor: '#1e293b', borderColor: '#334155' }}
                  >
                    <Mail size={32} />
                  </a>
                </div>
              </div>
              
              {/* Footer */}
              <div className="text-center pb-8 px-4">
                <p className="text-white font-mono text-sm py-3 px-4 rounded-lg border" style={{ backgroundColor: '#0f172a', borderColor: '#334155' }}>
                  &copy; 2024 Zafar Imam • Senior Software Engineer
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;