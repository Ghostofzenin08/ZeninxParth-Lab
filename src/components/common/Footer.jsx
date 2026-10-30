import React from 'react';
import { Link } from 'react-router-dom';
import { sounds } from '../../utils/soundEffects';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface transition-colors mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-text-subtle">
              Available for Full-Stack, AI & Game Engineering Roles
            </span>
          </div>
          <p className="text-sm text-text-muted mt-1">
            <span className="font-bold text-text-main">Harshal Sonawane</span> • Aerospace Engineer & Full-Stack / AI Systems Builder
          </p>
          <p className="text-xs font-mono text-text-subtle mt-0.5">
            Contact: <a href="mailto:harshalsonawane308@gmail.com" className="text-primary hover:underline">harshalsonawane308@gmail.com</a>
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
            All Systems (8)
          </Link>
          <Link
            to="/projects/resumatch"
            onClick={() => sounds.playUiClick()}
            className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors"
          >
            ResuMatch AI
          </Link>
          <Link
            to="/projects/echo-of-dread"
            onClick={() => sounds.playWarp()}
            className="text-primary hover:text-primary-hover font-bold transition-colors"
          >
            Echo of Dread
          </Link>
          <Link
            to="/projects/3d-galactic-model"
            onClick={() => sounds.playUiClick()}
            className="text-amber-400 hover:text-amber-300 font-bold transition-colors"
          >
            3D Orbit Sim
          </Link>
          <Link
            to="/about"
            onClick={() => sounds.playUiClick()}
            className="hover:text-primary transition-colors"
          >
            About & Bio
          </Link>
          <a
            href="https://github.com/Ghostofzenin08"
            target="_blank"
            rel="noreferrer"
            onClick={() => sounds.playUiClick()}
            className="hover:text-primary transition-colors font-bold"
          >
            GitHub @Ghostofzenin08 ↗
          </a>
          <a
            href="https://zeninxparth.itch.io"
            target="_blank"
            rel="noreferrer"
            onClick={() => sounds.playWarp()}
            className="text-[#fa5c5c] hover:underline font-bold transition-colors"
          >
            itch.io Store ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
