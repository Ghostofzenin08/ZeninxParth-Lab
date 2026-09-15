import React from 'react';
import Section from '../components/common/Section';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

export default function AboutPage() {
  const skillGroups = [
    {
      title: "Languages",
      skills: ["Python 3.11+", "JavaScript (ES6+)", "TypeScript", "SQL (PostgreSQL)", "HTML5 & CSS3"]
    },
    {
      title: "Frontend Engineering",
      skills: ["React.js", "Tailwind CSS", "Framer Motion", "Three.js / Canvas", "Vite"]
    },
    {
      title: "Backend & Cloud",
      skills: ["Flask 3.0", "FastAPI", "RESTful API Architecture", "Neon Serverless Postgres", "Gunicorn"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Git & GitHub", "Firebase Authentication", "Render WSGI", "Vercel", "Linux CLI"]
    },
    {
      title: "Game Development",
      skills: ["Pygame Engine", "Arcade", "Godot", "Spatial Collision Math", "Audio Synthesis"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Section className="!py-4">
        <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
          Biography & Background
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-text-main mt-2 tracking-tight">
          Harshal Sonawane
        </h1>
        <p className="text-sm font-mono text-text-subtle mt-1">
          GitHub: @Ghostofzenin08 / oldest_dream
        </p>

        <div className="mt-8 text-text-muted space-y-4 text-base leading-relaxed">
          <p>
            I am a Computer Science student, software builder, and competitive exam aspirant preparing for Maharashtra state examinations (including <strong>MPSC</strong> and <strong>Talathi</strong>). This dual discipline defines my approach to code: methodical, resilient, and focused on clean problem decomposition.
          </p>
          <p>
            Together with my collaborator <strong>Parth Sonawane</strong>, we established the <strong>ZeninXParth</strong> initiative to bridge game mechanics with serverless cloud architectures. We don't just build toy projects?we ship full game loops, configure cross-platform cloud score databases, and deploy zero-latency REST APIs.
          </p>
        </div>
      </Section>

      <div className="my-10 border-t border-border" />

      <Section className="!py-0">
        <h2 className="text-2xl font-bold text-text-main tracking-tight mb-6">
          Technical Skills & Tooling
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="p-5 rounded-2xl border border-border bg-surface">
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

      <Section className="!py-0">
        <h2 className="text-2xl font-bold text-text-main tracking-tight mb-6">
          Focus Areas & Learning Goals
        </h2>
        <div className="space-y-4 border-l-2 border-primary/30 pl-4">
          <div className="relative">
            <span className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-primary" />
            <h4 className="font-bold text-text-main text-sm">Full-Stack & Cloud Architecture</h4>
            <p className="text-xs text-text-muted mt-1">
              Building low-latency Python/FastAPI backends with Neon Serverless Postgres and Redis caching.
            </p>
          </div>
          <div className="relative">
            <span className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-accent" />
            <h4 className="font-bold text-text-main text-sm">Game Engine Foundations & Math</h4>
            <p className="text-xs text-text-muted mt-1">
              Deep-diving into vector mathematics, continuous collision detection, and WebGL cross-compilation.
            </p>
          </div>
          <div className="relative">
            <span className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-emerald-500" />
            <h4 className="font-bold text-text-main text-sm">Analytical Competitive Examinations</h4>
            <p className="text-xs text-text-muted mt-1">
              Rigorous preparation for MPSC & Talathi syllabus with disciplined time management and quantitative mastery.
            </p>
          </div>
        </div>
      </Section>

      <div className="mt-14 pt-8 border-t border-border flex flex-wrap gap-4">
        <Button href="https://github.com/Ghostofzenin08" variant="primary" size="md">
          Ghostofzenin08 on GitHub ?
        </Button>
        <Button href="https://github.com/parthongit89" variant="secondary" size="md">
          Parthongit89 on GitHub ?
        </Button>
        <Button href="mailto:harshalsonawane.dev@gmail.com" variant="outline" size="md">
          Get in Touch
        </Button>
      </div>
    </div>
  );
}
