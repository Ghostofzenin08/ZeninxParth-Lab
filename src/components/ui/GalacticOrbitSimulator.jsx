import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';
import { sounds } from '../../utils/soundEffects';

export default function GalacticOrbitSimulator() {
  const containerRef = useRef(null);
  const { theme } = useTheme();

  // Simulation controls state
  const [preset, setPreset] = useState('solar'); // 'solar' | 'comet' | 'binary'
  const [gm, setGm] = useState(1.0); // Gravitational parameter scale
  const [showVectors, setShowVectors] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [telemetry, setTelemetry] = useState({
    presetName: 'Solar Keplerian System',
    semiMajorAxis: '1.00 AU',
    eccentricity: '0.0167',
    velocity: '29.78 km/s',
    period: '365.25 d',
    energy: '-441.2 MJ/kg',
  });

  const stateRef = useRef({
    preset: 'solar',
    gm: 1.0,
    showVectors: true,
    isPlaying: true,
    isDragging: false,
    prevMouse: { x: 0, y: 0 },
    rotX: 0.35,
    rotY: 0,
    isVisible: true,
  });

  stateRef.current.preset = preset;
  stateRef.current.gm = gm;
  stateRef.current.showVectors = showVectors;
  stateRef.current.isPlaying = isPlaying;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Viewport visibility observer to avoid GPU load when scrolled out
    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          stateRef.current.isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    visibilityObserver.observe(container);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      (container.clientWidth || 800) / (container.clientHeight || 400),
      0.1,
      1000
    );
    camera.position.set(0, 35, 75);
    camera.lookAt(0, 0, 0);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch (err) {
      console.warn('WebGL initialization failed in Orbit Simulator', err);
      return;
    }

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const isDark = theme === 'dark';
    const gridHelper = new THREE.GridHelper(
      80,
      20,
      isDark ? 0x27272a : 0xe2e8f0,
      isDark ? 0x18181b : 0xf1f5f9
    );
    gridHelper.position.y = -0.5;
    scene.add(gridHelper);

    // Celestial parent group
    const simGroup = new THREE.Group();
    scene.add(simGroup);

    // Central Star(s)
    let starMeshA, starMeshB, coronaMesh;

    if (preset === 'binary') {
      // Binary Stars
      const starGeoA = new THREE.SphereGeometry(2.4, 24, 24);
      const starMatA = new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true });
      starMeshA = new THREE.Mesh(starGeoA, starMatA);
      simGroup.add(starMeshA);

      const starGeoB = new THREE.SphereGeometry(1.8, 24, 24);
      const starMatB = new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true });
      starMeshB = new THREE.Mesh(starGeoB, starMatB);
      simGroup.add(starMeshB);
    } else {
      // Single central star
      const starGeo = new THREE.SphereGeometry(3.2, 32, 32);
      const starMat = new THREE.MeshBasicMaterial({
        color: preset === 'comet' ? 0xff4444 : 0xf59e0b,
        wireframe: true,
      });
      starMeshA = new THREE.Mesh(starGeo, starMat);
      simGroup.add(starMeshA);

      const coronaGeo = new THREE.SphereGeometry(3.8, 16, 16);
      const coronaMat = new THREE.MeshBasicMaterial({
        color: preset === 'comet' ? 0x38bdf8 : 0xff0207,
        transparent: true,
        opacity: 0.35,
        wireframe: true,
      });
      coronaMesh = new THREE.Mesh(coronaGeo, coronaMat);
      simGroup.add(coronaMesh);
    }

    // Celestial Orbits per Preset
    let bodies = [];
    if (preset === 'comet') {
      bodies = [
        { name: 'Inner Planetary Ring', a: 12, e: 0.02, speed: 1.5, color: 0x10b981, size: 0.9 },
        { name: 'Halley-Type Elliptical Comet', a: 34, e: 0.88, speed: 0.72, color: 0x38bdf8, size: 1.1, isPrimaryTracked: true },
        { name: 'Outer Gas Giant', a: 44, e: 0.06, speed: 0.45, color: 0xf43f5e, size: 1.8 },
      ];
    } else if (preset === 'binary') {
      bodies = [
        { name: 'Circumbinary Inner World', a: 22, e: 0.06, speed: 1.05, color: 0x10b981, size: 1.0, isPrimaryTracked: true },
        { name: 'Circumbinary Gas World', a: 36, e: 0.12, speed: 0.65, color: 0xa855f7, size: 1.7 },
        { name: 'Outer Resonant Asteroid', a: 48, e: 0.28, speed: 0.42, color: 0xfbbf24, size: 0.8 },
      ];
    } else {
      // Default 'solar'
      bodies = [
        { name: 'Inner Satellite (Alpha)', a: 14, e: 0.05, speed: 1.4, color: 0x38bdf8, size: 0.9 },
        { name: 'Habitable Orb (Earth-Analog)', a: 24, e: 0.0167, speed: 0.9, color: 0x10b981, size: 1.2, isPrimaryTracked: true },
        { name: 'Outer Gas Giant', a: 38, e: 0.048, speed: 0.55, color: 0xf43f5e, size: 1.8 },
        { name: 'High-Eccentricity Scout', a: 32, e: 0.45, speed: 0.68, color: 0xa855f7, size: 0.8 },
      ];
    }

    const bodyMeshes = [];
    const orbitLines = [];
    const vectorArrows = [];

    bodies.forEach((b) => {
      // Create orbit trail ellipse
      const points = [];
      const segments = 140;
      const bSemi = b.a * Math.sqrt(Math.max(0.001, 1 - b.e * b.e));
      const c = b.a * b.e;

      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        const x = b.a * Math.cos(theta) - c;
        const z = bSemi * Math.sin(theta);
        points.push(new THREE.Vector3(x, 0, z));
      }

      const orbitGeo = new THREE.BufferGeometry().setFromPoints(points);
      const orbitMat = new THREE.LineBasicMaterial({
        color: b.color,
        transparent: true,
        opacity: b.isPrimaryTracked ? 0.75 : 0.4,
      });
      const orbitLine = new THREE.Line(orbitGeo, orbitMat);
      simGroup.add(orbitLine);
      orbitLines.push({ line: orbitLine, body: b });

      // Body mesh
      const meshGeo = new THREE.SphereGeometry(b.size, 16, 16);
      const meshMat = new THREE.MeshBasicMaterial({ color: b.color });
      const mesh = new THREE.Mesh(meshGeo, meshMat);
      simGroup.add(mesh);
      bodyMeshes.push({ mesh, body: b, angle: Math.random() * Math.PI * 2 });

      // Velocity vector arrow
      const dir = new THREE.Vector3(0, 0, 1);
      const origin = new THREE.Vector3(0, 0, 0);
      const arrow = new THREE.ArrowHelper(dir, origin, 5, b.color, 1.2, 0.8);
      simGroup.add(arrow);
      vectorArrows.push(arrow);
    });

    // Pointer Drag Listeners
    const handlePointerDown = (e) => {
      stateRef.current.isDragging = true;
      stateRef.current.prevMouse = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e) => {
      if (stateRef.current.isDragging) {
        const dx = e.clientX - stateRef.current.prevMouse.x;
        const dy = e.clientY - stateRef.current.prevMouse.y;
        stateRef.current.rotY += dx * 0.007;
        stateRef.current.rotX += dy * 0.007;
        stateRef.current.prevMouse = { x: e.clientX, y: e.clientY };
      }
    };

    const handlePointerUp = () => {
      stateRef.current.isDragging = false;
    };

    container.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 800;
      const h = container.clientHeight || 400;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    let frameId;
    let clock = new THREE.Clock();
    let lastTelemetryTime = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      // Skip render calculations when component is scrolled out of viewport
      if (!stateRef.current.isVisible) return;

      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsedTime = clock.getElapsedTime();
      const currentGm = stateRef.current.gm;
      const playing = stateRef.current.isPlaying;
      const showVec = stateRef.current.showVectors;

      // Group orientation
      simGroup.rotation.x = stateRef.current.rotX;
      simGroup.rotation.y = stateRef.current.rotY;

      // Rotate stars
      if (preset === 'binary') {
        const binaryAngle = elapsedTime * 1.2 * Math.sqrt(currentGm);
        if (starMeshA) {
          starMeshA.position.x = Math.cos(binaryAngle) * 5;
          starMeshA.position.z = Math.sin(binaryAngle) * 5;
          starMeshA.rotation.y += 0.01;
        }
        if (starMeshB) {
          starMeshB.position.x = -Math.cos(binaryAngle) * 5;
          starMeshB.position.z = -Math.sin(binaryAngle) * 5;
          starMeshB.rotation.y += 0.015;
        }
      } else {
        if (starMeshA) starMeshA.rotation.y += 0.005;
        if (coronaMesh) coronaMesh.rotation.y -= 0.008;
      }

      if (playing) {
        bodyMeshes.forEach((item, idx) => {
          const { body } = item;
          const bSemi = body.a * Math.sqrt(Math.max(0.001, 1 - body.e * body.e));
          const c = body.a * body.e;

          // Keplerian velocity approximation v = sqrt(GM * (2/r - 1/a))
          // For high eccentricity comets, accelerate significantly near perihelion
          const currentR = Math.sqrt(
            Math.pow(body.a * Math.cos(item.angle) - c, 2) +
            Math.pow(bSemi * Math.sin(item.angle), 2)
          );
          const speedScaling = Math.max(0.3, Math.min(3.5, (body.a / (currentR + 0.1))));

          item.angle += body.speed * Math.sqrt(currentGm) * delta * 0.9 * (body.e > 0.5 ? speedScaling : 1.0);
          if (item.angle > Math.PI * 2) item.angle -= Math.PI * 2;

          const x = body.a * Math.cos(item.angle) - c;
          const z = bSemi * Math.sin(item.angle);
          item.mesh.position.set(x, 0, z);

          // Update arrow helper
          const arrow = vectorArrows[idx];
          if (arrow) {
            arrow.visible = showVec;
            if (showVec) {
              arrow.position.set(x, 0, z);
              const vx = -body.a * Math.sin(item.angle);
              const vz = bSemi * Math.cos(item.angle);
              const vVec = new THREE.Vector3(vx, 0, vz).normalize();
              arrow.setDirection(vVec);
              arrow.setLength(Math.min(8, Math.max(2, Math.sqrt(vx * vx + vz * vz) * 0.22)));
            }
          }

          // Telemetry feedback for primary tracked body (throttled to ~3 times per second)
          if (body.isPrimaryTracked && elapsedTime - lastTelemetryTime > 0.35) {
            lastTelemetryTime = elapsedTime;
            const rAU = Math.max(0.1, currentR / 24);
            const visVivaRatio = Math.max(0.01, 2 / rAU - 1 / (body.a / 24));
            const vKm = (29.78 * Math.sqrt(visVivaRatio) * Math.sqrt(currentGm)).toFixed(2);
            const periodDays = (365.25 * Math.pow(body.a / 24, 1.5) / Math.sqrt(currentGm)).toFixed(1);
            const specEnergy = (-441.2 * currentGm / (body.a / 24)).toFixed(1);

            let label = 'Solar Planetary Orbit';
            if (preset === 'comet') label = 'Halley-Class Trajectory (High Eccentricity)';
            if (preset === 'binary') label = 'Circumbinary Resonance (Dual Core)';

            setTelemetry({
              presetName: label,
              semiMajorAxis: `${(body.a / 24).toFixed(2)} AU`,
              eccentricity: body.e.toFixed(4),
              velocity: `${vKm} km/s`,
              period: `${periodDays} d`,
              energy: `${specEnergy} MJ/kg`,
            });
          }
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      visibilityObserver.disconnect();
      resizeObserver.disconnect();
      container.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [theme, preset]);

  return (
    <div className="relative rounded-3xl border border-primary/40 bg-surface/95 backdrop-blur-xl p-6 sm:p-8 shadow-2xl overflow-hidden group">
      {/* Simulation Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-border/80">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
              Astrophysics Interactive Lab • 3D Orbital Mechanics
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-text-main">
            Celestial N-Body Gravitational Dynamics
          </h3>
          <p className="text-xs sm:text-sm text-text-muted mt-0.5">
            Aerospace trajectory propagation & Keplerian state vector simulation
          </p>
        </div>

        {/* Real-time Play / Pause & Vector toggles */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Preset Selector */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-surface-elevated border border-border">
            <button
              type="button"
              onClick={() => {
                setPreset('solar');
                sounds.playUiClick();
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                preset === 'solar'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-text-muted hover:text-text-main'
              }`}
            >
              ☀️ Solar
            </button>
            <button
              type="button"
              onClick={() => {
                setPreset('comet');
                sounds.playWarp();
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                preset === 'comet'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-text-muted hover:text-text-main'
              }`}
            >
              ☄️ Comet (e=0.88)
            </button>
            <button
              type="button"
              onClick={() => {
                setPreset('binary');
                sounds.playUiClick();
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                preset === 'binary'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-text-muted hover:text-text-main'
              }`}
            >
              🌌 Binary
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              setIsPlaying(!isPlaying);
              sounds.playUiClick();
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
              isPlaying
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
            }`}
          >
            {isPlaying ? '⏸ Pause Sim' : '▶ Resume Sim'}
          </button>
          <button
            type="button"
            onClick={() => {
              setShowVectors(!showVectors);
              sounds.playUiClick();
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
              showVectors
                ? 'bg-primary/20 text-primary border border-primary/40'
                : 'bg-surface-elevated text-text-subtle border border-border'
            }`}
          >
            {showVectors ? '⚡ Vectors: ON' : '⚡ Vectors: OFF'}
          </button>
        </div>
      </div>

      {/* 3D WebGL Canvas */}
      <div className="relative h-80 sm:h-96 w-full my-6 rounded-2xl overflow-hidden bg-black/60 border border-border/70 touch-none">
        <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

        {/* Floating Telemetry HUD */}
        <div className="absolute top-3 left-3 z-10 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-primary/30 text-xs font-mono text-gray-200 shadow-xl pointer-events-none max-w-xs">
          <div className="text-[10px] uppercase font-bold text-primary mb-1 tracking-wider">
            {telemetry.presetName}
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px]">
            <div>
              <span className="text-gray-400">Semi-Major (a):</span> {telemetry.semiMajorAxis}
            </div>
            <div>
              <span className="text-gray-400">Eccentricity (e):</span> {telemetry.eccentricity}
            </div>
            <div>
              <span className="text-gray-400">Velocity (v):</span> {telemetry.velocity}
            </div>
            <div>
              <span className="text-gray-400">Orbital Period:</span> {telemetry.period}
            </div>
            <div className="col-span-2 text-cyan-400">
              <span className="text-gray-400">Mechanical Energy:</span> {telemetry.energy}
            </div>
          </div>
        </div>

        <div className="absolute bottom-3 right-3 z-10 text-[10px] font-mono text-gray-400 bg-black/80 px-2.5 py-1 rounded-md border border-border pointer-events-none">
          Drag to rotate 3D celestial sphere • Vis-Viva kinematics
        </div>
      </div>

      {/* Interactive Sliders & Parameter Tuning */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-border/80 text-xs font-mono">
        {/* GM Slider */}
        <div className="p-3 rounded-xl bg-surface-elevated border border-border">
          <div className="flex items-center justify-between mb-1">
            <span className="text-text-muted">Gravitational Parameter (GM):</span>
            <span className="font-bold text-primary">{gm.toFixed(2)}x</span>
          </div>
          <input
            type="range"
            min="0.2"
            max="2.5"
            step="0.05"
            value={gm}
            onChange={(e) => setGm(parseFloat(e.target.value))}
            className="w-full accent-primary cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-text-subtle mt-1">
            <span>0.2x (Low Gravity)</span>
            <span>1.0x (Standard)</span>
            <span>2.5x (Dense Core)</span>
          </div>
        </div>

        {/* Aerospace Formula Callout */}
        <div className="p-3 rounded-xl bg-surface-elevated border border-border flex flex-col justify-between">
          <span className="text-text-muted">Orbital Mechanics Law:</span>
          <div className="font-bold text-text-main text-xs font-mono py-1">
            v = √(μ · (2/r - 1/a))
          </div>
          <span className="text-[10px] text-text-subtle">
            Vis-viva equation conserving orbital angular momentum
          </span>
        </div>

        {/* Project Link */}
        <div className="p-3 rounded-xl bg-surface-elevated border border-border flex flex-col justify-between sm:col-span-2 lg:col-span-1">
          <span className="text-text-muted">Simulated Project:</span>
          <a
            href="https://github.com/Ghostofzenin08/3D-Galactic-Model"
            target="_blank"
            rel="noreferrer"
            onClick={() => sounds.playUiClick()}
            className="inline-flex items-center gap-1.5 font-bold text-primary hover:underline text-xs"
          >
            <span>Ghostofzenin08/3D-Galactic-Model</span>
            <span>↗</span>
          </a>
          <span className="text-[10px] text-text-subtle">
            NumPy & SciPy Runge-Kutta numerical integration codebase
          </span>
        </div>
      </div>
    </div>
  );
}
