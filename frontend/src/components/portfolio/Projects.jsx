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
    <section id="projects" className="py-24 bg-[#302f2c]">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="heading-2 text-[#d9fb06] font-black uppercase mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-[#d9fb06] mx-auto mb-8" />
            <p className="body-medium text-[#888680] max-w-2xl mx-auto">
              A showcase of production-ready Android applications published on Google Play Store
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 mb-4">
              <Filter size={20} className="text-[#d9fb06]" />
              <span className="heading-6 text-[#d9fb06] uppercase tracking-wide">Filter by Category:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedFilter(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedFilter === category
                      ? 'bg-[#d9fb06] text-[#1a1c1b] scale-105'
                      : 'bg-[#1a1c1b] text-[#888680] border border-[#3f4816]/50 hover:border-[#d9fb06]/50 hover:text-[#d9fb06]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Count */}
          <div className="text-center mb-8">
            <p className="caption text-[#888680] uppercase tracking-wider">
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
              <p className="body-medium text-[#888680]">
                No projects found in the selected category.
              </p>
              <button
                onClick={() => setSelectedFilter('All')}
                className="btn-secondary border border-[#d9fb06] text-[#d9fb06] px-6 py-3 rounded-full font-semibold uppercase tracking-wide hover:bg-[#d9fb06] hover:text-[#1a1c1b] transition-all duration-300 mt-4"
              >
                View All Projects
              </button>
            </div>
          )}

          {/* Project Stats */}
          <div className="mt-16 bg-[#1a1c1b] rounded-2xl p-8 border border-[#3f4816]/50">
            <h3 className="heading-4 text-[#d9fb06] mb-8 text-center uppercase tracking-wide">
              Project Portfolio Stats
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <h4 className="heading-3 text-[#d9fb06] mb-2">6+</h4>
                <p className="caption text-[#888680] uppercase">Published Apps</p>
              </div>
              <div className="text-center">
                <h4 className="heading-3 text-[#d9fb06] mb-2">5</h4>
                <p className="caption text-[#888680] uppercase">Categories</p>
              </div>
              <div className="text-center">
                <h4 className="heading-3 text-[#d9fb06] mb-2">100K+</h4>
                <p className="caption text-[#888680] uppercase">Total Downloads</p>
              </div>
              <div className="text-center">
                <h4 className="heading-3 text-[#d9fb06] mb-2">4.5+</h4>
                <p className="caption text-[#888680] uppercase">Avg Rating</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="body-medium text-[#888680] mb-6">
              Interested in seeing more detailed case studies or discussing potential collaboration?
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary bg-[#d9fb06] text-[#1a1c1b] px-8 py-4 rounded-full font-semibold uppercase tracking-wide hover:scale-105 transition-transform duration-300"
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