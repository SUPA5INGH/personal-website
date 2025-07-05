
import React from 'react';

import Head from 'next/head';
import Layout from '../components/Layout';
import BentoTile from '../components/BentoTile';

export default function CV() {
  return (
    <Layout>
      <Head>
        <title>CV</title>
      </Head>
      <div className="bento-grid mt-8 grid w-full max-w-5xl mx-auto gap-8 p-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-[200px] min-h-[80vh] text-dark-green">
        <BentoTile className="col-span-2 row-span-2 bg-sage-300">
          <h2 className="mb-2 text-xl font-bold">Resume</h2>
          <p>Overview of my experience.</p>
        </BentoTile>
        <BentoTile className="bg-sage-100">
          <h2 className="mb-2 text-lg font-semibold">Education</h2>
        </BentoTile>
        <BentoTile className="bg-sage-100">
          <h2 className="mb-2 text-lg font-semibold">Skills</h2>
        </BentoTile>
        <BentoTile className="bg-sage-100">
          <h2 className="mb-2 text-lg font-semibold">Experience</h2>
        </BentoTile>
        <BentoTile className="bg-sage-100">
          <h2 className="mb-2 text-lg font-semibold">Projects</h2>
        </BentoTile>
        <BentoTile className="bg-sage-100">
          <h2 className="mb-2 text-lg font-semibold">Awards</h2>
        </BentoTile>
        <BentoTile className="col-span-2 bg-sage-300">
          <h2 className="mb-2 text-xl font-bold">Download</h2>
          <p className="text-sm">PDF available soon.</p>
        </BentoTile>
      </div>
    </Layout>
  );
}
