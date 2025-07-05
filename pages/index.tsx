import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import BentoTile from '../components/BentoTile';
import DownloadCvTile from '../components/DownloadCvTile';

const gradientClass =
  'text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500';

export default function Home() {
  const [activeSection, setActiveSection] = useState('Home');
  const [showRipple, setShowRipple] = useState(false);

  const themeMap: Record<
    string,
    { bg: string; header: string; accent: string }
  > = {
    // Neutral palette for the landing section
    Home: { bg: 'bg-white', header: 'bg-gray-100', accent: 'text-gray-800' },
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
    CV: { bg: 'bg-sage-100', header: 'bg-sage-300', accent: 'text-sage-700' },
  };

  const elevatorText = [
    'Medical student and researcher.',
    'Tech enthusiast and builder.',
    'Advocating for better health.',
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);

  const [builtCount, setBuiltCount] = useState(0);
  const [printCount, setPrintCount] = useState(0);
  const [collabCount, setCollabCount] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => setPhraseIndex((i) => (i + 1) % elevatorText.length),
      2000,
    );
    return () => clearInterval(interval);
  }, []);

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

  useEffect(() => {
    setShowRipple(true);
    const timeout = setTimeout(() => setShowRipple(false), 600);
    return () => clearTimeout(timeout);
  }, [activeSection]);

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

      {showRipple && (
        <div
          className={`fixed left-1/2 top-1/2 z-50 rounded-full ${themeMap[activeSection].bg} animate-ripple pointer-events-none`}
          style={{
            width: '200vmax',
            height: '200vmax',
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}

      <main className="flex items-center justify-center pt-12">
        {activeSection === 'Home' && (
          <div className="bento-grid mt-8 grid w-full max-w-5xl mx-auto gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-[200px]">
            <section className="col-span-2 row-span-2 rounded-3xl bg-gray-200 p-6 shadow-lg flex flex-col justify-center animate-fall">
              <h2 className="mb-4 text-xl font-bold">
                {elevatorText[phraseIndex]}
              </h2>
              <p className="text-sm">Welcome to my corner of the web.</p>
            </section>

            <section className="col-span-2 row-span-2 rounded-3xl bg-gray-200 p-6 shadow-lg flex flex-col items-center justify-center text-center animate-fall">
              <h2 className="mb-4 text-xl font-bold">Impact Snapshot</h2>
              <div className="grid grid-cols-3 gap-4 w-full">
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold">{builtCount}</div>
                  <div className="text-sm font-semibold">Built</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold">{printCount}</div>
                  <div className="text-sm font-semibold">In Print</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold">{collabCount}</div>
                  <div className="text-sm font-semibold">Collabs</div>
                </div>
              </div>
            </section>

            <div className="rounded-3xl bg-gray-100 p-6 shadow-lg grid grid-cols-3 gap-2 animate-fall">
              {['JS', 'TS', 'React', 'Node', 'Next', 'Tailwind'].map((s, i) => (
                <div
                  key={s}
                  style={{ animationDelay: `${i * 100}ms` }}
                  className="flex items-center justify-center font-mono text-sm opacity-0 animate-fall"
                >
                  {s}
                </div>
              ))}
            </div>

            <div
              className="rounded-3xl bg-gray-100 p-6 shadow-lg text-center cursor-pointer animate-fall"
              onClick={() => setFlipped(!flipped)}
            >
              {flipped ? (
                <div className="animate-bounce">🎉 Biosecurity rocks!</div>
              ) : (
                <div>Biosecurity Byte</div>
              )}
            </div>

            <div className="rounded-3xl bg-gray-200 p-6 shadow-lg flex items-center justify-center text-center animate-heartbeat">
              Contact Me
            </div>
            <DownloadCvTile />
          </div>
        )}

        {activeSection === 'Projects' && (
          <div className="bento-grid mt-8 grid w-full max-w-5xl mx-auto gap-8 p-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-[200px] min-h-[80vh]">
            <section className="relative col-span-2 row-span-2 rounded-3xl bg-blue-200 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-xl font-bold">Featured Project</h2>
              <Image
                src="/images/pandemic_game.jpg"
                alt="demo animation"
                width={400}
                height={300}
              />
              <p>Summary of my favourite work.</p>
            </section>
            <section className="rounded-3xl col-span-2 bg-blue-100 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Project One</h2>
            </section>
            <section className="rounded-3xl col-span-2 bg-blue-100 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Project Three</h2>
            </section>

            <section className="rounded-3xl bg-blue-100 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Project Five</h2>
            </section>
            <section className="col-span-2 rounded-3xl bg-blue-200 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-xl font-bold">Contact</h2>
              <p className="text-sm">Get in touch for more details.</p>
            </section>
          </div>
        )}

        {activeSection === 'Blog' && (
          <div className="bento-grid mt-8 grid w-full max-w-5xl mx-auto gap-8 p-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-[200px] min-h-[80vh]">
            <section className="relative col-span-2 row-span-2 rounded-3xl bg-orange-200 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-xl font-bold">Latest Post</h2>
              <p>Coming soon.</p>
            </section>
            <section className="rounded-3xl bg-orange-100 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-lg font-semibold">All Posts</h2>
            </section>
            <section className="rounded-3xl bg-orange-100 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Writing Tips</h2>
            </section>
            <section className="rounded-3xl bg-orange-100 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Tutorials</h2>
            </section>
            <section className="rounded-3xl bg-orange-100 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Opinions</h2>
            </section>
            <section className="rounded-3xl bg-orange-100 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-lg font-semibold">News</h2>
            </section>
            <section className="col-span-2 rounded-3xl bg-orange-200 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-xl font-bold">Subscribe</h2>
              <p className="text-sm">Stay updated with new posts.</p>
            </section>
          </div>
        )}

        {activeSection === 'About' && (
          <div className="bento-grid mt-8 grid w-full max-w-5xl mx-auto gap-8 p-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-[200px] min-h-[80vh]">
            <section className="relative col-span-2 row-span-2 rounded-3xl bg-purple-200 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-xl font-bold">Bio</h2>
              <p>Quick introduction.</p>
            </section>
            <section className="rounded-3xl bg-purple-100 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Education</h2>
            </section>
            <section className="rounded-3xl bg-purple-100 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Interests</h2>
            </section>
            <section className="rounded-3xl bg-purple-100 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Hobbies</h2>
            </section>
            <section className="rounded-3xl bg-purple-100 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Gallery</h2>
            </section>
            <section className="rounded-3xl bg-purple-100 p-6 shadow-lg hover:scale-105 transition-transform animate-fall flex flex-col items-center justify-center text-center">
              <h2 className="mb-2 text-lg font-semibold">
                I am currently learning ...{' '}
              </h2>
              <div className="text-6xl mb-2">識</div>
              <div className="mb-2 text-lg font-semibold">Japanese</div>
            </section>
            <section className="col-span-2 rounded-3xl bg-purple-200 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-xl font-bold">Contact</h2>
              <p className="text-sm">Feel free to reach out.</p>
            </section>
          </div>
        )}
      </main>
    </Layout>
  );
}
