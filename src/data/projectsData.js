export const projectsData = [
  {
    id: "echo-of-dread",
    title: "Echo of Dread",
    subtitle: "2D top-down sci-fi time-loop puzzle game built with Godot Engine v4.7.2. Spacetime collapses every 30 seconds; record past actions and cooperate with up to 5 holographic past Echoes across 50 chambers.",
    tagline: "\"You cannot escape alone in linear time. But within this loop, you are your own teammate.\"",
    category: "Flagship Indie Game • Time-Loop Puzzle",
    engine: "Godot Engine v4.7.2 / GDScript",
    featured: true,
    badge: "⭐ Featured on itch.io",
    rating: "5.0 ★",
    platforms: ["Play in Browser", "Desktop (Windows)", "Mobile Touch Controls"],
    tags: ["Godot 4.7", "GDScript", "itch.io Verified", "Time-Loop", "GLSL Shaders", "50 Chambers", "394 Tests Passed"],
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
        detail: "Implemented an automated test runner (`scenes/test/test_runner.gd`) executing 394 headless unit and integration tests covering singleton lifecycles, loop resets, capacitor logic, and the Omega Wing Chamber 50 singularity door."
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
    sectors: [
      { name: "Sector 1: Alpha Wing", chambers: "Chambers 1–10", theme: "Facility Calibration, onboarding fast loops, baseline pressure plates & laser mechanics." },
      { name: "Sector 2: Beta Wing", chambers: "Chambers 11–20", theme: "Manual Rewind unlocked [R], synchronized dual relays, capacitor drains." },
      { name: "Sector 3: Gamma Wing", chambers: "Chambers 21–30", theme: "Active Security Drone patrols, line-of-sight evasion, tri-echo coordination." },
      { name: "Sector 4: Delta Wing", chambers: "Chambers 31–40", theme: "Complex logic inversion gates, rapid capacitor relays, multi-tier locks." },
      { name: "Sector 5: Omega Wing", chambers: "Chambers 41–50", theme: "Singularity Core convergence, 5-Echo choreography, master singularity puzzle." }
    ],
    controls: [
      { action: "Movement", pc: "W, A, S, D / Arrow Keys", touch: "Virtual Joystick", desc: "Walk researcher across chamber" },
      { action: "Interact", pc: "E / Space / Enter", touch: "[ACT] Button", desc: "Toggle switch, press button, or read log" },
      { action: "Early Loop Pacing", pc: "T", touch: "[15s / 30s] Button", desc: "Toggle 15s fast / 30s standard loop (Chambers 1–5)" },
      { action: "Rewind Loop", pc: "R", touch: "[REWIND] Button", desc: "Instantly collapse loop & spawn new Echo (Chamber 11+)" },
      { action: "Clear Echoes", pc: "C / Backspace", touch: "[CLEAR] Button", desc: "Purge all historical recordings and restart at Loop #1" },
      { action: "Pause / Menu", pc: "Escape / P", touch: "[ || ] Button", desc: "Open pause menu or dismiss lore modal" }
    ],
    learnings: "Mastering temporal paradox management in GDScript proved that game state must be strictly decoupled from entity rendering. Clear visual and acoustic timeline feedback transformed cognitive friction into rewarding Eureka moments for players."
  },
  {
    id: "blockrush-2048",
    title: "BlockRush 2048",
    subtitle: "A sleek, modern 2048 puzzle experience with dynamic grid progression (2x2 to 12x12), smooth animations, procedural audio, and cloud-synced leaderboards.",
    tagline: "\"2048 advanced Python game engineered for mathematics and calculative thinkers.\"",
    category: "Indie Game • Math Puzzle",
    engine: "Python 3.11 / Pygame & Neon Postgres",
    featured: true,
    badge: "🔥 Popular on itch.io",
    rating: "4.9 ★",
    platforms: ["Play in Browser", "Windows Standalone EXE"],
    tags: ["itch.io Release", "Python 3.11", "Pygame", "Neon PostgreSQL", "Custom Grids", "Cloud Sync"],
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
    id: "meteor-space-dodge",
    title: "Meteor Space Dodge",
    subtitle: "High-velocity arcade space survival game. Dodge procedural asteroid clusters, survive velocity ramps, and battle for the global Neon DB leaderboard.",
    tagline: "\"Survive the meteor crash. Navigate vector gravity, time your thrusts, and top the leaderboard.\"",
    category: "Indie Game • Arcade Action",
    engine: "Python 3.11 / Pygame",
    featured: true,
    badge: "⚡ High Velocity",
    rating: "4.8 ★",
    platforms: ["Windows Standalone EXE", "Web Arcade"],
    tags: ["itch.io Release", "Python 3.11", "Pygame", "Vector Math", "Particle Systems", "Neon DB"],
    caseStudyUrl: "/projects/meteor-space-dodge",
    itchUrl: "https://zeninxparth.itch.io/meteor-space-dodge",
    liveUrl: "https://zenin-x-parth.vercel.app/",
    githubUrl: "https://github.com/Ghostofzenin08/Meteor-Space-Dodge",
    coverImage: "https://img.itch.zone/aW1nLzI5OTgxMzU0LnBuZw==/315x250%23c/I8394j.png",
    thumbnail: "https://img.itch.zone/aW1nLzI5OTgxMzU0LnBuZw==/315x250%23c/I8394j.png",
    stats: {
      framerate: "60 FPS Locked",
      particles: "300+ Active",
      physics: "Continuous Vector Math",
      scoreSync: "Real-time"
    },
    problem: "Creating an engaging arcade survival game requires responsive sub-frame input response and fair procedural obstacle generation so difficulty increases without feeling arbitrary or impossible.",
    team: [
      {
        name: "Harshal Sonawane",
        role: "Player Physics, Vector Inertia Simulation, Procedural Asteroid Density & Particle Effects",
        github: "https://github.com/Ghostofzenin08"
      },
      {
        name: "Parth Sonawane",
        role: "Leaderboard API Integration, High-Score Serialization, Windows EXE Toolchain",
        github: "https://github.com/parthongit89"
      }
    ],
    decisions: [
      {
        title: "Procedural Asteroid Clustering",
        detail: "Programmed a density ramp function that spawns asteroid swarms with non-overlapping safe corridors, rewarding reflex precision over pure luck."
      },
      {
        title: "Reusable Particle Physics Engine",
        detail: "Engineered a low-overhead particle emitter for ship thruster fire, dust trails, and explosion debris running at a locked 60 FPS."
      }
    ],
    features: [
      "Dynamic asteroid waves with randomized vector trajectories and velocities",
      "Player inertia physics with realistic thrust drift and boundary reflection",
      "Real-time cloud high-score sync with Neon Serverless Postgres",
      "Responsive visual audio feedback with screen shake and particle bursts",
      "Windows desktop standalone binary distribution"
    ],
    learnings: "Tuning inertia damping factors taught us how subtle changes in sub-pixel acceleration drastically affect player immersion and control confidence."
  },
  {
    id: "zenin-x-parth",
    title: "ZeninXParth Gaming Platform",
    subtitle: "Cyber-arcade indie hub featuring real-time PostgreSQL score sync, WebGL binaries, and Firebase OAuth.",
    tagline: "\"Bridging indie Python game engines with modern serverless cloud leaderboards.\"",
    category: "Full-Stack Web & Game Client",
    engine: "React, Tailwind, Flask 3.0 & Neon Postgres",
    featured: false,
    badge: "Cloud Platform",
    rating: "4.9 ★",
    platforms: ["Web Browser"],
    tags: ["React", "Tailwind CSS", "Firebase Auth", "Flask 3.0", "Neon PostgreSQL", "Pygame"],
    caseStudyUrl: "/projects/zenin-x-parth",
    liveUrl: "https://zenin-x-parth.vercel.app/",
    githubUrl: "https://github.com/parthongit89/ZeninXParth",
    problem: "Indie games built with Python and Pygame typically stay confined to local machines or obscure ZIP releases. We wanted an ultra-fast web showcase that unites playable web releases, downloadable standalone Windows EXEs, authenticated cloud leaderboards, and developer analytics in one cohesive obsidian cyber-arcade platform.",
    team: [
      {
        name: "Harshal Sonawane (Ghostofzenin / oldest_dream)",
        role: "Game Logistics, UI/UX Design System, Frontend Architecture, Game Engine Physics & Research",
        github: "https://github.com/Ghostofzenin08"
      },
      {
        name: "Parth Sonawane (parthongit89)",
        role: "Backend REST APIs, Cloud Database Schema, Production WSGI Deployment & Integration",
        github: "https://github.com/parthongit89"
      }
    ],
    decisions: [
      {
        title: "Dual Client Architecture",
        detail: "Engineered an ultra-responsive web client (HTML5/CSS3/React) for instant browser preview and a native Python/Pygame client for peak 60 FPS deterministic hardware-accelerated physics on Windows."
      },
      {
        title: "Serverless Database with Neon PostgreSQL",
        detail: "Chose Render WSGI with Flask 3.0 and Neon Serverless PostgreSQL to support instant database branching, millisecond query times, and frictionless cross-client leaderboards."
      },
      {
        title: "Decoupled Authentication & Local Fallbacks",
        detail: "Integrated Firebase Google OAuth for web pilots with graceful offline JSON persistence for the desktop Pygame client during offline gaming."
      }
    ],
    features: [
      "Dynamic 2048 grids (2x2 to 12x12) with adaptive font sizing in BlockRush",
      "High-velocity meteor cluster generation with continuous vector flight simulation in Meteor Dodge",
      "Global cross-platform cloud score persistence via Neon Postgres",
      "Obsidian dark cyber-aesthetic with red visual accent tokens (#ff0207)",
      "Zero-latency audio synthesis for tile merges and impact feedback"
    ],
    learnings: "Architecting a hybrid game distribution system proved that lightweight web clients paired with decoupled serverless databases yield instant engagement without sacrificing desktop engine performance."
  },
  {
    id: "enhanced-pong",
    title: "Enhanced Pong Game",
    subtitle: "Modernized recreation of the iconic arcade classic with responsive canvas physics, adaptive AI, and refined tactile feedback.",
    tagline: "\"Old school arcade reflex challenge reborn with fluid 60 FPS vector physics.\"",
    category: "Game Development & Frontend",
    engine: "HTML5 Canvas, JavaScript & React",
    featured: false,
    badge: "Arcade Classic",
    rating: "4.7 ★",
    platforms: ["Web Browser", "Mobile Touch"],
    tags: ["React", "JavaScript", "HTML5 Canvas", "Tailwind CSS", "Vercel"],
    caseStudyUrl: "/projects/enhanced-pong",
    liveUrl: "https://enhanced-pong-game.vercel.app/",
    githubUrl: "https://github.com/Ghostofzenin08/pong",
    problem: "Classic Pong implementations are often static, laggy, or lack modern interactive polish. The goal was to build a fluid, 60 FPS web game combining nostalgic mechanics with modern tactile audio-visual feedback and adaptive paddle AI.",
    team: [
      {
        name: "Harshal Sonawane",
        role: "Game Engine Mechanics, Ball Vector Dynamics, AI Difficulty Tuning & Frontend UI",
        github: "https://github.com/Ghostofzenin08"
      },
      {
        name: "Parth Sonawane",
        role: "Performance Profiling, Web Lifecycle Optimization & Deployment",
        github: "https://github.com/parthongit89"
      }
    ],
    decisions: [
      {
        title: "Dynamic Angle Calculation",
        detail: "Implemented paddle segment contact physics so deflection angles vary dynamically depending on impact proximity to the paddle edge."
      },
      {
        title: "Predictive AI Logic",
        detail: "Gave the AI paddle reactive latency to prevent unfair mechanical perfection, creating authentic arcade rivalry."
      }
    ],
    features: [
      "Smooth 60 FPS requestAnimationFrame rendering loop",
      "Deflection-based acceleration curve for high-stakes volleys",
      "Dynamic score tracking and winner declaration screen",
      "Touch controls for mobile alongside classic desktop keyboard binds"
    ],
    learnings: "Mastering canvas coordinate scaling and frame rate stabilization ensured crisp gameplay across retina displays and mobile phones alike."
  },
  {
    id: "resumatch",
    title: "Resumatch API",
    subtitle: "Algorithmic resume and job description matching engine with deterministic semantic scoring logic and fast REST endpoints.",
    tagline: "\"Sub-150ms semantic parsing and ATS relevance scoring microservice.\"",
    category: "Backend API & NLP",
    engine: "Python, Flask 3.0 & Render",
    featured: false,
    badge: "REST Microservice",
    rating: "4.8 ★",
    platforms: ["REST API", "Cloud Service"],
    tags: ["Python", "Flask", "REST API", "NLP", "Render", "PostgreSQL"],
    caseStudyUrl: "/projects/resumatch",
    liveUrl: "https://resumatch-api-jkau.onrender.com/",
    githubUrl: "https://github.com/parthongit89/ResuMatch",
    problem: "Job seekers and recruiters frequently waste hours screening resumes against dense job descriptions. Resumatch API was engineered to provide a lightning-fast, transparent parsing and relevance scoring service without the overhead of heavy proprietary ATS platforms.",
    team: [
      {
        name: "Harshal Sonawane",
        role: "API Spec Design, Data Normalization Pipelines & Client Integration UI",
        github: "https://github.com/Ghostofzenin08"
      },
      {
        name: "Parth Sonawane",
        role: "Core NLP Heuristics, Scoring Algorithm & WSGI Deployment",
        github: "https://github.com/parthongit89"
      }
    ],
    decisions: [
      {
        title: "Lightweight Semantic Tokenizer",
        detail: "Opted for efficient keyword vectors and weighted semantic token overlap instead of resource-heavy transformer models, allowing 99.9% uptime on cost-effective Render tiers."
      },
      {
        title: "Strict JSON Schema Contracts",
        detail: "Standardized request/response interfaces for simple drop-in integration into any frontend or career-board microservice."
      }
    ],
    features: [
      "Automated text extraction from raw resumes and markdown descriptions",
      "Multi-category match scoring (Skills, Frameworks, Experience, Education)",
      "Instant missing-keyword suggestion list for candidates",
      "CORS-enabled REST endpoints for web clients"
    ],
    learnings: "Achieved sub-150ms scoring response times by pruning unnecessary dependencies and relying on tuned lexical matching matrices."
  },
  {
    id: "python-games",
    title: "Game Development in Python",
    subtitle: "A curated suite of desktop arcade games, physics engines, and procedural experiments built with Pygame.",
    tagline: "\"Modular game loops, collision math, and spatial hashing patterns in Python.\"",
    category: "Game Dev & Research",
    engine: "Python 3.11 & Pygame",
    featured: false,
    badge: "Architecture Suite",
    rating: "4.9 ★",
    platforms: ["Desktop", "Open Source"],
    tags: ["Python 3.11", "Pygame", "Vector Math", "Arcade", "Algorithms"],
    caseStudyUrl: "/projects/python-games",
    liveUrl: "https://game-development-in-python.vercel.app/",
    githubUrl: "https://github.com/parthongit89/Game--Development-In-Python",
    problem: "Documenting and structuring game development learning experiments into reusable architectures is tough for students. This repository and companion documentation platform showcase modular Pygame games, collision math, and design patterns.",
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
        title: "Entity-Component Design Separation",
        detail: "Separated rendering logic from game state models so games like Meteor Dodge and Space Invaders share a unified game tick loop."
      },
      {
        title: "Cross-Platform PyInstaller Bundles",
        detail: "Configured automated executable packing so non-developers can play without installing Python."
      }
    ],
    features: [
      "Meteor Dodge: Procedural asteroid clustering with velocity ramp",
      "BlockRush 2048: Dynamic matrix size support with state rollback",
      "Modular sound player using procedural wave generation",
      "Reusable particle system for explosions and thruster exhausts"
    ],
    learnings: "Deepened our mastery of frame-independent delta-time loops, spatial hashing for collision detection, and clean object-oriented game architecture."
  }
];
