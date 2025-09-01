import React, { useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp, Play, Code, Zap, Target } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl overflow-hidden border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
        
        {/* Play Store Badge */}
        <div className="absolute top-4 right-4">
          <a
            href={project.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-emerald-500 to-green-500 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-2 hover:from-emerald-600 hover:to-green-600 transition-colors duration-300"
          >
            <Play size={14} />
            <span>Play Store</span>
          </a>
        </div>

        {/* Project Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-emerald-400 mb-2">
            {project.title}
          </h3>
          <p className="text-slate-300">
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-8">
        {/* Description */}
        <p className="text-slate-300 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Problem Statement */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-3">
            <Target size={16} className="text-emerald-400" />
            <h4 className="text-lg font-semibold text-emerald-400 uppercase tracking-wide">
              Problem Statement
            </h4>
          </div>
          <p className="text-slate-300 leading-relaxed">
            {project.problemStatement}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-3">
            <Zap size={16} className="text-emerald-400" />
            <h4 className="text-lg font-semibold text-emerald-400 uppercase tracking-wide">
              Key Features
            </h4>
          </div>
          <div className="space-y-2">
            {project.keyFeatures.slice(0, isExpanded ? project.keyFeatures.length : 3).map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                <span className="text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
          
          {project.keyFeatures.length > 3 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center space-x-2 mt-3 text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
            >
              <span className="text-xs uppercase tracking-wide">
                {isExpanded ? 'Show Less' : 'Show More'}
              </span>
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          )}
        </div>

        {/* Tech Stack - Always Visible */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-3">
            <Code size={16} className="text-emerald-400" />
            <h4 className="text-lg font-semibold text-emerald-400 uppercase tracking-wide">
              Tech Stack
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div>
              <span className="text-emerald-400 font-medium">Language:</span>
              <span className="text-slate-300 ml-2">{project.techStack.language}</span>
            </div>
            <div>
              <span className="text-emerald-400 font-medium">Architecture:</span>
              <span className="text-slate-300 ml-2">{project.techStack.architecture}</span>
            </div>
            <div>
              <span className="text-emerald-400 font-medium">UI:</span>
              <span className="text-slate-300 ml-2">{project.techStack.ui}</span>
            </div>
            <div>
              <span className="text-emerald-400 font-medium">DI:</span>
              <span className="text-slate-300 ml-2">{project.techStack.di}</span>
            </div>
          </div>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="space-y-6 border-t border-emerald-500/30 pt-6">
            {/* Challenges & Solutions */}
            <div>
              <h4 className="text-lg font-semibold text-emerald-400 mb-4 uppercase tracking-wide">
                Challenges & Solutions
              </h4>
              <div className="space-y-4">
                {project.challenges.map((item, index) => (
                  <div key={index} className="bg-slate-800 rounded-lg p-4 border border-emerald-500/20">
                    <h5 className="text-emerald-300 font-medium mb-2">
                      Challenge: {item.challenge}
                    </h5>
                    <p className="text-slate-300">
                      Solution: {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div>
              <h4 className="text-lg font-semibold text-emerald-400 mb-4 uppercase tracking-wide">
                Results & Impact
              </h4>
              <div className="space-y-2">
                {project.results.map((result, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-300">{result}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete Tech Stack */}
            <div>
              <h4 className="text-lg font-semibold text-emerald-400 mb-4 uppercase tracking-wide">
                Complete Tech Stack
              </h4>
              <div className="bg-slate-800 rounded-lg p-4 border border-emerald-500/20">
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div>
                    <span className="text-emerald-400 font-medium">Networking:</span>
                    <span className="text-slate-300 ml-2">{project.techStack.networking}</span>
                  </div>
                  <div>
                    <span className="text-emerald-400 font-medium">Database:</span>
                    <span className="text-slate-300 ml-2">{project.techStack.database}</span>
                  </div>
                  <div>
                    <span className="text-emerald-400 font-medium">State Management:</span>
                    <span className="text-slate-300 ml-2">{project.techStack.stateManagement}</span>
                  </div>
                  <div>
                    <span className="text-emerald-400 font-medium">Other Integrations:</span>
                    <span className="text-slate-300 ml-2">{project.techStack.other}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-4 mt-6 pt-6 border-t border-emerald-500/30">
          <a
            href={project.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-slate-900 px-6 py-3 rounded-full font-semibold uppercase tracking-wide hover:scale-105 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-emerald-500/25"
          >
            <ExternalLink size={16} />
            <span>View App</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;