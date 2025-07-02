import React, { createContext, useContext, useEffect, useState } from 'react';

import { useRouter } from 'next/router';

interface Context {
  startTransition: (href: string) => void;
}

const BentoContext = createContext<Context>({ startTransition: () => {} });

export function useBentoTransition() {
  return useContext(BentoContext);
}

const colorMap: Record<string, string> = {
  '/': '#E9F5DB',

  '/projects': '#BFDBFE',
  '/blog': '#FED7AA',
  '/about': '#E9D5FF',
  '/cv': '#D9F99D',
  '/moral': '#FCD34D',
  '/skills': '#FCA5A5',
};

export default function BentoPageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [colors, setColors] = useState({ start: '#fff', end: '#fff' });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setReducedMotion(
        window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      );
    }
  }, []);

  const startTransition = (href: string) => {
    if (href === router.pathname) {
      router.push(href);
      return;
    }
    const start = colorMap[router.pathname] || '#fff';
    const end = colorMap[href] || '#fff';
    setColors({ start, end });
    setIsTransitioning(true);
    animateExit(() => {
      router.push(href);
    });
  };

  const animateExit = (done: () => void) => {
    if (reducedMotion) {
      done();
      return;
    }
    const grid = document.querySelector('.bento-grid');
    if (grid) {
      const tiles = Array.from(grid.children) as HTMLElement[];
      const rows: Map<number, HTMLElement[]> = new Map();
      tiles.forEach((tile) => {
        const top = Math.round(tile.getBoundingClientRect().top);
        if (!rows.has(top)) rows.set(top, []);
        rows.get(top)!.push(tile);
      });
      const rowTops = Array.from(rows.keys()).sort((a, b) => a - b);
      const maxOffset = Math.floor(rowTops.length / 2);
      rowTops.forEach((top, index) => {
        const offset = Math.min(index, rowTops.length - 1 - index);
        const delay = (maxOffset - offset) * 50;
        rows.get(top)!.forEach((tile) => {
          tile.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
          tile.style.transitionDelay = `${delay}ms`;
          tile.style.transform = 'scale(0.9)';
          tile.style.opacity = '0';
        });
      });
    }
    requestAnimationFrame(() => {
      const overlay = document.getElementById('bento-overlay');
      if (overlay) overlay.classList.add('expand');
    });
    const timeout = reducedMotion ? 0 : 400 + 50 * 5; // approximate
    setTimeout(done, timeout);
  };

  const animateEnter = () => {
    if (reducedMotion) {
      finish();
      return;
    }
    const grid = document.querySelector('.bento-grid');
    if (grid) {
      const tiles = Array.from(grid.children) as HTMLElement[];
      const rows: Map<number, HTMLElement[]> = new Map();
      tiles.forEach((tile) => {
        const top = Math.round(tile.getBoundingClientRect().top);
        if (!rows.has(top)) rows.set(top, []);
        rows.get(top)!.push(tile);
        tile.style.transform = 'scale(1.1)';
        tile.style.opacity = '0';
      });
      const rowTops = Array.from(rows.keys()).sort((a, b) => a - b);
      const maxOffset = Math.floor(rowTops.length / 2);
      requestAnimationFrame(() => {
        rowTops.forEach((top, index) => {
          const offset = Math.min(index, rowTops.length - 1 - index);
          const delay = (maxOffset - offset) * 50;
          rows.get(top)!.forEach((tile) => {
            tile.style.transition =
              'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease';
            tile.style.transitionDelay = `${delay}ms`;
            tile.style.transform = 'scale(1)';
            tile.style.opacity = '1';
          });
        });
      });
    }
    const overlay = document.getElementById('bento-overlay');
    if (overlay) {
      overlay.classList.add('fade-out');
      setTimeout(finish, 400);
    } else {
      finish();
    }
  };

  useEffect(() => {
    const handleComplete = () => {
      if (isTransitioning) {
        animateEnter();
      }
    };
    router.events.on('routeChangeComplete', handleComplete);
    return () => {
      router.events.off('routeChangeComplete', handleComplete);
    };
  }, [isTransitioning, animateEnter, router.events]);

  const finish = () => {
    const overlay = document.getElementById('bento-overlay');
    overlay?.classList.remove('expand', 'fade-out');
    overlay?.setAttribute('style', '');
    setIsTransitioning(false);
    setTimeout(() => {
      const main = document.querySelector('main') as HTMLElement | null;
      main?.focus();
    }, 0);
  };

  return (
    <BentoContext.Provider value={{ startTransition }}>
      {children}

      {isTransitioning && (
        <div
          id="bento-overlay"
          aria-hidden="true"
          className="bento-transition-overlay"
          style={{
            //@ts-ignore
            '--start-color': colors.start,
            //@ts-ignore
            '--end-color': colors.end,
          }}
        />
      )}
    </BentoContext.Provider>
  );
}
