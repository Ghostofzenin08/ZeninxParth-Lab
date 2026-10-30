import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CelestialGalaxyCanvas from '../components/ui/CelestialGalaxyCanvas';
import GalacticOrbitSimulator from '../components/ui/GalacticOrbitSimulator';
import TimeLoopSimulator from '../components/ui/TimeLoopSimulator';
import OrbitalStationSimulator from '../components/ui/OrbitalStationSimulator';
import Section from '../components/common/Section';
import Button from '../components/ui/Button';
import ProjectCard from '../components/common/ProjectCard';
import Badge from '../components/ui/Badge';
import { projectsData } from '../data/projectsData';
import { sounds } from '../utils/soundEffects';

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeSimTab, setActiveSimTab] = useState('orbital'); // 'orbital' | 'astrophysics' | 'timeloop'
  const [copiedEmail, setCopiedEmail] = useState(false);

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.filterCategory === activeFilter);

  const filterTabs = [
    { id: 'all', label: 'All Systems', count: projectsData.length },
    { id: 'ai-fullstack', label: 'AI & Full-Stack', count: projectsData.filter((p) => p.filterCategory === 'ai-fullstack').length },
    { id: 'game-dev', label: 'Indie Game Dev', count: projectsData.filter((p) => p.filterCategory === 'game-dev').length },
    { id: 'astrophysics', label: 'Astrophysics & Sim', count: projectsData.filter((p) => p.filterCategory === 'astrophysics').length },
    { id: 'tools-ui', label: 'Developer Tools & UI', count: projectsData.filter((p) => p.filterCategory === 'tools-ui').length },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('harshalsonawane308@gmail.com');
    setCopiedEmail(true);
    sounds.playUiClick();
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const skillCategories = [
    {
      title: "AI & Computational Engineering",
      color: "border-primary/40 bg-primary/5",
      skills: ["Google Gemini AI API", "NumPy & SciPy", "N-Body Gravitational Dynamics", "Runge-Kutta 4th Order", "Vector Kinematics", "NLP Semantic Parsing", "ATS Scoring Algorithms"]
    },
    {
      title: "Game Engines & Interactive Graphics",
      color: "border-cyan-500/40 bg-cyan-500/5",
      skills: ["Godot Engine 4.7.2", "GDScript", "Three.js (WebGL)", "GLSL Shaders", "Pygame", "State Machines", "Hermite Interpolation", "Spatial Hashing"]
    },
    {
      title: "Full-Stack Web & Architecture",
      color: "border-emerald-500/40 bg-emerald-500/5",
      skills: ["React 18", "Tailwind CSS", "JavaScript (ES6+)", "TypeScript", "Flask 3.0", "FastAPI", "HTML5 Canvas", "Chrome Manifest V3"]
    },
    {
      title: "Cloud, Databases & Tooling",
      color: "border-amber-500/40 bg-amber-500/5",
      skills: ["Neon Serverless Postgres", "Render WSGI", "Vercel Edge", "GitHub Actions CI/CD", "PyInstaller (Windows EXE)", "itch.io API", "Git & Linux"]
    }
  ];

  return (
    <div className="relative">
      {/* 3D CELESTIAL HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 border-b border-border/60">
        {/* Three.js 3D Celestial Galaxy Canvas */}
        <CelestialGalaxyCanvas />

        <div className="relative max-w-5xl mx-auto text-center z-10 py-20 pointer-events-none">
          {/* Top Aerospace / Tech Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-primary/40 bg-background/80 backdrop-blur-md text-primary text-xs font-mono mb-6 shadow-xl pointer-events-auto">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
            <span className="font-semibold">Aerospace Engineering Rigor • Full-Stack • AI/ML • Indie Game Dev</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-text-main leading-tight drop-shadow-sm pointer-events-auto">
            Harshal Sonawane
          </h1>

          <p className="mt-4 text-xl sm:text-2xl font-mono text-primary font-bold tracking-tight pointer-events-auto">
            &lt;Ghostofzenin08 /&gt;
          </p>

          <p className="mt-5 text-base sm:text-lg text-text-muted max-w-3xl mx-auto leading-relaxed pointer-events-auto">
            Architecting intelligent web platforms, computational astrophysics simulations, and deterministic game engines.
            Bridging aerospace mathematical rigor with <strong className="text-text-main font-semibold">Google Gemini AI</strong>,{' '}
            <strong className="text-text-main font-semibold">Three.js WebGL</strong>, and{' '}
            <strong className="text-text-main font-semibold">Godot 4.x / Pygame</strong> architectures.
          </p>

          {/* Quick Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 pointer-events-auto">
            <Button
              to="/projects"
              variant="primary"
              size="lg"
              onClick={() => sounds.playUiClick()}
            >
              🚀 Explore 9 Systems
            </Button>

            <a
              href="#astrophysics-lab"
              onClick={() => sounds.playWarp()}
              className="inline-flex items-center justify-center font-medium rounded-xl px-7 py-3 text-base gap-2 bg-surface border border-primary/30 text-text-main hover:border-primary hover:bg-surface-elevated shadow-lg transition-all active:scale-[0.98]"
            >
              <span>🛸 3D Spacecraft Sim</span>
            </a>

            <a
              href="https://github.com/Ghostofzenin08"
              target="_blank"
              rel="noreferrer"
              onClick={() => sounds.playUiClick()}
              className="inline-flex items-center justify-center font-medium rounded-xl px-6 py-3 text-base gap-2 bg-surface-elevated border border-border text-text-main hover:border-text-subtle transition-all active:scale-[0.98]"
            >
              <span>GitHub</span>
              <span>↗</span>
            </a>

            <a
              href="https://zeninxparth.itch.io"
              target="_blank"
              rel="noreferrer"
              onClick={() => sounds.playWarp()}
              className="inline-flex items-center justify-center font-medium rounded-xl px-6 py-3 text-base gap-2 bg-[#fa5c5c] text-white hover:bg-[#e04545] shadow-lg shadow-[#fa5c5c]/25 border border-[#fa5c5c]/30 transition-all active:scale-[0.98]"
            >
              <span>itch.io Games</span>
              <span>↗</span>
            </a>
          </div>

          {/* Metrics Ribbon */}
          <div className="mt-12 pt-6 border-t border-border/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-text-subtle pointer-events-auto">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-text-main text-base">9</span>
              <span>Featured Systems</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-cyan-400 text-base">&lt;150ms</span>
              <span>Gemini AI NLP</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-emerald-400 text-base">1,033+</span>
              <span>Headless CI Assertions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-primary text-base">60 FPS</span>
              <span>Deterministic Kinematics</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-amber-400 text-base">13</span>
              <span>Ship Compartments</span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE ENGINEERING PILLARS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
            Interdisciplinary Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-text-main mt-2 tracking-tight">
            Engineering Disciplines & Core Competencies
          </h2>
          <p className="mt-3 text-sm sm:text-base text-text-muted">
            Combining aerospace mathematical principles, intelligent neural integrations, and hardware-accelerated interactive systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div className="p-6 rounded-3xl border border-border bg-surface hover:border-primary/40 hover:shadow-glow-subtle transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-2xl mb-4">
                🌌
              </div>
              <h3 className="text-lg font-bold text-text-main tracking-tight">
                Aerospace & Simulation
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-text-muted leading-relaxed">
                N-body orbital dynamics, Keplerian state vectors, and numerical integration with Runge-Kutta 4th order algorithms.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-border/80 text-[11px] font-mono text-primary font-semibold">
              3D Galactic Model • NumPy
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-3xl border border-border bg-surface hover:border-cyan-500/40 hover:shadow-glow-subtle transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl mb-4">
                ⚡
              </div>
              <h3 className="text-lg font-bold text-text-main tracking-tight">
                AI & Full-Stack Systems
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-text-muted leading-relaxed">
                Google Gemini AI integrations, stateless Flask WSGI REST APIs, live DOM document parsing, and PostgreSQL pipelines.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-border/80 text-[11px] font-mono text-cyan-400 font-semibold">
              ResuMatch • Gemini API • Render
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-3xl border border-border bg-surface hover:border-emerald-500/40 hover:shadow-glow-subtle transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-2xl mb-4">
                🎮
              </div>
              <h3 className="text-lg font-bold text-text-main tracking-tight">
                Indie Game Architecture
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-text-muted leading-relaxed">
                Godot 4.7 3D spacecraft engineering horror, autonomous apex stalker AI, time-loop state machines, and GLSL rewind shaders.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-border/80 text-[11px] font-mono text-emerald-400 font-semibold">
              Orbital: The Last Engineer • Echo of Dread • Godot
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-3xl border border-border bg-surface hover:border-amber-500/40 hover:shadow-glow-subtle transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-2xl mb-4">
                🛠️
              </div>
              <h3 className="text-lg font-bold text-text-main tracking-tight">
                Developer Tooling & UI
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-text-muted leading-relaxed">
                Chrome Manifest V3 productivity extensions, glassmorphic design systems, and automated headless CI testing workflows.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-border/80 text-[11px] font-mono text-amber-400 font-semibold">
              Snipy • Modern Auth • GitHub CI
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE 3D SIMULATION LAB SHOWCASE */}
      <section id="astrophysics-lab" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Computational Physics & Systems Laboratory
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-text-main mt-1 tracking-tight">
              Interactive Engines & Real-Time Simulations
            </h2>
          </div>

          {/* Simulator Tab Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-surface border border-border">
            <button
              type="button"
              onClick={() => {
                setActiveSimTab('orbital');
                sounds.playUiClick();
              }}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                activeSimTab === 'orbital'
                  ? 'bg-cyan-500 text-black shadow-md'
                  : 'text-text-muted hover:text-text-main hover:bg-surface-elevated'
              }`}
            >
              🛸 Orbital Station Sim
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveSimTab('astrophysics');
                sounds.playUiClick();
              }}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                activeSimTab === 'astrophysics'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-text-muted hover:text-text-main hover:bg-surface-elevated'
              }`}
            >
              🪐 3D N-Body Orbit Sim
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveSimTab('timeloop');
                sounds.playWarp();
              }}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                activeSimTab === 'timeloop'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-text-muted hover:text-text-main hover:bg-surface-elevated'
              }`}
            >
              ⏳ Echo of Dread Time-Loop
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeSimTab === 'orbital' ? (
          <div>
            <OrbitalStationSimulator />
          </div>
        ) : activeSimTab === 'astrophysics' ? (
          <GalacticOrbitSimulator />
        ) : (
          <div className="rounded-3xl border border-primary/30 bg-surface/95 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
            <div className="mb-4">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                Echo of Dread Engine Preview
              </span>
              <h3 className="text-xl font-bold text-text-main">
                30-Second Causal Loop State Machine Simulation
              </h3>
              <p className="text-xs text-text-muted">
                Step through recorded chronological states and holographic Echo cooperation
              </p>
            </div>
            <TimeLoopSimulator />
          </div>
        )}
      </section>

      {/* ALL 9 FEATURED PROJECTS SHOWCASE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
                Portfolio Systems
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                9 Published Works
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-text-main tracking-tight">
              Software Architecture & Project Showcase
            </h2>
            <p className="mt-2 text-sm sm:text-base text-text-muted max-w-2xl">
              From Godot 4 3D spacecraft engineering horror and Google Gemini AI resume parsers to time-loop puzzle games, n-body orbital dynamics, and developer browser extensions.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-surface border border-border">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveFilter(tab.id);
                  sounds.playUiClick();
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                  activeFilter === tab.id
                    ? 'bg-primary text-white font-bold shadow-md'
                    : 'text-text-muted hover:text-text-main hover:bg-surface-elevated'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeFilter === tab.id ? 'bg-black/30 text-white' : 'bg-surface-elevated text-text-subtle'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 3D Tilted Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>
      </section>

      {/* TECHNICAL ARSENAL & SKILLS MATRIX */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border/80">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-text-main mt-2 tracking-tight">
            Engineering Arsenal & Toolchain
          </h2>
          <p className="mt-2 text-sm text-text-muted">
            Production-grade technologies utilized across computational simulations, game engines, and full-stack cloud platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className={`p-6 rounded-3xl border ${cat.color} backdrop-blur-sm transition-all duration-300`}
            >
              <h3 className="text-base font-bold font-mono text-text-main mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>{cat.title}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill} variant="default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ENGINEERING TIMELINE & RELEASES */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border/80">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
            Project Milestones
          </span>
          <h2 className="text-3xl font-black text-text-main mt-1 tracking-tight">
            Engineering Journey & Production Releases
          </h2>
        </div>

        <div className="relative border-l-2 border-primary/30 pl-6 sm:pl-8 space-y-8">
          {/* Milestone 1 */}
          <div className="relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20" />
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold">
              <span>2026</span>
              <span>•</span>
              <span>Godot 4.7.2 3D Flagship Release</span>
            </div>
            <h4 className="text-lg font-bold text-text-main mt-1">
              ORBITAL: The Last Engineer — 13 Compartments &amp; 1,033 Headless CI Tests
            </h4>
            <p className="text-xs sm:text-sm text-text-muted mt-1 leading-relaxed">
              Authored first-person 3D spacecraft engineering survival and psychological horror simulation in Godot Engine 4.7.2. Engineered 13 interconnected compartments across 2 decks, dual Feel &amp; Logical telemetry modes, autonomous apex stalker AI, and 1,033 passing assertions across 43 automated test suites.
            </p>
          </div>

          {/* Milestone 2 */}
          <div className="relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20" />
            <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold">
              <span>2026</span>
              <span>•</span>
              <span>itch.io Production Release</span>
            </div>
            <h4 className="text-lg font-bold text-text-main mt-1">
              Echo of Dread — 50 Chambers & 394 CI Tests Passed
            </h4>
            <p className="text-xs sm:text-sm text-text-muted mt-1 leading-relaxed">
              Launched flagship sci-fi time-loop puzzle game on itch.io. Implemented deterministic trajectory recording, GLSL rewind post-processing shaders, and automated headless CI testing.
            </p>
          </div>

          {/* Milestone 2 */}
          <div className="relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20" />
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold">
              <span>2025</span>
              <span>•</span>
              <span>AI Hackathon & Cloud WSGI</span>
            </div>
            <h4 className="text-lg font-bold text-text-main mt-1">
              ResuMatch — Google Gemini AI Career Engine
            </h4>
            <p className="text-xs sm:text-sm text-text-muted mt-1 leading-relaxed">
              Engineered real-time ATS resume analyzer and live DOM document preview microservice powered by Google Gemini AI API and Render WSGI REST endpoints.
            </p>
          </div>

          {/* Milestone 3 */}
          <div className="relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold">
              <span>2025</span>
              <span>•</span>
              <span>Astrophysics & Aerospace Research</span>
            </div>
            <h4 className="text-lg font-bold text-text-main mt-1">
              3D Galactic Model — Gravitational N-Body Simulation
            </h4>
            <p className="text-xs sm:text-sm text-text-muted mt-1 leading-relaxed">
              Modeled galactic rotation curves, Keplerian orbital vectors, and dark matter gravitational potential fields using NumPy vectorized computing and Runge-Kutta numerical solvers.
            </p>
          </div>

          {/* Milestone 4 */}
          <div className="relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-amber-400 ring-4 ring-amber-400/20" />
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold">
              <span>2024</span>
              <span>•</span>
              <span>Arcade Engines & Cloud Database Sync</span>
            </div>
            <h4 className="text-lg font-bold text-text-main mt-1">
              Meteor Space Dodge & BlockRush 2048 Releases
            </h4>
            <p className="text-xs sm:text-sm text-text-muted mt-1 leading-relaxed">
              Published Python arcade survival and expandable 12x12 matrix 2048 game with Neon Serverless PostgreSQL leaderboards and standalone Windows executables.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT & CONNECT SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl border border-primary/40 bg-gradient-to-br from-surface via-surface to-surface-elevated p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Full-Stack, AI & Game Engineering Roles</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-text-main tracking-tight">
              Let's Build Something Exceptional
            </h2>

            <p className="mt-3 text-sm sm:text-base text-text-muted leading-relaxed">
              Interested in collaborating on AI microservices, aerospace simulations, or game engine development? Reach out directly:
            </p>

            {/* Email Copy Card */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="px-4 py-2.5 rounded-xl bg-surface-elevated border border-border text-sm font-mono text-text-main flex items-center gap-3">
                <span className="text-primary font-bold">✉</span>
                <span>harshalsonawane308@gmail.com</span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-mono font-bold transition-all shadow-md active:scale-95"
              >
                {copiedEmail ? '✓ Copied to Clipboard!' : 'Copy Email'}
              </button>
            </div>

            {/* Quick Links */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-text-muted">
              <a
                href="https://github.com/Ghostofzenin08"
                target="_blank"
                rel="noreferrer"
                onClick={() => sounds.playUiClick()}
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                <span>GitHub: @Ghostofzenin08</span>
                <span>↗</span>
              </a>
              <span>•</span>
              <a
                href="https://zeninxparth.itch.io"
                target="_blank"
                rel="noreferrer"
                onClick={() => sounds.playWarp()}
                className="text-[#fa5c5c] hover:underline font-bold transition-colors flex items-center gap-1"
              >
                <span>itch.io: ZeninXParth</span>
                <span>↗</span>
              </a>
              <span>•</span>
              <Link
                to="/about"
                onClick={() => sounds.playUiClick()}
                className="hover:text-primary transition-colors"
              >
                Detailed Biography & Background →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
