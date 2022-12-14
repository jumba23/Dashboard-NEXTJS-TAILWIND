import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col flex-1 w-screen h-screen">
      <Header />
      <div className="flex w-full h-full">
        <Sidebar />
        <main className="w-full bg-blue-500">
          <div className="flex flex-col h-2/3">
            <p className="h-6 pt-1 mx-auto text-xl font-extrabold">
              Most Popular
            </p>
            <Component {...pageProps} />
          </div>
          <div className="flex h-1/3">
            <div className="w-2/3 ">
              <div className="flex h-full">
                <div className="flex w-full m-5 shadow-xl shadow-sky-800 card bg-reallyLightBabyBlue hover:cursor-pointer">
                  Latest News
                </div>
              </div>
            </div>
            <div className="w-1/3 ">
              <div className="flex h-full">
                <div className="flex w-full m-5 shadow-xl shadow-sky-800 card bg-reallyLightBabyBlue hover:cursor-pointer">
                  Weather
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MyApp;
