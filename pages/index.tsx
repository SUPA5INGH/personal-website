import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Layout from '../components/Layout';



export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Personal Website</title>
        <meta name="description" content="Portfolio" />
      </Head>

      <main className="flex items-center justify-center">
        <div className="grid w-full max-w-5xl gap-6 p-6 mx-auto sm:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] bg-gray-900">
          <section className="relative col-span-2 row-span-2 rounded-3xl bg-gray-800 p-6 shadow-lg hover:scale-105 transition-transform">
            <h2 className="mb-2 text-xl font-bold flex items-center gap-2">
              <span className="animate-bounce">👋</span>About
            </h2>
            <p className="text-gray-300">This is a short blurb about me.</p>

      <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[200px]">
          <section className="relative col-span-2 row-span-2 rounded-3xl bg-white p-6 shadow-lg hover:scale-105 transition-transform">
            <h2 className="mb-2 text-xl font-bold flex items-center gap-2">
              <span className="animate-bounce">👋</span>About
            </h2>
            <p className="text-gray-700">This is a short blurb about me.</p>

          </section>

          <Link
            href="/projects"
            className="relative overflow-hidden rounded-3xl shadow-lg hover:scale-105 transition-transform"
          >
            <Image
              src="https://source.unsplash.com/random/800x600?laptop"
              alt="Projects"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/50">

            <div className="absolute inset-0 flex items-center justify-center bg-black/40">

              <h2 className="text-xl font-semibold text-white">Projects</h2>
            </div>
          </Link>

          <Link
            href="/blog"
            className="relative overflow-hidden rounded-3xl shadow-lg hover:scale-105 transition-transform"
          >
            <Image
              src="https://source.unsplash.com/random/800x600?writing"
              alt="Blog"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/50">

            <div className="absolute inset-0 flex items-center justify-center bg-black/40">

              <h2 className="text-xl font-semibold text-white">Blog</h2>
            </div>
          </Link>

          <Link
            href="/skills"
            className="relative overflow-hidden rounded-3xl shadow-lg hover:scale-105 transition-transform"
          >
            <Image
              src="https://source.unsplash.com/random/800x600?idea"
              alt="Skill Sprint"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/50">

            <div className="absolute inset-0 flex items-center justify-center bg-black/40">

              <h2 className="text-xl font-semibold text-white">Skill Sprint</h2>
            </div>
          </Link>

          <Link
            href="/moral"
            className="relative overflow-hidden rounded-3xl shadow-lg hover:scale-105 transition-transform"
          >
            <Image
              src="https://source.unsplash.com/random/800x600?book"
              alt="Moral Constitution"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/50">

            <div className="absolute inset-0 flex items-center justify-center bg-black/40">

              <h2 className="text-xl font-semibold text-white">Moral Code</h2>
            </div>
          </Link>


          <section className="col-span-2 rounded-3xl bg-gray-800 p-6 shadow-lg hover:scale-105 transition-transform">
            <h2 className="mb-2 text-xl font-bold text-gold">Contact</h2>
            <ul className="flex space-x-4 text-emerald">
              <li>
                <a href="#" className="hover:text-gold">

          <section className="col-span-2 rounded-3xl bg-white p-6 shadow-lg hover:scale-105 transition-transform">
            <h2 className="mb-2 text-xl font-bold">Contact</h2>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-blue-600 hover:underline">

                  Email
                </a>
              </li>
              <li>

                <a href="#" className="hover:text-gold">

                <a href="#" className="text-blue-600 hover:underline">

                  LinkedIn
                </a>
              </li>
              <li>

                <a href="#" className="hover:text-gold">

                <a href="#" className="text-blue-600 hover:underline">

                  GitHub
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>

    </Layout>

    </>

  );
}
