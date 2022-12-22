import React from "react";
import Footer from "./Footer";

const NestedLayout = ({ children }) => {
  const currentPage = children.type.name;

  const pagesWithTitle = ["Crypto", "Stocks", "Forex"].find(
    (e) => e === currentPage
  );

  return (
    <main className="w-full pt-4 bg-blue-500">
      <div className="flex flex-col h-2/3">
        {pagesWithTitle && `Most active ${currentPage}`}
        {children}
      </div>
      {currentPage === "Home" ? <Footer /> : null}
    </main>
  );
};

export default NestedLayout;
