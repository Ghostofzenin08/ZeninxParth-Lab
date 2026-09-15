import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const base = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 active:scale-[0.98]";

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3 text-base gap-2.5",
  };

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/25 border border-primary/30",
    secondary: "bg-surface border border-border text-text-main hover:bg-surface-elevated hover:border-text-subtle/30 shadow-sm",
    outline: "border border-border text-text-muted hover:text-text-main hover:border-primary/50 hover:bg-primary/5",
    ghost: "text-text-muted hover:text-text-main hover:bg-surface-elevated",
  };

  const combinedClasses = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
