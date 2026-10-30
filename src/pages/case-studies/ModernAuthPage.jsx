import React, { useState } from 'react';
import CaseStudyLayout from '../../components/layout/CaseStudyLayout';
import { projectsData } from '../../data/projectsData';
import { sounds } from '../../utils/soundEffects';

export default function ModernAuthPage() {
  const project = projectsData.find((p) => p.id === 'modern-auth-ui');
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'register'
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [authSuccess, setAuthSuccess] = useState(false);

  // Password strength calculation
  const getPasswordStrength = (pwd) => {
    if (!pwd) return { score: 0, label: 'Empty', color: 'bg-zinc-700' };
    let score = 0;
    if (pwd.length >= 8) score += 1;
    if (/[A-Z]/.test(pwd)) score += 1;
    if (/[0-9]/.test(pwd)) score += 1;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 1;

    switch (score) {
      case 1:
        return { score: 25, label: 'Weak', color: 'bg-red-500' };
      case 2:
        return { score: 50, label: 'Fair', color: 'bg-amber-500' };
      case 3:
        return { score: 75, label: 'Strong', color: 'bg-cyan-400' };
      case 4:
        return { score: 100, label: 'Elite Security', color: 'bg-emerald-400' };
      default:
        return { score: 10, label: 'Too short', color: 'bg-red-500' };
    }
  };

  const strength = getPasswordStrength(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    sounds.playWarp();
    setAuthSuccess(true);
    setTimeout(() => setAuthSuccess(false), 3000);
  };

  return (
    <div>
      <CaseStudyLayout project={project} />

      {/* Embedded Live Glassmorphic Auth System Interactive Demo */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-20">
        <div className="rounded-3xl border border-primary/40 bg-surface/95 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border mb-8 relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
                  Interactive Live Preview
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  CSS3 Glassmorphism
                </span>
              </div>
              <h3 className="text-2xl font-black tracking-tight text-text-main">
                Glassmorphic Authentication Sandbox
              </h3>
              <p className="text-xs sm:text-sm text-text-muted mt-0.5">
                Test fluid 3D card perspective transitions, dynamic password entropy meter, and real-time validation.
              </p>
            </div>

            {/* Mode Switch Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-surface-elevated border border-border">
              <button
                type="button"
                onClick={() => {
                  setAuthMode('login');
                  sounds.playUiClick();
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                  authMode === 'login'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-text-muted hover:text-text-main'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthMode('register');
                  sounds.playUiClick();
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                  authMode === 'register'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-text-muted hover:text-text-main'
                }`}
              >
                Create Account
              </button>
            </div>
          </div>

          {/* Centered Glassmorphic Card Container */}
          <div className="max-w-md mx-auto relative z-10">
            <div className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 shadow-2xl shadow-black/50 transition-all duration-500">
              {authSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-2xl flex items-center justify-center mx-auto animate-bounce">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-text-main">Authentication Verified</h4>
                  <p className="text-xs font-mono text-emerald-400">
                    Session token encrypted & simulated successfully.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-black text-text-main">
                      {authMode === 'login' ? 'Welcome Back' : 'Join the Network'}
                    </h4>
                    <p className="text-xs text-text-muted mt-1 font-mono">
                      {authMode === 'login'
                        ? 'Enter your credentials to access the terminal'
                        : 'Deploy your workspace profile in seconds'}
                    </p>
                  </div>

                  {authMode === 'register' && (
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-text-subtle mb-1.5 font-semibold">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Harshal Sonawane"
                        className="w-full px-4 py-2.5 rounded-xl bg-surface/70 border border-border text-xs font-mono text-text-main focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-text-subtle mb-1.5 font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="engineer@zeninxparth.dev"
                      className="w-full px-4 py-2.5 rounded-xl bg-surface/70 border border-border text-xs font-mono text-text-main focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-[11px] font-mono uppercase text-text-subtle font-semibold">
                        Password
                      </label>
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-[10px] font-mono text-primary hover:underline"
                      >
                        {showPassword ? 'Hide' : 'Show'}
                      </button>
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full px-4 py-2.5 rounded-xl bg-surface/70 border border-border text-xs font-mono text-text-main focus:outline-none focus:border-primary transition-colors"
                    />

                    {/* Password Strength Meter */}
                    {password && (
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center justify-between text-[10px] font-mono">
                          <span className="text-text-subtle">Entropy Rating:</span>
                          <span className="font-bold text-text-main">{strength.label}</span>
                        </div>
                        <div className="w-full h-1.5 bg-surface-elevated rounded-full overflow-hidden">
                          <div
                            className={`h-full transition-all duration-300 ${strength.color}`}
                            style={{ width: `${strength.score}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/25 transition-all active:scale-[0.98] mt-2"
                  >
                    {authMode === 'login' ? 'Authenticate →' : 'Initialize Account →'}
                  </button>

                  <div className="text-center pt-2">
                    <span className="text-[11px] font-mono text-text-subtle">
                      Zero dependencies • Hardware CSS backdrop-filter
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
