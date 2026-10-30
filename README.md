# Harshal Sonawane — Portfolio & Engineering Systems ⚡

An interactive, high-performance portfolio website for **Harshal Sonawane** ([@Ghostofzenin08](https://github.com/Ghostofzenin08)), showcasing 8 production-grade systems across **Aerospace Engineering Simulations**, **AI/ML Integrations**, **Indie Game Development**, and **Full-Stack Web Architectures**.

Built with **React 18**, **Three.js (WebGL 3D)**, **Tailwind CSS**, **Framer Motion**, and deployed automatically to **GitHub Pages**.

[![Live Portfolio](https://img.shields.io/badge/Live-Portfolio%20Site-ff0207?style=for-the-badge&logo=githubpages&logoColor=white)](https://ghostofzenin08.github.io/ZeninxParth-Lab)
[![GitHub](https://img.shields.io/badge/GitHub-Ghostofzenin08-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Ghostofzenin08)
[![itch.io](https://img.shields.io/badge/itch.io-ZeninXParth-FA5C5C?style=for-the-badge&logo=itch.io&logoColor=white)](https://zeninxparth.itch.io)

---

## 🚀 8 Featured Engineering Systems

| # | System | Domain / Stack | Key Metrics & Highlights | Links |
| :-: | :--- | :--- | :--- | :--- |
| **1** | **ResuMatch** | AI & Full-Stack<br>`Google Gemini AI, Flask REST, Render` | Real-time ATS resume builder & career engine, sub-150ms semantic parsing, live DOM preview | [Live App](https://resumatch-api-jkau.onrender.com) • [Code](https://github.com/parthongit89/ResuMatch) |
| **2** | **Echo of Dread** | Flagship Indie Game<br>`Godot 4.7.2, GDScript, GLSL` | 50 chambers, 30s causal curve, 5 simultaneous Echoes, GLSL rewind shaders, 394 CI tests passed | [itch.io](https://zeninxparth.itch.io/echo-of-dread) • [Web Sim](https://ghostofzenin08.github.io/Echo_of_Dread/) • [Code](https://github.com/Ghostofzenin08/Echo_of_Dread) |
| **3** | **3D Galactic Model** | Astrophysics & Aerospace<br>`Python, NumPy, SciPy, WebGL` | N-body gravitational dynamics, Keplerian orbital vectors, Runge-Kutta numerical integration | [Code](https://github.com/Ghostofzenin08/3D-Galactic-Model) • [Interactive Sim](https://ghostofzenin08.github.io/ZeninxParth-Lab/#/projects/3d-galactic-model) |
| **4** | **Meteor Space Dodge** | Indie Game & Kinematics<br>`Python 3.11, Pygame, Neon DB` | Continuous vector flight inertia, procedural asteroid swarms, 60 FPS locked, real-time leaderboard | [itch.io](https://zeninxparth.itch.io/meteor-space-dodge) • [Code](https://github.com/Ghostofzenin08/Meteor-Space-Dodge) |
| **5** | **BlockRush 2048** | Math & Game Engine<br>`Python 3.11, Pygame, Neon DB` | Dynamic 2x2 to 12x12 matrix math, state undo rollback stack, cloud PostgreSQL sync | [itch.io](https://zeninxparth.itch.io/blockrush-2048) • [Code](https://github.com/Ghostofzenin08/BlockRush_2048) |
| **6** | **Snipy** | Developer Productivity<br>`JavaScript, Chrome Manifest V3` | Sub-50ms shortcut snippet capture, syntax tagging, and one-click markdown export | [Code](https://github.com/Ghostofzenin08/Snipy) |
| **7** | **Game Development Hub** | Full-Stack Web & Games<br>`React, Tailwind, Vercel Edge` | Interactive portal documenting modular game loops, collision math, and spatial hashing | [Live Hub](https://game-development-in-python.vercel.app/) • [Code](https://github.com/parthongit89/Game--Development-In-Python) |
| **8** | **Modern Auth UI System** | Interface Systems<br>`CSS3 Glassmorphism, JS` | Accessible authentication system with fluid 3D card flips, neon glow, and instant validation | [Code](https://github.com/Ghostofzenin08/Login-Register-Website-) |

---

## 🪐 Professional 3D Animations & Interactive Engines

- **Three.js WebGL Celestial Galaxy Simulation**:
  - Rotating logarithmic spiral arms with thousands of stars and central accretion bulge.
  - Interactive mouse tilt, parallax inertia damping, and mode switcher (Galaxy, Nebula, Keplerian Orbit).
  - Turbo Warp acceleration mode.
- **3D Celestial N-Body & Orbit Simulator (`GalacticOrbitSimulator`)**:
  - Live 3D celestial mechanics simulator demonstrating Keplerian vis-viva equations: $v = \sqrt{\mu \cdot (2/r - 1/a)}$.
  - Real-time orbital telemetry (semi-major axis, eccentricity, velocity vectors, mechanical energy).
  - Dynamic gravitational parameter ($GM$) slider.
- **Interactive 3D Card Hover Effects**:
  - Dynamic 3D perspective tilts (`rotateX`, `rotateY`) and glare reflections calculating cursor angle.
- **Echo of Dread 30s Time-Loop Paradox Engine**:
  - Interactive simulator demonstrating multi-echo causal choreography.

---

## 🛠️ Architecture & Tech Stack

```
harshal-sonawane-portfolio/
├── .github/workflows/deploy.yml       # Automated GitHub Pages CI/CD
├── public/
│   ├── .nojekyll                      # Prevents Jekyll asset exclusion
│   ├── 404.html                       # SPA routing fallback for GitHub Pages
│   └── favicon.svg                    # Vector tachyon loop favicon
├── src/
│   ├── components/
│   │   ├── common/                    # Navbar, Footer, ProjectCard (3D tilt), Section
│   │   ├── layout/                    # Layout, CaseStudyLayout
│   │   └── ui/                        # CelestialGalaxyCanvas (Three.js), GalacticOrbitSimulator, TimeLoopSimulator
│   ├── context/                       # ThemeContext (Dark/Light mode)
│   ├── data/                          # projectsData.js (All 8 project specifications)
│   ├── pages/                         # HomePage, ProjectsPage, AboutPage
│   │   └── case-studies/              # Dedicated case study architectures
│   ├── utils/                         # soundEffects.js (Synthesized Web Audio)
│   ├── App.jsx                        # HashRouter application routing
│   └── main.jsx                       # Entry point
```

---

## ⚡ Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start Vite local server
npm run dev

# 3. Build production bundle
npm run build

# 4. Preview build locally
npm run preview
```

---

## 🌐 GitHub Pages Deployment

The repository is configured for zero-configuration automated deployment to **GitHub Pages** via `.github/workflows/deploy.yml` upon every push to `main`.
