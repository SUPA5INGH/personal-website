
import React from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';

export default function Skills() {
  return (
    <Layout>
      <Head>
        <title>Skill Sprint</title>
      </Head>
      <div className="min-h-screen p-8 bg-cream text-dark-green">
        <h1 className="text-3xl font-bold mb-4">Skill Sprint</h1>
        <p>Examples of fast learning will appear here.</p>
      </div>

    </Layout>

  );
}
