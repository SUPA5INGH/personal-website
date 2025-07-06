import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import BentoTile from '../components/BentoTile';
import ElevatorPitchTile from '../components/ElevatorPitchTile';
import SkillStackMatrixTile from '../components/SkillStackMatrixTile';
import DownloadCvTile from '../components/DownloadCvTile';

import PolaroidSelfieTile from '../components/PolaroidSelfieTile';
import {
  RocketLaunchIcon,
  BookOpenIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';

const gradientClass =
  'text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500';
const gradientIconClass = `w-6 h-6 ${gradientClass}`;

export default function Home() {
  const [activeSection, setActiveSection] = useState('Home');

  const themeMap: Record<
    string,
    { bg: string; header: string; accent: string }
  > = {
    // Neutral palette for the landing section

    Home: {
      bg: 'bg-#fff5f1 text-#220021',
      header: 'bg-charcoal',
      accent: 'text-#220021',
    },

    Projects: {
      bg: 'bg-blue-50',
      header: 'bg-blue-200',
      accent: 'text-blue-600',
    },
    Blog: {
      bg: 'bg-orange-50',
      header: 'bg-orange-200',
      accent: 'text-orange-500',
    },
    About: {
      bg: 'bg-purple-50',
      header: 'bg-purple-200',
      accent: 'text-purple-500',
    },
    CV: { bg: 'bg-white', header: 'bg-white', accent: 'text-gray-800' },
  };

  const [builtCount, setBuiltCount] = useState(0);
  const [printCount, setPrintCount] = useState(0);
  const [collabCount, setCollabCount] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (activeSection !== 'Home') return;
    setBuiltCount(0);
    setPrintCount(0);
    setCollabCount(0);
    const targets = [20, 5, 8];
    const setters = [setBuiltCount, setPrintCount, setCollabCount];
    targets.forEach((target, index) => {
      let current = 0;
      const id = setInterval(() => {
        current += 1;
        setters[index](current);
        if (current >= target) clearInterval(id);
      }, 60);
    });
  }, [activeSection]);

  const handleSectionChange = (section: string) => {
    if (section === activeSection) return;
    setActiveSection(section);
  };

  return (
    <Layout
      activeSection={activeSection}
      onSectionChange={handleSectionChange}
      backgroundClass={themeMap[activeSection].bg}
      headerBgClass={themeMap[activeSection].header}
      accentColorClass={themeMap[activeSection].accent}
      titleClass={
        activeSection === 'Home'
          ? gradientClass
          : themeMap[activeSection].accent
      }
    >
      <Head>
        <title>Personal Website</title>
        <meta name="description" content="Portfolio" />
      </Head>

     

      <main className="flex items-center justify-center pt-12">
        {activeSection === 'Home' && (

          <div className="bento-grid lobby-grid mt-8">
            <ElevatorPitchTile className="col-span-12 lg:col-span-8 row-span-2" />

            <PolaroidSelfieTile className="col-span-12 lg:col-span-4 row-span-2" />

           


            <section className="rounded-3xl bg-white p-6 shadow-elev flex flex-col items-center justify-center text-center col-span-12 lg:col-span-6 hover:scale-105 transition-transform motion-safe:animate-fall">

              <h2 className="mb-4 text-xl font-bold">Impact Snapshot</h2>
              <div className="grid grid-cols-3 gap-4 w-full">
                <div className="flex flex-col items-center">
                  <RocketLaunchIcon className={gradientIconClass} aria-hidden="true" />
                  <div className="text-3xl font-bold">{builtCount}</div>
                  <div className="text-sm font-semibold">Built</div>
                </div>
                <div className="flex flex-col items-center">
                  <BookOpenIcon className={gradientIconClass} aria-hidden="true" />
                  <div className="text-3xl font-bold">{printCount}</div>
                  <div className="text-sm font-semibold">In Print</div>
                </div>
                <div className="flex flex-col items-center">
                  <UserGroupIcon className={gradientIconClass} aria-hidden="true" />
                  <div className="text-3xl font-bold">{collabCount}</div>
                  <div className="text-sm font-semibold">Collabs</div>
                </div>
              </div>
            </section>


            <div className="rounded-3xl bg-white p-6 shadow-elev flex items-center justify-center text-center border border-gray-200 text-coral animate-heartbeat col-span-12 lg:col-span-3">
              Contact Me
            </div>
            <DownloadCvTile className="col-span-12 lg:col-span-3" />

          


          </div>
        )}

        {activeSection === 'Projects' && (
          <div className="bento-grid mt-8 grid w-full max-w-5xl mx-auto gap-8 p-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-[200px] min-h-[80vh]">

            <section className="relative col-span-2 row-span-2 rounded-3xl bg-blue-200 p-6 shadow-lg hover:scale-105 transition-transform motion-safe:animate-fall">

              <h2 className="mb-2 text-xl font-bold">Featured Project</h2>
              <Image
                src="/images/pandemic_game.jpg"
                alt="demo animation"
                width={400}
                height={300}
              />
              <p>Summary of my favourite work.</p>
            </section>
            <section className="rounded-3xl col-span-2 bg-blue-100 p-6 shadow-lg hover:scale-105 transition-transform motion-safe:animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Project One</h2>
            </section>
            <section className="rounded-3xl col-span-2 bg-blue-100 p-6 shadow-lg hover:scale-105 transition-transform motion-safe:animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Project Three</h2>
            </section>

            <section className="rounded-3xl bg-blue-100 p-6 shadow-lg hover:scale-105 transition-transform motion-safe:animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Project Five</h2>
            </section>
            <section className="col-span-2 rounded-3xl bg-blue-200 p-6 shadow-lg hover:scale-105 transition-transform motion-safe:animate-fall">

              <h2 className="mb-2 text-xl font-bold">Contact</h2>
              <p className="text-sm">Get in touch for more details.</p>
            </section>
          </div>
        )}

        {activeSection === 'Blog' && (
          <div className="bento-grid mt-8 grid w-full max-w-5xl mx-auto gap-8 p-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-[200px] min-h-[80vh]">

            <section className="relative col-span-2 row-span-2 rounded-3xl bg-orange-200 p-6 shadow-lg hover:scale-105 transition-transform motion-safe:animate-fall">
              <h2 className="mb-2 text-xl font-bold">Latest Post</h2>
              <p>Coming soon.</p>
            </section>
            <section className="rounded-3xl bg-orange-100 p-6 shadow-lg hover:scale-105 transition-transform motion-safe:animate-fall">
              <h2 className="mb-2 text-lg font-semibold">All Posts</h2>
            </section>
            <section className="rounded-3xl bg-orange-100 p-6 shadow-lg hover:scale-105 transition-transform motion-safe:animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Writing Tips</h2>
            </section>
            <section className="rounded-3xl bg-orange-100 p-6 shadow-lg hover:scale-105 transition-transform motion-safe:animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Tutorials</h2>
            </section>
            <section className="rounded-3xl bg-orange-100 p-6 shadow-lg hover:scale-105 transition-transform motion-safe:animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Opinions</h2>
            </section>
            <section className="rounded-3xl bg-orange-100 p-6 shadow-lg hover:scale-105 transition-transform motion-safe:animate-fall">
              <h2 className="mb-2 text-lg font-semibold">News</h2>
            </section>
            <section className="col-span-2 rounded-3xl bg-orange-200 p-6 shadow-lg hover:scale-105 transition-transform motion-safe:animate-fall">

              <h2 className="mb-2 text-xl font-bold">Subscribe</h2>
              <p className="text-sm">Stay updated with new posts.</p>
            </section>
          </div>
        )}

        {activeSection === 'About' && (
          <div className="bento-grid mt-8 grid w-full max-w-5xl mx-auto gap-8 p-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-[200px] min-h-[80vh]">

            <section className="relative col-span-2 row-span-2 rounded-3xl bg-purple-200 p-6 shadow-lg hover:scale-105 transition-transform motion-safe:animate-fall">
              <h2 className="mb-2 text-xl font-bold">Bio</h2>
              <p>Quick introduction.</p>
            </section>
            <section className="rounded-3xl bg-purple-100 p-6 shadow-lg hover:scale-105 transition-transform motion-safe:animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Education</h2>
            </section>
            <section className="rounded-3xl bg-purple-100 p-6 shadow-lg hover:scale-105 transition-transform motion-safe:animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Interests</h2>
            </section>
            <section className="rounded-3xl bg-purple-100 p-6 shadow-lg hover:scale-105 transition-transform motion-safe:animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Hobbies</h2>
            </section>
            <section className="rounded-3xl bg-purple-100 p-6 shadow-lg hover:scale-105 transition-transform motion-safe:animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Gallery</h2>
            </section>
            <section className="rounded-3xl bg-purple-100 p-6 shadow-lg hover:scale-105 transition-transform motion-safe:animate-fall flex flex-col items-center justify-center text-center">

              <h2 className="mb-2 text-lg font-semibold">
                I am currently learning ...{' '}
              </h2>
              <div className="text-6xl mb-2">識</div>
              <div className="mb-2 text-lg font-semibold">Japanese</div>
            </section>

            <section className="col-span-2 rounded-3xl bg-purple-200 p-6 shadow-lg hover:scale-105 transition-transform motion-safe:animate-fall">

              <h2 className="mb-2 text-xl font-bold">Contact</h2>
              <p className="text-sm">Feel free to reach out.</p>
            </section>
          </div>
        )}
      </main>
    </Layout>
  );
}
