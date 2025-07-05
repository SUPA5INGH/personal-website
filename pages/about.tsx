import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import BentoTile from '../components/BentoTile';

const KONAMI = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export default function About() {
  const [sequence, setSequence] = useState<string[]>([]);
  const [egg, setEgg] = useState(false);
  const [contactFirst, setContactFirst] = useState(false);
  const [nowIndex, setNowIndex] = useState(0);
  const [mapZoomed, setMapZoomed] = useState(false);
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!shadowRef.current) return;
      const rect = shadowRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      shadowRef.current.style.setProperty(
        'box-shadow',
        `${-x / 10}px ${-y / 10}px 20px rgba(0,0,0,0.3)`,
      );
    };
    const node = shadowRef.current;
    node?.addEventListener('mousemove', handleMove);
    return () => node?.removeEventListener('mousemove', handleMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNowIndex((i) => (i + 1) % 2);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      setSequence((prev) => {
        const next = [...prev, e.key].slice(-KONAMI.length);
        if (next.join('') === KONAMI.join('')) {
          setEgg(true);
          setContactFirst(true);
          const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
          const osc = ctx.createOscillator();
          osc.type = 'square';
          osc.frequency.value = 440;
          osc.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 0.2);
        }
        return next;
      });
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const tiles = [
    contactFirst && (
      <BentoTile key="contact" className="flex items-center justify-center bg-pastel-blue">
        <a href="mailto:email@example.com" className="text-lg font-bold">
          Contact Me
        </a>
      </BentoTile>
    ),
    <BentoTile key="selfie" className="col-span-2 row-span-2 flex items-center justify-center bg-pastel-yellow" ref={shadowRef}>
      <Image src="/images/memoji.png" alt="Selfie" width={300} height={300} className="rounded" />
    </BentoTile>,
    <BentoTile key="travel" className="flex flex-col items-center justify-center bg-pastel-green">
      <div className="flex space-x-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`h-3 w-3 rounded-full bg-dark-green inline-block animate-[fall_0.5s_ease forwards]`}
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
      <div className="mt-2 text-sm">Travel Scorecard</div>
    </BentoTile>,
    <BentoTile
      key="map"
      className="relative flex items-center justify-center cursor-pointer"
      onMouseEnter={() => setMapZoomed(true)}
      onMouseLeave={() => setMapZoomed(false)}
    >
      <Image
        src="https://maps.googleapis.com/maps/api/staticmap?center=0,0&zoom=1&size=300x200&key=AIzaSyD-no-real"
        alt="Map"
        fill
        className={`object-cover transition-transform duration-500 ${mapZoomed ? 'scale-110' : ''}`}
      />
      <Image src="/images/memoji.png" alt="Bitmoji" width={60} height={60} className="absolute bottom-2 right-2" />
    </BentoTile>,
    <BentoTile key="now" className="flex items-center justify-center bg-pastel-blue">
      {nowIndex === 0 ? 'Now Playing: Song A' : 'Reading: Book B'}
    </BentoTile>,
    <BentoTile key="bio" className="[perspective:1000px]">
      <div className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-500 hover:[transform:rotateY(180deg)]">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backfaceVisibility: 'hidden' }}
        >
          Biosecurity Byte
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center bg-pastel-green"
          style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
        >
          Coming Soon
        </div>
      </div>
    </BentoTile>,
    <BentoTile key="easter" className="flex items-center justify-center bg-pastel-yellow">
      {egg ? (
        <div className="pixel-art">🎉</div>
      ) : (
        'Easter Egg'
      )}
    </BentoTile>,
    !contactFirst && (
      <BentoTile key="contact" className="flex items-center justify-center bg-pastel-blue">
        <a href="mailto:email@example.com" className="text-lg font-bold">
          Contact Me
        </a>
      </BentoTile>
    ),
  ].filter(Boolean);

  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <div className="min-h-screen p-6 bg-cream text-dark-green">
        <h1 className="mb-4 text-3xl font-bold">About</h1>
        <div className="bento-grid grid gap-4 auto-rows-[200px] sm:grid-cols-2 md:grid-cols-3">
          {tiles}
        </div>
      </div>
    </Layout>
  );
}
