import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Section from '../common/Section';

export default function CaseStudyLayout({ project }) {
  if (!project) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-text-subtle hover:text-primary transition-colors"
        >
          <span>←</span> Back to all projects
        </Link>
      </div>

      <Section className="!py-0">
        <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">
          Case Study • {project.category}
        </span>
        <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-text-main">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-text-muted leading-relaxed">
          {project.subtitle}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="accent">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <Button href={project.liveUrl} variant="primary" size="md">
              Live Demo ↗
            </Button>
          )}
          {project.githubUrl && (
            <Button href={project.githubUrl} variant="secondary" size="md">
              GitHub Repository ↗
            </Button>
          )}
        </div>
      </Section>

      <div className="my-12 border-t border-border" />

      <Section className="!py-0">
        <h2 className="text-xl font-bold tracking-tight text-text-main flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-primary" />
          The Challenge & Objective
        </h2>
        <p className="mt-3 text-text-muted leading-relaxed">
          {project.problem}
        </p>
      </Section>

      <div className="my-10 border-t border-border" />

      <Section className="!py-0">
        <h2 className="text-xl font-bold tracking-tight text-text-main flex items-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-accent" />
          Team Roles & Engineering Responsibilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.team.map((member, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-border bg-surface hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-text-main text-base">{member.name}</h3>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-primary hover:underline"
                >
                  GitHub ↗
                </a>
              </div>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <div className="my-10 border-t border-border" />

      <Section className="!py-0">
        <h2 className="text-xl font-bold tracking-tight text-text-main flex items-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
          Key Architectural Decisions & Trade-offs
        </h2>
        <div className="space-y-4">
          {project.decisions.map((dec, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl border border-border bg-surface/60 hover:bg-surface transition-colors"
            >
              <h4 className="font-semibold text-text-main text-sm font-mono flex items-center gap-2">
                <span className="text-primary font-bold">#{i + 1}</span> {dec.title}
              </h4>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                {dec.detail}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <div className="my-10 border-t border-border" />

      <Section className="!py-0">
        <h2 className="text-xl font-bold tracking-tight text-text-main flex items-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          Key Features & What We Built
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {project.features.map((feat, index) => (
            <li
              key={index}
              className="p-3.5 rounded-xl border border-border bg-surface text-sm text-text-muted flex items-start gap-2.5"
            >
              <span className="text-emerald-500 mt-0.5 font-bold">✓</span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </Section>

      <div className="my-10 border-t border-border" />

      <Section className="!py-0">
        <h2 className="text-xl font-bold tracking-tight text-text-main flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
          Outcome & Technical Learnings
        </h2>
        <div className="p-6 rounded-2xl border border-border bg-surface-elevated text-text-muted text-sm leading-relaxed">
          {project.learnings}
        </div>
      </Section>

      <div className="mt-14 pt-8 border-t border-border flex items-center justify-between">
        <Button to="/projects" variant="outline" size="sm">
          ← Back to Projects
        </Button>
        {project.liveUrl && (
          <Button href={project.liveUrl} variant="primary" size="sm">
            Launch Live Project ↗
          </Button>
        )}
      </div>
    </div>
  );
}
