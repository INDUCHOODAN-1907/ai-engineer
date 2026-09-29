import React, { useState } from 'react';
import { X, Play, Copy, Check, ExternalLink, Terminal, Code2, BookOpen } from 'lucide-react';
import { Project } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'demo' | 'code' | 'learnings'>('demo');
  const [copied, setCopied] = useState(false);

  // 1. Voter State
  const [voterAge, setVoterAge] = useState<string>('19');
  const [voterResult, setVoterResult] = useState<string | null>(null);

  // 2. Calculator State
  const [calcNum1, setCalcNum1] = useState<string>('24');
  const [calcNum2, setCalcNum2] = useState<string>('6');
  const [calcOp, setCalcOp] = useState<string>('+');
  const [calcResult, setCalcResult] = useState<string | null>(null);

  // 3. ATM State
  const [atmBalance, setAtmBalance] = useState<number>(5000);
  const [atmAmount, setAtmAmount] = useState<string>('1000');
  const [atmLog, setAtmLog] = useState<string[]>(['Initial Balance initialized to ₹5,000.00']);

  // 4. Grade State
  const [gradeMarks, setGradeMarks] = useState<string>('85');
  const [gradeResult, setGradeResult] = useState<{ grade: string; remark: string } | null>(null);

  // Handlers
  const handleVoterCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const age = parseInt(voterAge, 10);
    if (isNaN(age)) {
      setVoterResult("Error: Please enter a valid numerical age.");
      return;
    }
    if (age < 0 || age > 120) {
      setVoterResult("Invalid Age: Please provide an age between 0 and 120.");
    } else if (age >= 18) {
      setVoterResult(`Eligible! At ${age} years old, the citizen is legally eligible to vote.`);
    } else {
      const remaining = 18 - age;
      setVoterResult(`Not Eligible: Citizen is ${age} years old. Eligible in ${remaining} year(s).`);
    }
  };

  const handleCalculator = (e: React.FormEvent) => {
    e.preventDefault();
    const a = parseFloat(calcNum1);
    const b = parseFloat(calcNum2);
    if (isNaN(a) || isNaN(b)) {
      setCalcResult("Error: Both inputs must be valid numbers.");
      return;
    }
    if (calcOp === '/' && b === 0) {
      setCalcResult("ZeroDivisionError: Cannot divide by zero in mathematics.");
      return;
    }

    let res = 0;
    if (calcOp === '+') res = a + b;
    else if (calcOp === '-') res = a - b;
    else if (calcOp === '*') res = a * b;
    else if (calcOp === '/') res = a / b;

    setCalcResult(`${a} ${calcOp} ${b} = ${res}`);
  };

  const handleAtmDeposit = () => {
    const amount = parseFloat(atmAmount);
    if (isNaN(amount) || amount <= 0) {
      setAtmLog((prev) => [`[Alert] Invalid deposit amount: Enter a positive value.`, ...prev]);
      return;
    }
    const newBal = atmBalance + amount;
    setAtmBalance(newBal);
    setAtmLog((prev) => [
      `[Deposit Success] +₹${amount.toFixed(2)} deposited. Current Balance: ₹${newBal.toFixed(2)}`,
      ...prev,
    ]);
  };

  const handleAtmWithdraw = () => {
    const amount = parseFloat(atmAmount);
    if (isNaN(amount) || amount <= 0) {
      setAtmLog((prev) => [`[Alert] Invalid withdrawal amount: Enter a positive value.`, ...prev]);
      return;
    }
    if (amount > atmBalance) {
      setAtmLog((prev) => [
        `[Transaction Declined] Insufficient balance for withdrawal of ₹${amount.toFixed(2)}. Available: ₹${atmBalance.toFixed(2)}`,
        ...prev,
      ]);
      return;
    }
    const newBal = atmBalance - amount;
    setAtmBalance(newBal);
    setAtmLog((prev) => [
      `[Withdrawal Success] -₹${amount.toFixed(2)} dispensed. Remaining Balance: ₹${newBal.toFixed(2)}`,
      ...prev,
    ]);
  };

  const handleGradeCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const marks = parseFloat(gradeMarks);
    if (isNaN(marks)) {
      setGradeResult({ grade: 'Invalid', remark: 'Please enter a valid number.' });
      return;
    }
    if (marks < 0 || marks > 100) {
      setGradeResult({ grade: 'Invalid Range', remark: 'Marks must be scored between 0 and 100.' });
      return;
    }

    if (marks >= 90) setGradeResult({ grade: 'A+', remark: 'Outstanding Academic Performance' });
    else if (marks >= 80) setGradeResult({ grade: 'A', remark: 'Excellent Performance' });
    else if (marks >= 70) setGradeResult({ grade: 'B', remark: 'Very Good Performance' });
    else if (marks >= 60) setGradeResult({ grade: 'C', remark: 'Satisfactory / Good' });
    else if (marks >= 50) setGradeResult({ grade: 'D', remark: 'Pass' });
    else setGradeResult({ grade: 'F', remark: 'Needs Improvement / Retest' });
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(project.pythonCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white w-full max-w-2xl rounded-2xl border border-slate-200 shadow-xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-200 flex items-start justify-between bg-slate-50/50">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-700 font-semibold mb-1">
              <span>{project.technology} Project</span>
              <span>·</span>
              <span>Foundational Level</span>
            </div>
            <h3 id="modal-title" className="text-xl font-bold text-slate-900">
              {project.title}
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-lg leading-relaxed">
              {project.shortDescription}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="px-6 pt-3 border-b border-slate-200 flex items-center gap-2 bg-white">
          <button
            onClick={() => setActiveTab('demo')}
            className={`px-3 py-2 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'demo'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Interactive Demo</span>
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-3 py-2 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'code'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Python Source</span>
          </button>
          <button
            onClick={() => setActiveTab('learnings')}
            className={`px-3 py-2 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'learnings'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Key Learnings</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {activeTab === 'demo' && (
            <div className="space-y-4">
              <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-lg text-xs text-blue-900 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-600 shrink-0" />
                <span>
                  Interactive client simulation reproducing the exact logic of the Python script.
                </span>
              </div>

              {/* 1. Voter Demo */}
              {project.interactiveType === 'voter' && (
                <form onSubmit={handleVoterCheck} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Enter Age to Test Eligibility:
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        min="0"
                        max="120"
                        value={voterAge}
                        onChange={(e) => setVoterAge(e.target.value)}
                        className="flex-1 px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-blue-600 font-mono"
                        placeholder="e.g. 18"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
                      >
                        Run Check
                      </button>
                    </div>
                  </div>

                  {voterResult && (
                    <div className="p-3.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800">
                      <span className="text-slate-400 block mb-1">OUTPUT:</span>
                      {voterResult}
                    </div>
                  )}
                </form>
              )}

              {/* 2. Calculator Demo */}
              {project.interactiveType === 'calculator' && (
                <form onSubmit={handleCalculator} className="space-y-4">
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                        First Number
                      </label>
                      <input
                        type="number"
                        step="any"
                        value={calcNum1}
                        onChange={(e) => setCalcNum1(e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg font-mono focus:outline-blue-600"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                        Operator
                      </label>
                      <select
                        value={calcOp}
                        onChange={(e) => setCalcOp(e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg font-mono bg-white focus:outline-blue-600"
                      >
                        <option value="+">+ (Addition)</option>
                        <option value="-">- (Subtraction)</option>
                        <option value="*">* (Multiplication)</option>
                        <option value="/">/ (Division)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                        Second Number
                      </label>
                      <input
                        type="number"
                        step="any"
                        value={calcNum2}
                        onChange={(e) => setCalcNum2(e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg font-mono focus:outline-blue-600"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
                  >
                    Execute Calculation
                  </button>

                  {calcResult && (
                    <div className="p-3.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800">
                      <span className="text-slate-400 block mb-1">RESULT:</span>
                      {calcResult}
                    </div>
                  )}
                </form>
              )}

              {/* 3. ATM Demo */}
              {project.interactiveType === 'atm' && (
                <div className="space-y-4">
                  <div className="p-3 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Simulated Account Balance:</span>
                    <span className="text-base font-bold font-mono text-slate-900">
                      ₹{atmBalance.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="number"
                      min="100"
                      step="100"
                      value={atmAmount}
                      onChange={(e) => setAtmAmount(e.target.value)}
                      className="flex-1 px-3 py-2 text-sm border border-slate-300 rounded-lg font-mono focus:outline-blue-600"
                      placeholder="Amount (₹)"
                    />
                    <button
                      type="button"
                      onClick={handleAtmDeposit}
                      className="px-3.5 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Deposit
                    </button>
                    <button
                      type="button"
                      onClick={handleAtmWithdraw}
                      className="px-3.5 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
                    >
                      Withdraw
                    </button>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-mono font-semibold text-slate-400 block">
                      TRANSACTION LOG:
                    </span>
                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg max-h-32 overflow-y-auto space-y-1 text-xs font-mono text-slate-700">
                      {atmLog.map((log, i) => (
                        <div key={i} className="leading-snug">
                          {log}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 4. Grade Demo */}
              {project.interactiveType === 'grade' && (
                <form onSubmit={handleGradeCalculate} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Enter Student Total Marks (0 - 100):
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={gradeMarks}
                        onChange={(e) => setGradeMarks(e.target.value)}
                        className="flex-1 px-3 py-2 text-sm border border-slate-300 rounded-lg font-mono focus:outline-blue-600"
                        placeholder="e.g. 85"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
                      >
                        Compute Grade
                      </button>
                    </div>
                  </div>

                  {gradeResult && (
                    <div className="p-3.5 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-between text-xs">
                      <div>
                        <span className="text-slate-400 font-mono block text-[11px]">GRADE ASSIGNED</span>
                        <span className="text-xl font-bold font-mono text-blue-700">
                          {gradeResult.grade}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-400 font-mono block text-[11px]">ASSESSMENT</span>
                        <span className="font-semibold text-slate-800">
                          {gradeResult.remark}
                        </span>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">
                  main.py · Python 3
                </span>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 px-2.5 py-1 bg-slate-100 rounded-md transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
                <code>{project.pythonCode}</code>
              </pre>
            </div>
          )}

          {activeTab === 'learnings' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Key Programming Concepts Practiced
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.conceptFocus.map((concept) => (
                    <div
                      key={concept}
                      className="p-3 bg-slate-50 border border-slate-200/80 rounded-lg text-xs font-medium text-slate-700 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span>{concept}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/70 text-xs text-slate-600 leading-relaxed space-y-2">
                <span className="font-semibold text-slate-900 block">
                  Foundational Value
                </span>
                <p>
                  This project was built to test foundational programming logic directly in Python. It avoids reliance on complex external frameworks to ensure complete mastery of inputs, conditionals, calculations, and error-handling before moving into larger architectures and AI pipelines.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors"
          >
            <span>GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg text-xs font-semibold transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
