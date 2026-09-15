import React, { useState } from 'react';
import Section from '../components/common/Section';
import ProjectCard from '../components/common/ProjectCard';
import { projectsData } from '../data/projectsData';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'React', 'Python', 'Game Dev', 'API'];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'All') return true;
    if (filter === 'React') return project.tags.includes('React');
    if (filter === 'Python') return project.tags.includes('Python') || project.tags.some(t => t.includes('Python'));
    if (filter === 'Game Dev') return project.tags.includes('Pygame') || project.category.includes('Game');
    if (filter === 'API') return project.tags.includes('REST API') || project.tags.includes('Flask 3.0');
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Section className="!py-4">
        <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
          Directory & Case Studies
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-text-main mt-2 tracking-tight">
          Crafted Projects
        </h1>
        <p className="mt-4 text-text-muted max-w-2xl text-base leading-relaxed">
          Comprehensive breakdown of web applications, multiplayer/single-player indie games, and backend microservices built across Python, React, and modern cloud infrastructure.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-xl text-xs font-mono transition-all ${
                filter === cat
                  ? 'bg-primary text-white font-semibold shadow-sm'
                  : 'bg-surface border border-border text-text-muted hover:text-text-main hover:bg-surface-elevated'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Section>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
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
    </div>
  );
}
