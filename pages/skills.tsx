
import React from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';
import BentoTile from '../components/BentoTile';

export default function Skills() {
  return (
    <Layout>
      <Head>
        <title>Skill Sprint</title>
      </Head>
      <div className="bento-grid mt-8 grid w-full max-w-5xl mx-auto gap-8 p-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-[200px] min-h-[80vh] text-dark-green">
        <BentoTile className="col-span-2 row-span-2 bg-pastel-blue">
          <h2 className="mb-2 text-xl font-bold">Skill Sprint</h2>
          <p>Examples of rapid learning.</p>
        </BentoTile>
        <BentoTile className="bg-pastel-blue">
          <h2 className="mb-2 text-lg font-semibold">Learning Goals</h2>
        </BentoTile>
        <BentoTile className="bg-pastel-blue">
          <h2 className="mb-2 text-lg font-semibold">Lessons</h2>
        </BentoTile>
        <BentoTile className="bg-pastel-blue">
          <h2 className="mb-2 text-lg font-semibold">Resources</h2>
        </BentoTile>
        <BentoTile className="col-span-2 bg-pastel-blue">
          <h2 className="mb-2 text-lg font-semibold">GitHub Repo</h2>
          <p className="text-sm">See detailed progress</p>
        </BentoTile>
      </div>

    </Layout>

  );
}
