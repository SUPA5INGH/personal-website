import React, { ReactNode } from 'react';

import Link from 'next/link';
import TransitionLink from './TransitionLink';


import TransitionLink from './TransitionLink';


const sections = ['Home', 'Projects', 'Blog', 'About', 'CV'];


interface LayoutProps {
  children: ReactNode;
  activeSection?: string;
  onSectionChange?: (section: string) => void;
  backgroundClass?: string;

  headerBgClass?: string;
  accentColorClass?: string;
  titleClass?: string;
}

export default function Layout({
  children,
  activeSection = '',
  onSectionChange,
  backgroundClass = 'bg-cream',

  headerBgClass = 'bg-sage-200',
  accentColorClass = 'text-dark-green',
  titleClass,
}: LayoutProps) {
  const titleColorClass = titleClass || accentColorClass;

  return (
    <div
      className={`min-h-screen flex flex-col ${backgroundClass} transition-colors`}
    >
      <header
        className={`sticky top-4 z-10 mx-4 rounded-full px-4 py-3 shadow-lg flex items-center justify-between ${headerBgClass}`}
      >
        <div className={`text-2xl font-bold ${titleColorClass}`}>Rohan</div>
        {onSectionChange ? (
          <nav className="relative flex flex-1 items-center text-sm font-medium justify-center">
            <div className="relative flex flex-1 max-w-md bg-gray-100 rounded-full p-1">
              {sections.map((sec) => (
                <button
                  key={sec}
                  onClick={() => onSectionChange(sec)}
                  className={`flex-1 px-3 py-1 text-center rounded-full transition-colors ${activeSection === sec ? accentColorClass : accentColorClass + '/60'}`}
                >
                  {sec}
                </button>
              ))}
              <span
                className={`absolute top-1 left-1 h-[calc(100%-0.5rem)] w-[20%] rounded-full shadow transition-transform duration-500 bg-current/30 ${accentColorClass}`}
                style={
                  {
                    transform: `translateX(${sections.indexOf(activeSection) * 100}%)`,
                    transitionTimingFunction:
                      'cubic-bezier(0.34, 1.56, 0.64, 1)',
                  } as React.CSSProperties
                }
              />
            </div>
          </nav>
        ) : (
          <nav className="space-x-4 text-lg font-medium">
            <TransitionLink
              href="/"
              className="hover:opacity-80 transition-colors"
            >
              Home
            </TransitionLink>
            <TransitionLink
              href="/projects"
              className="hover:opacity-80 transition-colors"
            >
              Projects
            </TransitionLink>
            <TransitionLink
              href="/blog"
              className="hover:opacity-80 transition-colors"
            >
              Blog
            </TransitionLink>
            <TransitionLink
              href="/about"
              className="hover:opacity-80 transition-colors"
            >
              About
            </TransitionLink>
            <TransitionLink
              href="/cv"
              className="hover:opacity-80 transition-colors"
            >
              CV
            </TransitionLink>
          </nav>
        )}

        <div className="flex space-x-4">
          <a
            href="https://github.com"
            aria-label="GitHub"
            className="hover:opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`w-6 h-6 ${titleColorClass}`}
            >
              <defs>
                <linearGradient
                  id="grad-github"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#0ea5e9" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
              <path
                fill="url(#grad-github)"
                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.207 11.387.6.111.793-.261.793-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.091-.746.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.072 1.835 2.809 1.305 3.495.998.108-.776.42-1.305.763-1.604-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.521.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.005-.404c1.02.005 2.047.138 3.004.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.655.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.476 5.921.43.371.814 1.102.814 2.222 0 1.604-.015 2.896-.015 3.287 0 .319.192.694.801.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"
              />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="hover:opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`w-6 h-6 ${titleColorClass}`}
            >
              <defs>
                <linearGradient
                  id="grad-linkedin"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#0ea5e9" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
              <path
                fill="url(#grad-linkedin)"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.783 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.066-1.868-3.066-1.868 0-2.154 1.46-2.154 2.97v5.7h-3v-10h2.881v1.367h.041c.401-.759 1.381-1.559 2.841-1.559 3.041 0 3.604 2.002 3.604 4.605v5.587z"
              />
            </svg>
          </a>
          <a
            href="mailto:email@example.com"
            aria-label="Email"
            className="hover:opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`w-6 h-6 ${titleColorClass}`}
            >
              <defs>
                <linearGradient
                  id="grad-email"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#0ea5e9" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
              <path
                fill="url(#grad-email)"
                d="M12 12.713l-11.985-7.213v13.5c0 1.104.896 2 2 2h19.971c1.104 0 2-.896 2-2v-13.5l-11.986 7.213zm11.986-9.713c0-1.104-.896-2-2-2h-19.971c-1.104 0-2 .896-2 2v.217l11.986 7.213 11.985-7.213v-.217z"
              />
            </svg>
          </a>
        </div>
      </header>
      <main className="flex-1" tabIndex={-1}>
        {children}
      </main>
    </div>
  );
}
