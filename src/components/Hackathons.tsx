import React from 'react';
import { Lightbulb, Search, BookOpen, Layers, Hammer, GraduationCap, ArrowRight, Users, Flame } from 'lucide-react';
import { HACKATHON_STEPS } from '../data/portfolioData';

export const Hackathons: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Lightbulb className="w-4 h-4 text-blue-600" />;
      case 1:
        return <Search className="w-4 h-4 text-blue-600" />;
      case 2:
        return <BookOpen className="w-4 h-4 text-blue-600" />;
      case 3:
        return <Layers className="w-4 h-4 text-blue-600" />;
      case 4:
        return <Hammer className="w-4 h-4 text-blue-600" />;
      default:
        return <GraduationCap className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <section id="hackathons" className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">
            Collaborative Exploration
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
            Hackathons & Ideathons
          </h2>
          
          {/* Exact required statement */}
          <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed italic">
              "I actively explore hackathons and ideathons as opportunities to learn, collaborate, solve real-world problems, and turn ideas into practical technology concepts."
            </p>
          </div>
        </div>

        {/* Core Mindset Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          <div className="p-5 rounded-xl border border-slate-200/80 bg-white shadow-2xs">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-blue-600" />
              <h3 className="text-sm font-bold text-slate-900">Teamwork & Exchange</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Brainstorming alongside peers, dividing tasks rationally, and learning from differing technical viewpoints.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200/80 bg-white shadow-2xs">
            <div className="flex items-center gap-2 mb-2">
              <Flame className="w-4 h-4 text-blue-600" />
              <h3 className="text-sm font-bold text-slate-900">Rapid Problem Solving</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Addressing real community and technology constraints under defined sprint clocks without perfection paralysis.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200/80 bg-white shadow-2xs">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <h3 className="text-sm font-bold text-slate-900">Iterative Learning</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Treating every sprint and feedback session as an accelerated classroom to refine engineering fundamentals.
            </p>
          </div>
        </div>

        {/* Visual Process Flow (6 Steps: IDEA -> PROBLEM UNDERSTANDING -> RESEARCH -> PROTOTYPING -> BUILDING -> LEARNING) */}
        <div>
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-6">
            Ideation & Sprint Methodology
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {HACKATHON_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 hover:border-slate-300 transition-colors flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-blue-700">
                      {step.step}
                    </span>
                    <div className="p-1.5 bg-white rounded-md border border-slate-200">
                      {getStepIcon(idx)}
                    </div>
                  </div>

                  <h4 className="text-xs font-bold text-slate-900 tracking-tight mb-2">
                    {step.title}
                  </h4>

                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Sub-indicator */}
                <div className="mt-4 pt-2 border-t border-slate-200/60 text-[10px] font-mono text-slate-400">
                  Phase {idx + 1} of 6
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
