import React from "react";
import NavCategoryTitle from "./navigation/NavCategoryTitle";

const Sidebar = () => {
  return (
    <nav className="hidden w-2/12 h-screen p-4 text-left bg-darkBlue md:flex md:flex-col">
      <div>
        <NavCategoryTitle title={"Explore"} />
      </div>
      <div>
        <NavCategoryTitle title={"Feedback"} />
      </div>
      <div>
        <NavCategoryTitle title={"About US"} />
      </div>
    </nav>
  );
};

export default Sidebar;
