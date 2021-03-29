import Head from "next/head";
import HouseList from "../components/house-list";
import Filter from "../components/filter";
import Loader from "../components/loader";
import { useEffect, useState } from "react";

export default function Home({ homes, error }) {
  const [filtered, setFiltered] = useState();

  useEffect(() => {
    setFiltered(homes);
  }, [homes]);

  const handleFilterType = (value) => {
    const filteredHomes = homes?.filter(({ title }) => {
      return title.toLowerCase().includes(value.toLowerCase());
    });

    setFiltered(filteredHomes);
  };

  const ErrorMessage = <h2>Sorry, please try later!</h2>;

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
          <Filter onFilterInput={handleFilterType} />
        </div>
        {error && <ErrorMessage />}
        {filtered && !error ? <HouseList houses={filtered} /> : <Loader />}
      </main>
    </>
  );
}
