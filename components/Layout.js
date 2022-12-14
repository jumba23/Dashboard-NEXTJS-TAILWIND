import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
