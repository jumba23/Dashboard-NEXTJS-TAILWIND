import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard Next</title>
        <meta name="description" content="Finance App Dashboard" />
        <link rel="icon" href="/favicon.ico" />
        <title>Orion App</title>
      </Head>
      <main className="w-full h-full bg-blue-500">
        <div className="flex flex-col h-full">
          <div className="flex h-full">
            <Link
              href="/Explore/Stocks"
              className="flex w-1/3 m-5 transition duration-500 transform shadow-xl shadow-sky-800 card bg-reallyLightBabyBlue hover:cursor-pointer hover:scale-105"
            >
              Stocks
            </Link>
            <Link
              href="/Explore/Forex"
              className="flex w-1/3 m-5 transition duration-500 transform shadow-xl shadow-sky-800 card bg-reallyLightBabyBlue hover:cursor-pointer hover:scale-105"
            >
              Forex
            </Link>
            <Link
              href="/Explore/Crypto"
              className="flex w-1/3 m-5 transition duration-500 transform shadow-xl shadow-sky-800 card bg-reallyLightBabyBlue hover:cursor-pointer hover:scale-105"
            >
              Crypto
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
