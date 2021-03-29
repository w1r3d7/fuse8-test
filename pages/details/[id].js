import Link from "next/link";
import Head from "next/head";

const HousePage = () => {
  return (
    <div className="house-page">
      <Head>
        <title>House page</title>
      </Head>
      <h1>House page</h1>
      <Link href="/">HomePage</Link>
    </div>
  );
};

export default HousePage;
