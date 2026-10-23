import React from 'react';
import Section from '../components/common/Section';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { sounds } from '../utils/soundEffects';

export default function AboutPage() {
  const skillGroups = [
    {
      title: "Game Engines & Physics",
      skills: ["Godot Engine v4.7.2", "GDScript", "Pygame", "Vector Math & Interpolation", "GLSL Shaders", "Spatial Collision Hashing", "Web Audio API"]
    },
    {
      title: "Languages",
      skills: ["Python 3.11+", "JavaScript (ES6+)", "TypeScript", "SQL (PostgreSQL)", "HTML5 & CSS3"]
    },
    {
      title: "Frontend & UI Systems",
      skills: ["React.js", "Tailwind CSS", "Framer Motion", "Canvas 2D Rendering", "Vite", "Lenis Scroll"]
    },
    {
      title: "Backend, Cloud & Databases",
      skills: ["Flask 3.0", "FastAPI", "Neon Serverless Postgres", "RESTful Architecture", "Render WSGI", "Firebase Auth"]
    },
    {
      title: "Packaging & Distribution",
      skills: ["itch.io Storefront", "GitHub Pages CI/CD", "PyInstaller (Windows EXE)", "Godot HTML5 / WebGL Export", "Git & GitHub"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Section className="!py-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
            Studio Biography & Background
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#fa5c5c]/10 text-[#fa5c5c] border border-[#fa5c5c]/30 font-bold">
            zeninxparth.itch.io
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-text-main mt-1 tracking-tight">
          Harshal Sonawane
        </h1>
        <div className="flex items-center gap-4 text-xs font-mono text-text-subtle mt-2">
          <span>GitHub: @Ghostofzenin08 / oldest_dream</span>
          <span>•</span>
          <span>itch.io: ZeninXParth</span>
        </div>

        <div className="mt-8 text-text-muted space-y-4 text-base leading-relaxed">
          <p>
            I am an indie game developer, computer science builder, and competitive examination aspirant preparing for Maharashtra state examinations (including <strong className="text-text-main">MPSC</strong> and <strong className="text-text-main">Talathi</strong>). This dual discipline shapes every game and software system I architect: rigorous mathematical precision, clean structural decomposition, and mental resilience under cognitive pressure.
          </p>
          <p>
            Together with collaborator <strong className="text-text-main">Parth Sonawane</strong>, we established the <strong className="text-text-main">ZeninXParth</strong> indie lab. Our flagship title, <strong className="text-text-main">Echo of Dread</strong>, stands as our most ambitious game to date—a 2D top-down sci-fi time-loop puzzle game built in Godot 4.7 featuring 50 hand-crafted chambers, up to 5 concurrent holographic Echoes, custom GLSL rewind shaders, and a 394-test automated CI suite.
          </p>
          <p>
            From high-velocity arcade games like <strong className="text-text-main">Meteor Space Dodge</strong> to dynamic algebraic puzzles like <strong className="text-text-main">BlockRush 2048</strong> and algorithmic NLP microservices like <strong className="text-text-main">Resumatch API</strong>, our mission is building engaging indie game experiences backed by low-latency serverless clouds.
          </p>
        </div>
      </Section>

      <div className="my-10 border-t border-border" />

      {/* Technical Skills & Tooling */}
      <Section className="!py-0">
        <h2 className="text-2xl font-bold text-text-main tracking-tight mb-6">
          Technical Skills & Game Tooling
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="p-5 rounded-2xl border border-border bg-surface hover:border-primary/30 transition-colors">
              <h3 className="text-sm font-bold font-mono text-primary mb-3">
                {group.title}
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

      <div className="my-10 border-t border-border" />

      {/* Focus Areas & Competitive Exam Discipline */}
      <Section className="!py-0">
        <h2 className="text-2xl font-bold text-text-main tracking-tight mb-6">
          Discipline & Focus Areas
        </h2>
        <div className="space-y-4 border-l-2 border-primary/30 pl-4">
          <div className="relative">
            <span className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-primary" />
            <h4 className="font-bold text-text-main text-sm">Temporal Puzzle Design & Game Mathematics</h4>
            <p className="text-xs text-text-muted mt-1 leading-relaxed">
              Causal time loops, continuous vector recording, Hermite interpolation curves, and multi-bus frequency sweeps in Godot 4.7 and Pygame.
            </p>
          </div>
          <div className="relative">
            <span className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-accent" />
            <h4 className="font-bold text-text-main text-sm">Serverless Cloud Integration & APIs</h4>
            <p className="text-xs text-text-muted mt-1 leading-relaxed">
              Real-time cross-platform cloud score persistence with Neon Serverless Postgres, Flask 3.0, and Firebase authentication.
            </p>
          </div>
          <div className="relative">
            <span className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-emerald-500" />
            <h4 className="font-bold text-text-main text-sm">Competitive Examination Analytical Rigor (MPSC & Talathi)</h4>
            <p className="text-xs text-text-muted mt-1 leading-relaxed">
              Rigorous quantitative aptitude, administrative reasoning, and relentless daily discipline translating into zero-defect software engineering.
            </p>
          </div>
        </div>
      </Section>

      <div className="mt-14 pt-8 border-t border-border flex flex-wrap gap-4">
        <a
          href="https://zeninxparth.itch.io"
          target="_blank"
          rel="noreferrer"
          onClick={() => sounds.playWarp()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#fa5c5c] text-white hover:bg-[#e04545] font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#fa5c5c]/25 transition-all"
        >
          <span>ZeninXParth on itch.io ↗</span>
        </a>
        <Button href="https://github.com/Ghostofzenin08" variant="secondary" size="md" onClick={() => sounds.playUiClick()}>
          Ghostofzenin08 on GitHub ↗
        </Button>
        <Button href="https://github.com/parthongit89" variant="outline" size="md" onClick={() => sounds.playUiClick()}>
          Parthongit89 on GitHub ↗
        </Button>
      </div>
    </div>
  );
}
