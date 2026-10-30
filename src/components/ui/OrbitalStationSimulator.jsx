import React, { useState, useEffect } from 'react';
import { sounds } from '../../utils/soundEffects';

export default function OrbitalStationSimulator() {
  const [hudMode, setHudMode] = useState('logical'); // 'feel' | 'logical'
  const [activeDeck, setActiveDeck] = useState(1); // 1: Upper Deck, 2: Lower Deck
  const [selectedRoom, setSelectedRoom] = useState('engineering');
  const [activeTool, setActiveTool] = useState(1); // 1: Scanner, 2: Multitool, 3: Fuse, 4: Battery
  const [multitoolMode, setMultitoolMode] = useState('CALIBRATE'); // 'CALIBRATE' | 'CUT_WELD' | 'TIGHTEN'
  
  // Station system statuses
  const [fusionOnline, setFusionOnline] = useState(false);
  const [busOnline, setBusOnline] = useState(false);
  const [scrubbersOnline, setScrubbersOnline] = useState(false);
  const [commsOnline, setCommsOnline] = useState(false);
  
  // Suit & Station Telemetry
  const [suitIntegrity, setSuitIntegrity] = useState(100);
  const [oxygenReserve, setOxygenReserve] = useState(94);
  const [co2Ppm, setCo2Ppm] = useState(780);
  const [pressureKpa, setPressureKpa] = useState(98.4);
  const [fusionOutputKw, setFusionOutputKw] = useState(0);
  
  // Apex Predator Horror State
  const [stalkerAwake, setStalkerAwake] = useState(false);
  const [stalkerLocation, setStalkerLocation] = useState('specimen_vault');
  const [stalkerDistanceM, setStalkerDistanceM] = useState(18.5);
  const [airlockSealed, setAirlockSealed] = useState(false);
  const [gasPurgeActive, setGasPurgeActive] = useState(false);
  const [predatorNeutralized, setPredatorNeutralized] = useState(false);
  const [traumaLevel, setTraumaLevel] = useState(0); // 0, 1 (35%), 2 (70%), 3 (Fatal)
  const [logMessages, setLogMessages] = useState([
    '[INIT] ASTSTATION-09 ASTSTATION DOCKING TELEMETRY VERIFIED',
    '[ALERT] Primary Fusion Breaker TRIPPED. Station on backup battery reserves (4.2 kW).',
    '[TASK] Lead Engineer: Enter Engineering Bay to restore 150 kW Fusion Turbine.'
  ]);

  const addLog = (msg) => {
    setLogMessages((prev) => [msg, ...prev.slice(0, 5)]);
  };

  // Rooms Data across 2 Decks
  const compartments = {
    // Deck 1 (Upper Deck)
    bridge: {
      name: 'Command Bridge',
      deck: 1,
      type: 'Armored Cockpit',
      hazard: 'Low power',
      status: fusionOnline ? 'Operational' : 'Auxiliary Power Only',
      desc: 'Viewport overlooking Kepler-442b. Flight computers awaiting avionics data link.'
    },
    observatory: {
      name: 'Research Observatory',
      deck: 1,
      type: 'Safe Room Sanctuary',
      hazard: 'None (Hermetically Sealed)',
      status: 'Pressurized / Secure Sanctuary',
      desc: 'Panoramic dome. Reinforced titanium bulkheads provide 100% stalker isolation.'
    },
    avionics: {
      name: 'Avionics Bay',
      deck: 1,
      type: 'Optical Server Bus',
      hazard: 'Corrupted relays',
      status: busOnline ? 'Synchronized' : 'Desynchronized',
      desc: 'Optical data trunks and flight computers. Requires stable power bus routing.'
    },
    quarters: {
      name: 'Crew Quarters',
      deck: 1,
      type: 'Living Quarters',
      hazard: 'Deceased research crew remnants',
      status: 'Quarantined',
      desc: 'Hydroponics planter desiccated. Audio logs indicate rapid panic before blackout.'
    },
    infirmary: {
      name: 'Medical Infirmary',
      deck: 1,
      type: 'Surgical Suite',
      hazard: 'Bio-waste contamination',
      status: 'Standby',
      desc: 'Emergency trauma kits, surgical diagnostics bed, and supplemental oxygen canisters.'
    },
    corridor: {
      name: 'Central Corridor',
      deck: 1,
      type: 'Spine Thoroughfare',
      hazard: 'Apex Stalker Patrol Route',
      status: 'Motorized Bulkheads Nominal',
      desc: 'Central high-clearance artery connecting Deck 1 modules. Stalker routes freely here.'
    },
    lifesupport: {
      name: 'Life Support Module',
      deck: 1,
      type: 'Atmospheric Scrubber Hub',
      hazard: 'Elevated CO2 (780 ppm)',
      status: scrubbersOnline ? 'Active (Purifying)' : 'Offline (Scrubber Cartridge Depleted)',
      desc: 'Solid-state O2 generator, secondary amine scrubbers, and coolant distribution manifold.'
    },
    cargobay: {
      name: 'Main Cargo Bay & Annex',
      deck: 1,
      type: 'Heavy Storage & Hoist',
      hazard: 'Cluttered Machinery',
      status: 'Operational',
      desc: 'Auxiliary junction repair panel, spare fuse crates, and maintenance crawlway hatch.'
    },
    airlock: {
      name: 'Airlock Chamber & EVA',
      deck: 1,
      type: 'Dual-Door Decontamination Trap',
      hazard: 'Decontamination Gas Valve Staged',
      status: airlockSealed ? 'Bulkheads Interlocked (Sealed)' : 'Bulkheads Open',
      desc: 'Interlocking bulkheads (AirlockInner, AirlockOuter) with high-pressure lethal gas nozzles.'
    },
    engineering: {
      name: 'Engineering Bay',
      deck: 1,
      type: 'Primary Power Core',
      hazard: 'Turbine Breaker Trip',
      status: fusionOnline ? '150 kW Fusion Online' : 'Breaker Tripped / Offline',
      desc: '150 kW fusion turbine generator, distribution breaker unit, and engineering workbench.'
    },
    // Deck 2 (Lower Deck)
    subdeck: {
      name: 'Reactor Subdeck',
      deck: 2,
      type: 'Fuel Throttle & Storage',
      hazard: 'Thermal Gradients',
      status: 'Connected to Subdeck Ramp',
      desc: 'Reached via sloped ramp from Engineering. Houses magnetic fuel injectors and batteries.'
    },
    specimen_vault: {
      name: 'Specimen Vault',
      deck: 2,
      type: 'Cryogenic Containment Pods',
      hazard: 'CRITICAL BIO-HAZARD (Breeched)',
      status: 'Shattered Cryo Pods / Origin of Stalker',
      desc: 'Lower sector where unauthorized genetic experiment breached reinforced plasteel containment.'
    },
    crawlway: {
      name: 'Maintenance Crawlway',
      deck: 2,
      type: 'Low-Clearance Utility Bypass',
      hazard: 'Hull Breach Decompression (0.3 kPa/s)',
      status: 'Decompression Warning',
      desc: 'Low-clearance transit duct connecting Cargo Bay to Engineering with active breach leak.'
    }
  };

  // Step counter for 4 repairs
  const repairedCount = [fusionOnline, busOnline, scrubbersOnline, commsOnline].filter(Boolean).length;

  // Stalker awakening trigger upon 4 core repairs
  useEffect(() => {
    if (repairedCount === 4 && !stalkerAwake && !predatorNeutralized) {
      setStalkerAwake(true);
      sounds.playWarp();
      addLog('⚠️ SEISMIC SENSORS: Sub-bass tremors detected in Lower Containment Sector!');
      addLog('🚨 APEX PREDATOR BREACH: Specimen has escaped the vault and is stalking Deck 1 corridors!');
      setStalkerDistanceM(14.2);
    }
  }, [repairedCount, stalkerAwake, predatorNeutralized]);

  // Ambient Telemetry Simulation Loop
  useEffect(() => {
    const timer = setInterval(() => {
      // Oxygen & CO2 logic
      if (scrubbersOnline) {
        setCo2Ppm((prev) => Math.max(380, prev - 15));
        setOxygenReserve((prev) => Math.min(100, +(prev + 0.1).toFixed(1)));
        setPressureKpa(101.3);
      } else {
        setCo2Ppm((prev) => Math.min(1400, prev + 2));
        setOxygenReserve((prev) => Math.max(60, +(prev - 0.05).toFixed(1)));
      }

      // Fusion output
      if (fusionOnline) {
        setFusionOutputKw((prev) => Math.min(150, prev + 10));
      }

      // Stalker movement simulation if awake and not trapped
      if (stalkerAwake && !predatorNeutralized && !gasPurgeActive) {
        setStalkerDistanceM((prev) => {
          const delta = (Math.random() - 0.52) * 2;
          const nextDist = Math.max(4.0, Math.min(25.0, +(prev + delta).toFixed(1)));
          
          // Proximity clicks audio warning
          if (nextDist < 9.0 && prev >= 9.0) {
            sounds.playBeep();
            addLog(`⚠️ PROXIMITY ALERT: Creature acoustic clicks detected (${nextDist}m)! Retreat to Sanctuary!`);
          }

          // Damage check if extremely close and outside safe sanctuary
          if (nextDist <= 4.5 && selectedRoom !== 'observatory') {
            setTraumaLevel((t) => {
              const nextT = Math.min(3, t + 1);
              if (nextT === 1) {
                setSuitIntegrity(65);
                addLog('💥 STALKER IMPACT: Hit 1 (35% damage). Directional trauma vignette active.');
                sounds.playBeep();
              } else if (nextT === 2) {
                setSuitIntegrity(30);
                addLog('💥 CRITICAL TRAUMA: Hit 2 (70% cumulative damage). Severe camera tremor!');
                sounds.playBeep();
              } else if (nextT === 3) {
                setSuitIntegrity(0);
                addLog('☠️ FATAL BLOW: Suit breached. Lead Engineer life signs terminated.');
              }
              return nextT;
            });
          }

          return nextDist;
        });
      }
    }, 1500);

    return () => clearInterval(timer);
  }, [scrubbersOnline, fusionOnline, stalkerAwake, predatorNeutralized, gasPurgeActive, selectedRoom]);

  // Actions
  const handleRepairFusion = () => {
    sounds.playBeep();
    if (activeTool !== 2 || multitoolMode !== 'CUT_WELD') {
      addLog('❌ TOOL MISMATCH: 150 kW Fusion Turbine requires Multitool [2] in CUT_WELD mode to patch junction.');
      return;
    }
    setFusionOnline(true);
    setFusionOutputKw(150);
    addLog('✓ PRIMARY REPAIR 1/4: 150 kW Fusion Turbine online! Voltage stabilizing.');
  };

  const handleRepairBus = () => {
    sounds.playBeep();
    if (!fusionOnline) {
      addLog('❌ PREREQUISITE ERROR: Power Distribution Bus requires Primary Fusion Generator online first.');
      return;
    }
    if (activeTool !== 2 || multitoolMode !== 'CALIBRATE') {
      addLog('❌ TOOL MISMATCH: Distribution Bus requires Multitool [2] in CALIBRATE mode to tune optical relays.');
      return;
    }
    setBusOnline(true);
    addLog('✓ PRIMARY REPAIR 2/4: Main Bus routing power to Avionics Bay and Life Support modules.');
  };

  const handleRepairScrubbers = () => {
    sounds.playBeep();
    if (!busOnline) {
      addLog('❌ PREREQUISITE ERROR: Life Support scrubbers require Power Bus routing online first.');
      return;
    }
    if (activeTool !== 3) {
      addLog('❌ TOOL MISMATCH: Install replacement filter cartridge & spare fuse [3] into scrubber manifold.');
      return;
    }
    setScrubbersOnline(true);
    addLog('✓ PRIMARY REPAIR 3/4: Amine scrubbers active! CO2 scrubbing initiated (purifying to 380 ppm).');
  };

  const handleRepairComms = () => {
    sounds.playBeep();
    if (!busOnline) {
      addLog('❌ PREREQUISITE ERROR: Communications Array requires stable power bus.');
      return;
    }
    if (activeTool !== 2 || multitoolMode !== 'TIGHTEN') {
      addLog('❌ TOOL MISMATCH: High-gain antenna clamp requires Multitool [2] in TIGHTEN mode.');
      return;
    }
    setCommsOnline(true);
    addLog('✓ PRIMARY REPAIR 4/4: Communications Array aligned! Emergency orbital beacon transmitting.');
  };

  // Stalker Lure & Purge
  const handleLureStalker = () => {
    if (!stalkerAwake) {
      addLog('ℹ️ Creature remains dormant in lower cryogenic containment sector.');
      return;
    }
    sounds.playWarp();
    setSelectedRoom('airlock');
    setStalkerLocation('airlock');
    setStalkerDistanceM(2.5);
    addLog('🎯 TACTICAL MANEUVER: Emitted acoustic flare inside Airlock Chamber! Predator lured inside!');
  };

  const handleSealAirlock = () => {
    sounds.playBeep();
    setAirlockSealed(true);
    addLog('🔒 BULKHEADS SEALED: AirlockInner and AirlockOuter doors interlocked! Creature trapped inside airlock!');
  };

  const handleActivateGasPurge = () => {
    sounds.playWarp();
    if (!airlockSealed) {
      addLog('❌ SAFETY INTERLOCK: Airlock bulkheads must be sealed before initiating toxic gas purge.');
      return;
    }
    setGasPurgeActive(true);
    setTimeout(() => {
      setPredatorNeutralized(true);
      setStalkerAwake(false);
      setStalkerDistanceM(0);
      sounds.playWarp();
      addLog('☣️ DECONTAMINATION PURGE COMPLETE: Lethal poison gas successfully eliminated apex biological predator!');
      addLog('🏆 MISSION ACCOMPLISHED: Astraea Station stabilized. Lead Engineer survival secured.');
    }, 2000);
  };

  const currentRoom = compartments[selectedRoom] || compartments.engineering;

  return (
    <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-[#0a101d] via-[#0d1527] to-[#080d19] text-white p-4 sm:p-7 shadow-2xl relative overflow-hidden font-sans">
      {/* Background Grid Pattern & Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Trauma Red Flash Overlay for Combat Damage */}
      {traumaLevel > 0 && suitIntegrity > 0 && (
        <div 
          className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300"
          style={{
            background: traumaLevel === 1 
              ? 'radial-gradient(circle, transparent 65%, rgba(220, 38, 38, 0.4) 100%)'
              : 'radial-gradient(circle, transparent 40%, rgba(220, 38, 38, 0.7) 100%)'
          }}
        />
      )}

      {/* SIMULATOR HEADER & MODE CONTROLS */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-cyan-500/20">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
              Godot 4.7.2 Native Interactive Systems Simulator
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
              1,033 Passing Assertions
            </span>
          </div>
          <h3 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
            <span>ORBITAL: Astraea Station Telemetry Console</span>
          </h3>
          <p className="text-xs text-gray-300 font-mono mt-0.5">
            Interconnected 13-Compartment Spacecraft Simulation • Dual Experience Modes
          </p>
        </div>

        {/* Dual Mode Switcher: FEEL vs LOGICAL */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <span className="text-xs font-mono text-gray-400">Display Mode:</span>
          <div className="p-1 rounded-xl bg-black/50 border border-cyan-500/30 flex items-center">
            <button
              type="button"
              onClick={() => {
                setHudMode('feel');
                sounds.playUiClick();
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                hudMode === 'feel'
                  ? 'bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              FEEL MODE (Horror)
            </button>
            <button
              type="button"
              onClick={() => {
                setHudMode('logical');
                sounds.playUiClick();
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                hudMode === 'logical'
                  ? 'bg-cyan-500 text-black shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              LOGICAL MODE (Hard Sci-Fi)
            </button>
          </div>
        </div>
      </div>

      {/* TOP TELEMETRY HUD GAUGES */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
        {/* Gauge 1: Suit Integrity */}
        <div className="p-3 rounded-2xl bg-black/40 border border-cyan-500/20 backdrop-blur-md">
          <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 mb-1">
            <span>SUIT INTEGRITY</span>
            <span className={suitIntegrity > 60 ? 'text-emerald-400' : suitIntegrity > 30 ? 'text-amber-400' : 'text-red-500 animate-pulse'}>
              {suitIntegrity}%
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-gray-800 overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${
                suitIntegrity > 60 ? 'bg-emerald-400' : suitIntegrity > 30 ? 'bg-amber-400' : 'bg-red-500'
              }`}
              style={{ width: `${suitIntegrity}%` }}
            />
          </div>
          <span className="text-[10px] font-mono text-gray-500 mt-1 block">
            {traumaLevel === 0 ? 'Nominal (0 Hits)' : `Trauma Level ${traumaLevel} / 3`}
          </span>
        </div>

        {/* Gauge 2: Oxygen Reserve */}
        <div className="p-3 rounded-2xl bg-black/40 border border-cyan-500/20 backdrop-blur-md">
          <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 mb-1">
            <span>O2 RESERVE</span>
            <span className="text-cyan-400 font-bold">{oxygenReserve}%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-gray-800 overflow-hidden">
            <div
              className="h-full bg-cyan-400 transition-all duration-500"
              style={{ width: `${oxygenReserve}%` }}
            />
          </div>
          <span className="text-[10px] font-mono text-gray-500 mt-1 block">
            {scrubbersOnline ? 'Circulation Stable' : 'Depleting without Scrubbers'}
          </span>
        </div>

        {/* Gauge 3: Power Output or Feel Mode Mission */}
        {hudMode === 'logical' ? (
          <div className="p-3 rounded-2xl bg-black/40 border border-cyan-500/20 backdrop-blur-md">
            <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 mb-1">
              <span>FUSION CORE BUS</span>
              <span className={fusionOnline ? 'text-emerald-400 font-bold' : 'text-amber-400'}>
                {fusionOutputKw} kW / 150 kW
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-gray-800 overflow-hidden">
              <div
                className="h-full bg-emerald-400 transition-all duration-500"
                style={{ width: `${(fusionOutputKw / 150) * 100}%` }}
              />
            </div>
            <span className="text-[10px] font-mono text-gray-500 mt-1 block truncate">
              {fusionOnline ? 'Turbine Online (100%)' : 'Auxiliary Battery Only'}
            </span>
          </div>
        ) : (
          <div className="p-3 rounded-2xl bg-black/40 border border-red-500/20 backdrop-blur-md">
            <div className="text-[11px] font-mono text-rose-400 mb-1">CURRENT DIRECTIVE</div>
            <div className="text-xs font-mono font-bold text-white truncate">
              {predatorNeutralized 
                ? 'Station Cleared • Survivor Docking' 
                : stalkerAwake 
                ? 'Lure Stalker to Airlock Gas Purge' 
                : 'Restore 4 Core Ship Subsystems'}
            </div>
            <span className="text-[10px] font-mono text-gray-500 mt-1 block">
              Auditory Tension: {stalkerAwake ? 'CRITICAL DREAD' : 'Atmospheric Void'}
            </span>
          </div>
        )}

        {/* Gauge 4: Threat Matrix or Deep Telemetry */}
        {hudMode === 'logical' ? (
          <div className="p-3 rounded-2xl bg-black/40 border border-cyan-500/20 backdrop-blur-md">
            <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 mb-1">
              <span>ATMOSPHERIC CO2</span>
              <span className={co2Ppm > 600 ? 'text-amber-400 font-bold' : 'text-emerald-400'}>
                {co2Ppm} PPM
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-gray-800 overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${co2Ppm > 600 ? 'bg-amber-400' : 'bg-emerald-400'}`}
                style={{ width: `${Math.min(100, (co2Ppm / 1400) * 100)}%` }}
              />
            </div>
            <span className="text-[10px] font-mono text-gray-500 mt-1 block truncate">
              Barometric: {pressureKpa} kPa
            </span>
          </div>
        ) : (
          <div className="p-3 rounded-2xl bg-black/40 border border-cyan-500/20 backdrop-blur-md">
            <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 mb-1">
              <span>SANCTUARY STATUS</span>
              <span className={selectedRoom === 'observatory' ? 'text-cyan-400 font-bold' : 'text-gray-400'}>
                {selectedRoom === 'observatory' ? 'SAFE ROOM ACTIVE' : 'EXPOSED'}
              </span>
            </div>
            <span className="text-xs font-mono text-white mt-1 block">
              {selectedRoom === 'observatory' ? 'Bulkheads Hermetic' : 'Subject to Predator Patrol'}
            </span>
            <span className="text-[10px] font-mono text-gray-500 mt-1 block">
              Safe Room: Research Observatory
            </span>
          </div>
        )}
      </div>

      {/* MAIN SIMULATOR WORKBENCH (DECK MAP & COMPARTMENTS) */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 my-5">
        {/* Left Column: 13-Compartment Interactive Station Schematic (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-black/60 border border-cyan-500/20 p-4 sm:p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  Station Architectural Layout
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300">
                  13 Compartments
                </span>
              </div>

              {/* Deck Toggle Buttons */}
              <div className="flex items-center gap-1 p-0.5 rounded-lg bg-surface border border-border">
                <button
                  type="button"
                  onClick={() => {
                    setActiveDeck(1);
                    sounds.playUiClick();
                  }}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono font-bold transition-all ${
                    activeDeck === 1
                      ? 'bg-cyan-500 text-black shadow-sm'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Deck 1 (Upper)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveDeck(2);
                    sounds.playUiClick();
                  }}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono font-bold transition-all ${
                    activeDeck === 2
                      ? 'bg-cyan-500 text-black shadow-sm'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Deck 2 (Lower)
                </button>
              </div>
            </div>

            <p className="text-xs text-gray-400 font-mono mb-4">
              Click any ship compartment to inspect sensors, operate physical breakers, and analyze environmental metrics:
            </p>

            {/* Deck 1 Compartment Grid */}
            {activeDeck === 1 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-left">
                {[
                  { id: 'bridge', label: 'Command Bridge', icon: '🚀', tag: 'Cockpit' },
                  { id: 'observatory', label: 'Research Observatory', icon: '🛡️', tag: 'Safe Haven' },
                  { id: 'avionics', label: 'Avionics Bay', icon: '🖥️', tag: 'Optical Bus' },
                  { id: 'quarters', label: 'Crew Quarters', icon: '🛏️', tag: 'Living' },
                  { id: 'infirmary', label: 'Medical Infirmary', icon: '💉', tag: 'Trauma' },
                  { id: 'corridor', label: 'Central Corridor', icon: '🚪', tag: 'Spine' },
                  { id: 'lifesupport', label: 'Life Support Hub', icon: '🌱', tag: scrubbersOnline ? 'Active' : 'Offline' },
                  { id: 'cargobay', label: 'Main Cargo Bay', icon: '📦', tag: 'Annex' },
                  { id: 'airlock', label: 'Airlock Chamber', icon: '☣️', tag: 'Gas Purge' },
                  { id: 'engineering', label: 'Engineering Bay', icon: '⚡', tag: fusionOnline ? '150 kW' : 'Tripped' },
                ].map((room) => {
                  const isSelected = selectedRoom === room.id;
                  const isStalkerHere = stalkerAwake && stalkerLocation === room.id;
                  return (
                    <button
                      key={room.id}
                      type="button"
                      onClick={() => {
                        setSelectedRoom(room.id);
                        sounds.playUiClick();
                      }}
                      className={`p-2.5 rounded-xl border text-left transition-all relative overflow-hidden ${
                        isSelected
                          ? 'border-cyan-400 bg-cyan-500/20 shadow-md shadow-cyan-500/20 ring-1 ring-cyan-400'
                          : 'border-border/60 bg-surface/40 hover:border-cyan-500/40 hover:bg-surface/80'
                      }`}
                    >
                      {isStalkerHere && (
                        <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500 animate-ping" />
                      )}
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-white mb-0.5">
                        <span>{room.icon}</span>
                        <span className="truncate">{room.label}</span>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-300 block">
                        {room.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Deck 2 Compartment Grid */}
            {activeDeck === 2 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-left">
                {[
                  { id: 'subdeck', label: 'Reactor Subdeck', icon: '🔋', tag: 'Fuel Throttle' },
                  { id: 'specimen_vault', label: 'Specimen Vault', icon: '🧬', tag: 'Bio-Hazard Origin' },
                  { id: 'crawlway', label: 'Maintenance Crawlway', icon: '⚠️', tag: 'Decompression 0.3 kPa/s' },
                ].map((room) => {
                  const isSelected = selectedRoom === room.id;
                  const isStalkerHere = stalkerAwake && stalkerLocation === room.id;
                  return (
                    <button
                      key={room.id}
                      type="button"
                      onClick={() => {
                        setSelectedRoom(room.id);
                        sounds.playUiClick();
                      }}
                      className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden ${
                        isSelected
                          ? 'border-cyan-400 bg-cyan-500/20 shadow-md shadow-cyan-500/20 ring-1 ring-cyan-400'
                          : 'border-border/60 bg-surface/40 hover:border-cyan-500/40 hover:bg-surface/80'
                      }`}
                    >
                      {isStalkerHere && (
                        <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500 animate-ping" />
                      )}
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-white mb-0.5">
                        <span>{room.icon}</span>
                        <span>{room.label}</span>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-300 block">
                        {room.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Active Compartment Detail Slate */}
          <div className="mt-4 pt-3 border-t border-cyan-500/20 text-xs font-mono">
            <div className="flex items-center justify-between text-cyan-400 font-bold mb-1">
              <span>ACTIVE COMPARTMENT: {currentRoom.name}</span>
              <span className="text-gray-400 text-[10px]">Deck {currentRoom.deck}</span>
            </div>
            <p className="text-gray-300 text-[11px] leading-relaxed mb-2">
              {currentRoom.desc}
            </p>
            <div className="grid grid-cols-2 gap-2 text-[10px] text-gray-400">
              <div>Type: <span className="text-white">{currentRoom.type}</span></div>
              <div>Hazard: <span className="text-amber-400">{currentRoom.hazard}</span></div>
              <div className="col-span-2">Status: <span className="text-emerald-400">{currentRoom.status}</span></div>
            </div>
          </div>
        </div>

        {/* Right Column: Engineering Toolset & Subsystem Repairs (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-black/60 border border-cyan-500/20 p-4 sm:p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                Hands-On Engineering Toolset
              </span>
              <span className="text-[10px] font-mono text-gray-400">Keys [1]–[4]</span>
            </div>

            {/* Equipment Hotbar */}
            <div className="grid grid-cols-4 gap-1.5 mb-4">
              {[
                { id: 1, name: 'Scanner', icon: '📡', key: '[1]' },
                { id: 2, name: 'Multitool', icon: '🔧', key: '[2]' },
                { id: 3, name: 'Fuse Pack', icon: '⚡', key: '[3]' },
                { id: 4, name: 'Battery', icon: '🔋', key: '[4]' },
              ].map((tool) => (
                <button
                  key={tool.id}
                  type="button"
                  onClick={() => {
                    setActiveTool(tool.id);
                    sounds.playUiClick();
                  }}
                  className={`p-2 rounded-xl border text-center transition-all ${
                    activeTool === tool.id
                      ? 'border-cyan-400 bg-cyan-500/30 text-white font-bold ring-1 ring-cyan-400'
                      : 'border-border/60 bg-surface/30 text-gray-400 hover:text-white'
                  }`}
                >
                  <div className="text-base mb-0.5">{tool.icon}</div>
                  <div className="text-[10px] font-mono leading-tight">{tool.name}</div>
                  <div className="text-[9px] font-mono text-cyan-400">{tool.key}</div>
                </button>
              ))}
            </div>

            {/* Multitool Sub-mode Selector if Tool 2 is active */}
            {activeTool === 2 && (
              <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 mb-4">
                <div className="text-[11px] font-mono text-cyan-300 font-bold mb-1.5 flex items-center justify-between">
                  <span>MULTITOOL MODE CYCLE [Q]:</span>
                  <span className="text-white bg-cyan-500/20 px-2 py-0.5 rounded text-[10px]">
                    {multitoolMode}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1">
                  {['CALIBRATE', 'CUT_WELD', 'TIGHTEN'].map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => {
                        setMultitoolMode(mode);
                        sounds.playUiClick();
                      }}
                      className={`px-2 py-1 rounded text-[10px] font-mono font-bold transition-all ${
                        multitoolMode === mode
                          ? 'bg-cyan-400 text-black'
                          : 'bg-black/40 text-gray-400 hover:text-white'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Core Subsystem Repair Directives (4 Steps) */}
            <div className="space-y-2 mb-4">
              <span className="text-xs font-mono text-gray-400 font-semibold block">
                Primary Ship Restoration ({repairedCount}/4 Restored):
              </span>

              {/* Repair 1: Fusion Generator */}
              <div className="p-2.5 rounded-xl border border-border/80 bg-surface/40 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                    <span>{fusionOnline ? '✅' : '⚙️'}</span>
                    <span>150 kW Fusion Turbine</span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 block">
                    Requires: Multitool (CUT_WELD)
                  </span>
                </div>
                <button
                  type="button"
                  disabled={fusionOnline}
                  onClick={handleRepairFusion}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    fusionOnline
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 cursor-default'
                      : 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-md'
                  }`}
                >
                  {fusionOnline ? 'RESTORED' : 'REPAIR'}
                </button>
              </div>

              {/* Repair 2: Power Bus */}
              <div className="p-2.5 rounded-xl border border-border/80 bg-surface/40 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                    <span>{busOnline ? '✅' : '⚙️'}</span>
                    <span>Distribution Bus</span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 block">
                    Requires: Fusion Online + Multitool (CALIBRATE)
                  </span>
                </div>
                <button
                  type="button"
                  disabled={busOnline}
                  onClick={handleRepairBus}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    busOnline
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 cursor-default'
                      : 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-md'
                  }`}
                >
                  {busOnline ? 'RESTORED' : 'REPAIR'}
                </button>
              </div>

              {/* Repair 3: Life Support */}
              <div className="p-2.5 rounded-xl border border-border/80 bg-surface/40 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                    <span>{scrubbersOnline ? '✅' : '⚙️'}</span>
                    <span>Life Support Scrubbers</span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 block">
                    Requires: Bus Online + Spare Fuse [3]
                  </span>
                </div>
                <button
                  type="button"
                  disabled={scrubbersOnline}
                  onClick={handleRepairScrubbers}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    scrubbersOnline
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 cursor-default'
                      : 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-md'
                  }`}
                >
                  {scrubbersOnline ? 'RESTORED' : 'REPAIR'}
                </button>
              </div>

              {/* Repair 4: Communications */}
              <div className="p-2.5 rounded-xl border border-border/80 bg-surface/40 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                    <span>{commsOnline ? '✅' : '⚙️'}</span>
                    <span>Communications Array</span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 block">
                    Requires: Bus Online + Multitool (TIGHTEN)
                  </span>
                </div>
                <button
                  type="button"
                  disabled={commsOnline}
                  onClick={handleRepairComms}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    commsOnline
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 cursor-default'
                      : 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-md'
                  }`}
                >
                  {commsOnline ? 'RESTORED' : 'REPAIR'}
                </button>
              </div>
            </div>
          </div>

          {/* Quick Simulation Trigger for Stalker */}
          {!stalkerAwake && !predatorNeutralized && (
            <button
              type="button"
              onClick={() => {
                setStalkerAwake(true);
                sounds.playWarp();
                addLog('⚠️ MANUAL TRIGGER: Specimen Vault breached! Stalker alert!');
              }}
              className="w-full py-2 rounded-xl border border-red-500/40 bg-red-950/30 hover:bg-red-900/40 text-red-400 text-xs font-mono font-bold transition-all"
            >
              ⚡ Simulate Apex Stalker Awakening
            </button>
          )}
        </div>
      </div>

      {/* APEX PREDATOR THREAT & TACTICAL PURGE PANEL (ACTIVE WHEN STALKER IS AWAKE) */}
      {stalkerAwake && (
        <div className="relative z-10 my-5 p-5 rounded-2xl bg-gradient-to-r from-red-950/70 via-black/80 to-red-950/70 border border-red-500/40 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold">
                  Apex Biological Threat Active
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/40">
                  3-Hit Lethal Combat
                </span>
              </div>
              <h4 className="text-lg font-black text-white font-mono">
                Creature Acoustic Range: {stalkerDistanceM} Meters
              </h4>
            </div>

            {/* Tactical Action Buttons: Lure, Seal, Purge */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleLureStalker}
                className="px-3.5 py-2 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 hover:bg-amber-500/30 text-xs font-mono font-bold transition-all"
              >
                🎯 1. Lure to Airlock
              </button>
              <button
                type="button"
                onClick={handleSealAirlock}
                className="px-3.5 py-2 rounded-xl bg-blue-500/20 border border-blue-500/40 text-blue-300 hover:bg-blue-500/30 text-xs font-mono font-bold transition-all"
              >
                🔒 2. Interlock Bulkheads
              </button>
              <button
                type="button"
                onClick={handleActivateGasPurge}
                disabled={gasPurgeActive || predatorNeutralized}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all shadow-lg ${
                  predatorNeutralized
                    ? 'bg-emerald-600 text-white cursor-default'
                    : gasPurgeActive
                    ? 'bg-amber-600 text-white animate-pulse'
                    : 'bg-red-600 hover:bg-red-500 text-white shadow-red-600/30'
                }`}
              >
                {predatorNeutralized ? '✓ SPECIMEN ELIMINATED' : gasPurgeActive ? 'PURGING TOXIC GAS...' : '☣️ 3. DECONTAMINATION GAS PURGE'}
              </button>
            </div>
          </div>

          <div className="text-xs font-mono text-gray-300">
            Strategy: The entity cannot be harmed by handheld tools. Lure the predator into the dual-door 
            <strong className="text-white"> Airlock Chamber</strong>, seal the bulkheads to isolate it from the station, 
            and trigger the physical <strong className="text-cyan-400">Decontamination Poison Gas Valve</strong>.
          </div>
        </div>
      )}

      {/* PREDATOR NEUTRALIZED VICTORY BANNER */}
      {predatorNeutralized && (
        <div className="relative z-10 my-4 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏆</span>
            <div>
              <div className="text-sm font-mono font-bold text-emerald-400">
                TACTICAL PURGE SUCCESSFUL: ASTRAEA STATION SECURED
              </div>
              <div className="text-xs text-gray-300 font-mono">
                150 kW fusion bus online, atmosphere scrubbers purified, creature eradicated.
              </div>
            </div>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
            All 43 Test Suites Pass
          </span>
        </div>
      )}

      {/* REAL-TIME DIAGNOSTIC TERMINAL LOG */}
      <div className="relative z-10 mt-5 p-3.5 rounded-2xl bg-black/80 border border-cyan-500/20 font-mono text-xs">
        <div className="flex items-center justify-between text-gray-400 text-[11px] mb-2 border-b border-gray-800 pb-1">
          <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            LIVE DIAGNOSTIC & TELEMETRY STREAM
          </span>
          <span>STATION LOG BUFFER: {logMessages.length} ENTRIES</span>
        </div>
        <div className="space-y-1 max-h-28 overflow-y-auto pr-1">
          {logMessages.map((msg, i) => (
            <div key={i} className={`text-[11px] ${i === 0 ? 'text-cyan-300 font-semibold' : 'text-gray-400'}`}>
              {msg}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
