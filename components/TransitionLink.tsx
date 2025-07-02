import Link, { LinkProps } from 'next/link';
import React from 'react';
import { useBentoTransition } from './BentoPageTransition';

export default function TransitionLink({
  href,
  children,
  className,
  ...rest
}: LinkProps & { children: React.ReactNode; className?: string }) {
  const { startTransition } = useBentoTransition();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const path = typeof href === 'string' ? href : href.pathname || '';
    startTransition(path);
  };
  return (
    <a
      href={typeof href === 'string' ? href : href.pathname || ''}
      onClick={handleClick}
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
}
