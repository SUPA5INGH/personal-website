import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Moral() {
  return (
    <Layout>
      <Head>
        <title>Moral Constitution</title>
      </Head>
      <div className="min-h-screen p-8 bg-gray-900 text-gray-100">
        <h1 className="text-3xl font-bold mb-4 text-gold">
          Moral Constitution
        </h1>
        <p>This page will link to my philosophy and ethics repo.</p>
      </div>
    </Layout>
  );
}
