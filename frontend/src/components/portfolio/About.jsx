import React from 'react';
import { CheckCircle, Award, Users, Code } from 'lucide-react';
import { aboutMe, personalInfo, education, certifications } from '../../data/mock';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#1a1c1b]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="heading-2 text-[#d9fb06] font-black uppercase mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-[#d9fb06] mx-auto mb-8" />
            <p className="body-medium text-[#888680] max-w-2xl mx-auto">
              Passionate about creating exceptional mobile experiences that solve real-world problems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Story & Image */}
            <div className="space-y-8">
              {/* Profile Image Placeholder */}
              <div className="relative">
                <div className="w-full max-w-md mx-auto lg:mx-0">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-[#302f2c] border border-[#3f4816]/50">
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-[#d9fb06] rounded-full opacity-60" />
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#3f4816] rounded-full opacity-80" />
                </div>
              </div>

              {/* Personal Info */}
              <div className="bg-[#302f2c] rounded-2xl p-8 border border-[#3f4816]/50">
                <h3 className="heading-5 text-[#d9fb06] mb-6 uppercase tracking-wide">
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#d9fb06] rounded-full" />
                    <span className="body-small text-[#d9fb06]">
                      <strong>Experience:</strong> 10+ Years
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#d9fb06] rounded-full" />
                    <span className="body-small text-[#d9fb06]">
                      <strong>Location:</strong> {personalInfo.location}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#d9fb06] rounded-full" />
                    <span className="body-small text-[#d9fb06]">
                      <strong>Education:</strong> {education.degree}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#d9fb06] rounded-full" />
                    <span className="body-small text-[#d9fb06]">
                      <strong>Specialization:</strong> Android Development
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Story & Highlights */}
            <div className="space-y-8">
              {/* Story */}
              <div>
                <h3 className="heading-4 text-[#d9fb06] mb-6 uppercase tracking-wide">
                  My Journey
                </h3>
                <div className="space-y-6">
                  <p className="body-medium text-[#d9fb06] leading-relaxed">
                    {aboutMe.summary}
                  </p>
                  <p className="body-small text-[#888680] leading-relaxed">
                    {aboutMe.story}
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="heading-5 text-[#d9fb06] mb-6 uppercase tracking-wide">
                  Key Highlights
                </h3>
                <div className="space-y-4">
                  {aboutMe.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-[#d9fb06] mt-0.5 flex-shrink-0" />
                      <span className="body-small text-[#888680]">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="heading-5 text-[#d9fb06] mb-6 uppercase tracking-wide">
                  Certifications
                </h3>
                <div className="space-y-6">
                  {certifications.map((cert) => (
                    <div key={cert.id} className="bg-[#302f2c] rounded-lg p-6 border border-[#3f4816]/50">
                      <div className="flex items-start space-x-4">
                        <Award size={24} className="text-[#d9fb06] flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-[#d9fb06] mb-2">
                            {cert.title}
                          </h4>
                          <p className="body-small text-[#888680] mb-2">
                            {cert.issuer} • {cert.date}
                          </p>
                          {cert.certificateId && (
                            <p className="caption text-[#888680]">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-[#3f4816]/50">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#302f2c] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#3f4816]/50">
                <Code size={24} className="text-[#d9fb06]" />
              </div>
              <h4 className="heading-4 text-[#d9fb06] mb-2">10+</h4>
              <p className="caption text-[#888680] uppercase">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#302f2c] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#3f4816]/50">
                <Award size={24} className="text-[#d9fb06]" />
              </div>
              <h4 className="heading-4 text-[#d9fb06] mb-2">6+</h4>
              <p className="caption text-[#888680] uppercase">Published Apps</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#302f2c] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#3f4816]/50">
                <Users size={24} className="text-[#d9fb06]" />
              </div>
              <h4 className="heading-4 text-[#d9fb06] mb-2">4</h4>
              <p className="caption text-[#888680] uppercase">Companies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#302f2c] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#3f4816]/50">
                <CheckCircle size={24} className="text-[#d9fb06]" />
              </div>
              <h4 className="heading-4 text-[#d9fb06] mb-2">2</h4>
              <p className="caption text-[#888680] uppercase">Certifications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;