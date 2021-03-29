import Head from 'next/head'
import House from '../components/house';
import Filter from '../components/filter';
import Loader from '../components/loader';

export default function Home({homes}) {
  return (
    <>
      <Head>
        <title>Our Latest Developments</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="Developments, houses" />
        <meta name="description" content="Our Latest Developments" />
      </Head>
      <main className="page">
        <h1 className="page__title">Our Latest Developments</h1>
        <Filter />
        {homes ?
          <House house={homes[0]} />
          :
          <Loader />
        }
      </main>
    </>
  )
}
