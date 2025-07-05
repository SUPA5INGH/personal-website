import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

const QUOTES = [
  'Preparedness today keeps crisis at bay.',
  'Small microbes, big impacts.',
  'Biosecurity is everyone\'s business.',
];

const SKILLS = [
  { name: 'TypeScript', icon: '🟦' },
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '➡️' },
  { name: 'Tailwind', icon: '🌬️' },
  { name: 'Jest', icon: '🃏' },
  { name: 'Docker', icon: '🐳' },
];

export default function Blog() {
  const [quote, setQuote] = useState('');
  const [isScrolling, setIsScrolling] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsScrolling(false), 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  const handleContact = () => {
    setPulse(true);
    setTimeout(() => setPulse(false), 800);
  };

  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <div className="min-h-screen p-8 bg-cream text-dark-green">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <div className="bento-grid grid gap-6 auto-rows-[200px] sm:grid-cols-2 md:grid-cols-3">
          <div className="relative col-span-2 row-span-2 rounded-3xl overflow-hidden shadow-lg hover-slide bg-pastel-yellow">
            <Image src="/images/pandemic_game.jpg" alt="Latest" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/80 slide-panel">
              <h2 className="font-bold">Latest Article</h2>
              <p className="text-sm">An inside look at public health tech.</p>
            </div>
          </div>

          <div className="col-span-2 rounded-3xl p-6 bg-pastel-blue shadow-lg">
            <h2 className="font-semibold mb-2">Browse Topics</h2>
            <div className="grid grid-cols-3 gap-2">
              {['Policy', 'Tech', 'Opinion', 'Data', 'Interviews', 'Reviews'].map((cat) => (
                <div key={cat} className="bg-white rounded-lg p-2 text-center shadow spring-in">
                  {cat}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl p-6 bg-pastel-green shadow-lg flex flex-col justify-center">
            <h2 className="font-semibold mb-2">Biosecurity Byte</h2>
            <p className="italic text-sm">{quote}</p>
          </div>

          <div className="rounded-3xl p-6 bg-white shadow-lg flex items-center gap-4">
            <Image
              src="/images/memoji.png"
              width={64}
              height={64}
              alt="album art"
              className={`rounded-full spin-slow ${isScrolling ? 'paused' : ''}`}
            />
            <div>
              <div className="font-semibold">Now Playing</div>
              <div className="text-sm">Focus Beats</div>
            </div>
          </div>

          <div className="col-span-2 rounded-3xl p-6 bg-pastel-yellow shadow-lg">
            <h2 className="font-semibold mb-2">Skill Stack</h2>
            <div className="grid grid-cols-4 gap-4">
              {SKILLS.map((s) => (
                <div key={s.name} className="flex flex-col items-center text-xs">
                  <span className="text-2xl bounce-in">{s.icon}</span>
                  {s.name}
                </div>
              ))}
            </div>
          </div>

          <div
            onClick={handleContact}
            className={`rounded-3xl p-6 bg-sage-300 shadow-lg flex flex-col items-center justify-center cursor-pointer ${pulse ? 'pulse-bg' : ''}`}
            style={{ '--pulse-start': '#D9F99D', '--pulse-end': '#FFF3B0' } as React.CSSProperties}
          >
            <h2 className="mb-2 font-semibold">Get in Touch</h2>
            <button className="px-4 py-2 rounded-full bg-dark-green text-white">Contact</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
