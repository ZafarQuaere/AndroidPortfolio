import React from 'react';
import { CheckCircle, Award, Users, Code } from 'lucide-react';
import { aboutMe, personalInfo, education, certifications } from '../../data/mock';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto mb-8" />
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Passionate about creating exceptional mobile experiences that solve real-world problems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Android Logo & Info */}
            <div className="space-y-8">
              {/* Android Logo */}
              <div className="relative">
                <div className="w-full max-w-md mx-auto lg:mx-0">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 border border-emerald-500/30 p-8 flex items-center justify-center">
                    <img
                      src={personalInfo.androidLogo}
                      alt="Android Development"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-emerald-400 rounded-full opacity-60" />
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-500 rounded-full opacity-80" />
                </div>
              </div>

              {/* Personal Info */}
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-emerald-500/30">
                <h3 className="text-xl font-semibold text-emerald-400 mb-6 uppercase tracking-wide">
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    <span className="text-emerald-100">
                      <strong className="text-emerald-300">Experience:</strong> 10+ Years
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    <span className="text-emerald-100">
                      <strong className="text-emerald-300">Location:</strong> {personalInfo.location}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    <span className="text-emerald-100">
                      <strong className="text-emerald-300">Education:</strong> {education.degree}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    <span className="text-emerald-100">
                      <strong className="text-emerald-300">Specialization:</strong> Android Development
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Story & Highlights */}
            <div className="space-y-8">
              {/* Story */}
              <div>
                <h3 className="text-2xl font-semibold text-emerald-400 mb-6 uppercase tracking-wide">
                  My Journey
                </h3>
                <div className="space-y-6">
                  <p className="text-lg text-emerald-100 leading-relaxed">
                    {aboutMe.summary}
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    {aboutMe.story}
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-xl font-semibold text-emerald-400 mb-6 uppercase tracking-wide">
                  Key Highlights
                </h3>
                <div className="space-y-4">
                  {aboutMe.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-xl font-semibold text-emerald-400 mb-6 uppercase tracking-wide">
                  Certifications
                </h3>
                <div className="space-y-6">
                  {certifications.map((cert) => (
                    <div key={cert.id} className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg p-6 border border-emerald-500/20">
                      <div className="flex items-start space-x-4">
                        <Award size={24} className="text-emerald-400 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-emerald-300 mb-2">
                            {cert.title}
                          </h4>
                          <p className="text-slate-300 mb-2">
                            {cert.issuer} • {cert.date}
                          </p>
                          {cert.certificateId && (
                            <p className="text-xs text-slate-400 uppercase tracking-wide">
                              ID: {cert.certificateId}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-emerald-500/30">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code size={24} className="text-slate-900" />
              </div>
              <h4 className="text-3xl font-bold text-emerald-400 mb-2">10+</h4>
              <p className="text-xs text-slate-400 uppercase tracking-wide">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={24} className="text-slate-900" />
              </div>
              <h4 className="text-3xl font-bold text-emerald-400 mb-2">6+</h4>
              <p className="text-xs text-slate-400 uppercase tracking-wide">Published Apps</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-slate-900" />
              </div>
              <h4 className="text-3xl font-bold text-emerald-400 mb-2">4</h4>
              <p className="text-xs text-slate-400 uppercase tracking-wide">Companies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={24} className="text-slate-900" />
              </div>
              <h4 className="text-3xl font-bold text-emerald-400 mb-2">2</h4>
              <p className="text-xs text-slate-400 uppercase tracking-wide">Certifications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;