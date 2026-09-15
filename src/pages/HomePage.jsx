import React from 'react';
import { Link } from 'react-router-dom';
import InteractiveCanvas from '../components/ui/InteractiveCanvas';
import Section from '../components/common/Section';
import Button from '../components/ui/Button';
import ProjectCard from '../components/common/ProjectCard';
import Badge from '../components/ui/Badge';
import { projectsData } from '../data/projectsData';

export default function HomePage() {
  return (
    <div className="relative">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <InteractiveCanvas />
        <div className="relative max-w-4xl mx-auto text-center z-10 py-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            Software Developer & Game Engineering Enthusiast
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-main leading-tight">
            I build games, APIs, and web experiences in <span className="text-primary">Python</span> & <span className="text-accent">React</span>.
          </h1>

          <p className="mt-6 text-base sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Computer Science student and competitive exam aspirant (MPSC/Talathi) pairing disciplined analytical rigor with low-latency game physics, serverless cloud databases, and clean modern UI.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button to="/projects" variant="primary" size="lg">
              View Projects
            </Button>
            <Button to="/about" variant="secondary" size="lg">
              About Me
            </Button>
          </div>

          <div className="mt-14 pt-8 border-t border-border/80 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-text-subtle">
            <div>
              <span className="font-bold text-text-main text-sm">5+</span> Showcased Projects
            </div>
            <div>
              <span className="font-bold text-text-main text-sm">60 FPS</span> Pygame Physics
            </div>
            <div>
              <span className="font-bold text-text-main text-sm">Flask & Neon</span> Cloud Sync
            </div>
            <div>
              <span className="font-bold text-text-main text-sm">100%</span> Open Source
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Section id="featured-projects">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Portfolio Showcase
              </span>
              <h2 className="text-3xl font-extrabold text-text-main mt-1 tracking-tight">
                Featured Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="mt-4 md:mt-0 text-sm font-semibold text-primary hover:underline flex items-center gap-1"
            >
              View all projects <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.subtitle}
                tags={project.tags}
                category={project.category}
                caseStudyUrl={project.caseStudyUrl}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        </Section>

        {/* ABOUT PREVIEW */}
        <Section className="border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                About the Developer
              </span>
              <h2 className="text-3xl font-extrabold text-text-main mt-1 tracking-tight">
                Engineering with Rigor & Creativity
              </h2>
              <p className="mt-4 text-text-muted leading-relaxed">
                Hi, I'm <strong className="text-text-main">Harshal Sonawane</strong> (online as <em>Ghostofzenin08 / oldest_dream</em>). Alongside my friend and collaborator <em>Parth Sonawane</em>, I engineer web applications, desktop Pygame experiences, and cloud APIs.
              </p>
              <p className="mt-3 text-text-muted leading-relaxed">
                Balancing deep Computer Science foundations with competitive exam preparation (MPSC/Talathi) has honed my ability to analyze intricate requirements, optimize algorithms, and deliver reliable software under rigorous constraints.
              </p>
              <div className="mt-6">
                <Button to="/about" variant="outline" size="md">
                  Read Full Bio & Skills →
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-surface border border-border p-6 rounded-2xl">
              <h3 className="font-mono text-sm font-semibold text-text-main mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Core Technical Arsenal
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Flask", "PostgreSQL", "Pygame", "Render", "Firebase"].map((tech) => (
                  <Badge key={tech} variant="default">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* CONTACT / CTA */}
        <Section className="border-t border-border">
          <div className="rounded-3xl border border-border bg-surface-elevated p-8 sm:p-12 text-center relative overflow-hidden">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight">
              Want to collaborate or see the code?
            </h2>
            <p className="mt-4 text-text-muted max-w-xl mx-auto leading-relaxed">
              Whether you want to discuss Python game architecture, API designs, or explore prospective engineering roles, I'd love to connect.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="https://github.com/Ghostofzenin08" variant="primary" size="md">
                GitHub: Ghostofzenin08 ↗
              </Button>
              <Button href="mailto:harshalsonawane.dev@gmail.com" variant="secondary" size="md">
                Send an Email
              </Button>
              <Button href="https://linkedin.com" variant="outline" size="md">
                LinkedIn ↗
              </Button>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
