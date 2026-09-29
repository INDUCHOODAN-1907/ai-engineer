import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, Globe, Cpu, Wrench, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-4 h-4 text-blue-600" />;
      case 1:
        return <Globe className="w-4 h-4 text-blue-600" />;
      case 2:
        return <Cpu className="w-4 h-4 text-blue-600" />;
      default:
        return <Wrench className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">
            Technical Areas
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
            Foundational Skills & Exploration
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Organized by category. Transparently marked at student and foundational levels without inflated metrics.
          </p>
        </div>

        {/* 4 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <div
              key={category.title}
              className="bg-slate-50/70 rounded-xl p-5 border border-slate-200/80 hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-white rounded-md border border-slate-200 shadow-2xs">
                    {getCategoryIcon(catIdx)}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                    {category.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 mb-4 min-h-[32px] leading-relaxed">
                  {category.description}
                </p>

                {/* Skills List without fake percentages */}
                <div className="space-y-2 pt-2 border-t border-slate-200/60">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-white rounded-lg p-2.5 border border-slate-200/70 flex items-center justify-between"
                    >
                      <span className="text-xs font-semibold text-slate-800">
                        {skill.name}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Note */}
              <div className="mt-4 pt-3 border-t border-slate-200/50 flex items-center gap-1.5 text-[11px] text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Practiced via coursework & builds</span>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Commitment Callout */}
        <div className="mt-10 p-4 sm:p-5 rounded-xl bg-blue-50/50 border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-blue-900">
              Commitment to Transparency
            </span>
            <p className="text-xs text-slate-600 max-w-2xl">
              I avoid arbitrary proficiency percentages (e.g. "95% Python"). Every skill listed here represents genuine daily study, foundational problem solving, and hands-on laboratory exercises.
            </p>
          </div>
          <a
            href={SKILL_CATEGORIES[0].skills[0].name ? "https://github.com/INDUCHOODAN-1907" : "#projects"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-blue-700 hover:text-blue-900 whitespace-nowrap self-start sm:self-auto"
          >
            Review Code on GitHub →
          </a>
        </div>

      </div>
    </section>
  );
};
