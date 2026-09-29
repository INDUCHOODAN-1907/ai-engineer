import React from 'react';
import { CheckCircle2, CircleDot, ArrowRight, Sparkles } from 'lucide-react';
import { JOURNEY_STEPS } from '../data/portfolioData';

export const LearningJourney: React.FC = () => {
  return (
    <section id="journey" className="py-20 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">
            Roadmap & Progression
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
            My Learning Journey
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            A milestone-by-milestone overview of my current foundations, active learning tracks, and long-term aspiration in AI engineering.
          </p>
        </div>

        {/* Vertical Editorial Timeline */}
        <div className="relative border-l-2 border-slate-200 ml-3 sm:ml-6 space-y-10">
          {JOURNEY_STEPS.map((step, idx) => {
            const isLast = idx === JOURNEY_STEPS.length - 1;
            return (
              <div key={step.number} className="relative pl-6 sm:pl-10 group">
                
                {/* Timeline Node */}
                <div
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 bg-white transition-colors ${
                    step.isCurrent
                      ? 'border-blue-600 bg-blue-50 ring-4 ring-blue-100'
                      : isLast
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-slate-400'
                  }`}
                  aria-hidden="true"
                />

                {/* Content Card */}
                <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-blue-700">
                        {step.number}
                      </span>
                      <span className="text-slate-300" aria-hidden="true">·</span>
                      <h3 className="text-base font-bold text-slate-900">
                        {step.title}
                      </h3>
                    </div>

                    {step.isCurrent && (
                      <span className="text-[11px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 font-medium">
                        Active Stage
                      </span>
                    )}

                    {isLast && (
                      <span className="text-[11px] font-mono text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100 font-medium">
                        Career Horizon
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                    {step.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-12 ml-3 sm:ml-6 p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900">Guiding Philosophy:</span>
            <span>Master foundational logic first, then compose higher-order intelligent systems.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
