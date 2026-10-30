import React, { useState } from 'react';
import CaseStudyLayout from '../../components/layout/CaseStudyLayout';
import { projectsData } from '../../data/projectsData';
import { sounds } from '../../utils/soundEffects';

export default function SnipyPage() {
  const project = projectsData.find((p) => p.id === 'snipy');

  const [language, setLanguage] = useState('python');
  const [tag, setTag] = useState('astrophysics');
  const [copied, setCopied] = useState(false);
  const [savedCount, setSavedCount] = useState(12);

  const sampleSnippets = {
    python: `# Vis-Viva orbital speed calculation\ndef compute_orbital_velocity(mu: float, r: float, a: float) -> float:\n    return (mu * (2.0 / r - 1.0 / a)) ** 0.5`,
    javascript: `// Sub-150ms Gemini AI prompt pipeline\nasync function queryGeminiATS(resumeText, targetRole) {\n  const res = await fetch('/api/ats-parse', { method: 'POST', body: JSON.stringify({ resumeText, targetRole }) });\n  return res.json();\n}`,
    gdscript: `## Echo of Dread Causal Time-Loop ActionRecorder\nextends Node\nclass_name ActionRecorder\n\nfunc record_frame(pos: Vector2, state: int) -> void:\n    var timestamp: float = Time.get_ticks_msec() / 1000.0\n    history.append({ "t": timestamp, "pos": pos, "state": state })`,
    glsl: `// GLSL Chromatic Rewind Post-Processing\nvoid fragment() {\n    vec2 uv = SCREEN_UV;\n    float shift = sin(TIME * 8.0) * 0.008;\n    COLOR.r = texture(SCREEN_TEXTURE, uv + vec2(shift, 0.0)).r;\n    COLOR.g = texture(SCREEN_TEXTURE, uv).g;\n    COLOR.b = texture(SCREEN_TEXTURE, uv - vec2(shift, 0.0)).b;\n}`,
  };

  const [currentCode, setCurrentCode] = useState(sampleSnippets.python);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setCurrentCode(sampleSnippets[lang]);
    sounds.playUiClick();
  };

  const handleCopyMarkdown = () => {
    const formatted = `\`\`\`${language}\n${currentCode}\n\`\`\``;
    navigator.clipboard.writeText(formatted);
    setCopied(true);
    sounds.playUiClick();
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveSnippet = () => {
    sounds.playWarp();
    setSavedCount((prev) => prev + 1);
  };

  return (
    <div>
      <CaseStudyLayout project={project} />

      {/* Embedded Snipy Extension HUD Interactive Simulator */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-20">
        <div className="rounded-3xl border border-primary/40 bg-surface/95 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border mb-8 relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                  Interactive Browser Sandbox
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-text-subtle border border-border">
                  Manifest V3 Extension Engine
                </span>
              </div>
              <h3 className="text-2xl font-black tracking-tight text-text-main">
                Snipy Quick Capture HUD Simulator
              </h3>
              <p className="text-xs sm:text-sm text-text-muted mt-0.5">
                Simulate browser text selection capture, syntax tagging, and one-click markdown clipboard export.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono px-3.5 py-1.5 rounded-xl bg-surface-elevated border border-border text-text-subtle">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{savedCount} Snippets in Local Store</span>
            </div>
          </div>

          {/* Simulated Browser Popup Modal */}
          <div className="max-w-2xl mx-auto relative z-10">
            <div className="rounded-2xl border border-amber-500/30 bg-black/80 backdrop-blur-xl p-6 shadow-2xl shadow-black/60">
              {/* Fake Chrome Popup Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border/80 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 text-xs font-bold">
                    S
                  </div>
                  <span className="font-bold text-text-main">Snipy Extension HUD</span>
                  <span className="text-[10px] text-text-subtle">[Alt + S]</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                </div>
              </div>

              {/* Language Selection Pills */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono uppercase text-text-subtle">Syntax:</span>
                {['python', 'javascript', 'gdscript', 'glsl'].map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => handleLanguageChange(lang)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold uppercase transition-all ${
                      language === lang
                        ? 'bg-amber-500 text-black shadow-md'
                        : 'bg-surface border border-border text-text-muted hover:text-text-main'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              {/* Code Preview Editor Area */}
              <div className="mt-4">
                <textarea
                  rows={6}
                  value={currentCode}
                  onChange={(e) => setCurrentCode(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono text-amber-300 focus:outline-none focus:border-amber-500/60 transition-colors leading-relaxed selection:bg-amber-500 selection:text-black resize-none"
                />
              </div>

              {/* Tag and Action Buttons */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-text-subtle uppercase">Tag:</span>
                  <input
                    type="text"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    className="px-2.5 py-1 rounded-lg bg-surface border border-border text-xs font-mono text-text-main w-32 focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyMarkdown}
                    className="px-3.5 py-2 rounded-xl border border-border bg-surface hover:bg-surface-elevated text-xs font-mono font-bold text-text-main transition-all flex items-center gap-1.5 active:scale-95"
                  >
                    <span>{copied ? '✓ Copied Markdown' : '📋 Copy Markdown'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSaveSnippet}
                    className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-mono font-bold transition-all shadow-md active:scale-95 flex items-center gap-1.5"
                  >
                    <span>💾 Save Snippet</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
