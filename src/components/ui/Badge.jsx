import React from 'react';

export default function Badge({ children, variant = 'default', className = '' }) {
  const styles = {
    default: "bg-surface-elevated text-text-muted border-border",
    accent: "bg-primary-soft text-primary border-primary/20 font-semibold",
    blue: "bg-accent-soft text-accent border-accent/20",
    cyber: "bg-black text-red-500 border-red-500/30 dark:bg-red-950/30 dark:text-red-400",
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono border ${styles[variant] || styles.default} ${className}`}>
      {children}
    </span>
  );
}
