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
        <main className="w-full pt-4 bg-blue-500">
          <div className="flex flex-col h-2/3">{children}</div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;
