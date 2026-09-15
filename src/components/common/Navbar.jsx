import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../ui/ThemeToggle';

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/70 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-black border border-primary/40 flex items-center justify-center group-hover:border-primary transition-all">
            <span className="text-primary font-bold font-mono text-sm tracking-tighter">ZX</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-text-main group-hover:text-primary transition-colors">
              ZeninXParth
            </span>
            <span className="text-[10px] font-mono text-text-subtle tracking-wider uppercase">
              Harshal & Parth
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                isActive(link.path)
                  ? 'text-primary bg-primary/10 font-semibold'
                  : 'text-text-muted hover:text-text-main hover:bg-surface-elevated'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://github.com/Ghostofzenin08"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-text-muted hover:text-text-main hover:bg-surface-elevated"
          >
            GitHub ?
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/projects"
            className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-primary text-white hover:bg-primary-hover shadow-sm"
          >
            Showcase
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden rounded-lg border border-border text-text-main"
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

      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-surface px-4 py-3 flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-lg text-sm font-medium ${
                isActive(link.path) ? 'text-primary bg-primary/10' : 'text-text-muted'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://github.com/Ghostofzenin08"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 rounded-lg text-sm text-text-muted"
          >
            GitHub ?
          </a>
        </div>
      )}
    </header>
  );
}
