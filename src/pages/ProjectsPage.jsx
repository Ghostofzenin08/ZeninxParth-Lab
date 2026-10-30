import React, { useState } from 'react';
import Section from '../components/common/Section';
import ProjectCard from '../components/common/ProjectCard';
import { projectsData } from '../data/projectsData';
import { sounds } from '../utils/soundEffects';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { label: 'All Systems', value: 'all', count: projectsData.length },
    { label: '🤖 AI & Full-Stack', value: 'ai-fullstack', count: projectsData.filter((p) => p.filterCategory === 'ai-fullstack').length },
    { label: '🎮 Indie Game Dev', value: 'game-dev', count: projectsData.filter((p) => p.filterCategory === 'game-dev').length },
    { label: '🌌 Astrophysics & Sim', value: 'astrophysics', count: projectsData.filter((p) => p.filterCategory === 'astrophysics').length },
    { label: '🛠️ Developer Tools & UI', value: 'tools-ui', count: projectsData.filter((p) => p.filterCategory === 'tools-ui').length },
    { label: '🕹️ itch.io Releases', value: 'itch', count: projectsData.filter((p) => !!p.itchUrl).length },
  ];

  const filteredProjects = projectsData.filter((project) => {
    // Category filter
    let matchesCategory = true;
    if (filter === 'all') matchesCategory = true;
    else if (filter === 'itch') matchesCategory = !!project.itchUrl;
    else matchesCategory = project.filterCategory === filter;

    // Search query filter
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCategory;

    const matchesSearch =
      project.title.toLowerCase().includes(q) ||
      project.subtitle.toLowerCase().includes(q) ||
      project.tags.some((t) => t.toLowerCase().includes(q)) ||
      project.engine.toLowerCase().includes(q);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Section className="!py-4">
        {/* Breadcrumb / Top badge */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
            Engineering Systems & Production Releases
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 font-bold">
            9 Published Projects
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl sm:text-5xl font-black text-text-main mt-1 tracking-tight">
              Projects & Architecture
            </h1>
            <p className="mt-3 text-text-muted max-w-2xl text-base leading-relaxed">
              Explore 9 specialized engineering solutions spanning Godot 4.7 3D spacecraft engineering horror, Google Gemini AI microservices, time-loop state machines, n-body gravitational simulations, and developer productivity tools.
            </p>
          </div>

          <a
            href="https://github.com/Ghostofzenin08"
            target="_blank"
            rel="noreferrer"
            onClick={() => sounds.playUiClick()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface border border-primary/40 hover:border-primary text-text-main font-mono font-bold text-xs uppercase tracking-wider shadow-md transition-all self-start md:self-end"
          >
            <span>GitHub Profile</span>
            <span>↗</span>
          </a>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech, keyword (e.g. Gemini, Godot, NumPy)..."
              className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-xs font-mono text-text-main placeholder-text-subtle focus:outline-none focus:border-primary transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs text-text-subtle hover:text-text-main"
              >
                ✕
              </button>
            )}
          </div>

          <div className="text-xs font-mono text-text-subtle self-center">
            Showing {filteredProjects.length} of {projectsData.length} systems
          </div>
        </div>

        {/* Filter Chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                sounds.playUiClick();
                setFilter(cat.value);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-1.5 ${
                filter === cat.value
                  ? 'bg-primary text-white font-bold shadow-md shadow-primary/25'
                  : 'bg-surface border border-border text-text-muted hover:text-text-main hover:bg-surface-elevated'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                filter === cat.value ? 'bg-black/30 text-white' : 'bg-surface-elevated text-text-subtle'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </Section>

      {/* Grid of 3D Tilted Projects */}
      {filteredProjects.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>
      ) : (
        <div className="mt-12 text-center py-16 border border-dashed border-border rounded-3xl p-8">
          <p className="text-sm font-mono text-text-muted">
            No projects matched the search "{searchQuery}" under "{filter}".
          </p>
          <button
            type="button"
            onClick={() => {
              setFilter('all');
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-primary text-white text-xs font-mono font-bold"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
