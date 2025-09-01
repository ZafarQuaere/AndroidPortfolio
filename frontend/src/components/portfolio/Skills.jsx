import React from 'react';
import { Code, Smartphone, Database, Wrench, TestTube } from 'lucide-react';
import { skills } from '../../data/mock';

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone size={24} />,
      skills: skills["Mobile Development"],
      color: "text-emerald-400"
    },
    {
      title: "Architecture & Patterns",
      icon: <Code size={24} />,
      skills: skills["Architecture & Patterns"],
      color: "text-emerald-400"
    },
    {
      title: "Modern Android",
      icon: <Smartphone size={24} />,
      skills: skills["Modern Android"],
      color: "text-emerald-400"
    },
    {
      title: "Reactive Programming",
      icon: <Code size={24} />,
      skills: skills["Reactive Programming"],
      color: "text-emerald-400"
    },
    {
      title: "Database & Storage",
      icon: <Database size={24} />,
      skills: skills["Database & Storage"],
      color: "text-emerald-400"
    },
    {
      title: "Testing & Quality",
      icon: <TestTube size={24} />,
      skills: skills["Testing & Quality"],
      color: "text-emerald-400"
    },
    {
      title: "Tools & Services",
      icon: <Wrench size={24} />,
      skills: skills["Tools & Services"],
      color: "text-emerald-400"
    },
    {
      title: "Dependency Injection",
      icon: <Code size={24} />,
      skills: skills["Dependency Injection"],
      color: "text-emerald-400"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto mb-8" />
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              A comprehensive toolkit built over 10 years of Android development expertise
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
                    <div className="text-slate-900">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-emerald-400 uppercase tracking-wide">
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
                      <div className="w-2 h-2 bg-emerald-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="text-slate-300 group-hover:text-emerald-300 transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Expertise Levels */}
          <div className="mt-16 bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl p-8 border border-emerald-500/30">
            <h3 className="text-2xl font-semibold text-emerald-400 mb-8 text-center uppercase tracking-wide">
              Expertise Levels
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-emerald-300">
                  <span className="text-2xl font-bold text-slate-900">10+</span>
                </div>
                <h4 className="text-xl font-semibold text-emerald-400 mb-2 uppercase">Expert</h4>
                <p className="text-slate-300 mb-4">Android Development, Kotlin, Java</p>
                <div className="w-full bg-slate-600 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-400 to-green-400 h-2 rounded-full" style={{ width: '95%' }} />
                </div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-emerald-300">
                  <span className="text-2xl font-bold text-slate-900">8+</span>
                </div>
                <h4 className="text-xl font-semibold text-emerald-400 mb-2 uppercase">Advanced</h4>
                <p className="text-slate-300 mb-4">MVVM, Architecture Patterns, Testing</p>
                <div className="w-full bg-slate-600 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-400 to-green-400 h-2 rounded-full" style={{ width: '90%' }} />
                </div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-emerald-300">
                  <span className="text-2xl font-bold text-slate-900">5+</span>
                </div>
                <h4 className="text-xl font-semibold text-emerald-400 mb-2 uppercase">Proficient</h4>
                <p className="text-slate-300 mb-4">Jetpack Compose, Modern Tools</p>
                <div className="w-full bg-slate-600 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-400 to-green-400 h-2 rounded-full" style={{ width: '85%' }} />
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