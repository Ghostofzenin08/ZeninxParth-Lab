import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { sounds } from '../../utils/soundEffects';

export default function TimeLoopSimulator() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [fastMode, setFastMode] = useState(false);
  const [loopCount, setLoopCount] = useState(1);
  const [loopDuration, setLoopDuration] = useState(15); // 15s in fast, 30s in normal
  const [timer, setTimer] = useState(15.0);
  const [echoes, setEchoes] = useState([]);
  const [laserActive, setLaserActive] = useState(true);
  const [doorUnlocked, setDoorUnlocked] = useState(false);
  const [plateAActive, setPlateAActive] = useState(false);
  const [plateBActive, setPlateBActive] = useState(false);
  const [activeStoryLog, setActiveStoryLog] = useState(null);

  // Pre-recorded cinematic trajectory sequences for demonstration
  // Loop 1: Researcher moves to Plate A and stands there from t=4s to t=11s
  // Loop 2: Researcher moves to Plate B and stands there from t=5s to t=11s
  // Loop 3: Researcher navigates through now-open laser barrier to Singularity Door!
  const progressRef = useRef(0);

  useEffect(() => {
    setLoopDuration(fastMode ? 15 : 30);
    setTimer(fastMode ? 15 : 30);
  }, [fastMode]);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        const next = Math.max(0, +(prev - 0.1).toFixed(1));
        const total = fastMode ? 15 : 30;
        const elapsed = +(total - next).toFixed(1);

        // Simulation mechanics state based on current loop & elapsed time
        // Plate A is occupied if:
        // Echo 1 is playing and elapsed >= 3 && elapsed <= 11
        // OR current researcher is on it
        const hasEcho1 = loopCount > 1;
        const hasEcho2 = loopCount > 2;

        const echo1OnPlateA = hasEcho1 && elapsed >= 3.0 && elapsed <= 12.0;
        const echo2OnPlateB = hasEcho2 && elapsed >= 4.5 && elapsed <= 12.0;
        const currentOnPlateA = loopCount === 1 && elapsed >= 3.0 && elapsed <= 12.0;
        const currentOnPlateB = loopCount === 2 && elapsed >= 4.5 && elapsed <= 12.0;

        const aActive = echo1OnPlateA || currentOnPlateA;
        const bActive = echo2OnPlateB || currentOnPlateB;

        setPlateAActive(aActive);
        setPlateBActive(bActive);

        // Door unlocks when both plates are held simultaneously!
        if (aActive && bActive) {
          setLaserActive(false);
          setDoorUnlocked(true);
        } else {
          setLaserActive(true);
          setDoorUnlocked(false);
        }

        // Natural loop reset
        if (next <= 0) {
          handleLoopRewind();
          return total;
        }

        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, fastMode, loopCount]);

  const handleLoopRewind = () => {
    sounds.playWarp();
    setLoopCount((prev) => (prev >= 3 ? 1 : prev + 1));
    const total = fastMode ? 15 : 30;
    setTimer(total);
  };

  const handleManualRewind = () => {
    sounds.playWarp();
    handleLoopRewind();
  };

  const handleClear = () => {
    sounds.playUiClick();
    setLoopCount(1);
    const total = fastMode ? 15 : 30;
    setTimer(total);
    setPlateAActive(false);
    setPlateBActive(false);
    setLaserActive(true);
    setDoorUnlocked(false);
  };

  const toggleFastMode = () => {
    sounds.playUiClick();
    setFastMode(!fastMode);
  };

  const totalTime = fastMode ? 15 : 30;
  const progressPercent = ((totalTime - timer) / totalTime) * 100;

  return (
    <div className="relative rounded-3xl border border-border bg-surface/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl overflow-hidden">
      {/* Background cyber grid & scanlines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              Interactive Causal Curve Simulator
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
              Godot 4.7 Engine Logic
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-text-main mt-1 tracking-tight">
            Chamber 12: Dual Capacitor Relay
          </h3>
          <p className="text-xs text-text-muted mt-1">
            Observe the autonomous holographic Echoes coordinating past runs to deactivate the laser barrier.
          </p>
        </div>

        {/* Temporal HUD Timer */}
        <div className="flex items-center gap-3 bg-surface-elevated/80 border border-border px-4 py-2 rounded-2xl">
          <div className="flex flex-col text-right">
            <span className="text-[10px] font-mono uppercase text-text-subtle">Loop #{loopCount} Duration</span>
            <span className="text-2xl font-mono font-bold text-cyan-400 tracking-wider">
              {timer.toFixed(1)}s
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
            <span className="text-cyan-400 text-lg">⏳</span>
          </div>
        </div>
      </div>

      {/* Interactive Simulation Floorplan */}
      <div className="relative z-10 my-6 rounded-2xl border border-border bg-black/60 dark:bg-black/90 p-5 overflow-hidden">
        {/* Chamber Floor Canvas Visualizer */}
        <div className="relative h-64 sm:h-72 w-full rounded-xl bg-[#090b10] border border-cyan-950/60 p-4 flex flex-col justify-between overflow-hidden">
          {/* Grid ambient lines */}
          <div className="absolute inset-0 bg-[radial-gradient(#00f0ff08_1px,transparent_1px)] bg-[size:16px_16px]" />

          {/* Top Relay Status Bar */}
          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono">
            <span className="text-text-subtle">SECTOR 2 • BETA WING</span>
            <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-bold ${
              doorUnlocked
                ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400'
                : 'bg-primary/15 border-primary/40 text-primary'
            }`}>
              {doorUnlocked ? '✓ RELAYS SYNCHRONIZED — PASSAGE OPEN' : '⚡ LASER BARRIER ENGAGED'}
            </span>
          </div>

          {/* Chamber Layout Representation */}
          <div className="relative z-10 grid grid-cols-3 items-center justify-items-center gap-4 my-auto">
            {/* Pressure Plate A */}
            <div className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all duration-300 ${
              plateAActive
                ? 'bg-cyan-500/20 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.4)] scale-105'
                : 'bg-surface/40 border-border/80'
            }`}>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center border font-mono text-xs font-bold transition-all ${
                plateAActive ? 'bg-cyan-400 text-black border-cyan-300' : 'bg-surface text-text-subtle border-border'
              }`}>
                P1
              </div>
              <span className={`text-[10px] font-mono uppercase ${plateAActive ? 'text-cyan-300 font-bold' : 'text-text-subtle'}`}>
                {plateAActive ? (loopCount > 1 ? 'Echo #1 Holding' : 'Player Holding') : 'Capacitor A'}
              </span>
            </div>

            {/* Laser Barrier Middle Wall */}
            <div className="flex flex-col items-center justify-center gap-1.5 w-full">
              <div className="h-14 w-full flex items-center justify-center relative">
                {laserActive ? (
                  <div className="w-full h-1 bg-gradient-to-r from-primary via-red-500 to-primary shadow-[0_0_12px_#ff0207] animate-pulse flex items-center justify-center">
                    <span className="text-[9px] font-mono bg-black/90 px-1.5 py-0.5 text-primary border border-primary/40 rounded">
                      BARRIER ACTIVE
                    </span>
                  </div>
                ) : (
                  <div className="w-full h-1 border-t-2 border-dashed border-emerald-500/60 flex items-center justify-center">
                    <span className="text-[9px] font-mono bg-emerald-950/80 px-2 py-0.5 text-emerald-400 border border-emerald-500/40 rounded">
                      CIRCUIT BYPASSED
                    </span>
                  </div>
                )}
              </div>
              <span className="text-[10px] font-mono text-text-subtle">Tachyon Relays</span>
            </div>

            {/* Pressure Plate B */}
            <div className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all duration-300 ${
              plateBActive
                ? 'bg-purple-500/20 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)] scale-105'
                : 'bg-surface/40 border-border/80'
            }`}>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center border font-mono text-xs font-bold transition-all ${
                plateBActive ? 'bg-purple-400 text-black border-purple-300' : 'bg-surface text-text-subtle border-border'
              }`}>
                P2
              </div>
              <span className={`text-[10px] font-mono uppercase ${plateBActive ? 'text-purple-300 font-bold' : 'text-text-subtle'}`}>
                {plateBActive ? (loopCount > 2 ? 'Echo #2 Holding' : 'Player Holding') : 'Capacitor B'}
              </span>
            </div>
          </div>

          {/* Bottom Chamber Entity Legend */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono pt-3 border-t border-border/40">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5 text-emerald-400">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-emerald-500/30" />
                Player (Current)
              </span>
              <span className="inline-flex items-center gap-1.5 text-cyan-400">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 ring-2 ring-cyan-400/30" />
                Echo #1 (Recorded)
              </span>
              <span className="inline-flex items-center gap-1.5 text-purple-400">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400 ring-2 ring-purple-400/30" />
                Echo #2 (Recorded)
              </span>
            </div>
            <div className="text-text-subtle">
              Singularity Exit: <span className={doorUnlocked ? 'text-emerald-400 font-bold' : 'text-text-subtle'}>Chamber 13</span>
            </div>
          </div>
        </div>

        {/* Multi-Track Timeline Ribbon */}
        <div className="mt-4 pt-3 border-t border-border/60">
          <div className="flex items-center justify-between text-[10px] font-mono text-text-subtle mb-1.5">
            <span>TEMPORAL TIMELINE RIBBON</span>
            <span>{progressPercent.toFixed(0)}% ELAPSED</span>
          </div>
          <div className="relative w-full h-3 bg-surface-elevated rounded-full overflow-hidden border border-border">
            <motion.div
              className={`h-full ${
                timer < 4 ? 'bg-primary animate-pulse' : 'bg-gradient-to-r from-cyan-500 via-purple-500 to-primary'
              }`}
              style={{ width: `${progressPercent}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
            {/* Timeline interaction pips */}
            <div className="absolute top-0 bottom-0 left-[25%] w-0.5 bg-cyan-300" title="Plate A Triggered" />
            <div className="absolute top-0 bottom-0 left-[45%] w-0.5 bg-purple-300" title="Plate B Triggered" />
          </div>
        </div>
      </div>

      {/* Simulator Control Toolbar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              sounds.playUiClick();
              setIsPlaying(!isPlaying);
            }}
            className="px-3.5 py-1.5 rounded-xl border border-border bg-surface hover:bg-surface-elevated text-xs font-mono font-medium text-text-main flex items-center gap-1.5 transition-colors"
          >
            {isPlaying ? '⏸ Pause' : '▶ Play Loop'}
          </button>

          <button
            onClick={toggleFastMode}
            className={`px-3.5 py-1.5 rounded-xl border text-xs font-mono font-medium flex items-center gap-1.5 transition-colors ${
              fastMode
                ? 'bg-amber-500/15 border-amber-500/40 text-amber-500 font-bold'
                : 'bg-surface border-border text-text-muted hover:text-text-main'
            }`}
          >
            ⚡ {fastMode ? '15s Fast Pacing [T]' : '30s Standard Pacing [T]'}
          </button>

          <button
            onClick={handleManualRewind}
            className="px-3.5 py-1.5 rounded-xl border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 text-xs font-mono font-medium flex items-center gap-1.5 transition-colors"
          >
            ⏳ Rewind Now [R]
          </button>

          <button
            onClick={handleClear}
            className="px-3 py-1.5 rounded-xl border border-border bg-surface text-text-subtle hover:text-text-main hover:bg-surface-elevated text-xs font-mono transition-colors"
          >
            Clear Echoes [C]
          </button>
        </div>

        <a
          href="https://zeninxparth.itch.io/echo-of-dread"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-xl bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/25 text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-all"
        >
          <span>Play Full Game on itch.io</span>
          <span>↗</span>
        </a>
      </div>
    </div>
  );
}
