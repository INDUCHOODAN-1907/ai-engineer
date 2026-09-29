import React, { useState } from 'react';
import { ArrowRight, Github, Linkedin, Terminal, Sparkles, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

// Image import
import studentAvatar from '../assets/images/avatar_student_developer_1790679159716.jpg';

export const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-white border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Identity & Editorial Introduction */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Honest Status Label */}
            <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-100/90 border border-slate-200 px-3 py-1.5 rounded-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span>B.Tech First Semester Student · Active Learner</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {PERSONAL_INFO.bioHeadline}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-blue-700 tracking-tight">
                {PERSONAL_INFO.headline}
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              {PERSONAL_INFO.shortIntro}
            </p>

            {/* CTAs & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-all duration-150 shadow-xs focus-visible:outline-2 focus-visible:outline-blue-600"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 rounded-lg transition-all duration-150 border border-slate-200/80 focus-visible:outline-2 focus-visible:outline-blue-600"
              >
                <span>Connect With Me</span>
              </a>

              {/* Direct Social Links */}
              <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Key Focus Highlights */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 text-xs">
              <div>
                <span className="block text-slate-400 font-mono text-[11px] mb-0.5">CURRENT FOCUS</span>
                <span className="font-semibold text-slate-800">Python Foundations</span>
              </div>
              <div>
                <span className="block text-slate-400 font-mono text-[11px] mb-0.5">INTERFACE LAB</span>
                <span className="font-semibold text-slate-800">Web Development</span>
              </div>
              <div>
                <span className="block text-slate-400 font-mono text-[11px] mb-0.5">EXPLORATION</span>
                <span className="font-semibold text-slate-800">Generative AI</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Anchor & Student Profile Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-4">
              
              {/* Photo Frame with Fallback Handling */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80">
                {!imageError ? (
                  <img
                    src={studentAvatar}
                    alt="Induchoodan A P - First Semester B.Tech Student & Aspiring AI Engineer"
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200 text-slate-600 p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xl mb-3">
                      AP
                    </div>
                    <span className="font-bold text-slate-800 text-base">Induchoodan A P</span>
                    <span className="text-xs text-slate-500 mt-1">B.Tech First Semester</span>
                  </div>
                )}

                {/* Subtle overlay pill for stage confirmation */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs py-2 px-3 rounded-lg border border-slate-200/90 flex items-center justify-between text-xs shadow-xs">
                  <span className="font-medium text-slate-800">B.Tech Student</span>
                  <span className="text-blue-700 font-semibold">Semester 1</span>
                </div>
              </div>

              {/* Quick Philosophy Note */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                  <Terminal className="w-3.5 h-3.5 text-blue-600" />
                  <span>The Path to AI Engineering</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Focusing on strong core programming, hands-on logic building, and testing ideas at hackathons and ideathons.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
