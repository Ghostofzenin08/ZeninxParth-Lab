import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../ui/ThemeToggle';
import { sounds } from '../../utils/soundEffects';

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(sounds.isMuted());

  const handleToggleSound = () => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
  };

  const links = [
    { name: 'Projects', path: '/projects' },
    { name: 'Orbital 3D', path: '/projects/orbital-the-last-engineer', badge: '3D', highlight: true },
    { name: 'ResuMatch AI', path: '/projects/resumatch', badge: 'AI' },
    { name: 'Echo of Dread', path: '/projects/echo-of-dread' },
    { name: '3D Orbit Sim', path: '/projects/3d-galactic-model' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => sounds.playUiClick()}
          className="flex items-center gap-3 group"
        >
          <div className="w-9 h-9 rounded-xl bg-black border border-primary/40 flex items-center justify-center group-hover:border-primary group-hover:shadow-glow-red transition-all relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-primary font-black font-mono text-sm tracking-tighter relative z-10">
              HS
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm tracking-tight text-text-main group-hover:text-primary transition-colors flex items-center gap-1.5">
              <span>Harshal Sonawane</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-primary/10 text-primary border border-primary/20">
                PORTFOLIO
              </span>
            </span>
            <span className="text-[10px] font-mono text-text-subtle tracking-wider uppercase">
              Aerospace • Full-Stack • AI • Game Dev
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            to="/"
            onClick={() => sounds.playUiClick()}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
              location.pathname === '/'
                ? 'text-primary bg-primary/10 font-bold'
                : 'text-text-muted hover:text-text-main hover:bg-surface-elevated'
            }`}
          >
            Home
          </Link>

          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => {
                if (link.highlight) {
                  sounds.playWarp();
                } else {
                  sounds.playUiClick();
                }
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                isActive(link.path)
                  ? 'text-primary bg-primary/10 font-bold'
                  : 'text-text-muted hover:text-text-main hover:bg-surface-elevated'
              }`}
            >
              {link.highlight && (
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              )}
              <span>{link.name}</span>
              {link.badge && (
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}

          {/* Direct GitHub Link */}
          <a
            href="https://github.com/Ghostofzenin08"
            target="_blank"
            rel="noreferrer"
            onClick={() => sounds.playUiClick()}
            className="px-3 py-1.5 rounded-xl text-xs font-mono font-semibold text-text-muted hover:text-primary hover:bg-surface-elevated flex items-center gap-1 transition-all"
          >
            <span>GitHub</span>
            <span>↗</span>
          </a>
        </nav>

        {/* Action Controls & Utilities */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sound FX Mute Toggle */}
          <button
            onClick={handleToggleSound}
            aria-label={isMuted ? "Unmute UI audio" : "Mute UI audio"}
            title={isMuted ? "Audio muted (Click to enable)" : "Tactile UI audio active (Click to mute)"}
            className="p-2 rounded-xl border border-border bg-surface hover:bg-surface-elevated text-text-subtle hover:text-text-main transition-colors text-xs"
          >
            {isMuted ? '🔇' : '🔊'}
          </button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* itch.io Store Primary CTA Button */}
          <a
            href="https://zeninxparth.itch.io"
            target="_blank"
            rel="noreferrer"
            onClick={() => sounds.playWarp()}
            className="hidden sm:inline-flex items-center justify-center px-3.5 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-[#fa5c5c] text-white hover:bg-[#e04545] shadow-lg shadow-[#fa5c5c]/25 transition-all"
          >
            <span>itch.io ↗</span>
          </a>

          {/* Mobile hamburger menu button */}
          <button
            onClick={() => {
              sounds.playUiClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 lg:hidden rounded-xl border border-border bg-surface text-text-main"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-surface/95 backdrop-blur-xl px-4 py-4 flex flex-col gap-2">
          <Link
            to="/"
            onClick={() => {
              sounds.playUiClick();
              setMobileMenuOpen(false);
            }}
            className={`px-3 py-2 rounded-xl text-sm font-mono ${
              location.pathname === '/' ? 'text-primary bg-primary/10 font-bold' : 'text-text-muted'
            }`}
          >
            Home
          </Link>

          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => {
                if (link.highlight) sounds.playWarp();
                else sounds.playUiClick();
                setMobileMenuOpen(false);
              }}
              className={`px-3 py-2 rounded-xl text-sm font-mono flex items-center justify-between ${
                isActive(link.path) ? 'text-primary bg-primary/10 font-bold' : 'text-text-muted'
              }`}
            >
              <span>{link.name}</span>
              {link.highlight && (
                <span className="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/30">
                  Flagship Game
                </span>
              )}
              {link.badge && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}

          <a
            href="https://github.com/Ghostofzenin08"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-xl text-xs font-mono text-text-subtle hover:text-text-main flex items-center justify-between border-t border-border/80 mt-2 pt-3"
          >
            <span>GitHub Profile (@Ghostofzenin08)</span>
            <span>↗</span>
          </a>

          <a
            href="https://zeninxparth.itch.io"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-xl text-xs font-mono font-bold text-[#fa5c5c] bg-[#fa5c5c]/10 border border-[#fa5c5c]/20 flex items-center justify-between"
          >
            <span>itch.io Games Store</span>
            <span>↗</span>
          </a>
        </div>
      )}
    </header>
  );
}
