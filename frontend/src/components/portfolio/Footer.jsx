import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-emerald-500/30">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-4xl font-black uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
                  {personalInfo.name}
                </h3>
                <p className="text-xl text-emerald-300 mb-4">
                  {personalInfo.title}
                </p>
                <p className="text-slate-300 leading-relaxed max-w-md">
                  {personalInfo.tagline}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center border border-emerald-500/30 hover:border-emerald-400/50 hover:bg-emerald-500/10 transition-all duration-300 group"
                >
                  <Github size={20} className="text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center border border-emerald-500/30 hover:border-emerald-400/50 hover:bg-emerald-500/10 transition-all duration-300 group"
                >
                  <Linkedin size={20} className="text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center border border-emerald-500/30 hover:border-emerald-400/50 hover:bg-emerald-500/10 transition-all duration-300 group"
                >
                  <Mail size={20} className="text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold text-emerald-400 mb-6 uppercase tracking-wide">
                Quick Links
              </h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-slate-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold text-emerald-400 mb-6 uppercase tracking-wide">
                Contact Info
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Email</p>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-emerald-300 hover:text-emerald-400 transition-colors duration-300 break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Phone</p>
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="text-emerald-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Location</p>
                  <p className="text-slate-300">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-emerald-500/30 my-12" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2">
              <p className="text-slate-300">
                © {currentYear} {personalInfo.name}. Made with
              </p>
              <Heart size={16} className="text-emerald-400 fill-current" />
              <p className="text-slate-300">
                and lots of ☕
              </p>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-slate-400 hover:text-emerald-400 transition-colors duration-300 group"
            >
              <span className="text-xs uppercase tracking-wide">Back to Top</span>
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Tech Stack Credit */}
          <div className="mt-8 pt-8 border-t border-emerald-500/20 text-center">
            <p className="text-xs text-slate-400 uppercase tracking-wide">
              Built with React • Tailwind CSS • Android-Inspired Design
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top FAB */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-emerald-500 to-green-500 text-slate-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-emerald-500/25 hover:shadow-2xl z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;