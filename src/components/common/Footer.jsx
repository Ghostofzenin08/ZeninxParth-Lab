import React from 'react';
import { Link } from 'react-router-dom';
import { sounds } from '../../utils/soundEffects';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface transition-colors mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-mono uppercase tracking-wider text-text-subtle">
              Open to Game Collabs & Engineering Opportunities
            </span>
          </div>
          <p className="text-sm text-text-muted mt-1">
            ZeninXParth Indie Studio • Built by{' '}
            <span className="font-semibold text-text-main">Harshal Sonawane</span> &{' '}
            <span className="font-semibold text-text-main">Parth Sonawane</span>
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-mono text-text-muted">
          <Link
            to="/"
            onClick={() => sounds.playUiClick()}
            className="hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to="/projects"
            onClick={() => sounds.playUiClick()}
            className="hover:text-primary transition-colors"
          >
            Game Store
          </Link>
          <Link
            to="/projects/echo-of-dread"
            onClick={() => sounds.playWarp()}
            className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors"
          >
            Echo of Dread
          </Link>
          <Link
            to="/about"
            onClick={() => sounds.playUiClick()}
            className="hover:text-primary transition-colors"
          >
            About
          </Link>
          <a
            href="https://zeninxparth.itch.io"
            target="_blank"
            rel="noreferrer"
            onClick={() => sounds.playWarp()}
            className="text-[#fa5c5c] hover:underline font-bold transition-colors"
          >
            itch.io Store ↗
          </a>
          <a
            href="https://github.com/Ghostofzenin08"
            target="_blank"
            rel="noreferrer"
            onClick={() => sounds.playUiClick()}
            className="hover:text-primary transition-colors"
          >
            @Ghostofzenin08 ↗
          </a>
          <a
            href="https://github.com/parthongit89"
            target="_blank"
            rel="noreferrer"
            onClick={() => sounds.playUiClick()}
            className="hover:text-primary transition-colors"
          >
            @parthongit89 ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
