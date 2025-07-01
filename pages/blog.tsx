
import React from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <div className="min-h-screen p-8 bg-cream text-dark-green">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <p>Posts coming soon.</p>
      </div>
    </Layout>

  );
}
