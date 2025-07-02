import Link, { LinkProps } from 'next/link';
import React, { MouseEvent } from 'react';
import { useBentoTransition } from './BentoPageTransition';

interface Props extends LinkProps {
  className?: string;
  children: React.ReactNode;
}

export default function TransitionLink({
  href,
  children,
  className,
  ...rest
}: Props) {
  const { startTransition } = useBentoTransition();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (
      e.defaultPrevented ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0
    ) {
      return;
    }
    e.preventDefault();
    const path = typeof href === 'string' ? href : (href.pathname ?? '');
    startTransition(path);
  };

  return (
    <Link href={href} legacyBehavior>
      <a onClick={handleClick} className={className} {...rest}>
        {children}
      </a>
    </Link>
  );
}
