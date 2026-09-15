import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface transition-colors mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-mono uppercase tracking-wider text-text-subtle">
              Open to Opportunities & Research Collaborations
            </span>
          </div>
          <p className="text-sm text-text-muted">
            Crafted by <span className="font-semibold text-text-main">Harshal Sonawane</span> &{' '}
            <span className="font-semibold text-text-main">Parth Sonawane</span>
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-text-muted">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <a
            href="https://github.com/Ghostofzenin08"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors font-mono"
          >
            @Ghostofzenin
          </a>
          <a
            href="https://github.com/parthongit89"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors font-mono"
          >
            @parthongit89
          </a>
        </div>
      </div>
    </footer>
  );
}
