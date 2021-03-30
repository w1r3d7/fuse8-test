import Link from "next/link";
import Head from "next/head";

const HousePage = () => {
  return (
    <div className="house-page">
      <Head>
        <title>House page</title>
        <meta name="keywords" content="House, buy property" />
        <meta name="description" content="Best house in the world" />
      </Head>
      <h1>House page</h1>
      <Link href="/">HomePage</Link>
    </div>
  );
};

export default HousePage;
