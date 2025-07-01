
import React from 'react';

import Head from 'next/head';
import Layout from '../components/Layout';

export default function CV() {
  return (
    <Layout>
      <Head>
        <title>CV</title>
      </Head>
      <div className="min-h-screen p-8 bg-cream text-dark-green">
        <h1 className="text-3xl font-bold mb-4">CV</h1>
        <p>My resume will be available here.</p>
      </div>
    </Layout>
  );
}
