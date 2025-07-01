
import React from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';

export default function Moral() {
  return (
    <Layout>
      <Head>
        <title>Moral Constitution</title>
      </Head>
      <div className="min-h-screen p-8 bg-cream text-dark-green">
        <h1 className="text-3xl font-bold mb-4">
          Moral Constitution
        </h1>
        <p>This page will link to my philosophy and ethics repo.</p>
      </div>
    </Layout>

  );
}
