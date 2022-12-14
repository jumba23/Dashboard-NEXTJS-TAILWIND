import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col flex-1 w-screen h-screen">
      <Header />
      <div className="flex w-full h-full">
        <Sidebar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
