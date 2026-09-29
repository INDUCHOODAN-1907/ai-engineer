import React, { useState } from 'react';
import { X, Copy, Check, Terminal, FolderTree, Rocket, ExternalLink } from 'lucide-react';

interface SetupGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SetupGuideModal: React.FC<SetupGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const localRunSnippet = `# 1. Clone the repository
git clone https://github.com/INDUCHOODAN-1907/induchoodan-portfolio.git
cd induchoodan-portfolio

# 2. Install dependencies
npm install

# 3. Start the local Vite development server
npm run dev

# 4. Open in browser:
# http://localhost:3000 (or http://localhost:5173)`;

  const deploySnippet = `# Option A: Deploy using GitHub Pages via npm build
# 1. In package.json, add:
# "homepage": "https://INDUCHOODAN-1907.github.io/induchoodan-portfolio"

# 2. Build the production bundle
npm run build

# 3. Deploy dist folder to gh-pages branch:
npx gh-pages -d dist

# Option B: Automated GitHub Actions (.github/workflows/deploy.yml)
# GitHub will automatically build and publish to Pages on push to 'main'.`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white w-full max-w-2xl rounded-2xl border border-slate-200 shadow-xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-700 font-semibold mb-0.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>Developer Reference</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Local Setup & GitHub Pages Deployment Guide
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6 text-xs text-slate-700">
          
          {/* Section 1: Running Locally */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                <Rocket className="w-4 h-4 text-blue-600" />
                <span>1. Instructions for Running Locally</span>
              </h4>
              <button
                type="button"
                onClick={() => copyText(localRunSnippet, 'local')}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-mono"
              >
                {copiedKey === 'local' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedKey === 'local' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="p-3 bg-slate-900 text-slate-100 rounded-lg font-mono overflow-x-auto leading-relaxed">
              <code>{localRunSnippet}</code>
            </pre>
          </div>

          {/* Section 2: GitHub Pages Deployment */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-blue-600" />
                <span>2. Instructions for Deploying to GitHub Pages</span>
              </h4>
              <button
                type="button"
                onClick={() => copyText(deploySnippet, 'deploy')}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-mono"
              >
                {copiedKey === 'deploy' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedKey === 'deploy' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="p-3 bg-slate-900 text-slate-100 rounded-lg font-mono overflow-x-auto leading-relaxed">
              <code>{deploySnippet}</code>
            </pre>
          </div>

          {/* Section 3: Folder Structure */}
          <div className="space-y-2">
            <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <FolderTree className="w-4 h-4 text-blue-600" />
              <span>3. Folder / File Structure</span>
            </h4>
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg font-mono text-[11px] text-slate-800 space-y-1">
              <div>induchoodan-portfolio/</div>
              <div className="pl-4">├── index.html &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Semantic HTML entry with metadata</div>
              <div className="pl-4">├── package.json &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Scripts & dependencies (React, Vite, Lucide)</div>
              <div className="pl-4">├── vite.config.ts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Bundler configuration</div>
              <div className="pl-4">├── tsconfig.json &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# TypeScript configuration</div>
              <div className="pl-4">└── src/</div>
              <div className="pl-8">├── main.tsx &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# React entrypoint</div>
              <div className="pl-8">├── index.css &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Tailwind CSS & typography</div>
              <div className="pl-8">├── App.tsx &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Main application composition</div>
              <div className="pl-8">├── types.ts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Project, skill, and journey schemas</div>
              <div className="pl-8">├── data/portfolioData.ts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Authentic portfolio records</div>
              <div className="pl-8">├── assets/images/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Authentic student portrait image</div>
              <div className="pl-8">└── components/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Modular UI sections</div>
              <div className="pl-12">├── Navbar.tsx &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Responsive 3-zone header</div>
              <div className="pl-12">├── Hero.tsx &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Hero headline, CTAs & portrait</div>
              <div className="pl-12">├── About.tsx &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# About narrative & currently learning</div>
              <div className="pl-12">├── Skills.tsx &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Categorized foundational skills</div>
              <div className="pl-12">├── Projects.tsx &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# 4 foundational project cards</div>
              <div className="pl-12">├── ProjectModal.tsx &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Interactive logic runner & code</div>
              <div className="pl-12">├── Hackathons.tsx &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Collaborative ideation flow</div>
              <div className="pl-12">├── LearningJourney.tsx &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# 5-stage progression timeline</div>
              <div className="pl-12">├── CurrentFocus.tsx &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# 7 focus topic exploration cards</div>
              <div className="pl-12">├── Contact.tsx &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Connect channels & message composer</div>
              <div className="pl-12">└── Footer.tsx &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Copyright & social links</div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors"
          >
            Got It
          </button>
        </div>

      </div>
    </div>
  );
};
