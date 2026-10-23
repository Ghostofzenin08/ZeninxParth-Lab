import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Section from '../../components/common/Section';
import TimeLoopSimulator from '../../components/ui/TimeLoopSimulator';
import { projectsData } from '../../data/projectsData';
import { sounds } from '../../utils/soundEffects';

export default function EchoOfDreadPage() {
  const project = projectsData.find((p) => p.id === 'echo-of-dread');
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedSector, setSelectedSector] = useState(0);

  if (!project) return null;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back to Game Store Link */}
      <div className="mb-8 flex items-center justify-between">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-subtle hover:text-primary transition-colors"
          onClick={() => sounds.playUiClick()}
        >
          <span>←</span> Back to Game Store & Projects
        </Link>
        <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
          itch.io Featured Title
        </span>
      </div>

      {/* Hero Showcase Header */}
      <Section className="!py-0">
        <div className="relative rounded-3xl overflow-hidden border border-border bg-gradient-to-b from-surface via-surface to-surface-elevated p-6 sm:p-10 shadow-2xl">
          {/* Cover Art Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-border mb-8 shadow-inner group">
            <img
              src={project.coverImage}
              alt="Echo of Dread itch.io Banner"
              className="w-full h-56 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-[#fa5c5c] text-white shadow-md">
                  🕹️ itch.io Verified
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-[#478cbf] text-white shadow-md">
                  Godot v4.7.2
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-emerald-600 text-white shadow-md">
                  ✓ 394 Tests Passed
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-sans drop-shadow-md">
                Echo of Dread
              </h1>
              <p className="mt-2 text-sm sm:text-base text-gray-200 font-mono italic max-w-2xl drop-shadow">
                {project.tagline}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">
                {project.category}
              </span>
              <p className="mt-3 text-base text-text-muted leading-relaxed max-w-3xl">
                {project.subtitle}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="accent">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 min-w-[220px]">
              <a
                href={project.itchUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => sounds.playWarp()}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#fa5c5c] text-white hover:bg-[#e04545] font-bold text-sm shadow-lg shadow-[#fa5c5c]/25 transition-all text-center"
              >
                <span>Play on itch.io</span>
                <span>↗</span>
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => sounds.playUiClick()}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 font-semibold text-xs transition-all text-center"
              >
                <span>Official Web Landing</span>
                <span>↗</span>
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => sounds.playUiClick()}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-surface hover:bg-surface-elevated text-text-main font-semibold text-xs transition-all text-center"
              >
                <span>GitHub Source</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="mt-8 pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 rounded-xl bg-surface-elevated/70 border border-border">
              <span className="block text-2xl font-black text-text-main font-mono">50</span>
              <span className="text-[11px] font-mono text-text-subtle uppercase">Puzzle Chambers</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-elevated/70 border border-border">
              <span className="block text-2xl font-black text-cyan-400 font-mono">30s / 15s</span>
              <span className="text-[11px] font-mono text-text-subtle uppercase">Temporal Loops</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-elevated/70 border border-border">
              <span className="block text-2xl font-black text-purple-400 font-mono">5</span>
              <span className="text-[11px] font-mono text-text-subtle uppercase">Simultaneous Echoes</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-elevated/70 border border-border">
              <span className="block text-2xl font-black text-emerald-400 font-mono">394</span>
              <span className="text-[11px] font-mono text-text-subtle uppercase">Headless Tests Passed</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Interactive Time Loop Simulator Widget */}
      <div className="my-12">
        <div className="mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
            In-Browser Live Simulation
          </span>
          <h2 className="text-2xl font-extrabold text-text-main tracking-tight">
            Experience the Core Time-Loop Mechanic
          </h2>
        </div>
        <TimeLoopSimulator />
      </div>

      {/* 5 Sectors Blueprint Navigator */}
      <div className="my-12 border-t border-border pt-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              Facility Topology
            </span>
            <h2 className="text-2xl font-extrabold text-text-main tracking-tight mt-1">
              The 5 Chronos Research Sectors
            </h2>
          </div>
          <span className="text-xs font-mono text-text-subtle mt-2 sm:mt-0">
            50 Chambers Total • Progressive Difficulty
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-6">
          {project.sectors.map((sec, idx) => (
            <button
              key={sec.name}
              onClick={() => {
                sounds.playUiClick();
                setSelectedSector(idx);
              }}
              className={`p-4 rounded-2xl text-left border transition-all duration-200 ${
                selectedSector === idx
                  ? 'bg-primary/10 border-primary text-primary shadow-glow-red/20'
                  : 'bg-surface border-border text-text-muted hover:border-text-subtle/40'
              }`}
            >
              <span className="text-[10px] font-mono block opacity-70">
                {sec.chambers}
              </span>
              <h4 className="font-bold text-sm mt-1 text-text-main">
                {sec.name.split(':')[1] || sec.name}
              </h4>
            </button>
          ))}
        </div>

        <div className="p-6 rounded-2xl border border-border bg-surface-elevated/70">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-text-main font-mono">
              {project.sectors[selectedSector].name}
            </h3>
            <span className="text-xs font-mono px-3 py-1 rounded bg-primary/15 text-primary border border-primary/30">
              {project.sectors[selectedSector].chambers}
            </span>
          </div>
          <p className="text-sm text-text-muted leading-relaxed">
            {project.sectors[selectedSector].theme}
          </p>
        </div>
      </div>

      {/* Controls Reference Matrix */}
      <div className="my-12 border-t border-border pt-10">
        <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
          Input Mapping
        </span>
        <h2 className="text-2xl font-extrabold text-text-main tracking-tight mt-1 mb-6">
          Controls & Multi-Device Compatibility
        </h2>

        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface-elevated text-xs font-mono uppercase text-text-subtle border-b border-border">
              <tr>
                <th className="py-3 px-4">Action</th>
                <th className="py-3 px-4">Keyboard (PC)</th>
                <th className="py-3 px-4">Mobile / Touch</th>
                <th className="py-3 px-4">Functionality</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-surface">
              {project.controls.map((ctrl, i) => (
                <tr key={i} className="hover:bg-surface-elevated/50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-text-main text-xs font-mono">{ctrl.action}</td>
                  <td className="py-3.5 px-4 font-mono text-cyan-400 text-xs">{ctrl.pc}</td>
                  <td className="py-3.5 px-4 font-mono text-purple-400 text-xs">{ctrl.touch}</td>
                  <td className="py-3.5 px-4 text-text-muted text-xs">{ctrl.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Architectural Decisions & Learnings */}
      <div className="my-12 border-t border-border pt-10">
        <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
          Technical Deep-Dive
        </span>
        <h2 className="text-2xl font-extrabold text-text-main tracking-tight mt-1 mb-6">
          Architectural Decisions & Godot Systems
        </h2>

        <div className="space-y-4">
          {project.decisions.map((dec, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-border bg-surface/70 hover:bg-surface transition-colors"
            >
              <h4 className="font-semibold text-text-main text-sm font-mono flex items-center gap-2">
                <span className="text-primary font-bold">#{i + 1}</span> {dec.title}
              </h4>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                {dec.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Automated Headless Test Suite Section */}
      <div className="my-12 border-t border-border pt-10">
        <div className="p-6 rounded-3xl border border-emerald-500/30 bg-emerald-950/10 backdrop-blur-md">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="text-lg font-bold text-text-main font-mono">
              394 Automated Headless CI Tests — 100% Passed
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-4">
            Echo of Dread features an automated test runner (<code className="text-cyan-400 font-mono">scenes/test/test_runner.gd</code>) verifying game logic without requiring a graphics driver or display server.
          </p>
          <div className="p-4 rounded-xl bg-black/80 font-mono text-xs text-emerald-400 border border-emerald-900/50 overflow-x-auto">
            <div>[PASS] Autoload: SoundManager is initialized</div>
            <div>[PASS] LoopManager: Initial loop is #1</div>
            <div>[PASS] ActionRecorder: Trajectory Hermite interpolation exact at t=1.5s</div>
            <div>[PASS] RewindLock: Manual rewind locked for Chamber 1</div>
            <div>[PASS] RewindLock: Manual rewind unlocked for Chamber 11</div>
            <div>[PASS] ChronalPacing: Chambers 1–5 support 15s/30s duration toggle</div>
            <div>[PASS] OmegaWing: Chamber 50 singularity door requires 4 corner plates</div>
            <div className="text-text-subtle pt-2 border-t border-emerald-900/50 mt-2">
              ==================================================<br />
              TESTS COMPLETED: 394 / 394 PASSED | ALL SYSTEMS NOMINAL<br />
              ==================================================
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Bar */}
      <div className="mt-14 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
        <Button to="/projects" variant="outline" size="sm" onClick={() => sounds.playUiClick()}>
          ← Back to Game Store
        </Button>
        <div className="flex items-center gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => sounds.playUiClick()}
            className="px-4 py-2 rounded-xl border border-border text-xs font-mono text-text-muted hover:text-text-main transition-colors"
          >
            Launch Web Simulation ↗
          </a>
          <a
            href={project.itchUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => sounds.playWarp()}
            className="px-5 py-2.5 rounded-xl bg-[#fa5c5c] text-white hover:bg-[#e04545] font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#fa5c5c]/25 transition-all"
          >
            Play on itch.io ↗
          </a>
        </div>
      </div>
    </div>
  );
}
