import React from 'react';
import TransitionLink from './TransitionLink';

interface Props {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function BentoTile({ children, className = '', href }: Props) {
  const base =
    'relative overflow-hidden rounded-3xl p-6 shadow-lg hover:scale-105 transition-transform animate-fall';
  const content = <div className={`${base} ${className}`}>{children}</div>;

  if (href) {
    return (
      <TransitionLink href={href} className="block">
        {content}
      </TransitionLink>
    );
  }
  return content;
}
