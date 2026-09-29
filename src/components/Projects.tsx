import React, { useState } from 'react';
import { ExternalLink, Code2, ArrowUpRight, Play, Terminal } from 'lucide-react';
import { PROJECTS_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">
              Foundational Projects
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              Early Programming Work
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Foundational Python software built during the first semester to master logic, conditions, user inputs, and arithmetic calculations.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap self-start md:self-auto py-2 px-3 bg-white rounded-lg border border-slate-200 shadow-2xs"
          >
            <span>Visit GitHub Profile</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 2x2 Grid of 4 Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS_DATA.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 p-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Unboxed Metadata (Anti-slop zero-pill) */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-semibold text-blue-700">0{index + 1}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="font-medium text-slate-700">{project.technology}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span>Foundational Logic</span>
                  </div>
                  <Terminal className="w-4 h-4 text-slate-300 group-hover:text-blue-600 transition-colors" />
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Core concepts practiced */}
                <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] text-slate-500">
                  {project.conceptFocus.map((concept) => (
                    <span
                      key={concept}
                      className="bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-200/60 font-mono text-[11px]"
                    >
                      {concept}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-2xs focus-visible:outline-2 focus-visible:outline-blue-600"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>View Project</span>
                </button>

                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-lg hover:bg-slate-50"
                  aria-label={`View GitHub profile for ${project.title}`}
                >
                  <span>GitHub Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Interactive Runner & Code Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
