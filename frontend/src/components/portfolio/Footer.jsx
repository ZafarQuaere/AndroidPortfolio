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
    <footer className="bg-[#1a1c1b] border-t border-[#3f4816]/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="heading-3 text-[#d9fb06] font-black uppercase mb-4">
                  {personalInfo.name}
                </h3>
                <p className="body-medium text-[#d9fb06] mb-4">
                  {personalInfo.title}
                </p>
                <p className="body-small text-[#888680] leading-relaxed max-w-md">
                  {personalInfo.tagline}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#302f2c] rounded-lg flex items-center justify-center border border-[#3f4816]/50 hover:border-[#d9fb06]/50 hover:bg-[#d9fb06]/10 transition-all duration-300 group"
                >
                  <Github size={20} className="text-[#d9fb06] group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#302f2c] rounded-lg flex items-center justify-center border border-[#3f4816]/50 hover:border-[#d9fb06]/50 hover:bg-[#d9fb06]/10 transition-all duration-300 group"
                >
                  <Linkedin size={20} className="text-[#d9fb06] group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-12 h-12 bg-[#302f2c] rounded-lg flex items-center justify-center border border-[#3f4816]/50 hover:border-[#d9fb06]/50 hover:bg-[#d9fb06]/10 transition-all duration-300 group"
                >
                  <Mail size={20} className="text-[#d9fb06] group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="heading-5 text-[#d9fb06] mb-6 uppercase tracking-wide">
                Quick Links
              </h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block body-small text-[#888680] hover:text-[#d9fb06] transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="heading-5 text-[#d9fb06] mb-6 uppercase tracking-wide">
                Contact Info
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="caption text-[#888680] uppercase tracking-wide mb-1">Email</p>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="body-small text-[#d9fb06] hover:text-[#d9fb06]/80 transition-colors duration-300 break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div>
                  <p className="caption text-[#888680] uppercase tracking-wide mb-1">Phone</p>
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="body-small text-[#d9fb06] hover:text-[#d9fb06]/80 transition-colors duration-300"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
                <div>
                  <p className="caption text-[#888680] uppercase tracking-wide mb-1">Location</p>
                  <p className="body-small text-[#888680]">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#3f4816]/50 my-12" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2">
              <p className="body-small text-[#888680]">
                © {currentYear} {personalInfo.name}. Made with
              </p>
              <Heart size={16} className="text-[#d9fb06] fill-current" />
              <p className="body-small text-[#888680]">
                and lots of ☕
              </p>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-[#888680] hover:text-[#d9fb06] transition-colors duration-300 group"
            >
              <span className="caption uppercase tracking-wide">Back to Top</span>
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Tech Stack Credit */}
          <div className="mt-8 pt-8 border-t border-[#3f4816]/30 text-center">
            <p className="caption text-[#888680] uppercase tracking-wide">
              Built with React • Tailwind CSS • Modern Web Technologies
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top FAB */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#d9fb06] text-[#1a1c1b] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-[#d9fb06]/25 hover:shadow-2xl z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;