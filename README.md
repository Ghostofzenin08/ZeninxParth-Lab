# ZeninXParth Indie Game Store & Creative Tech Lab ⚡

An upgraded, high-performance web showcase and game store for **ZeninXParth** indie games on [itch.io](https://zeninxparth.itch.io). Built with **React 18**, **Tailwind CSS**, **Framer Motion**, and **Lenis Scroll**, featuring the flagship sci-fi time-loop puzzle game **Echo of Dread** (Godot 4.7).

[![Play on itch.io](https://img.shields.io/badge/Play%20on-itch.io-FA5C5C?logo=itch.io&logoColor=white)](https://zeninxparth.itch.io)
[![Echo of Dread](https://img.shields.io/badge/Flagship-Echo%20of%20Dread-00f0ff?logo=godotengine&logoColor=white)](https://zeninxparth.itch.io/echo-of-dread)
[![Deploy to GitHub Pages](https://github.com/Ghostofzenin08/ZeninxParth-Lab/actions/workflows/deploy.yml/badge.svg)](https://github.com/Ghostofzenin08/ZeninxParth-Lab/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🕹️ Featured itch.io Games

| Title | Engine | Highlights | Play Links |
| :--- | :--- | :--- | :--- |
| **Echo of Dread** | Godot Engine v4.7.2 / GDScript | 50 Chambers, 5 Sectors, 30s Causal Curve, 5 simultaneous Echoes, 394 CI Tests | [itch.io](https://zeninxparth.itch.io/echo-of-dread) • [Web Sim](https://ghostofzenin08.github.io/Echo_of_Dread/) • [GitHub](https://github.com/Ghostofzenin08/Echo_of_Dread) |
| **BlockRush 2048** | Python 3.11 / Pygame & Neon DB | Dynamic 2x2 to 12x12 grid math, state undo rollback, cloud leaderboards | [itch.io](https://zeninxparth.itch.io/blockrush-2048) • [GitHub](https://github.com/Ghostofzenin08/BlockRush_2048) |
| **Meteor Space Dodge** | Python 3.11 / Pygame | 60 FPS deterministic vector physics, procedural asteroid clustering | [itch.io](https://zeninxparth.itch.io/meteor-space-dodge) • [GitHub](https://github.com/Ghostofzenin08/Meteor-Space-Dodge) |
| **Enhanced Pong** | HTML5 Canvas / React | 60 FPS requestAnimationFrame loop, deflection curve, reactive AI paddle | [Demo](https://enhanced-pong-game.vercel.app/) • [GitHub](https://github.com/Ghostofzenin08/pong) |

---

## ✨ Upgraded UI/UX Features

- **Interactive Time-Loop Causal Simulator**: In-browser simulator showcasing the synchronized dual capacitor relay mechanics from *Echo of Dread* directly on the landing page and case study.
- **Synthesized Tactile Audio (Web Audio API)**: Zero-overhead procedural sound effects for UI clicks, temporal rewind warps, and hover blips, with instant mute toggle and `localStorage` persistence.
- **Obsidian Dark & Clean Light Modes**: Instantaneous theme toggle with fluid spring animations and custom neon cyan & crimson cyber accents.
- **Dedicated itch.io Hub**: Instant filtering by itch.io titles, Godot, Python/Pygame, and Web APIs.
- **Full Case Study Architectures**: In-depth breakdowns of system architecture, 5 sectors, input maps, and 394 unit/integration tests.
- **Lenis Kinetic Smooth Scroll**: Inertial, app-like scrolling feel across desktop and mobile.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Start Vite development server
npm run dev

# 3. Build production bundle
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 🌐 Deploying to GitHub Pages

This repository is pre-configured for seamless deployment to **GitHub Pages** (`https://ghostofzenin08.github.io/ZeninxParth-Lab/`).

### Method 1: Automatic Deployment with GitHub Actions (Recommended)

1. Push your changes to the `main` branch on GitHub:
   ```bash
   git push origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. That's it! The workflow at `.github/workflows/deploy.yml` will automatically build the Vite project and publish it to GitHub Pages on every push.

### Method 2: Manual Branch Deployment via `gh-pages`

You can also deploy directly from your local terminal using the included `deploy` script:

```bash
# Builds the production assets and pushes to the 'gh-pages' branch
npm run deploy
```

Then in **Settings** → **Pages**, select **Deploy from a branch** and choose the `gh-pages` branch with `/ (root)`.

---

## 🛠️ Architecture & Tech Stack

```
ZeninxParth-Lab/
├── .github/workflows/deploy.yml   # GitHub Actions automated Pages CI/CD
├── public/
│   ├── .nojekyll                  # Prevents Jekyll from ignoring Vite assets
│   ├── 404.html                   # SPA routing fallback for GitHub Pages
│   └── favicon.svg                # Cyber tachyon loop SVG favicon
├── src/
│   ├── components/
│   │   ├── common/                # Navbar, Footer, ProjectCard, Section
│   │   ├── layout/                # Layout, CaseStudyLayout
│   │   └── ui/                    # TimeLoopSimulator, ThemeToggle, Button, Badge
│   ├── context/                   # ThemeContext (Dark/Light mode)
│   ├── data/                      # projectsData.js (Echo of Dread, BlockRush, etc.)
│   ├── pages/                     # HomePage, ProjectsPage, AboutPage
│   │   └── case-studies/          # EchoOfDreadPage, BlockRushPage, MeteorDodgePage, etc.
│   ├── utils/                     # soundEffects.js (Web Audio synthesizer)
│   ├── App.jsx                    # HashRouter view routes
│   ├── main.jsx                   # React root entry
│   └── index.css                  # Tailwind CSS theme layers
├── index.html                     # HTML5 entry with OpenGraph metadata
├── vite.config.js                 # Configured with base: './' for GitHub Pages
└── tailwind.config.js             # Obsidian & crimson theme tokens
```

---

## 👥 Studio Founders

- **Harshal Sonawane** ([@Ghostofzenin08](https://github.com/Ghostofzenin08)) — Game Director, Time-Loop Mechanics, Frontend Systems & UX Architecture.
- **Parth Sonawane** ([@parthongit89](https://github.com/parthongit89)) — Backend REST APIs, Cloud Database Infrastructure, CI/CD & Optimization.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
