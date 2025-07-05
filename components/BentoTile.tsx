import React, { ReactNode } from 'react';

interface BentoTileProps {
  className?: string;
  children: ReactNode;
}

export default function BentoTile({ className = '', children }: BentoTileProps) {
  return (
    <div
      className={`relative rounded-3xl bg-white shadow-lg p-4 overflow-hidden transition-transform hover:scale-105 ${className}`}
    >
      {children}
    </div>
  );
}
