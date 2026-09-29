import React from 'react';
import { Terminal, Globe, Cpu, MessageSquareCode, Boxes, Brain, Users, Sparkles } from 'lucide-react';
import { CURRENT_EXPLORATION_AREAS } from '../data/portfolioData';

export const CurrentFocus: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Terminal className="w-4 h-4 text-blue-600" />;
      case 1:
        return <Globe className="w-4 h-4 text-blue-600" />;
      case 2:
        return <Cpu className="w-4 h-4 text-blue-600" />;
      case 3:
        return <MessageSquareCode className="w-4 h-4 text-blue-600" />;
      case 4:
        return <Boxes className="w-4 h-4 text-blue-600" />;
      case 5:
        return <Brain className="w-4 h-4 text-blue-600" />;
      default:
        return <Users className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <section id="exploring" className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">
            Active Study & Research
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
            Currently Exploring
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            The core areas filling my daily notebooks, editor sessions, and technical curiosity as a first-semester B.Tech student.
          </p>
        </div>

        {/* Focus Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {CURRENT_EXPLORATION_AREAS.map((item, idx) => (
            <div
              key={item.name}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:bg-slate-100/60 transition-all duration-150 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-2xs">
                    {getIcon(idx)}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-200/50 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>FOCUS 0{idx + 1}</span>
                <span className="text-blue-600 font-semibold">Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
