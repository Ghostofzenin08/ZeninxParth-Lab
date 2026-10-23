import React from 'react';
import { Link } from 'react-router-dom';
import InteractiveCanvas from '../components/ui/InteractiveCanvas';
import Section from '../components/common/Section';
import Button from '../components/ui/Button';
import ProjectCard from '../components/common/ProjectCard';
import TimeLoopSimulator from '../components/ui/TimeLoopSimulator';
import { projectsData } from '../data/projectsData';
import { sounds } from '../utils/soundEffects';

export default function HomePage() {
  const featuredGame = projectsData.find((p) => p.id === 'echo-of-dread');
  const storeGames = projectsData.slice(0, 4);

  return (
    <div className="relative">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <InteractiveCanvas />

        <div className="relative max-w-4xl mx-auto text-center z-10 py-16">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            <span>Official Indie Game Store & Creative Tech Lab</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-main leading-tight">
            Play Indie Games on <span className="text-[#fa5c5c]">itch.io</span> & Explore Creative Tech.
          </h1>

          <p className="mt-6 text-base sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Home of the sci-fi time-loop puzzle <strong className="text-text-main font-semibold">Echo of Dread</strong>, <strong className="text-text-main font-semibold">BlockRush 2048</strong>, and high-velocity arcade engines built across Godot 4.7, Python, and React.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              to="/projects"
              variant="primary"
              size="lg"
              onClick={() => sounds.playUiClick()}
            >
              🎮 Browse Game Store
            </Button>
            <Button
              to="/projects/echo-of-dread"
              variant="secondary"
              size="lg"
              onClick={() => sounds.playWarp()}
            >
              ⏳ Echo of Dread
            </Button>
            <a
              href="https://zeninxparth.itch.io"
              target="_blank"
              rel="noreferrer"
              onClick={() => sounds.playWarp()}
              className="inline-flex items-center justify-center font-medium rounded-xl px-7 py-3 text-base gap-2.5 bg-[#fa5c5c] text-white hover:bg-[#e04545] shadow-lg shadow-[#fa5c5c]/25 border border-[#fa5c5c]/30 transition-all duration-200 active:scale-[0.98]"
            >
              <span>itch.io Store</span>
              <span>↗</span>
            </a>
          </div>

          {/* Metrics Ribbon */}
          <div className="mt-14 pt-8 border-t border-border/80 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-text-subtle">
            <div>
              <span className="font-bold text-text-main text-sm">3+</span> itch.io Releases
            </div>
            <div>
              <span className="font-bold text-cyan-400 text-sm">50</span> Puzzle Chambers
            </div>
            <div>
              <span className="font-bold text-emerald-400 text-sm">394</span> Unit Tests Passed
            </div>
            <div>
              <span className="font-bold text-text-main text-sm">60 FPS</span> Deterministic Physics
            </div>
            <div>
              <span className="font-bold text-primary text-sm">100%</span> Open Source
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SPOTLIGHT: ECHO OF DREAD */}
      {featuredGame && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="relative rounded-3xl border border-primary/40 bg-surface/90 backdrop-blur-xl p-6 sm:p-10 shadow-2xl overflow-hidden group">
            {/* Background cyber radial glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Media Preview Thumbnail */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-border shadow-lg">
                <img
                  src={featuredGame.coverImage}
                  alt="Echo of Dread itch.io Banner"
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded bg-[#fa5c5c] text-white text-[10px] font-mono font-bold shadow">
                    ⭐ itch.io Featured
                  </span>
                  <span className="px-2 py-0.5 rounded bg-black/80 text-cyan-400 text-[10px] font-mono border border-cyan-400/40">
                    Godot 4.7
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="px-2.5 py-1 rounded-md bg-black/90 text-amber-400 text-xs font-mono font-bold border border-amber-400/30">
                    5.0 ★ Rating
                  </span>
                </div>
              </div>

              {/* Spotlight Content */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                      Flagship Game Spotlight
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-text-main">
                    {featuredGame.title}
                  </h2>

                  <p className="mt-2 text-sm text-text-muted italic font-mono">
                    {featuredGame.tagline}
                  </p>

                  <p className="mt-3 text-sm text-text-muted leading-relaxed">
                    Trapped within the subterranean Chronos Research Facility, reality collapses every 30 seconds. Record iterations of your actions and cooperate with up to 5 autonomous, holographic Echoes of your past self to conquer 50 hand-crafted chambers.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {featuredGame.tags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-surface-elevated text-text-subtle border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border flex flex-wrap items-center gap-3">
                  <a
                    href={featuredGame.itchUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sounds.playWarp()}
                    className="px-5 py-2.5 rounded-xl bg-[#fa5c5c] text-white hover:bg-[#e04545] font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#fa5c5c]/25 transition-all inline-flex items-center gap-1.5"
                  >
                    <span>Play on itch.io</span>
                    <span>↗</span>
                  </a>

                  <Link
                    to="/projects/echo-of-dread"
                    onClick={() => sounds.playUiClick()}
                    className="px-5 py-2.5 rounded-xl border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    Inspect 50 Chambers & Mechanics →
                  </Link>

                  <a
                    href={featuredGame.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sounds.playUiClick()}
                    className="px-4 py-2 rounded-xl border border-border text-xs font-mono text-text-subtle hover:text-text-main transition-colors"
                  >
                    Web Simulation ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* INTERACTIVE SIMULATOR SECTION */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mb-6">
          <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
            Interactive Chamber Test
          </span>
          <h2 className="text-3xl font-extrabold text-text-main mt-1 tracking-tight">
            Test the Causal Time-Loop Live
          </h2>
          <p className="mt-2 text-sm text-text-muted max-w-2xl leading-relaxed">
            Interact with the synchronized capacitor relay mechanics from Echo of Dread right here in your browser before playing the full release.
          </p>
        </div>
        <TimeLoopSimulator />
      </div>

      {/* GAME STORE CATALOG */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Section id="featured-projects">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                itch.io Store & Lab Releases
              </span>
              <h2 className="text-3xl font-extrabold text-text-main mt-1 tracking-tight">
                Featured Game Titles & Microservices
              </h2>
            </div>
            <Link
              to="/projects"
              onClick={() => sounds.playUiClick()}
              className="mt-4 md:mt-0 text-sm font-semibold text-primary hover:underline flex items-center gap-1 font-mono"
            >
              <span>View full store catalog</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {storeGames.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.subtitle}
                tags={project.tags}
                category={project.category}
                caseStudyUrl={project.caseStudyUrl}
                itchUrl={project.itchUrl}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                coverImage={project.coverImage}
                thumbnail={project.thumbnail}
                rating={project.rating}
                badge={project.badge}
                platforms={project.platforms}
                featured={project.featured}
              />
            ))}
          </div>
        </Section>

        {/* ABOUT THE STUDIO PREVIEW */}
        <Section className="border-t border-border mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Studio Leadership
              </span>
              <h2 className="text-3xl font-extrabold text-text-main mt-1 tracking-tight">
                Engineering with Rigor & Creativity
              </h2>
              <p className="mt-4 text-text-muted leading-relaxed text-sm sm:text-base">
                Founded by <strong className="text-text-main">Harshal Sonawane</strong> (Ghostofzenin08) alongside collaborator <strong className="text-text-main">Parth Sonawane</strong>, ZeninXParth marries mathematical game loop engineering with serverless cloud architectures and competitive analytical discipline.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button to="/about" variant="secondary" size="md" onClick={() => sounds.playUiClick()}>
                  Read Studio Bio & Philosophy →
                </Button>
                <a
                  href="https://zeninxparth.itch.io"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sounds.playWarp()}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold bg-[#fa5c5c]/10 text-[#fa5c5c] hover:bg-[#fa5c5c] hover:text-white border border-[#fa5c5c]/30 transition-all"
                >
                  <span>itch.io Profile</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-3xl border border-border bg-surface-elevated/70">
              <h3 className="text-sm font-bold font-mono text-primary uppercase tracking-wider mb-3">
                Core Tooling & Foundations
              </h3>
              <div className="space-y-2.5 text-xs font-mono text-text-muted">
                <div className="flex items-center justify-between pb-2 border-b border-border/60">
                  <span>Game Engines:</span>
                  <span className="text-text-main font-bold">Godot 4.7, Pygame, Canvas</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-border/60">
                  <span>Languages:</span>
                  <span className="text-text-main font-bold">Python 3.11, GDScript, JS/React</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-border/60">
                  <span>Post-Processing:</span>
                  <span className="text-text-main font-bold">GLSL CRT & Aberration Shaders</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-border/60">
                  <span>Cloud & Storage:</span>
                  <span className="text-text-main font-bold">Neon Serverless PostgreSQL, Render</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Storefront:</span>
                  <span className="text-[#fa5c5c] font-bold">zeninxparth.itch.io</span>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
