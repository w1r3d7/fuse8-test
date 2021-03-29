import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
  return (
    <div className="not-found">
      <Head>
        <title>404 - Page not Found</title>
      </Head>
      <h2>404 - Page Not Found</h2>
      <Link href="/">HomePage</Link>
    </div>
  );
}
