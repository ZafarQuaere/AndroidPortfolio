import React from 'react';
import { Code, Smartphone, Database, Wrench, TestTube } from 'lucide-react';
import { skills } from '../../data/mock';

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone size={24} />,
      skills: skills["Mobile Development"],
      color: "text-[#d9fb06]"
    },
    {
      title: "Architecture & Patterns",
      icon: <Code size={24} />,
      skills: skills["Architecture & Patterns"],
      color: "text-[#d9fb06]"
    },
    {
      title: "Modern Android",
      icon: <Smartphone size={24} />,
      skills: skills["Modern Android"],
      color: "text-[#d9fb06]"
    },
    {
      title: "Reactive Programming",
      icon: <Code size={24} />,
      skills: skills["Reactive Programming"],
      color: "text-[#d9fb06]"
    },
    {
      title: "Database & Storage",
      icon: <Database size={24} />,
      skills: skills["Database & Storage"],
      color: "text-[#d9fb06]"
    },
    {
      title: "Testing & Quality",
      icon: <TestTube size={24} />,
      skills: skills["Testing & Quality"],
      color: "text-[#d9fb06]"
    },
    {
      title: "Tools & Services",
      icon: <Wrench size={24} />,
      skills: skills["Tools & Services"],
      color: "text-[#d9fb06]"
    },
    {
      title: "Dependency Injection",
      icon: <Code size={24} />,
      skills: skills["Dependency Injection"],
      color: "text-[#d9fb06]"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#302f2c]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="heading-2 text-[#d9fb06] font-black uppercase mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-[#d9fb06] mx-auto mb-8" />
            <p className="body-medium text-[#888680] max-w-2xl mx-auto">
              A comprehensive toolkit built over 10 years of Android development expertise
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-[#1a1c1b] rounded-2xl p-6 border border-[#3f4816]/50 hover:border-[#d9fb06]/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-[#3f4816]/30 rounded-lg flex items-center justify-center">
                    <div className={category.color}>
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="heading-6 text-[#d9fb06] font-semibold uppercase tracking-wide">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center space-x-3 group"
                    >
                      <div className="w-2 h-2 bg-[#d9fb06] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="body-small text-[#888680] group-hover:text-[#d9fb06] transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Expertise Levels */}
          <div className="mt-16 bg-[#1a1c1b] rounded-2xl p-8 border border-[#3f4816]/50">
            <h3 className="heading-4 text-[#d9fb06] mb-8 text-center uppercase tracking-wide">
              Expertise Levels
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#d9fb06]/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[#d9fb06]">
                  <span className="heading-4 text-[#d9fb06] font-bold">10+</span>
                </div>
                <h4 className="heading-6 text-[#d9fb06] mb-2 uppercase">Expert</h4>
                <p className="body-small text-[#888680] mb-4">Android Development, Kotlin, Java</p>
                <div className="w-full bg-[#3f4816]/30 rounded-full h-2">
                  <div className="bg-[#d9fb06] h-2 rounded-full" style={{ width: '95%' }} />
                </div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#d9fb06]/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[#d9fb06]">
                  <span className="heading-4 text-[#d9fb06] font-bold">8+</span>
                </div>
                <h4 className="heading-6 text-[#d9fb06] mb-2 uppercase">Advanced</h4>
                <p className="body-small text-[#888680] mb-4">MVVM, Architecture Patterns, Testing</p>
                <div className="w-full bg-[#3f4816]/30 rounded-full h-2">
                  <div className="bg-[#d9fb06] h-2 rounded-full" style={{ width: '90%' }} />
                </div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#d9fb06]/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[#d9fb06]">
                  <span className="heading-4 text-[#d9fb06] font-bold">5+</span>
                </div>
                <h4 className="heading-6 text-[#d9fb06] mb-2 uppercase">Proficient</h4>
                <p className="body-small text-[#888680] mb-4">Jetpack Compose, Modern Tools</p>
                <div className="w-full bg-[#3f4816]/30 rounded-full h-2">
                  <div className="bg-[#d9fb06] h-2 rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;