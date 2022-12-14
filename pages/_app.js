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
          <div className="h-1/2">
            <Component {...pageProps} />
          </div>
          <div className="flex h-1/2">
            <div className="w-1/2 border-2">News</div>
            <div className="w-1/2 border-2">Weather</div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MyApp;
