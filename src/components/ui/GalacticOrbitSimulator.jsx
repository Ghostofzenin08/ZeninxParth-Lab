import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

export default function GalacticOrbitSimulator() {
  const containerRef = useRef(null);
  const { theme } = useTheme();

  // Simulation controls state
  const [preset, setPreset] = useState('solar'); // 'solar' | 'comet' | 'binary'
  const [gm, setGm] = useState(1.0); // Gravitational parameter scale
  const [showVectors, setShowVectors] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [telemetry, setTelemetry] = useState({
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
    mouseX: 0,
    mouseY: 0,
    isDragging: false,
    prevMouse: { x: 0, y: 0 },
    rotX: 0.35,
    rotY: 0,
  });

  stateRef.current.preset = preset;
  stateRef.current.gm = gm;
  stateRef.current.showVectors = showVectors;
  stateRef.current.isPlaying = isPlaying;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
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
    const gridHelper = new THREE.GridHelper(80, 20, isDark ? 0x27272a : 0xe2e8f0, isDark ? 0x18181b : 0xf1f5f9);
    gridHelper.position.y = -0.5;
    scene.add(gridHelper);

    // Celestial parent group
    const simGroup = new THREE.Group();
    scene.add(simGroup);

    // 1. Central Star (Sun / Galactic Core)
    const starGeo = new THREE.SphereGeometry(3.2, 32, 32);
    const starMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      wireframe: true,
    });
    const starMesh = new THREE.Mesh(starGeo, starMat);
    simGroup.add(starMesh);

    // Glowing core glow shell
    const coronaGeo = new THREE.SphereGeometry(3.8, 16, 16);
    const coronaMat = new THREE.MeshBasicMaterial({
      color: 0xff0207,
      transparent: true,
      opacity: 0.35,
      wireframe: true,
    });
    const coronaMesh = new THREE.Mesh(coronaGeo, coronaMat);
    simGroup.add(coronaMesh);

    // 2. Celestial Orbit Configurations
    const bodies = [
      { name: 'Inner Satellite (Alpha)', a: 14, e: 0.05, speed: 1.4, color: 0x38bdf8, size: 0.9 },
      { name: 'Habitable Orb (Earth-Analog)', a: 24, e: 0.08, speed: 0.9, color: 0x10b981, size: 1.2 },
      { name: 'Outer Gas Giant', a: 38, e: 0.12, speed: 0.55, color: 0xf43f5e, size: 1.8 },
      { name: 'High-Eccentricity Scout', a: 30, e: 0.65, speed: 0.75, color: 0xa855f7, size: 0.8 },
    ];

    const bodyMeshes = [];
    const orbitLines = [];
    const vectorArrows = [];

    bodies.forEach((b) => {
      // Create orbit trail ellipse
      const points = [];
      const segments = 128;
      const bSemi = b.a * Math.sqrt(1 - b.e * b.e);
      const c = b.a * b.e; // Focus offset

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
        opacity: 0.45,
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
      const arrow = new THREE.ArrowHelper(dir, origin, 5, 0xffffff, 1.2, 0.8);
      simGroup.add(arrow);
      vectorArrows.push(arrow);
    });

    // Mouse / touch interaction
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
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    let frameId;
    let clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const currentGm = stateRef.current.gm;
      const playing = stateRef.current.isPlaying;
      const showVec = stateRef.current.showVectors;

      // Group rotation
      simGroup.rotation.x = stateRef.current.rotX;
      simGroup.rotation.y = stateRef.current.rotY;

      starMesh.rotation.y += 0.005;
      coronaMesh.rotation.y -= 0.008;

      if (playing) {
        bodyMeshes.forEach((item, idx) => {
          const { body } = item;
          // Keplerian velocity approximation v = sqrt(GM * (2/r - 1/a))
          const bSemi = body.a * Math.sqrt(1 - body.e * body.e);
          const c = body.a * body.e;

          item.angle += body.speed * Math.sqrt(currentGm) * delta * 0.9;
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
              // Tangent velocity vector
              const vx = -body.a * Math.sin(item.angle);
              const vz = bSemi * Math.cos(item.angle);
              const vVec = new THREE.Vector3(vx, 0, vz).normalize();
              arrow.setDirection(vVec);
              arrow.setLength(Math.min(7, Math.sqrt(vx * vx + vz * vz) * 0.25));
            }
          }

          // Telemetry feedback for Earth-analog body
          if (idx === 1 && Math.random() < 0.05) {
            const r = Math.sqrt(x * x + z * z);
            const vKm = (29.78 * Math.sqrt((2 / (r / 24)) - 1) * Math.sqrt(currentGm)).toFixed(2);
            setTelemetry({
              semiMajorAxis: `${(body.a / 24).toFixed(2)} AU`,
              eccentricity: body.e.toFixed(4),
              velocity: `${vKm} km/s`,
              period: `${(365.25 / Math.sqrt(currentGm)).toFixed(1)} d`,
              energy: `${(-441.2 * currentGm).toFixed(1)} MJ/kg`,
            });
          }
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      container.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      resizeObserver.disconnect();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div className="relative rounded-3xl border border-primary/40 bg-surface/95 backdrop-blur-xl p-6 sm:p-8 shadow-2xl overflow-hidden group">
      {/* Simulation Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/80">
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
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
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
            onClick={() => setShowVectors(!showVectors)}
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
      <div className="relative h-80 sm:h-96 w-full my-6 rounded-2xl overflow-hidden bg-black/60 border border-border/70">
        <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

        {/* Floating Telemetry HUD */}
        <div className="absolute top-3 left-3 z-10 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-primary/30 text-xs font-mono text-gray-200 shadow-xl pointer-events-none max-w-xs">
          <div className="text-[10px] uppercase font-bold text-primary mb-1 tracking-wider">
            Orbit State Vectors (Telemetry)
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
          Drag to rotate 3D celestial sphere
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
