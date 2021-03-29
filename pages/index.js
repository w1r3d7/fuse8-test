import Head from 'next/head'
import HouseList from '../components/house-list';
import Filter from '../components/filter';
import Loader from '../components/loader';

export default function Home({ homes, error }) {

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
        <div className="page__filter">
          <Filter />
        </div>
        {
          error && <h2>Error</h2>
        }
        {homes && !error ?
          <HouseList houses={homes} />
          :
          <Loader />
        }
      </main>
    </>
  )
}
