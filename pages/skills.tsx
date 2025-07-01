import Head from 'next/head';
import Layout from '../components/Layout';

export default function Skills() {
  return (
    <Layout>
      <Head>
        <title>Skill Sprint</title>
      </Head>
      <div className="min-h-screen p-8 bg-gray-900 text-gray-100">
        <h1 className="text-3xl font-bold mb-4 text-gold">Skill Sprint</h1>
        <p>Examples of fast learning will appear here.</p>
      </div>
    </Layout>
  );
}
