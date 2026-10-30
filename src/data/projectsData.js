export const projectsData = [
  {
    id: "resumatch",
    title: "ResuMatch",
    subtitle: "AI-powered real-time ATS resume builder and career engine powered by Google Gemini AI API, sub-150ms semantic parsing, and live interactive DOM preview.",
    tagline: "\"Bridge the gap between raw candidate experience and machine-readable ATS resonance with real-time AI guidance.\"",
    category: "AI & Full-Stack",
    filterCategory: "ai-fullstack",
    engine: "Google Gemini AI API, Flask REST, Python 3.11 & Render",
    featured: true,
    badge: "🚀 Hackathon Project",
    rating: "4.9 ★",
    platforms: ["Cloud Web App", "REST Microservice API"],
    tags: ["Google Gemini AI", "Flask REST API", "Python 3.11", "NLP Parsing", "Render Cloud", "PostgreSQL", "Live DOM Preview"],
    caseStudyUrl: "/projects/resumatch",
    liveUrl: "https://resumatch-api-jkau.onrender.com/",
    githubUrl: "https://github.com/parthongit89/ResuMatch",
    coverImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80",
    stats: {
      latency: "<150ms Response",
      model: "Gemini AI 1.5",
      architecture: "REST Microservice",
      deployment: "Render WSGI"
    },
    problem: "Job applicants face harsh automated rejection from Applicant Tracking Systems (ATS) due to subtle semantic mismatches, unstructured PDF formatting, and omitted industry keywords. Existing commercial solutions either paywall fundamental feedback behind expensive monthly tiers or rely on slow, brittle keyword matchers that miss semantic nuance.",
    team: [
      {
        name: "Harshal Sonawane (Ghostofzenin08)",
        role: "Frontend Architecture, Live DOM Document Renderer, Semantic Scoring UI & Client-Side State Synchronization",
        github: "https://github.com/Ghostofzenin08"
      },
      {
        name: "Parth Sonavane (parthongit89)",
        role: "Google Gemini AI API Integration, RESTful WSGI Backend, Token Normalization Pipelines & Cloud Deployment",
        github: "https://github.com/parthongit89"
      }
    ],
    decisions: [
      {
        title: "Hybrid Semantic & Lexical Scoring Pipeline",
        detail: "Engineered a dual-stage scoring pipeline combining high-speed deterministic keyword vector extraction with Google Gemini AI contextual evaluation, delivering deep semantic alignment analysis in under 150 milliseconds."
      },
      {
        title: "Zero-Latency Client-Side DOM Preview Engine",
        detail: "Constructed an isolated document preview architecture that streams resume edits into an instant print-perfect typography canvas without requiring round-trip server recompilation."
      },
      {
        title: "CORS-Hardened Stateless REST Microservice",
        detail: "Architected the backend as a decoupled, stateless Flask REST API deployed on Render, facilitating drop-in integration with career portals, recruitment dashboards, and extension clients."
      }
    ],
    features: [
      "Gemini AI Contextual Gap Analysis: Pinpoints missing mission-critical frameworks, technical competencies, and impact verbs",
      "Dynamic ATS Compatibility Score: Computes quantifiable match percentages across skills, experience, and educational requirements",
      "Live Document Mirroring: Instant typography and styling synchronization with export to standard PDF formats",
      "Sub-150ms Semantic Parsing: Optimized tokenization and vector caching pipeline ensuring snappy developer feedback",
      "Security & Privacy Isolation: Ephemeral session processing safeguarding sensitive candidate personal data"
    ],
    learnings: "Orchestrating large language model inference alongside deterministic rule matrices revealed that hybrid heuristic gating dramatically reduces cloud token consumption while delivering faster, more trustworthy candidate feedback."
  },
  {
    id: "echo-of-dread",
    title: "Echo of Dread",
    subtitle: "Atmospheric 2D narrative mystery and time-loop puzzle game built in Godot Engine v4.7.2. Spacetime collapses every 30 seconds; cooperate with up to 5 holographic past Echoes across 50 hand-crafted chambers.",
    tagline: "\"You cannot escape alone in linear time. But within this loop, you are your own teammate.\"",
    category: "Flagship Indie Game",
    filterCategory: "game-dev",
    engine: "Godot Engine v4.7.2 / GDScript & GLSL Shaders",
    featured: true,
    badge: "⭐ itch.io Release",
    rating: "5.0 ★",
    platforms: ["Play in Browser (HTML5)", "Desktop (Windows EXE)", "Mobile Touch Controls"],
    tags: ["Godot 4.7", "GDScript", "itch.io Release", "Time-Loop", "GLSL Shaders", "50 Chambers", "394 Tests Passed", "State Machines"],
    caseStudyUrl: "/projects/echo-of-dread",
    itchUrl: "https://zeninxparth.itch.io/echo-of-dread",
    liveUrl: "https://ghostofzenin08.github.io/Echo_of_Dread/",
    githubUrl: "https://github.com/Ghostofzenin08/Echo_of_Dread",
    coverImage: "https://img.itch.zone/aW1nLzMxMjE4NzQzLnBuZw==/508x254%23mb/IUqphs.png",
    thumbnail: "https://img.itch.zone/aW1nLzMxMjE4NzQzLnBuZw==/315x250%23c/qVfMVd.png",
    stats: {
      chambers: "50 Chambers",
      sectors: "5 Sectors",
      loopTime: "30s (15s Fast Toggle)",
      echoLimit: "Up to 5 Echoes",
      tests: "394 / 394 Passed"
    },
    problem: "Linear puzzle games frequently suffer from one-dimensional solutions and passive trial-and-error. For Echo of Dread, the core challenge was designing a deep causal system where time rewinds every 30 seconds, yet the player must choreograph up to 5 historical versions of themselves simultaneously across laser grids, capacitor relays, and pressure plates without causal jitter, memory leakage, or frustrating downtime.",
    team: [
      {
        name: "Harshal Sonawane (Ghostofzenin08 / oldest_dream)",
        role: "Game Director, Time-Loop State Machines, Chamber Blueprint Design, Causal Interaction Systems & Godot Architecture",
        github: "https://github.com/Ghostofzenin08"
      },
      {
        name: "Parth Sonawane (parthongit89)",
        role: "GLSL Rewind Post-Processing Shaders, Dynamic Audio Bus Filtering, Headless Automated CI Test Runner",
        github: "https://github.com/parthongit89"
      }
    ],
    decisions: [
      {
        title: "Deterministic Trajectory Recording & Hermite Interpolation",
        detail: "Engineered ActionRecorder using timestamped vector snapshots and cubic Hermite interpolation. This ensures that when an Echo replays your past run, its spatial trajectory and physics collisions remain deterministically exact regardless of device frame pacing or tick jitter."
      },
      {
        title: "Adaptive Chronal Pacing (15s Fast-Loop System)",
        detail: "In early onboarding levels (Chambers 1–5), waiting 30 full seconds caused pacing friction. We implemented an on-the-fly 15-second fast loop duration toggle via [T] or HUD, accelerating onboarding before standard 30s loops in Chamber 6+ and manual rewind [R] at Chamber 11."
      },
      {
        title: "Sensory GLSL Rewind Shaders & Frequency Filtering",
        detail: "When spacetime collapses or the player executes a temporal rewind, custom GLSL shaders trigger chromatic aberration, horizontal scanline distortion, and CRT phosphor decay, coupled with low-pass Godot audio sweeps for tactile disorienting feedback."
      },
      {
        title: "Automated Headless Test Suite (394 Passed)",
        detail: "Implemented an automated test runner executing 394 headless unit and integration tests covering singleton lifecycles, loop resets, capacitor logic, and the Omega Wing Chamber 50 singularity door."
      }
    ],
    features: [
      "The 30-Second Causal Curve: Spacetime collapses every 30s, snapping the researcher back to the chamber origin",
      "Autonomous Holographic Echoes: Up to 5 concurrent ghosts replaying recorded footsteps and switch presses",
      "50 Hand-Crafted Chambers: Divided into 5 scaling sectors (Alpha, Beta, Gamma, Delta, and Omega Wing)",
      "Dynamic Hazards: Roaming security drones, timed capacitor countdown gates, and multi-lock laser grids",
      "Tactile Camera Trauma: Procedural trauma shake with velocity lookahead and directional dampening",
      "Decoded Story Logs: 10 hidden research audio transcripts unraveling Dr. Aris Thorne's Singularity Core experiments",
      "Cross-Platform Support: Seamless desktop keyboard controls + on-screen virtual joystick and touch HUD for mobile web"
    ],
    learnings: "Mastering temporal paradox management in GDScript proved that game state must be strictly decoupled from entity rendering. Clear visual and acoustic timeline feedback transformed cognitive friction into rewarding Eureka moments for players."
  },
  {
    id: "3d-galactic-model",
    title: "3D Galactic Model",
    subtitle: "Astrophysics simulation modeling n-body galactic gravitational dynamics, stellar cluster rotation curves, and 3D orbital trajectory propagation rooted in aerospace engineering principles.",
    tagline: "\"Bringing aerospace orbital dynamics and celestial mechanics to life through computational astrophysics.\"",
    category: "Astrophysics & Simulation",
    filterCategory: "astrophysics",
    engine: "Python 3.11, NumPy, SciPy, Matplotlib 3D & WebGL Canvas",
    featured: true,
    badge: "🌌 Aerospace Rigor",
    rating: "5.0 ★",
    platforms: ["Python Scientific Script", "Interactive Web Simulation"],
    tags: ["Aerospace Engineering", "Orbital Mechanics", "N-Body Dynamics", "NumPy", "Astrophysics", "Vector Math", "Keplerian Orbits"],
    caseStudyUrl: "/projects/3d-galactic-model",
    liveUrl: "https://ghostofzenin08.github.io/ZeninxParth-Lab/#/projects/3d-galactic-model",
    githubUrl: "https://github.com/Ghostofzenin08/3D-Galactic-Model",
    coverImage: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&q=80",
    stats: {
      bodies: "10,000+ Stellar Particles",
      solver: "Runge-Kutta 4th Order",
      physics: "Gravitational N-Body",
      domain: "Aerospace & Celestial"
    },
    problem: "Understanding galactic arm formation and orbital precession requires computationally intensive numerical integration of gravitational interactions across thousands of celestial bodies. Classical two-body Keplerian approximations fail to capture differential galactic rotation curves and dark matter halo gravitational potential fields.",
    team: [
      {
        name: "Harshal Sonawane (Ghostofzenin08)",
        role: "Lead Researcher & Author: Gravitational Vector Mathematics, Numerical Integrators, Orbital Mechanics Algorithms & 3D Visualization",
        github: "https://github.com/Ghostofzenin08"
      }
    ],
    decisions: [
      {
        title: "Vectorized Gravitational Field Calculations with NumPy",
        detail: "Leveraged vectorized tensor broadcasts in NumPy to compute pair-wise gravitational forces, accelerating simulation throughput by orders of magnitude compared to standard nested iteration."
      },
      {
        title: "Symplectic & Runge-Kutta Numerical Integration",
        detail: "Implemented 4th-order Runge-Kutta (RK4) alongside Verlet symplectic integration schemes to conserve angular momentum and total system energy across prolonged orbital epochs."
      },
      {
        title: "Dark Matter Halo & Accretion Potential Modeling",
        detail: "Integrated Navarro-Frenk-White (NFW) gravitational potential models to reproduce realistic flat galactic rotation curves matching real astronomical observations."
      }
    ],
    features: [
      "N-Body Gravitational Dynamics: Simulates gravitational interactions between core singularities and spiral disk stars",
      "Differential Galactic Rotation: Demonstrates density wave theory and spiral arm persistence",
      "Keplerian Orbital Parametrization: True anomaly, eccentricity vectors, semi-major axis, and inclination calculations",
      "3D Spatial Projection: Interactive spherical coordinate rotations and perspective camera control",
      "Energy Conservation Telemetry: Real-time tracking of kinetic, potential, and total mechanical energy"
    ],
    learnings: "Connecting aerospace astrodynamics equations directly into high-throughput numerical computing proved that numerical stability and symplectic energy conservation dictate the visual realism of simulated galaxies."
  },
  {
    id: "meteor-space-dodge",
    title: "Meteor Space Dodge",
    subtitle: "High-velocity arcade space survival game. Dodge procedural asteroid clusters, master continuous vector thrust inertia, and battle for the global Neon PostgreSQL leaderboard.",
    tagline: "\"Survive the meteor swarm. Navigate vector gravity, time your thrusters, and top the leaderboard.\"",
    category: "Indie Game & Physics",
    filterCategory: "game-dev",
    engine: "Python 3.11 / Pygame, Vector Kinematics & Neon DB",
    featured: true,
    badge: "⚡ High Velocity",
    rating: "4.8 ★",
    platforms: ["Windows Standalone EXE", "Play in Browser (Web Arcade)"],
    tags: ["itch.io Release", "Python 3.11", "Pygame", "Vector Math", "Particle Systems", "Neon DB", "PyInstaller"],
    caseStudyUrl: "/projects/meteor-space-dodge",
    itchUrl: "https://zeninxparth.itch.io/meteor-space-dodge",
    liveUrl: "https://zenin-x-parth.vercel.app/",
    githubUrl: "https://github.com/Ghostofzenin08/Meteor-Space-Dodge",
    coverImage: "https://img.itch.zone/aW1nLzI5OTgxMzU0LnBuZw==/315x250%23c/I8394j.png",
    thumbnail: "https://img.itch.zone/aW1nLzI5OTgxMzU0LnBuZw==/315x250%23c/I8394j.png",
    stats: {
      framerate: "60 FPS Locked",
      particles: "300+ Active",
      physics: "Continuous Vector Kinematics",
      scoreSync: "Real-Time Cloud"
    },
    problem: "Creating an engaging arcade survival game requires responsive sub-frame input response and fair procedural obstacle generation so difficulty ramps smoothly without feeling arbitrary, while maintaining continuous vector inertia without computational stutters.",
    team: [
      {
        name: "Harshal Sonawane",
        role: "Player Flight Kinematics, Vector Inertia Simulation, Procedural Asteroid Density & Custom Particle Emitters",
        github: "https://github.com/Ghostofzenin08"
      },
      {
        name: "Parth Sonawane",
        role: "Cloud Leaderboard Serialization, Database Endpoints & Windows Desktop PyInstaller Toolchain",
        github: "https://github.com/parthongit89"
      }
    ],
    decisions: [
      {
        title: "Continuous Vector Flight Kinematics",
        detail: "Engineered sub-pixel velocity vectors with directional thrust damping, capturing the realistic feel of spacecraft maneuvering in microgravity."
      },
      {
        title: "Corridor-Safe Procedural Swarms",
        detail: "Programmed a density ramp function that spawns asteroid swarms with non-overlapping safe corridors, rewarding reflex precision over pure luck."
      },
      {
        title: "Lightweight Particle Engine",
        detail: "Engineered a low-overhead particle emitter for ship thruster fire, dust trails, and explosion debris running at a locked 60 FPS."
      }
    ],
    features: [
      "Dynamic asteroid waves with randomized vector trajectories and angular velocities",
      "Player inertia physics with realistic thrust drift and boundary reflection",
      "Real-time cloud high-score sync with Neon Serverless Postgres",
      "Tactile visual audio feedback with screen shake and particle bursts",
      "Windows desktop standalone binary distribution packaged with PyInstaller"
    ],
    learnings: "Fine-tuning inertia damping coefficients reinforced that microgravity controls must strike an exact balance between physical accuracy and arcade immediacy."
  },
  {
    id: "blockrush-2048",
    title: "BlockRush 2048",
    subtitle: "A modern algebraic 2048 puzzle experience engineered for calculative thinkers with dynamic grid matrix progression (2x2 to 12x12), state rollback, and cloud leaderboards.",
    tagline: "\"2048 advanced Python game engineered for mathematics and calculative thinkers.\"",
    category: "Indie Game & Math",
    filterCategory: "game-dev",
    engine: "Python 3.11 / Pygame, Matrix Algebra & Neon Postgres",
    featured: false,
    badge: "🔥 itch.io Release",
    rating: "4.9 ★",
    platforms: ["Play in Browser", "Windows Standalone EXE"],
    tags: ["itch.io Release", "Python 3.11", "Pygame", "Neon PostgreSQL", "Custom Grids", "Matrix Math", "State Rollback"],
    caseStudyUrl: "/projects/blockrush-2048",
    itchUrl: "https://zeninxparth.itch.io/blockrush-2048",
    liveUrl: "https://zenin-x-parth.vercel.app/",
    githubUrl: "https://github.com/Ghostofzenin08/BlockRush_2048",
    coverImage: "https://img.itch.zone/aW1nLzI5OTgxMjIwLnBuZw==/315x250%23c/lm7Yb3.png",
    thumbnail: "https://img.itch.zone/aW1nLzI5OTgxMjIwLnBuZw==/315x250%23c/lm7Yb3.png",
    stats: {
      gridSizes: "2x2 to 12x12",
      framerate: "60 FPS Native",
      dbLatency: "<100ms Neon Cloud",
      platforms: "Web & Windows"
    },
    problem: "Standard 2048 clones are confined to a rigid 4x4 grid with no undo capability or cross-platform cloud score persistence. We wanted an expandable math puzzle playground supporting custom dimensions, state rollbacks, and instant desktop executables.",
    team: [
      {
        name: "Harshal Sonawane",
        role: "Grid Algebra & Matrix Transformation Algorithms, UI Theme Engine, SFX Synthesis",
        github: "https://github.com/Ghostofzenin08"
      },
      {
        name: "Parth Sonawane",
        role: "Database Leaderboard API, Cloud Authentication Sync, Packaging & Distribution",
        github: "https://github.com/parthongit89"
      }
    ],
    decisions: [
      {
        title: "Dynamic Grid Matrix Scaling",
        detail: "Constructed an adaptive matrix rendering formula that recomputes tile dimensions, font sizes, and border paddings dynamically for boards from 2x2 up to 12x12 without graphical clipping."
      },
      {
        title: "State Rollback Stack (Undo)",
        detail: "Implemented an in-memory stack preserving matrix states and score differentials, allowing player undos without desynchronizing the board."
      }
    ],
    features: [
      "Dynamic board sizing: configure any grid dimensions from 2x2 up to 12x12",
      "Cloud-synced global leaderboards powered by Neon PostgreSQL",
      "Adaptive font scaling and custom obsidian cyber aesthetics",
      "Full standalone Windows EXE build packaged with PyInstaller",
      "Instant state undo system to test theoretical tile combinations"
    ],
    learnings: "Designing matrix transformations for variable dimensions reinforced the power of decoupled mathematical models from visual layout coordinates."
  },
  {
    id: "snipy",
    title: "Snipy",
    subtitle: "High-speed developer snippet capture and productivity browser extension for instant code capture, syntax tagging, and markdown export directly from documentation pages.",
    tagline: "\"Never lose a critical code snippet again — instant capture, tagging, and keyboard-first retrieval.\"",
    category: "Developer Tools & UI",
    filterCategory: "tools-ui",
    engine: "JavaScript (ES6+), Chrome Extension Manifest V3, Web Storage API",
    featured: false,
    badge: "⚡ Browser Extension",
    rating: "4.8 ★",
    platforms: ["Chrome Extension (Manifest V3)", "Brave / Edge Browser"],
    tags: ["JavaScript", "Chrome Manifest V3", "Browser Extension", "Productivity", "Web Storage API", "Markdown"],
    caseStudyUrl: "/projects/snipy",
    liveUrl: "https://github.com/Ghostofzenin08/Snipy",
    githubUrl: "https://github.com/Ghostofzenin08/Snipy",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    stats: {
      standard: "Manifest V3",
      activation: "<50ms Hotkey",
      storage: "Local Encrypted",
      export: "Markdown & JSON"
    },
    problem: "Developers frequently encounter elegant solutions across documentation, StackOverflow threads, and GitHub issues, but lose track of them because bookmarking whole pages creates digital clutter and context switching.",
    team: [
      {
        name: "Harshal Sonawane (Ghostofzenin08)",
        role: "Extension Architecture, Manifest V3 Background Service Workers, Content Script Injection & Storage Engine",
        github: "https://github.com/Ghostofzenin08"
      }
    ],
    decisions: [
      {
        title: "Manifest V3 Compliant Background Workers",
        detail: "Engineered service worker message passing adhering strictly to Chrome's modern Manifest V3 lifecycle requirements for zero background memory leaks."
      },
      {
        title: "Keyboard-First Quick Capture Modal",
        detail: "Designed a lightweight floating HUD activated via global shortcuts that captures highlighted DOM selection, detects programming language, and auto-tags."
      }
    ],
    features: [
      "Instant Selection Snag: Highlights and grabs code with formatted syntax indentation intact",
      "Automatic Language Detection: Identifies Python, JavaScript, GDScript, Rust, C++, and Bash",
      "Tag Taxonomy: Organize snippets by project, framework, or utility category",
      "One-Click Copy & Markdown Export: Flawless markdown code-fence formatting for GitHub and Obsidian",
      "Offline Local Storage: Fast, private storage with zero external tracking or network dependence"
    ],
    learnings: "Mastering Manifest V3 service worker lifecycles and content script DOM isolation provided deep insight into secure browser runtime sandboxes."
  },
  {
    id: "game-development-hub",
    title: "Game Development Showcase Hub",
    subtitle: "Interactive gaming portal and architecture documentation platform highlighting modular game loops, collision math, and spatial hashing patterns in Python & Pygame.",
    tagline: "\"Documenting modular game loops, collision math, and spatial hashing patterns in Python.\"",
    category: "Full-Stack Web & Game Dev",
    filterCategory: "game-dev",
    engine: "React, Vite, Tailwind CSS, Web Audio API & Vercel",
    featured: false,
    badge: "🌐 Web Portal",
    rating: "4.9 ★",
    platforms: ["Interactive Web Hub", "Desktop"],
    tags: ["React", "Vite", "Tailwind CSS", "Pygame", "Vector Math", "Vercel", "Web Audio API"],
    caseStudyUrl: "/projects/game-development-hub",
    liveUrl: "https://game-development-in-python.vercel.app/",
    githubUrl: "https://github.com/parthongit89/Game--Development-In-Python",
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
    stats: {
      games: "5+ Showcase Engines",
      stack: "React + Pygame Core",
      audio: "Web Audio Synthesizer",
      hosting: "Vercel Edge"
    },
    problem: "Documenting and structuring game development learning experiments into reusable architectures is difficult. This repository and companion documentation platform showcase modular Pygame games, collision math, and design patterns.",
    team: [
      {
        name: "Harshal Sonawane",
        role: "Gameplay Logistics, Sprite State Machines, Collision Algorithms & Physics Modeling",
        github: "https://github.com/Ghostofzenin08"
      },
      {
        name: "Parth Sonawane",
        role: "Modular File Structure, Packaging, and Web Documentation Hub",
        github: "https://github.com/parthongit89"
      }
    ],
    decisions: [
      {
        title: "Entity-Component Architecture Separation",
        detail: "Separated rendering logic from game state models so games share a unified delta-time tick loop across environments."
      },
      {
        title: "Interactive Web Documentation",
        detail: "Coupled executable Python engines with a responsive web portal allowing developers to inspect source code and architectural decisions."
      }
    ],
    features: [
      "Modular Pygame Architecture: Reusable classes for input handling, sprite animation, and camera tracking",
      "Continuous Collision Mathematics: Raycasts and AABB bounding box collision solvers",
      "Interactive Web Portal: Fast search and responsive game showcases hosted on Vercel",
      "Procedural SFX Generators: Synthesizer algorithms generating retro 8-bit sound effects"
    ],
    learnings: "Deepened our mastery of frame-independent delta-time loops, spatial hashing for collision detection, and clean object-oriented game architecture."
  },
  {
    id: "modern-auth-ui",
    title: "Modern Auth UI System",
    subtitle: "Glassmorphic responsive authentication interface system with smooth state transitions, accessible form validation, and dark cyber aesthetics.",
    tagline: "\"Elevating developer onboarding through refined glassmorphic aesthetics and fluid micro-interactions.\"",
    category: "Developer Tools & UI",
    filterCategory: "tools-ui",
    engine: "HTML5, Modern CSS3, JavaScript (ES6+) & Glassmorphic Design",
    featured: false,
    badge: "✨ Glassmorphic UI",
    rating: "4.8 ★",
    platforms: ["Responsive Web (Desktop & Mobile)"],
    tags: ["CSS3 Glassmorphism", "JavaScript", "HTML5", "Responsive Design", "Micro-Interactions", "Form Validation"],
    caseStudyUrl: "/projects/modern-auth-ui",
    liveUrl: "https://github.com/Ghostofzenin08/Login-Register-Website-",
    githubUrl: "https://github.com/Ghostofzenin08/Login-Register-Website-",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    stats: {
      performance: "100 Lighthouse Score",
      design: "Glassmorphism & Neon",
      responsive: "Mobile, Tablet, 4K",
      dependencies: "Zero Overhead"
    },
    problem: "Authentication screens are often treated as an afterthought with generic forms and jarring state changes. Modern web users demand immediate feedback, responsive glassmorphic depth, and seamless transitions between login and registration.",
    team: [
      {
        name: "Harshal Sonawane (Ghostofzenin08)",
        role: "UI/UX Designer & Frontend Engineer: Glassmorphism Styling, Responsive CSS, State Logic & Interactive Micro-Animations",
        github: "https://github.com/Ghostofzenin08"
      }
    ],
    decisions: [
      {
        title: "Pure CSS Backdrop Filter Stacking",
        detail: "Implemented multi-layered CSS backdrop-filter blur and gradient border strokes to achieve high-depth glassmorphism with high render performance."
      },
      {
        title: "Zero-Dependency Accessibility",
        detail: "Wrote lightweight vanilla JavaScript event handlers for animated input label floating, password visibility toggles, and regex validation."
      }
    ],
    features: [
      "Fluid Tab Flipping: Smooth 3D-inspired flip between Sign In and Sign Up modes",
      "Real-Time Input Validation: Immediate visual cues for email formatting and password strength criteria",
      "Adaptive Mobile Layout: Touch-optimized input targets and responsive viewport scaling",
      "Dark Cyber Accents: Neon glow focus rings and polished glass textures"
    ],
    learnings: "Mastering CSS hardware acceleration and backdrop blur rendering demonstrated that pure vanilla web standards can produce elite UI polish without heavy third-party framework overhead."
  }
];
