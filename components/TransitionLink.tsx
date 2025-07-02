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
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.altKey ||
      e.ctrlKey ||
      e.shiftKey
    ) {
      return;
    }

    e.preventDefault();
    const path = typeof href === 'string' ? href : href.pathname || '';
    startTransition(path);
  };

  return (
    <Link
      href={href}
      passHref
      onClick={handleClick}
      className={className}
      {...rest}
    >
      {children}
    </Link>
  );
}
