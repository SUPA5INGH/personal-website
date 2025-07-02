import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

const sections = ['Home', 'Projects', 'Blog', 'About', 'CV'];

        rainbowClass = const 
  'text-transparent bg-clip-text bg-[linear-gradient(to_right,red,orange,yellow,green,blue,indigo,violet)]';

export default function Home() {
  const [activeSection, setActiveSection] = useState('Home');


  const themeMap: Record<string, { bg: string; header: string; accent: string }> = {
    Home: { bg: 'bg-cream', header: 'bg-gray-100', accent: 'text-black' },
    Projects: { bg: 'bg-blue-50', header: 'bg-blue-200', accent: 'text-blue-600' },
    Blog: { bg: 'bg-orange-50', header: 'bg-orange-200', accent: 'text-orange-500' },
    About: { bg: 'bg-purple-50', header: 'bg-purple-200', accent: 'text-purple-500' },
    CV: { bg: 'bg-sage-100', header: 'bg-sage-300', accent: 'text-sage-700' },

  };

  return (
    <Layout
      activeSection={activeSection}
      onSectionChange={setActiveSection}

      backgroundClass={themeMap[activeSection].bg}
      headerBgClass={themeMap[activeSection].header}
      accentColorClass={themeMap[activeSection].accent}
      titleClass={activeSection === 'Home' ? rainbowClass : themeMap[activeSection].accent}

    >
      <Head>
        <title>Personal Website</title>
        <meta name="description" content="Portfolio" />
      </Head>


      <main className="flex items-center justify-center pt-12">
        {activeSection === 'Home' && (
          <div className="mt-8 grid w-full max-w-5xl mx-auto gap-8 p-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-[200px] min-h-[80vh]">
            <section className="relative col-span-2 row-span-2 rounded-3xl bg-gray-200 p-6 shadow-lg hover:scale-105 transition-transform">

              <h2 className="mb-2 text-xl font-bold flex items-center gap-2">
                <span className="animate-bounce">👋</span>About
              </h2>
              <p>This is a short blurb about me.</p>
            </section>
            <div className="relative overflow-hidden rounded-3xl shadow-lg hover:scale-105 transition-transform">
              <Image src="https://source.unsplash.com/random/800x600?laptop" alt="Projects" fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-dark-green/50">
                <h2 className="text-xl font-semibold text-white">Projects</h2>
              </div>

            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-lg hover:scale-105 transition-transform">
              <Image src="https://source.unsplash.com/random/800x600?writing" alt="Blog" fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-dark-green/50">
                <h2 className="text-xl font-semibold text-white">Blog</h2>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-lg hover:scale-105 transition-transform">
              <Image src="https://source.unsplash.com/random/800x600?person" alt="About" fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-dark-green/50">
                <h2 className="text-xl font-semibold text-white">About</h2>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-lg hover:scale-105 transition-transform">
              <Image src="https://source.unsplash.com/random/800x600?resume" alt="CV" fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-dark-green/50">
                <h2 className="text-xl font-semibold text-white">CV</h2>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-lg hover:scale-105 transition-transform">
              <Image src="https://source.unsplash.com/random/800x600?lightbulb" alt="Ideas" fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-dark-green/50">
                <h2 className="text-xl font-semibold text-white">Ideas</h2>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-lg hover:scale-105 transition-transform">
              <Image src="https://source.unsplash.com/random/800x600?book" alt="Reading" fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-dark-green/50">
                <h2 className="text-xl font-semibold text-white">Reading</h2>
              </div>
            </div>

            <section className="col-span-2 rounded-3xl bg-gray-200 p-6 shadow-lg hover:scale-105 transition-transform">

              <h2 className="mb-2 text-xl font-bold">Contact</h2>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="hover:opacity-80">Email</a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-80">LinkedIn</a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-80">GitHub</a>
                </li>
              </ul>
            </section>
          </div>
        )}

        {activeSection === 'Projects' && (

          <div className="mt-8 grid w-full max-w-5xl mx-auto gap-8 p-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-[200px] min-h-[80vh]">

            <section className="relative col-span-2 row-span-2 rounded-3xl bg-blue-200 p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-xl font-bold">Featured Project</h2>
              <p>Summary of my favourite work.</p>
            </section>
            <section className="rounded-3xl bg-blue-100 p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-lg font-semibold">Project One</h2>
            </section>
            <section className="rounded-3xl bg-blue-100 p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-lg font-semibold">Project Two</h2>
            </section>
            <section className="rounded-3xl bg-blue-100 p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-lg font-semibold">Project Three</h2>
            </section>
            <section className="rounded-3xl bg-blue-100 p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-lg font-semibold">Project Four</h2>
            </section>
            <section className="rounded-3xl bg-blue-100 p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-lg font-semibold">Project Five</h2>
            </section>
            <section className="col-span-2 rounded-3xl bg-blue-200 p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-xl font-bold">Contact</h2>
              <p className="text-sm">Get in touch for more details.</p>

            </section>
          </div>
        )}

        {activeSection === 'Blog' && (

          <div className="mt-8 grid w-full max-w-5xl mx-auto gap-8 p-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-[200px] min-h-[80vh]">
            <section className="relative col-span-2 row-span-2 rounded-3xl bg-orange-200 p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-xl font-bold">Latest Post</h2>
              <p>Coming soon.</p>
            </section>
            <section className="rounded-3xl bg-orange-100 p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-lg font-semibold">All Posts</h2>
            </section>
            <section className="rounded-3xl bg-orange-100 p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-lg font-semibold">Writing Tips</h2>
            </section>
            <section className="rounded-3xl bg-orange-100 p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-lg font-semibold">Tutorials</h2>
            </section>
            <section className="rounded-3xl bg-orange-100 p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-lg font-semibold">Opinions</h2>
            </section>
            <section className="rounded-3xl bg-orange-100 p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-lg font-semibold">News</h2>
            </section>
            <section className="col-span-2 rounded-3xl bg-orange-200 p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-xl font-bold">Subscribe</h2>
              <p className="text-sm">Stay updated with new posts.</p>
            </section>

          </div>
        )}

        {activeSection === 'About' && (

          <div className="mt-8 grid w-full max-w-5xl mx-auto gap-8 p-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-[200px] min-h-[80vh]">

            <section className="relative col-span-2 row-span-2 rounded-3xl bg-purple-200 p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-xl font-bold">Bio</h2>
              <p>Quick introduction.</p>
            </section>
            <section className="rounded-3xl bg-purple-100 p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-lg font-semibold">Education</h2>
            </section>
            <section className="rounded-3xl bg-purple-100 p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-lg font-semibold">Interests</h2>
            </section>
            <section className="rounded-3xl bg-purple-100 p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-lg font-semibold">Hobbies</h2>
            </section>
            <section className="rounded-3xl bg-purple-100 p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-lg font-semibold">Gallery</h2>
            </section>
            <section className="rounded-3xl bg-purple-100 p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-lg font-semibold">Goals</h2>
            </section>
            <section className="col-span-2 rounded-3xl bg-purple-200 p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-xl font-bold">Contact</h2>
              <p className="text-sm">Feel free to reach out.</p>
            </section>

          </div>
        )}

        {activeSection === 'CV' && (

          <div className="mt-8 grid w-full max-w-5xl mx-auto gap-8 p-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-[200px] min-h-[80vh]">

            <section className="relative col-span-2 row-span-2 rounded-3xl bg-sage-300 p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-xl font-bold">Resume</h2>
              <p>Overview of my experience.</p>
            </section>
            <section className="rounded-3xl bg-sage-100 p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-lg font-semibold">Education</h2>
            </section>
            <section className="rounded-3xl bg-sage-100 p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-lg font-semibold">Skills</h2>
            </section>
            <section className="rounded-3xl bg-sage-100 p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-lg font-semibold">Experience</h2>
            </section>
            <section className="rounded-3xl bg-sage-100 p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-lg font-semibold">Projects</h2>
            </section>
            <section className="rounded-3xl bg-sage-100 p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-lg font-semibold">Awards</h2>
            </section>
            <section className="col-span-2 rounded-3xl bg-sage-300 p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-xl font-bold">Download</h2>
              <p className="text-sm">PDF available soon.</p>
            </section>

          </div>
        )}
      </main>
    </Layout>
  );
}
