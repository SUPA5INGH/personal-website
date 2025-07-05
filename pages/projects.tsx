import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import Layout from '../components/Layout';
import BentoTile from '../components/BentoTile';

const kpis = [
  { label: 'Projects', value: 20 },
  { label: 'Papers', value: 5 },
  { label: 'Collabs', value: 8 },
];

const slides = [
  { title: 'Open Source Dashboard', img: '/images/pandemic_game.jpg' },
  { title: 'Telehealth Toolkit', img: '/images/pandemic_game.jpg' },
  { title: 'Rapid Response App', img: '/images/pandemic_game.jpg' },
];

const testimonials = [
  { quote: 'Fantastic collaborator!', author: 'Jane D.' },
  { quote: 'Brings great energy to teams.', author: 'A. Smith' },
  { quote: 'Always delivers quality work.', author: 'K. Patel' },
];

export default function Projects() {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [flipped, setFlipped] = useState(false);
  const [testiIndex, setTestiIndex] = useState(0);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const index = ((page % slides.length) + slides.length) % slides.length;

  useEffect(() => {
    const id = setInterval(
      () => setTestiIndex((i) => (i + 1) % testimonials.length),
      8000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <div className="min-h-screen p-8 bg-cream text-dark-green">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <div className="bento-grid grid gap-6 auto-rows-[250px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {/* KPI left */}
          <BentoTile className="lg:row-span-2 bg-pastel-blue flex flex-col justify-center">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="mb-2">
                <div className="relative h-6 bg-white rounded">
                  <div
                    className="absolute inset-0 bg-pastel-green opacity-40"
                    style={{ width: `${kpi.value * 5}%` }}
                  />
                  <div className="relative z-10 flex justify-between px-2 text-sm font-semibold">
                    <span>{kpi.label}</span>
                    <span>{kpi.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </BentoTile>
          {/* Carousel */}
          <BentoTile className="lg:col-span-2 lg:row-span-2 bg-pastel-green flex flex-col items-center justify-center">
            <div className="relative w-full h-40 overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={page}
                  custom={direction}
                  className="absolute w-full h-full flex items-center justify-center"
                  variants={{
                    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
                    center: { x: 0, opacity: 1 },
                    exit: (d: number) => ({ x: d < 0 ? 300 : -300, opacity: 0 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, { offset }) => {
                    if (offset.x < -50) paginate(1);
                    else if (offset.x > 50) paginate(-1);
                  }}
                >
                  <Image src={slides[index].img} alt={slides[index].title} fill className="object-cover" />
                </motion.div>
              </AnimatePresence>
            </div>
            <motion.div drag="x" className="mt-2 flex space-x-2 cursor-grab">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage([i, i > index ? 1 : -1])}
                  className={`h-2 w-2 rounded-full ${i === index ? 'bg-dark-green' : 'bg-dark-green/30'}`}
                />
              ))}
            </motion.div>
          </BentoTile>
          {/* KPI right */}
          <BentoTile className="lg:row-span-2 bg-pastel-blue flex flex-col justify-center">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="mb-2">
                <div className="relative h-6 bg-white rounded">
                  <div
                    className="absolute inset-0 bg-pastel-green opacity-40"
                    style={{ width: `${kpi.value * 5}%` }}
                  />
                  <div className="relative z-10 flex justify-between px-2 text-sm font-semibold">
                    <span>{kpi.label}</span>
                    <span>{kpi.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </BentoTile>
          {/* Case Study flip card */}
          <BentoTile
            className="relative bg-pastel-yellow cursor-pointer"
            onClick={() => setFlipped(!flipped)}
          >
            <div
              className={`relative w-full h-full [transform-style:preserve-3d] transition-transform duration-500 ${flipped ? 'rotate-y-180' : ''}`}
            >
              <div className="absolute inset-0 backface-hidden flex items-center justify-center">
                <p className="font-semibold">Case Study of the Month</p>
              </div>
              <div className="absolute inset-0 rotate-y-180 backface-hidden flex items-center justify-center">
                <Image src="/images/pandemic_game.jpg" alt="Root cause" fill className="object-cover" />
              </div>
            </div>
          </BentoTile>
          {/* Skill stack matrix */}
          <BentoTile className="bg-sage-100 animate-fall-fast">
            <div className="grid grid-cols-4 gap-2 text-center text-sm font-medium">
              {['React', 'TS', 'Next', 'Node', 'Python', 'Docker', 'SQL', 'Tailwind'].map((skill) => (
                <div key={skill} className="p-2 bg-white rounded shadow">
                  {skill}
                </div>
              ))}
            </div>
          </BentoTile>
          {/* GitHub pulse heatmap */}
          <BentoTile className="bg-white flex flex-col items-center justify-center">
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 49 }).map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3"
                  style={{ backgroundColor: i % 5 === 0 ? '#97A97C' : '#CFE1B9' }}
                />
              ))}
            </div>
            <svg viewBox="0 0 100 20" className="mt-2 w-full h-4">
              <polyline
                fill="none"
                stroke="#386641"
                strokeWidth="2"
                points="0,15 20,10 40,12 60,8 80,13 100,5"
              />
            </svg>
          </BentoTile>
          {/* LinkedIn testimonials */}
          <BentoTile className="bg-pastel-green flex flex-col items-center justify-center">
            <div className="text-center">
              <p className="italic mb-2 transition-opacity duration-300">
                {testimonials[testiIndex].quote}
              </p>
              <p className="text-sm font-semibold">{testimonials[testiIndex].author}</p>
            </div>
          </BentoTile>
          {/* Contact CTA */}
          <BentoTile className="lg:col-span-4 bg-dark-green text-white text-center">
            <h2 className="text-xl font-bold mb-2">Let&apos;s work together</h2>
            <p>
              Email:{' '}
              <a href="mailto:email@example.com" className="underline">
                email@example.com
              </a>
            </p>
          </BentoTile>
        </div>
      </div>
    </Layout>
  );
}
