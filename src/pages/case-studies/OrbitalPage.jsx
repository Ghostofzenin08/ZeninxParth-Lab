import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Section from '../../components/common/Section';
import OrbitalStationSimulator from '../../components/ui/OrbitalStationSimulator';
import { projectsData } from '../../data/projectsData';
import { sounds } from '../../utils/soundEffects';

export default function OrbitalPage() {
  const project = projectsData.find((p) => p.id === 'orbital-the-last-engineer');
  const [selectedDeck, setSelectedDeck] = useState(1);
  const [selectedCompartment, setSelectedCompartment] = useState(0);

  if (!project) return null;

  const currentDeckCompartments = (project.compartmentsList || []).filter(
    (c) => c.deck === selectedDeck
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back to Projects Navigation */}
      <div className="mb-8 flex items-center justify-between">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-subtle hover:text-primary transition-colors"
          onClick={() => sounds.playUiClick()}
        >
          <span>←</span> Back to All Systems & Projects
        </Link>
        <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
          Godot 4.7.2 3D Flagship
        </span>
      </div>

      {/* Hero Showcase Header */}
      <Section className="!py-0">
        <div className="relative rounded-3xl overflow-hidden border border-border bg-gradient-to-b from-surface via-surface to-surface-elevated p-6 sm:p-10 shadow-2xl">
          {/* Cover Art Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-border mb-8 shadow-inner group">
            <img
              src={project.coverImage}
              alt="ORBITAL: The Last Engineer Banner"
              className="w-full h-56 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-cyan-600 text-white shadow-md">
                  🚀 3D Sci-Fi Horror
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-[#478cbf] text-white shadow-md">
                  Godot Engine v4.7.2
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-emerald-600 text-white shadow-md">
                  ✓ 1,033 Passing Assertions
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-purple-600 text-white shadow-md">
                  Dual Experience Modes
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-sans drop-shadow-md">
                ORBITAL: The Last Engineer
              </h1>
              <p className="mt-2 text-sm sm:text-base text-gray-200 font-mono italic max-w-3xl drop-shadow">
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
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => sounds.playWarp()}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 text-black hover:bg-cyan-400 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all text-center"
              >
                <span>Launch Live Web Version</span>
                <span>↗</span>
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => sounds.playUiClick()}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-surface hover:bg-surface-elevated text-text-main font-semibold text-xs transition-all text-center"
              >
                <span>GitHub Repository</span>
                <span>↗</span>
              </a>
              <a
                href="#live-station-sim"
                onClick={() => sounds.playBeep()}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 font-semibold text-xs transition-all text-center"
              >
                <span>Interactive Telemetry Sim ↓</span>
              </a>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="mt-8 pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 rounded-xl bg-surface-elevated/70 border border-border">
              <span className="block text-2xl font-black text-text-main font-mono">13</span>
              <span className="text-[11px] font-mono text-text-subtle uppercase">Ship Compartments</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-elevated/70 border border-border">
              <span className="block text-2xl font-black text-cyan-400 font-mono">2 Decks</span>
              <span className="text-[11px] font-mono text-text-subtle uppercase">Upper & Lower Subdeck</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-elevated/70 border border-border">
              <span className="block text-2xl font-black text-purple-400 font-mono">Feel | Logical</span>
              <span className="text-[11px] font-mono text-text-subtle uppercase">Dual Telemetry Modes</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-elevated/70 border border-border">
              <span className="block text-2xl font-black text-emerald-400 font-mono">1,033</span>
              <span className="text-[11px] font-mono text-text-subtle uppercase">Passing Test Assertions</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Interactive Station Telemetry & Stalker Simulator Widget */}
      <div id="live-station-sim" className="my-12">
        <div className="mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
            In-Browser Native Simulation
          </span>
          <h2 className="text-2xl font-extrabold text-text-main tracking-tight">
            Astraea Station Interactive Systems & Stalker Telemetry
          </h2>
          <p className="text-sm text-text-muted mt-1">
            Toggle between Feel and Logical modes, inspect the 13 ship compartments, repair core subsystems, and execute the tactical airlock decontamination gas purge.
          </p>
        </div>
        <OrbitalStationSimulator />
      </div>

      {/* Dual Experience Modes Deep Dive */}
      <div className="my-12 border-t border-border pt-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              Player Experience Philosophy
            </span>
            <h2 className="text-2xl font-extrabold text-text-main tracking-tight mt-1">
              Dual Experience Modes: Feel vs. Logical
            </h2>
          </div>
          <span className="text-xs font-mono text-text-subtle mt-2 sm:mt-0">
            Switchable Anytime from Main Menu or Pause Settings
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feel Mode */}
          <div className="p-6 rounded-2xl border border-red-500/30 bg-gradient-to-b from-red-950/20 via-surface to-surface-elevated flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <h3 className="text-lg font-bold text-text-main font-mono">
                  1. Feel Mode (Atmospheric Sci-Fi Horror)
                </h3>
              </div>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                Tailored for players who want to experience the suffocating atmosphere, sensory tension, and visceral dread without cognitive overload from deep technical schematics.
              </p>
              <ul className="space-y-2 text-xs font-mono text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span><strong className="text-white">Minimalist Glass HUD:</strong> Scientific formulas and telemetry matrices are hidden; surfaces only suit integrity, oxygen reserve status, and immediate task directives.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span><strong className="text-white">Pure Auditory Tension:</strong> Sub-bass groans, flickering lights, and 9m acoustic predator clicks provide environmental dread.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span><strong className="text-white">Streamlined Operations:</strong> The pause screen strips raw subsystem graphs, keeping focus squarely on survival and narrative discovery.</span>
                </li>
              </ul>
            </div>
            <div className="mt-5 pt-4 border-t border-border text-[11px] font-mono text-red-400 font-semibold">
              Ideal for: Cinematic narrative immersion & horror lovers
            </div>
          </div>

          {/* Logical Mode */}
          <div className="p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-cyan-950/20 via-surface to-surface-elevated flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <h3 className="text-lg font-bold text-text-main font-mono">
                  2. Logical Mode (Hard Sci-Fi Engineering Simulation)
                </h3>
              </div>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                Designed for hardcore systems enthusiasts, engineers, and simulation purists who demand exact physical telemetry and quantifiable equations.
              </p>
              <ul className="space-y-2 text-xs font-mono text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong className="text-white">Deep Real-Time Telemetry:</strong> Live atmospheric gauges: O2 partial pressure, CO2 ppm toxicity curves, barometric pressure (101.3 kPa), and thermal throttling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong className="text-white">Decompression Physics:</strong> Maintenance crawlway hull breaches model active 0.3 kPa/s depressurization gradients.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong className="text-white">Full Operational Dossier:</strong> Pause interface unlocks circuit routing diagrams, 150 kW fusion bus loads, and scientific investigation logs.</span>
                </li>
              </ul>
            </div>
            <div className="mt-5 pt-4 border-t border-border text-[11px] font-mono text-cyan-400 font-semibold">
              Ideal for: Hardcore aerospace simulation & systems engineers
            </div>
          </div>
        </div>
      </div>

      {/* 13 Ship Compartments Blueprint & Architecture */}
      <div className="my-12 border-t border-border pt-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              Interconnected Vessel Topology
            </span>
            <h2 className="text-2xl font-extrabold text-text-main tracking-tight mt-1">
              The 13 Astraea Station Compartments
            </h2>
          </div>
          {/* Deck Toggle */}
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <button
              type="button"
              onClick={() => {
                setSelectedDeck(1);
                setSelectedCompartment(0);
                sounds.playUiClick();
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                selectedDeck === 1
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-surface border border-border text-text-muted hover:text-text-main'
              }`}
            >
              Deck 1 (Upper) • 10 Rooms
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedDeck(2);
                setSelectedCompartment(0);
                sounds.playUiClick();
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                selectedDeck === 2
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-surface border border-border text-text-muted hover:text-text-main'
              }`}
            >
              Deck 2 (Lower) • 3 Rooms
            </button>
          </div>
        </div>

        {/* Compartments Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
          {currentDeckCompartments.map((comp, idx) => (
            <button
              key={comp.name}
              onClick={() => {
                sounds.playUiClick();
                setSelectedCompartment(idx);
              }}
              className={`p-3 rounded-2xl text-left border transition-all duration-200 ${
                selectedCompartment === idx
                  ? 'bg-cyan-500/15 border-cyan-400 text-cyan-400 shadow-glow-cyan'
                  : 'bg-surface border-border text-text-muted hover:border-text-subtle/40'
              }`}
            >
              <span className="text-[10px] font-mono block opacity-70">
                Deck {comp.deck}
              </span>
              <h4 className="font-bold text-xs mt-1 text-text-main truncate">
                {comp.name}
              </h4>
            </button>
          ))}
        </div>

        {/* Selected Compartment Detail */}
        {currentDeckCompartments[selectedCompartment] && (
          <div className="p-6 rounded-2xl border border-border bg-surface-elevated/70">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <h3 className="text-lg font-bold text-text-main font-mono flex items-center gap-2">
                <span>{currentDeckCompartments[selectedCompartment].name}</span>
                <span className="text-xs font-normal text-text-subtle">
                  ({currentDeckCompartments[selectedCompartment].type})
                </span>
              </h3>
              <span className="text-xs font-mono px-3 py-1 rounded bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 self-start sm:self-auto">
                {currentDeckCompartments[selectedCompartment].highlight}
              </span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed mb-3">
              {currentDeckCompartments[selectedCompartment].description}
            </p>
            <div className="pt-3 border-t border-border/80 flex flex-wrap gap-4 text-xs font-mono text-text-subtle">
              <div>Equipment: <strong className="text-text-main">{currentDeckCompartments[selectedCompartment].equipment}</strong></div>
              <div>Tactical Note: <strong className="text-amber-400">{currentDeckCompartments[selectedCompartment].tactical}</strong></div>
            </div>
          </div>
        )}
      </div>

      {/* The Apex Predator & 3-Hit Combat Mechanics */}
      <div className="my-12 border-t border-border pt-10">
        <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-semibold">
          Survival & AI Architecture
        </span>
        <h2 className="text-2xl font-extrabold text-text-main tracking-tight mt-1 mb-4">
          The Apex Predator AI & 3-Hit Lethal Combat
        </h2>
        <p className="text-sm text-text-muted max-w-3xl mb-6">
          To eliminate frustrating instant-kill mechanics while maintaining peak tension, encounters feature an autonomous multi-stage damage system combined with dynamic spatial waypoint pathfinding:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-5 rounded-2xl border border-border bg-surface flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-amber-400">STAGE 1</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">35% Damage</span>
              </div>
              <h4 className="font-bold text-text-main text-sm mb-2">Glancing Strike & Vignette</h4>
              <p className="text-xs text-text-muted leading-relaxed">
                Sharp physical impact cue, red directional blood vignette at screen periphery, and moderate camera trauma impulse.
              </p>
            </div>
            <span className="text-[11px] font-mono text-text-subtle mt-4">Warning: Sprint to nearest safe sanctuary</span>
          </div>

          <div className="p-5 rounded-2xl border border-border bg-surface flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-rose-500">STAGE 2</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">70% Cumulative</span>
              </div>
              <h4 className="font-bold text-text-main text-sm mb-2">Critical Health & Heavy Surge</h4>
              <p className="text-xs text-text-muted leading-relaxed">
                High-frequency camera screen shaking, acoustic tinnitus audio sweep, and persistent suit atmospheric breach alarms.
              </p>
            </div>
            <span className="text-[11px] font-mono text-text-subtle mt-4">Oxygen depletion doubles under stress</span>
          </div>

          <div className="p-5 rounded-2xl border border-border bg-surface flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-red-600">STAGE 3</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-red-600/10 text-red-500 border border-red-600/20">FATAL BLOW</span>
              </div>
              <h4 className="font-bold text-text-main text-sm mb-2">Lethal Claw Takedown</h4>
              <p className="text-xs text-text-muted leading-relaxed">
                Fatal creature strike triggering player audio scream, violent camera spin, and terminal death fatality sequence.
              </p>
            </div>
            <span className="text-[11px] font-mono text-text-subtle mt-4">Unrecoverable: Reload from docking checkpoint</span>
          </div>
        </div>

        {/* Tactical Purge Mechanics Callout */}
        <div className="p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/30 via-surface-elevated to-surface">
          <h4 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">
            The Non-Combat Solution: The Tactical Airlock Purge
          </h4>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            The apex stalker cannot be killed with handheld tools or welders. Survival requires strategic understanding of the ship: the player must lure the entity into the dual-door <strong className="text-text-main font-mono">Airlock Chamber</strong> (<code className="text-cyan-300">AirlockInner</code> and <code className="text-cyan-300">AirlockOuter</code>), seal the reinforced bulkheads from the control terminal, and trigger the physical <strong className="text-text-main font-mono">Decontamination Poison Gas Valve</strong> to purge the specimen.
          </p>
        </div>
      </div>

      {/* Input Mapping Reference Table */}
      <div className="my-12 border-t border-border pt-10">
        <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
          Input Mapping & Accessibility
        </span>
        <h2 className="text-2xl font-extrabold text-text-main tracking-tight mt-1 mb-6">
          Controls & Multi-Device Support
        </h2>

        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface-elevated text-xs font-mono uppercase text-text-subtle border-b border-border">
              <tr>
                <th className="py-3 px-4">Action</th>
                <th className="py-3 px-4">Primary Input</th>
                <th className="py-3 px-4">Secondary / Laptop Input</th>
                <th className="py-3 px-4">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-surface">
              {(project.controls || []).map((ctrl, i) => (
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

      {/* Architectural Decisions & Engineering Deep Dive */}
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

      {/* Automated Headless Test Suite Section (1,033 Passing Assertions) */}
      <div className="my-12 border-t border-border pt-10">
        <div className="p-6 rounded-3xl border border-emerald-500/30 bg-emerald-950/10 backdrop-blur-md">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="text-lg font-bold text-text-main font-mono">
              1,033 Automated Headless Test Assertions — 100% Passed
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-4">
            ORBITAL features an automated headless test runner (<code className="text-cyan-400 font-mono">tests/test_runner.tscn</code>) executing across 43 automated suites to verify ship systems, environmental life support, save/load persistence, door physics, alien pathfinding, and 3-hit combat without requiring a display server.
          </p>
          <div className="p-4 rounded-xl bg-black/80 font-mono text-xs text-emerald-400 border border-emerald-900/50 overflow-x-auto">
            <div>[PASS] Suite 01: FusionCore — 150 kW generator breaker lifecycle and throttle curves</div>
            <div>[PASS] Suite 08: PowerDistribution — Bus routing priority across 10 upper deck compartments</div>
            <div>[PASS] Suite 14: LifeSupport — CO2 scrubber saturation and solid-state O2 regeneration</div>
            <div>[PASS] Suite 19: AtmosphericHazard — Maintenance crawlway 0.3 kPa/s decompression leak</div>
            <div>[PASS] Suite 27: StalkerAI — Dynamic Deck 1 &amp; Lower Subdeck spatial waypoint traversal</div>
            <div>[PASS] Suite 32: CombatTrauma — 3-hit lethal damage curves, screen trauma, and blood vignettes</div>
            <div>[PASS] Suite 38: SanctuaryMechanics — Research Observatory hermetic seal bulkhead immunity</div>
            <div>[PASS] Suite 43: TacticalPurge — AirlockInterlock and Decontamination Gas valve trigger</div>
            <div className="text-text-subtle pt-2 border-t border-emerald-900/50 mt-2">
              ========================================================================<br />
              TESTS COMPLETED: 43 SUITES | 1,033 PASSING ASSERTIONS | 0 REGRESSIONS<br />
              HEADLESS EXECUTION: 100% PASS | ALL SYSTEMS VERIFIED NOMINAL<br />
              ========================================================================
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation & CTA Bar */}
      <div className="mt-14 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
        <Button to="/projects" variant="outline" size="sm" onClick={() => sounds.playUiClick()}>
          ← Back to All Projects
        </Button>
        <div className="flex items-center gap-3">
          <Link
            to="/projects/echo-of-dread"
            onClick={() => sounds.playUiClick()}
            className="px-4 py-2 rounded-xl border border-border text-xs font-mono text-text-muted hover:text-text-main transition-colors"
          >
            ← View Echo of Dread
          </Link>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => sounds.playWarp()}
            className="px-5 py-2.5 rounded-xl bg-cyan-500 text-black hover:bg-cyan-400 font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/25 transition-all"
          >
            Play Live Web Version ↗
          </a>
        </div>
      </div>
    </div>
  );
}
