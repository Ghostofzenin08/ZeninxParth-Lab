import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../ui/Badge';

export default function ProjectCard({
  title,
  description,
  tags = [],
  caseStudyUrl,
  liveUrl,
  githubUrl,
  category = "Full-Stack / Game",
}) {
  return (
    <div className="group relative rounded-2xl border border-border bg-surface hover:border-primary/40 hover:shadow-glow-subtle transition-all duration-300 p-6 flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-mono tracking-wider uppercase text-text-subtle">
            {category}
          </span>
          {liveUrl && (
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Live Demo
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold tracking-tight text-text-main group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="mt-2.5 text-sm text-text-muted line-clamp-2 leading-relaxed">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge key={tag} variant="default">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs">
        <Link
          to={caseStudyUrl}
          className="font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all"
        >
          View Case Study <span>?</span>
        </Link>

        <div className="flex items-center gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-text-subtle hover:text-text-main font-mono"
            >
              GitHub ?
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-text-subtle hover:text-text-main font-mono"
            >
              Demo ?
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
