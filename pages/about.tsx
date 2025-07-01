
import React from 'react';

import Head from 'next/head';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <div className="min-h-screen p-8 bg-cream text-dark-green">
        <h1 className="text-3xl font-bold mb-4">About</h1>
        <p>A short biography will appear here.</p>
      </div>
    </Layout>
  );
}
