import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../ui/Badge';
import { sounds } from '../../utils/soundEffects';

export default function ProjectCard({
  id,
  title,
  description,
  tags = [],
  caseStudyUrl,
  itchUrl,
  liveUrl,
  githubUrl,
  category = "Indie Game",
  coverImage,
  thumbnail,
  rating,
  badge,
  platforms = [],
  featured = false,
}) {
  const displayImage = thumbnail || coverImage;

  return (
    <div
      onMouseEnter={() => sounds.playBeep()}
      className={`group relative rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
        featured
          ? 'border-primary/50 bg-surface/90 shadow-lg shadow-primary/10 hover:border-primary hover:shadow-glow-red'
          : 'border-border bg-surface hover:border-primary/40 hover:shadow-glow-subtle'
      }`}
    >
      {/* Top glowing accent line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      <div>
        {/* Cover Thumbnail Media */}
        {displayImage ? (
          <div className="relative h-48 w-full overflow-hidden bg-black/40 border-b border-border/80">
            <img
              src={displayImage}
              alt={title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-70" />
            
            {/* Overlay Badges */}
            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
              {badge && (
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-primary text-white shadow-md">
                  {badge}
                </span>
              )}
              {rating && (
                <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-black/80 text-amber-400 border border-amber-400/30">
                  {rating}
                </span>
              )}
            </div>

            {itchUrl && (
              <div className="absolute top-3 right-3 z-10">
                <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-[#fa5c5c] text-white shadow-sm flex items-center gap-1">
                  <span>itch.io</span>
                </span>
              </div>
            )}
          </div>
        ) : (
          <div className="h-4 bg-transparent" />
        )}

        {/* Card Body */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[11px] font-mono tracking-wider uppercase text-text-subtle font-semibold">
              {category}
            </span>
            {liveUrl && (
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Playable
              </span>
            )}
          </div>

          <h3 className="text-xl font-extrabold tracking-tight text-text-main group-hover:text-primary transition-colors">
            {title}
          </h3>

          <p className="mt-2.5 text-xs sm:text-sm text-text-muted line-clamp-3 leading-relaxed">
            {description}
          </p>

          {/* Platform compatibility pills */}
          {platforms.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {platforms.map((plat) => (
                <span
                  key={plat}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-elevated text-text-subtle border border-border"
                >
                  {plat}
                </span>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="default">
                {tag}
              </Badge>
            ))}
            {tags.length > 4 && (
              <span className="text-[10px] font-mono text-text-subtle self-center">
                +{tags.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-6 pt-0 mt-2">
        <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs">
          <Link
            to={caseStudyUrl}
            onClick={() => sounds.playUiClick()}
            className="font-bold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all font-mono"
          >
            <span>Inspect Chambers</span>
            <span>→</span>
          </Link>

          <div className="flex items-center gap-2">
            {itchUrl && (
              <a
                href={itchUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => sounds.playWarp()}
                className="px-2.5 py-1 rounded-lg bg-[#fa5c5c]/10 hover:bg-[#fa5c5c] text-[#fa5c5c] hover:text-white font-mono font-bold border border-[#fa5c5c]/30 transition-all flex items-center gap-1"
                title="Play on itch.io"
              >
                <span>itch.io</span>
                <span>↗</span>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => sounds.playUiClick()}
                className="px-2.5 py-1 rounded-lg border border-border text-text-subtle hover:text-text-main hover:bg-surface-elevated font-mono transition-colors"
                title="Live Simulation Demo"
              >
                Demo ↗
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => sounds.playUiClick()}
                className="px-2 py-1 rounded-lg border border-border text-text-subtle hover:text-text-main font-mono transition-colors"
                title="GitHub Repository"
              >
                Code ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
