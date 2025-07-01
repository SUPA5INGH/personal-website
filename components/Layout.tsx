
import React, { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-dark-green">
      <header className="sticky top-4 z-10 mx-4 rounded-full bg-pastel-green px-6 py-4 shadow-lg flex items-center justify-between">
        <div className="text-2xl font-bold">Rohan</div>
        <nav className="space-x-4 text-lg font-medium">
          <Link href="/" className="hover:opacity-80 transition-colors">
            Home
          </Link>
          <Link href="/projects" className="hover:opacity-80 transition-colors">
            Projects
          </Link>
          <Link href="/blog" className="hover:opacity-80 transition-colors">
            Blog
          </Link>
          <Link href="/about" className="hover:opacity-80 transition-colors">
            About
          </Link>
          <Link href="/cv" className="hover:opacity-80 transition-colors">
            CV
          </Link>
        </nav>
        <div className="flex space-x-4">
          <a
            href="https://github.com"
            aria-label="GitHub"
            className="hover:opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.207 11.387.6.111.793-.261.793-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.091-.746.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.072 1.835 2.809 1.305 3.495.998.108-.776.42-1.305.763-1.604-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.521.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.005-.404c1.02.005 2.047.138 3.004.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.655.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.476 5.921.43.371.814 1.102.814 2.222 0 1.604-.015 2.896-.015 3.287 0 .319.192.694.801.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="hover:opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.783 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.066-1.868-3.066-1.868 0-2.154 1.46-2.154 2.97v5.7h-3v-10h2.881v1.367h.041c.401-.759 1.381-1.559 2.841-1.559 3.041 0 3.604 2.002 3.604 4.605v5.587z" />
            </svg>
          </a>
          <a
            href="mailto:email@example.com"
            aria-label="Email"
            className="hover:opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 12.713l-11.985-7.213v13.5c0 1.104.896 2 2 2h19.971c1.104 0 2-.896 2-2v-13.5l-11.986 7.213zm11.986-9.713c0-1.104-.896-2-2-2h-19.971c-1.104 0-2 .896-2 2v.217l11.986 7.213 11.985-7.213v-.217z" />
            </svg>
          </a>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
