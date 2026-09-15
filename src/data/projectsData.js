export const projectsData = [
  {
    id: "zenin-x-parth",
    title: "ZeninXParth Gaming Platform",
    subtitle: "Cyber-arcade indie hub featuring real-time PostgreSQL score sync, WebGL binaries, and Firebase OAuth.",
    category: "Full-Stack Web & Game Client",
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
    id: "resumatch",
    title: "Resumatch API",
    subtitle: "Algorithmic resume and job description matching engine with deterministic semantic scoring logic.",
    category: "Backend API & NLP",
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
    id: "enhanced-pong",
    title: "Enhanced Pong Game",
    subtitle: "Modernized recreation of the iconic arcade classic with responsive physics and refined UX.",
    category: "Game Development & Frontend",
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
    id: "python-games",
    title: "Game Development in Python",
    subtitle: "A curated suite of desktop arcade games, physics engines, and procedural experiments built with Pygame.",
    category: "Game Dev & Research",
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
