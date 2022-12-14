import Head from "next/head";
import Stocks from "./Stocks";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard Next</title>
        <meta name="description" content="Finance App Dashboard" />
        <link rel="icon" href="/favicon.ico" />
        <title>Orion App</title>
      </Head>
      <main className="w-full bg-blue-500">
        <div className="h-1/2">
          <Stocks />
        </div>
      </main>
    </>
  );
}
