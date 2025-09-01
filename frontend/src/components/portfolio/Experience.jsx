import React from 'react';
import { Building2, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { experience } from '../../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto mb-8" />
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              A decade of professional growth and technical leadership in Android development
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 to-green-400 transform md:-translate-x-px" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full transform md:-translate-x-2 z-10 border-4 border-slate-900" />

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}>
                    <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20">
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <Building2 size={20} className="text-emerald-400 mt-1" />
                            <h3 className="text-xl font-semibold text-emerald-400">
                              {exp.title}
                            </h3>
                          </div>
                          <span className="text-xs text-slate-400 bg-slate-600 px-3 py-1 rounded-full uppercase tracking-wide">
                            {exp.type}
                          </span>
                        </div>
                        
                        <h4 className="text-lg text-emerald-300 mb-3 font-medium">
                          {exp.company}
                        </h4>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-slate-400">
                          <div className="flex items-center space-x-2">
                            <Calendar size={16} />
                            <span className="text-sm">{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin size={16} />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Responsibilities */}
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-emerald-400 mb-4 uppercase tracking-wide">
                          Key Responsibilities
                        </h5>
                        <div className="space-y-3">
                          {exp.responsibilities.map((responsibility, respIndex) => (
                            <div key={respIndex} className="flex items-start space-x-3">
                              <ChevronRight size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300 leading-relaxed">
                                {responsibility}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="text-lg font-semibold text-emerald-400 mb-4 uppercase tracking-wide">
                          Technologies Used
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs text-emerald-300 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30 hover:border-emerald-400/50 transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Summary */}
          <div className="mt-16 bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl p-8 border border-emerald-500/30">
            <h3 className="text-2xl font-semibold text-emerald-400 mb-6 text-center uppercase tracking-wide">
              Career Journey Summary
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-emerald-400 mb-4 uppercase">Career Progression</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Junior Developer</span>
                    <span className="text-xs text-slate-400 uppercase tracking-wide">2015-2016</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Mid-level Developer</span>
                    <span className="text-xs text-slate-400 uppercase tracking-wide">2016-2017</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-300 font-medium">Lead Engineer</span>
                    <span className="text-xs text-slate-400 uppercase tracking-wide">2017-2021</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-300 font-medium">Associate Staff Engineer</span>
                    <span className="text-xs text-slate-400 uppercase tracking-wide">2021-Present</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-emerald-400 mb-4 uppercase">Key Achievements</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2" />
                    <span className="text-slate-300">Led multiple high-impact Android projects</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2" />
                    <span className="text-slate-300">Mentored 15+ junior developers</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2" />
                    <span className="text-slate-300">Published 6+ successful mobile applications</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2" />
                    <span className="text-slate-300">Established architecture best practices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;