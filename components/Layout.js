import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import NestedLayout from "./NestedLayout";

const Layout = ({ children }) => {
  // console.log(children.type.name);
  // const currentPage = children.type.name;
  return (
    <div className="flex flex-col flex-1 w-screen h-screen">
      <Header />
      <div className="flex w-full h-full">
        <Sidebar />
        <NestedLayout children={children} />
      </div>
    </div>
  );
};

export default Layout;
