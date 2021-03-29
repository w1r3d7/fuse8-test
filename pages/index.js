import Head from 'next/head'
import House from '../components/house';
import Filter from '../components/filter';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Our Latest Developments</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="Developments, houses" />
        <meta name="description" content="Our Latest Developments" />
      </Head>
      <main className="page">
        <h1 className="page__title">Our Latest Developments</h1>
        <Filter />
        <House />
      </main>
    </div>
  )
}
