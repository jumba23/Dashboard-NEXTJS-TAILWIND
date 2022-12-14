import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../styles/globals.css";
import Footer from "../components/Footer";

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
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default MyApp;
