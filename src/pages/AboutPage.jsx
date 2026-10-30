import React from 'react';
import Section from '../components/common/Section';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { sounds } from '../utils/soundEffects';

export default function AboutPage() {
  const skillGroups = [
    {
      title: "Aerospace & Computational Physics",
      skills: [
        "Aerospace Engineering Principles",
        "Orbital Mechanics (Keplerian Elements)",
        "N-Body Gravitational Dynamics",
        "NumPy & SciPy Numerical Computing",
        "Runge-Kutta (RK4) & Symplectic Integrators",
        "Vector Kinematics & Aerodynamic Inertia"
      ]
    },
    {
      title: "AI/ML & Natural Language Processing",
      skills: [
        "Google Gemini AI API Integration",
        "Semantic Parsing & Token Normalization",
        "ATS Relevance Scoring Algorithms",
        "Prompt Architecture & Evaluation Gating",
        "Stateless RESTful Microservices",
        "Ephemeral Session Isolation"
      ]
    },
    {
      title: "Game Engines & Interactive Graphics",
      skills: [
        "Godot Engine v4.7.2 (GDScript)",
        "Three.js & WebGL 3D Shaders",
        "GLSL Post-Processing Shaders",
        "Pygame 2D Arcade Engine",
        "Causal Time-Loop State Machines",
        "Hermite Interpolation Curves",
        "Spatial Partitioning & Collision Hashing"
      ]
    },
    {
      title: "Full-Stack Web & Browser Systems",
      skills: [
        "React 18 & Vite Ecosystem",
        "Tailwind CSS & Glassmorphism UI",
        "JavaScript (ES6+) & TypeScript",
        "Chrome Extension Manifest V3",
        "HTML5 Canvas 2D/3D Rendering",
        "Flask 3.0 & FastAPI WSGI"
      ]
    },
    {
      title: "Cloud, Database & DevOps",
      skills: [
        "Neon Serverless PostgreSQL",
        "Render WSGI Cloud Hosting",
        "Vercel Edge Platform",
        "GitHub Pages & Automated Actions CI/CD",
        "Automated Headless Test Suites (1,427+ Assertions)",
        "PyInstaller Desktop Packaging",
        "Git Version Control Architecture"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Section className="!py-4">
        {/* Header Breadcrumbs */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
            Engineering Biography & Core Philosophy
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 font-bold">
            Aerospace × Full-Stack × AI × Game Dev
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-text-main mt-1 tracking-tight">
          Harshal Sonawane
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-text-subtle mt-2">
          <span className="text-primary font-semibold">GitHub: @Ghostofzenin08</span>
          <span>•</span>
          <span>Email: harshalsonawane308@gmail.com</span>
          <span>•</span>
          <span>itch.io: ZeninXParth</span>
        </div>

        {/* Narrative Biography */}
        <div className="mt-8 text-text-muted space-y-5 text-base leading-relaxed">
          <p>
            I am an engineer whose technical worldview is grounded in <strong className="text-text-main">aerospace engineering</strong>. Whether analyzing differential galactic rotation curves, orchestrating numerical n-body integrators, or fine-tuning microgravity flight kinematics in real-time game engines, I treat software engineering as an exact, empirical discipline rooted in physics and mathematics.
          </p>

          <p>
            As a <strong className="text-text-main">Full-Stack & Frontend Engineer</strong> and <strong className="text-text-main">AI/ML Integrator</strong>, I architect production web applications that bridge deep computational backends with fluid visual frontends. In our hackathon project <strong className="text-text-main">ResuMatch</strong>, built with collaborator Parth Sonavane, we combined the <strong className="text-text-main">Google Gemini AI API</strong> with stateless Flask REST microservices and a real-time client-side DOM document previewer, achieving sub-150ms semantic parsing to eliminate candidate ATS rejections.
          </p>

          <p>
            In indie game development, I authored <strong className="text-text-main">ORBITAL: The Last Engineer</strong>, a first-person 3D spacecraft engineering survival and psychological horror simulation in <strong className="text-text-main">Godot Engine 4.7.2</strong>. Built with 13 interconnected compartments across 2 decks, dual Feel & Logical telemetry modes, an autonomous apex stalker AI, and 1,033 passing assertions across 43 automated test suites, it demonstrates scalable, deterministic systems design.
          </p>

          <p>
            Under the <strong className="text-text-main">ZeninXParth</strong> lab, I also directed <strong className="text-text-main">Echo of Dread</strong>, an atmospheric 2D sci-fi time-loop puzzle game built in Godot Engine 4.7.2. Spanning 50 hand-crafted chambers, up to 5 concurrent historical holographic Echoes, custom GLSL chromatic rewind shaders, and a 394-test automated headless CI suite, it further embodies my commitment to deterministic systems architecture.
          </p>

          <p>
            Alongside engineering, my daily discipline is fortified by rigorous preparation for competitive examinations (including Maharashtra state <strong className="text-text-main">MPSC</strong> and administrative exams). This cognitive endurance demands relentless quantitative accuracy, structural decomposition, and operational clarity—traits that directly translate into bug-free, robust software.
          </p>
        </div>
      </Section>

      <div className="my-10 border-t border-border/80" />

      {/* Technical Arsenal & Core Stack */}
      <Section className="!py-0">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Competencies
            </span>
            <h2 className="text-2xl font-black text-text-main tracking-tight mt-1">
              Technical Arsenal & Tools
            </h2>
          </div>
        </div>

        <div className="space-y-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="p-5 rounded-2xl border border-border bg-surface hover:border-primary/40 transition-colors"
            >
              <h3 className="text-sm font-bold font-mono text-primary mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>{group.title}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <div className="my-10 border-t border-border/80" />

      {/* Pillars of Engineering Methodology */}
      <Section className="!py-0">
        <h2 className="text-2xl font-black text-text-main tracking-tight mb-6">
          Engineering Principles & Working Methodology
        </h2>

        <div className="space-y-6 border-l-2 border-primary/30 pl-4 sm:pl-6">
          <div className="relative">
            <span className="absolute -left-[23px] sm:-left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-primary/20" />
            <h4 className="font-bold text-text-main text-base">1. Deterministic Math Over Trial-and-Error</h4>
            <p className="text-xs sm:text-sm text-text-muted mt-1 leading-relaxed">
              Every system—from n-body astrophysics simulations in NumPy to continuous vector flight thrust in Meteor Dodge—is derived from first-principles kinematics and differential equations rather than arbitrary magic numbers.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[23px] sm:-left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20" />
            <h4 className="font-bold text-text-main text-base">2. Decoupled Systems & Headless Verification</h4>
            <p className="text-xs sm:text-sm text-text-muted mt-1 leading-relaxed">
              Game state logic must remain strictly decoupled from visual rendering pipelines. In Echo of Dread, this enabled an automated headless runner to execute 394 CI integration tests verifying chamber logic without graphic overhead.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[23px] sm:-left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />
            <h4 className="font-bold text-text-main text-base">3. Hybrid AI & Deterministic Heuristics</h4>
            <p className="text-xs sm:text-sm text-text-muted mt-1 leading-relaxed">
              Generative AI is most effective when paired with deterministic rule matrices. In ResuMatch, lexical matching pre-screens and filters tokens before invoking Google Gemini, yielding sub-150ms latency while minimizing unnecessary cloud consumption.
            </p>
          </div>
        </div>
      </Section>

      {/* Direct Contact Footer Action */}
      <div className="mt-14 pt-8 border-t border-border flex flex-wrap items-center gap-4">
        <a
          href="mailto:harshalsonawane308@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-primary/25 transition-all"
        >
          <span>Email Harshal ✉</span>
        </a>

        <a
          href="https://github.com/Ghostofzenin08"
          target="_blank"
          rel="noreferrer"
          onClick={() => sounds.playUiClick()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface border border-border text-text-main font-mono text-xs font-bold hover:border-primary transition-all"
        >
          <span>GitHub: @Ghostofzenin08 ↗</span>
        </a>

        <a
          href="https://zeninxparth.itch.io"
          target="_blank"
          rel="noreferrer"
          onClick={() => sounds.playWarp()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#fa5c5c] text-white hover:bg-[#e04545] font-bold text-xs uppercase font-mono tracking-wider shadow-lg shadow-[#fa5c5c]/25 transition-all"
        >
          <span>itch.io Storefront ↗</span>
        </a>
      </div>
    </div>
  );
}
