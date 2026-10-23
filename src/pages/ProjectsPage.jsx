import React, { useState } from 'react';
import Section from '../components/common/Section';
import ProjectCard from '../components/common/ProjectCard';
import { projectsData } from '../data/projectsData';
import { sounds } from '../utils/soundEffects';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');

  const categories = [
    { label: 'All Titles', value: 'All' },
    { label: '🕹️ itch.io Store', value: 'itch' },
    { label: 'Godot Engine', value: 'Godot' },
    { label: 'Python & Pygame', value: 'Python' },
    { label: 'Web & APIs', value: 'Web' },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'All') return true;
    if (filter === 'itch') return !!project.itchUrl;
    if (filter === 'Godot') return project.tags.some(t => t.includes('Godot'));
    if (filter === 'Python') return project.tags.some(t => t.toLowerCase().includes('python') || t.includes('Pygame'));
    if (filter === 'Web') return project.tags.some(t => t.includes('React') || t.includes('REST') || t.includes('Canvas'));
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Section className="!py-4">
        {/* Breadcrumb / Top badge */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
            Storefront & Technical Case Studies
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#fa5c5c]/10 text-[#fa5c5c] border border-[#fa5c5c]/30 font-bold">
            zeninxparth.itch.io
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-text-main mt-1 tracking-tight">
              Indie Game Store & Lab
            </h1>
            <p className="mt-4 text-text-muted max-w-2xl text-base leading-relaxed">
              Explore playable indie titles on itch.io, dedicated architecture case studies, game physics experiments, and low-latency cloud microservices.
            </p>
          </div>

          <a
            href="https://zeninxparth.itch.io"
            target="_blank"
            rel="noreferrer"
            onClick={() => sounds.playWarp()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#fa5c5c] text-white hover:bg-[#e04545] font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#fa5c5c]/25 transition-all self-start md:self-end"
          >
            <span>Visit itch.io Storefront</span>
            <span>↗</span>
          </a>
        </div>

        {/* Filter Chips */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                sounds.playUiClick();
                setFilter(cat.value);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                filter === cat.value
                  ? 'bg-primary text-white font-bold shadow-md shadow-primary/25'
                  : 'bg-surface border border-border text-text-muted hover:text-text-main hover:bg-surface-elevated'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </Section>

      {/* Grid of Projects */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
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
    </div>
  );
}
