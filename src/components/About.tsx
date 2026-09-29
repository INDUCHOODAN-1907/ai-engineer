import React from 'react';
import { BookOpen, Sparkles, Target, Compass, Code, Brain } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">
            About My Stage
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
            Building From The Ground Up
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            An honest reflection of where I stand today and what drives my daily practice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200/90 shadow-xs space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">
                First-Semester B.Tech Journey
              </h3>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                I'm currently beginning my journey in technology as a B.Tech first-semester student. 
                My primary interests are Python, web development, and Generative AI. I am focused on 
                strengthening my programming fundamentals while experimenting with projects and 
                participating in hackathons and ideathons.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                My long-term goal is to become an AI Engineer and build practical technology that solves 
                meaningful problems. Rather than skipping straight to high-level hype, I believe in writing 
                clean code, understanding control structures, handling edge cases, and testing my logic 
                against real user inputs.
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-6 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-blue-600" />
                  <span>Goal: AI Engineer</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-blue-600" />
                  <span>Curious Builder</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <Brain className="w-4 h-4 text-blue-600" />
                  <span>Active Problem Solver</span>
                </div>
              </div>
            </div>
          </div>

          {/* Currently Learning Area */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200/90 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold tracking-tight text-slate-900 uppercase">
                  Currently Learning
                </h3>
                <span className="text-[11px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  In Progress
                </span>
              </div>

              <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                Areas I am actively reading about, practicing in code editors, and experimenting with weekly.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                {PERSONAL_INFO.currentlyLearning.map((item, idx) => (
                  <div
                    key={item}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100/80 border border-slate-200/60 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span className="text-xs font-semibold text-slate-800">{item}</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
