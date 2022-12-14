import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const exploreCategories = ["Stocks", "Forex", "Crypto"];
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
            {exploreCategories.map((category) => (
              <Link
                href={`/Explore/${category}`}
                className="flex w-1/3 m-5 transition duration-500 transform shadow-xl shadow-sky-800 card bg-reallyLightBabyBlue hover:cursor-pointer hover:scale-105"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
