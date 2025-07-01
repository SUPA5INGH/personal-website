import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Personal Website</title>
        <meta name="description" content="Portfolio" />
      </Head>
      <main className="min-h-screen p-8 bg-gray-100">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(100px,1fr)]">
          <section className="bg-white p-4 rounded shadow col-span-2 row-span-2">
            <h2 className="text-xl font-bold mb-2">About</h2>
            <p>This is a short blurb about me.</p>
          </section>
          <section className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold">Portfolio Item 1</h2>
          </section>
          <section className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold">Portfolio Item 2</h2>
          </section>
          <section className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold">Portfolio Item 3</h2>
          </section>
          <section className="bg-white p-4 rounded shadow col-span-2">
            <h2 className="text-xl font-bold mb-2">Contact</h2>
            <ul className="space-x-4 flex">
              <li><a href="#" className="text-blue-600">Email</a></li>
              <li><a href="#" className="text-blue-600">LinkedIn</a></li>
              <li><a href="#" className="text-blue-600">GitHub</a></li>
            </ul>
          </section>
        </div>
      </main>
    </>
  )
}
