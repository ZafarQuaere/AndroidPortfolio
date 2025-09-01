import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { projects } from '../../data/mock';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  
  const categories = ['All', 'E-commerce', 'Streaming', 'Logistics', 'Education', 'Automotive'];
  
  const getProjectCategory = (projectTitle) => {
    const categoryMap = {
      'Uncle Delivery': 'Logistics',
      'TOD (Watch Football & Movies)': 'Streaming',
      'Ulta Beauty': 'E-commerce',
      'Ghatna Chakra': 'Education',
      'Toyota Link': 'Automotive',
      'Lexus Inform': 'Automotive'
    };
    return categoryMap[projectTitle] || 'Other';
  };

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => getProjectCategory(project.title) === selectedFilter);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto mb-8" />
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              A showcase of production-ready Android applications published on Google Play Store
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 mb-4">
              <Filter size={20} className="text-emerald-400" />
              <span className="text-lg font-semibold text-emerald-400 uppercase tracking-wide">Filter by Category:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedFilter(category)}
                  className={`px4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedFilter === category
                      ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-slate-900 scale-105'
                      : 'bg-slate-700 text-slate-300 border border-emerald-500/30 hover:border-emerald-400/50 hover:text-emerald-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Count */}
          <div className="text-center mb-8">
            <p className="text-xs text-slate-400 uppercase tracking-wider">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-slate-300">
                No projects found in the selected category.
              </p>
              <button
                onClick={() => setSelectedFilter('All')}
                className="border border-emerald-400 text-emerald-400 px-6 py-3 rounded-full font-semibold uppercase tracking-wide hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 mt-4"
              >
                View All Projects
              </button>
            </div>
          )}

          {/* Project Stats */}
          <div className="mt-16 bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl p-8 border border-emerald-500/30">
            <h3 className="text-2xl font-semibold text-emerald-400 mb-8 text-center uppercase tracking-wide">
              Project Portfolio Stats
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <h4 className="text-4xl font-bold text-emerald-400 mb-2">6+</h4>
                <p className="text-xs text-slate-400 uppercase tracking-wide">Published Apps</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-bold text-emerald-400 mb-2">5</h4>
                <p className="text-xs text-slate-400 uppercase tracking-wide">Categories</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-bold text-emerald-400 mb-2">100K+</h4>
                <p className="text-xs text-slate-400 uppercase tracking-wide">Total Downloads</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-bold text-emerald-400 mb-2">4.5+</h4>
                <p className="text-xs text-slate-400 uppercase tracking-wide">Avg Rating</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-xl text-slate-300 mb-6">
              Interested in seeing more detailed case studies or discussing potential collaboration?
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-slate-900 px-8 py-4 rounded-full font-semibold uppercase tracking-wide hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
            >
              Let's Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;