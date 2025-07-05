import React from 'react';

interface BentoTileProps {
  className?: string;
  children: React.ReactNode;
}

export default function BentoTile({ children, className = '' }: BentoTileProps) {
  return (
    <div
      className={`rounded-3xl p-6 shadow-lg hover:scale-105 transition-transform animate-fall ${className}`}
    >
      {children}
    </div>
  );
}
