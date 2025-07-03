import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';


const sections = ['Home', 'Projects', 'Blog', 'About', 'CV'];

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
          <div className="bento-grid mt-8 grid w-full max-w-5xl mx-auto gap-8 p-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-[200px] min-h-[80vh]">
            <section className="relative col-span-2 row-span-2 rounded-3xl bg-gray-200 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-xl font-bold flex items-center gap-2">
                <span className="animate-bounce">👋</span>About
              </h2>
              <p>This is a short blurb about me.</p>
              <Image
  src="/images/quantum.gif"
  alt="demo animation"
  width={400}
  height={300}
/>
            </section>
            <div className="relative overflow-hidden rounded-3xl shadow-lg hover:scale-105 transition-transform animate-fall">
              <Image
                src="https://source.unsplash.com/random/800x600?laptop"
                alt="Projects"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50">
                <h2 className="text-xl font-semibold text-white">Projects</h2>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-lg hover:scale-105 transition-transform animate-fall">
              <Image
                src="https://source.unsplash.com/random/800x600?writing"
                alt="Blog"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50">
                <h2 className="text-xl font-semibold text-white">Blog</h2>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-lg hover:scale-105 transition-transform animate-fall">
              <Image
                src="https://source.unsplash.com/random/800x600?person"
                alt="About"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50">
                <h2 className="text-xl font-semibold text-white">About</h2>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-lg hover:scale-105 transition-transform animate-fall">
              <Image
                src="https://source.unsplash.com/random/800x600?resume"
                alt="CV"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50">
                <h2 className="text-xl font-semibold text-white">CV</h2>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-lg hover:scale-105 transition-transform animate-fall">
              <Image
                src="https://source.unsplash.com/random/800x600?lightbulb"
                alt="Ideas"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50">
                <h2 className="text-xl font-semibold text-white">Ideas</h2>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-lg hover:scale-105 transition-transform animate-fall">
              <Image
                src="https://source.unsplash.com/random/800x600?book"
                alt="Reading"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50">
                <h2 className="text-xl font-semibold text-white">Reading</h2>
              </div>
            </div>

            <section className="col-span-2 rounded-3xl bg-gray-200 p-6 shadow-lg hover:scale-105 transition-transform animate-fall flex flex-col items-center justify-center text-center">
              <h2 className="mb-4 text-xl font-bold">Impact Snapshot</h2>
              <div className="grid grid-cols-3 gap-4 w-full">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="mx-auto h-8 w-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                    />
                  </svg>
                  <div className="text-sm font-semibold">Built</div>
                  <div className="text-3xl font-bold">20</div>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="mx-auto h-8 w-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                    />
                  </svg>
                  <div className="text-sm font-semibold">In Print</div>
                  <div className="text-3xl font-bold">5</div>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="mx-auto h-8 w-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                    />
                  </svg>
                  <div className="text-sm font-semibold">Collabs</div>
                  <div className="text-3xl font-bold">8</div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeSection === 'Projects' && (
          <div className="bento-grid mt-8 grid w-full max-w-5xl mx-auto gap-8 p-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-[200px] min-h-[80vh]">
            <section className="relative col-span-2 row-span-2 rounded-3xl bg-blue-200 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-xl font-bold">Featured Project</h2>
              <p>Summary of my favourite work.</p>
            </section>
            <section className="rounded-3xl bg-blue-100 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Project One</h2>
            </section>
            <section className="rounded-3xl bg-blue-100 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Project Two</h2>
            </section>
            <section className="rounded-3xl bg-blue-100 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Project Three</h2>
            </section>
            <section className="rounded-3xl bg-blue-100 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Project Four</h2>
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
            <section className="rounded-3xl bg-purple-100 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Goals</h2>
            </section>
            <section className="col-span-2 rounded-3xl bg-purple-200 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-xl font-bold">Contact</h2>
              <p className="text-sm">Feel free to reach out.</p>
            </section>
          </div>
        )}

        {activeSection === 'CV' && (
          <div className="bento-grid mt-8 grid w-full max-w-5xl mx-auto gap-8 p-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-[200px] min-h-[80vh]">
            <section className="relative col-span-2 row-span-2 rounded-3xl bg-sage-300 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-xl font-bold">Resume</h2>
              <p>Overview of my experience.</p>
            </section>
            <section className="rounded-3xl bg-sage-100 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Education</h2>
            </section>
            <section className="rounded-3xl bg-sage-100 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Skills</h2>
            </section>
            <section className="rounded-3xl bg-sage-100 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Experience</h2>
            </section>
            <section className="rounded-3xl bg-sage-100 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Projects</h2>
            </section>
            <section className="rounded-3xl bg-sage-100 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-lg font-semibold">Awards</h2>
            </section>
            <section className="col-span-2 rounded-3xl bg-sage-300 p-6 shadow-lg hover:scale-105 transition-transform animate-fall">
              <h2 className="mb-2 text-xl font-bold">Download</h2>
              <p className="text-sm">PDF available soon.</p>
            </section>
          </div>
        )}
      </main>
    </Layout>
  );
}
