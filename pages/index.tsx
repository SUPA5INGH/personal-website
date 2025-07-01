import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

const sections = ['Home', 'Projects', 'Blog', 'About', 'CV'];

export default function Home() {
  const [activeSection, setActiveSection] = useState('Home');

  const colorMap: Record<string, string> = {
    Home: 'bg-cream',
    Projects: 'bg-pastel-blue',
    Blog: 'bg-pastel-yellow',
    About: 'bg-pastel-green',
    CV: 'bg-cream',
  };

  return (
    <Layout
      activeSection={activeSection}
      onSectionChange={setActiveSection}
      backgroundClass={colorMap[activeSection]}
    >
      <Head>
        <title>Personal Website</title>
        <meta name="description" content="Portfolio" />
      </Head>

      <main className="flex items-center justify-center">
        {activeSection === 'Home' && (
          <div className="grid w-full max-w-screen-xl mx-auto gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-fr min-h-screen">
            <section className="relative col-span-2 row-span-2 rounded-3xl bg-pastel-blue p-6 shadow-lg hover:scale-105 transition-transform">
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
            <section className="col-span-2 rounded-3xl bg-pastel-green p-6 shadow-lg hover:scale-105 transition-transform">
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
          <div className="grid w-full max-w-screen-xl mx-auto gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-fr min-h-screen">
            <section className="rounded-3xl bg-pastel-green p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-xl font-bold">Project One</h2>
              <p>Brief description of project one.</p>
            </section>
            <section className="rounded-3xl bg-pastel-blue p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-xl font-bold">Project Two</h2>
              <p>Brief description of project two.</p>
            </section>
            <section className="rounded-3xl bg-pastel-yellow p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-xl font-bold">Project Three</h2>
              <p>Brief description of project three.</p>
            </section>
            <section className="rounded-3xl bg-pastel-green p-6 shadow-lg hover:scale-105 transition-transform">
              <h2 className="mb-2 text-xl font-bold">Project Four</h2>
              <p>Brief description of project four.</p>
            </section>
          </div>
        )}

        {activeSection === 'Blog' && (
          <div className="p-8 min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Blog</h1>
            <p>Posts coming soon.</p>
          </div>
        )}

        {activeSection === 'About' && (
          <div className="p-8 min-h-screen">
            <h1 className="text-3xl font-bold mb-4">About</h1>
            <p>A short biography will appear here.</p>
          </div>
        )}

        {activeSection === 'CV' && (
          <div className="p-8 min-h-screen">
            <h1 className="text-3xl font-bold mb-4">CV</h1>
            <p>My resume will be available here.</p>
          </div>
        )}
      </main>
    </Layout>
  );
}
