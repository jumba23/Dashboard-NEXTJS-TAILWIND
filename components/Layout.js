import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col flex-1 w-screen h-screen">
      <Header />
      <div className="flex w-full h-full">
        <Sidebar />
        <main className="w-full bg-blue-500">
          <div className="flex flex-col h-2/3">
            <p className="z-20 flex items-center h-6 pt-1 mx-auto text-xl font-extrabold">
              Most Popular
            </p>
            {children}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;
