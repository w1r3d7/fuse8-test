import Head from "next/head";
import HouseList from "../components/house-list";
import Filter from "../components/filter";
import { useState } from "react";
import { API_URL } from "../constants";
import Error from "next/error";
import SearchMoreButton from "../components/search-more-button";

export default function Home({ houses }) {
  if (houses === "Not found") {
    return <Error statusCode="Error" />;
  }

  const [filtered, setFiltered] = useState(houses);

  const handleFilterType = (value) => {
    const filteredHomes = houses?.filter(({ title }) => {
      return title.toLowerCase().includes(value.toLowerCase());
    });

    setFiltered(filteredHomes);
  };

  return (
    <>
      <Head>
        <title>Our Latest Developments</title>
        <meta name="keywords" content="Developments, houses" />
        <meta name="description" content="Our Latest Developments" />
      </Head>
      <main className="page">
        <h1 className="page__title">Our Latest Developments</h1>
        <Filter onFilterInput={handleFilterType} parentClass="page__filter" />
        <HouseList houses={filtered} parentClass="page__house-list" />
        {filtered.length === 0 ? (
          ""
        ) : (
          <SearchMoreButton parentClass="page__search-more-button" />
        )}
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const data = await fetch(API_URL);
  const houses = await data.json();

  return {
    props: {
      houses,
    },
  };
}
