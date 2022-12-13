import React from "react";
import NavCategoryTitle from "./navigation/NavCategoryTitle";
import NavCategoryLink from "./navigation/NavCategoryLink";

const Sidebar = () => {
  const navCategories = {
    EXPLORE: ["Stocks", "Forex", "Crypto"],
    FEEDBACK: ["Contact", "Reviews"],
    ABOUT: ["Out Story"],
  };

  const categories = Object.keys(navCategories);

  return (
    <nav className="hidden w-2/12 h-screen p-4 text-left bg-darkBlue md:flex md:flex-col">
      {categories.map((category) => (
        <div key={category}>
          <NavCategoryTitle title={category} />
          <NavCategoryLink links={navCategories[category]} />
        </div>
      ))}
    </nav>
  );
};

export default Sidebar;
