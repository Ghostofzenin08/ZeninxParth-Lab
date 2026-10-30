import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

export default function CelestialGalaxyCanvas() {
  const containerRef = useRef(null);
  const { theme } = useTheme();
  const [mode, setMode] = useState('galaxy'); // 'galaxy' | 'nebula' | 'orbital'
  const [isWarping, setIsWarping] = useState(false);
  const [fps, setFps] = useState(60);

  // References for mutable animation state
  const stateRef = useRef({
    mode: 'galaxy',
    isWarping: false,
    mouseX: 0,
    mouseY: 0,
    targetRotationX: 0,
    targetRotationY: 0,
    currentRotationX: 0,
    currentRotationY: 0,
    isDragging: false,
    previousMousePosition: { x: 0, y: 0 },
  });

  stateRef.current.mode = mode;
  stateRef.current.isWarping = isWarping;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      2000
    );
    camera.position.set(0, 45, 110);
    camera.lookAt(0, 0, 0);

    // Renderer
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch (e) {
      console.warn('WebGL not supported, falling back', e);
      return;
    }

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparent background
    container.appendChild(renderer.domElement);

    // Color definitions based on theme
    const isDark = theme === 'dark';
    const primaryColor = new THREE.Color(0xff0207); // Red accent
    const cyanColor = new THREE.Color(0x38bdf8); // Cyan
    const goldColor = new THREE.Color(0xfbbf24); // Gold
    const coreColor = new THREE.Color(0xffffff);

    // Group to hold all celestial objects
    const galaxyGroup = new THREE.Group();
    scene.add(galaxyGroup);

    // 1. GALAXY PARTICLES
    const particleCount = 7500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);

    const arms = 4;
    const radius = 95;
    const spinFactor = 3.6;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const r = Math.pow(Math.random(), 2.2) * radius;
      const branchAngle = ((i % arms) * ((2 * Math.PI) / arms));
      const spinAngle = r * 0.05 * spinFactor;

      const randomX = (Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 6) * (r / radius);
      const randomY = (Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 4) * (r / radius);
      const randomZ = (Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 6) * (r / radius);

      const x = Math.cos(branchAngle + spinAngle) * r + randomX;
      const y = randomY;
      const z = Math.sin(branchAngle + spinAngle) * r + randomZ;

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      originalPositions[i3] = x;
      originalPositions[i3 + 1] = y;
      originalPositions[i3 + 2] = z;

      speeds[i] = (Math.random() * 0.5 + 0.5) * (1 / (Math.sqrt(r + 1) * 0.3));

      // Color interpolation: Core is bright cyan/white, outer arms are deep crimson & stellar gold
      const mixedColor = new THREE.Color();
      const distanceRatio = r / radius;
      if (distanceRatio < 0.25) {
        mixedColor.lerpColors(coreColor, cyanColor, distanceRatio / 0.25);
      } else if (distanceRatio < 0.65) {
        mixedColor.lerpColors(cyanColor, primaryColor, (distanceRatio - 0.25) / 0.4);
      } else {
        mixedColor.lerpColors(primaryColor, goldColor, (distanceRatio - 0.65) / 0.35);
      }

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Texture Generation (soft glowing circle)
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(canvas);
    };

    const particleMaterial = new THREE.PointsMaterial({
      size: 1.8,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      map: createParticleTexture(),
      transparent: true,
      opacity: isDark ? 0.85 : 0.65,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    galaxyGroup.add(particles);

    // 2. CELESTIAL CORE & ACCRETION DISK (Aerospace Simulation aesthetic)
    const coreGeo = new THREE.SphereGeometry(3.5, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    galaxyGroup.add(coreMesh);

    // Concentric celestial orbital rings
    const ringGroup = new THREE.Group();
    const createRing = (radiusVal, tiltX, tiltZ, colorHex) => {
      const ringGeo = new THREE.RingGeometry(radiusVal - 0.2, radiusVal + 0.2, 96);
      const ringMat = new THREE.MeshBasicMaterial({
        color: colorHex,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.35,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 2 + tiltX;
      ringMesh.rotation.z = tiltZ;
      return ringMesh;
    };

    const ring1 = createRing(18, 0.1, 0, 0x38bdf8);
    const ring2 = createRing(36, -0.15, 0.2, 0xff0207);
    const ring3 = createRing(60, 0.2, -0.1, 0xfbbf24);
    ringGroup.add(ring1);
    ringGroup.add(ring2);
    ringGroup.add(ring3);
    galaxyGroup.add(ringGroup);

    // Orbiting Satellite / Probe Beacon
    const probeGeo = new THREE.SphereGeometry(0.9, 16, 16);
    const probeMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const probeMesh = new THREE.Mesh(probeGeo, probeMat);
    galaxyGroup.add(probeMesh);

    // 3. BACKGROUND DEEP SPACE STARS
    const starCount = 1200;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPos[i] = (Math.random() - 0.5) * 1200;
      starPos[i + 1] = (Math.random() - 0.5) * 1200;
      starPos[i + 2] = (Math.random() - 0.5) * 1200;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0x94a3b8,
      size: 1.2,
      transparent: true,
      opacity: 0.5,
    });
    const backgroundStars = new THREE.Points(starGeo, starMat);
    scene.add(backgroundStars);

    // Mouse / Touch Interaction Listeners
    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      stateRef.current.mouseX = x;
      stateRef.current.mouseY = y;

      if (stateRef.current.isDragging) {
        const deltaX = e.clientX - stateRef.current.previousMousePosition.x;
        const deltaY = e.clientY - stateRef.current.previousMousePosition.y;

        stateRef.current.targetRotationY += deltaX * 0.005;
        stateRef.current.targetRotationX += deltaY * 0.005;

        stateRef.current.previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const handlePointerDown = (e) => {
      stateRef.current.isDragging = true;
      stateRef.current.previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
      stateRef.current.isDragging = false;
    };

    window.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // Animation Loop
    let clock = new THREE.Clock();
    let frameId;
    let frameCount = 0;
    let lastFpsUpdate = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // FPS calculation
      frameCount++;
      if (elapsedTime - lastFpsUpdate >= 1) {
        setFps(frameCount);
        frameCount = 0;
        lastFpsUpdate = elapsedTime;
      }

      const currentMode = stateRef.current.mode;
      const warping = stateRef.current.isWarping;
      const speedMultiplier = warping ? 6.5 : 1.0;

      // Rotate galaxy
      galaxyGroup.rotation.y += 0.0025 * speedMultiplier;
      ringGroup.rotation.z -= 0.003 * speedMultiplier;
      coreMesh.rotation.y += 0.01 * speedMultiplier;
      coreMesh.rotation.x += 0.005;

      // Orbiting probe kinematics
      const probeAngle = elapsedTime * 0.8 * speedMultiplier;
      probeMesh.position.x = Math.cos(probeAngle) * 36;
      probeMesh.position.z = Math.sin(probeAngle) * 36;
      probeMesh.position.y = Math.sin(elapsedTime * 2) * 4;

      // Interpolate user drag rotation
      stateRef.current.currentRotationX +=
        (stateRef.current.targetRotationX - stateRef.current.currentRotationX) * 0.08;
      stateRef.current.currentRotationY +=
        (stateRef.current.targetRotationY - stateRef.current.currentRotationY) * 0.08;

      // Mouse parallax damping
      camera.position.x +=
        (stateRef.current.mouseX * 25 - camera.position.x) * 0.03;
      camera.position.y +=
        (45 + stateRef.current.mouseY * 18 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);

      galaxyGroup.rotation.x = 0.45 + stateRef.current.currentRotationX;
      galaxyGroup.rotation.z = stateRef.current.currentRotationY;

      // Dynamic morph based on mode
      const posAttr = geometry.attributes.position;
      const posArray = posAttr.array;

      if (currentMode === 'nebula') {
        // Expand into a turbulent spherical cloud
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          const origX = originalPositions[i3];
          const origY = originalPositions[i3 + 1];
          const origZ = originalPositions[i3 + 2];

          const wave = Math.sin(elapsedTime * 1.5 + origX * 0.05) * 8;
          posArray[i3] = origX + wave;
          posArray[i3 + 1] = origY + Math.cos(elapsedTime + origZ * 0.05) * 16;
          posArray[i3 + 2] = origZ + wave;
        }
        posAttr.needsUpdate = true;
      } else if (currentMode === 'orbital') {
        // Flatten into strict concentric Keplerian orbits
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          const origX = originalPositions[i3];
          const origZ = originalPositions[i3 + 2];
          const r = Math.sqrt(origX * origX + origZ * origZ);
          const theta = Math.atan2(origZ, origX) + elapsedTime * (0.4 / Math.sqrt(r + 2));

          posArray[i3] = Math.cos(theta) * r;
          posArray[i3 + 1] = originalPositions[i3 + 1] * 0.2;
          posArray[i3 + 2] = Math.sin(theta) * r;
        }
        posAttr.needsUpdate = true;
      } else {
        // Return to spiral galaxy arms
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          posArray[i3] += (originalPositions[i3] - posArray[i3]) * 0.05;
          posArray[i3 + 1] += (originalPositions[i3 + 1] - posArray[i3 + 1]) * 0.05;
          posArray[i3 + 2] += (originalPositions[i3 + 2] - posArray[i3 + 2]) * 0.05;
        }
        posAttr.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      resizeObserver.disconnect();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose geometries and materials
      geometry.dispose();
      particleMaterial.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      starGeo.dispose();
      starMat.dispose();
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div className="absolute inset-0 overflow-hidden select-none pointer-events-auto">
      {/* Three.js Canvas Container */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Interactive 3D HUD Controls */}
      <div className="absolute bottom-6 right-6 z-20 flex flex-col items-end gap-2 text-xs font-mono">
        {/* HUD Info Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-background/80 backdrop-blur-md border border-border text-text-subtle shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px]">WebGL 3D Engine • {fps} FPS</span>
        </div>

        {/* Mode Selector Buttons */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-background/85 backdrop-blur-md border border-border shadow-xl">
          <button
            type="button"
            onClick={() => setMode('galaxy')}
            className={`px-2.5 py-1 rounded-lg transition-all text-[11px] ${
              mode === 'galaxy'
                ? 'bg-primary text-white font-bold shadow-md'
                : 'text-text-muted hover:text-text-main hover:bg-surface-elevated'
            }`}
          >
            🌌 Galaxy
          </button>
          <button
            type="button"
            onClick={() => setMode('nebula')}
            className={`px-2.5 py-1 rounded-lg transition-all text-[11px] ${
              mode === 'nebula'
                ? 'bg-primary text-white font-bold shadow-md'
                : 'text-text-muted hover:text-text-main hover:bg-surface-elevated'
            }`}
          >
            ✨ Nebula
          </button>
          <button
            type="button"
            onClick={() => setMode('orbital')}
            className={`px-2.5 py-1 rounded-lg transition-all text-[11px] ${
              mode === 'orbital'
                ? 'bg-primary text-white font-bold shadow-md'
                : 'text-text-muted hover:text-text-main hover:bg-surface-elevated'
            }`}
          >
            🪐 Keplerian
          </button>

          {/* Warp Booster */}
          <button
            type="button"
            onClick={() => setIsWarping(!isWarping)}
            className={`px-2.5 py-1 rounded-lg transition-all text-[11px] flex items-center gap-1 font-bold ${
              isWarping
                ? 'bg-cyan-500 text-black shadow-glow-cyan animate-pulse'
                : 'bg-surface-elevated text-text-main hover:bg-primary/20'
            }`}
            title="Accelerate celestial orbital velocity"
          >
            <span>{isWarping ? '⚡ WARP ACTIVE' : '⚡ Warp'}</span>
          </button>
        </div>

        <p className="text-[10px] text-text-subtle/80 hidden sm:block">
          Click & drag to tilt celestial orbital plane • Mouse parallax enabled
        </p>
      </div>
    </div>
  );
}
