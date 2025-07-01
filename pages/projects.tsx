
import React from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <div className="min-h-screen p-8 bg-cream text-dark-green">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <p>Project showcase coming soon.</p>
      </div>
    </Layout>
  );
}
