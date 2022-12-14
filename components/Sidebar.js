import React from "react";
import NavCategoryTitle from "./navigation/NavCategoryTitle";
import NavCategoryLink from "./navigation/NavCategoryLink";

const Sidebar = () => {
  const navCategories = {
    EXPLORE: ["Stocks", "Forex", "Crypto"],
    FEEDBACK: ["Contact", "Reviews"],
    ABOUT: ["Mission"],
  };

  const categories = Object.keys(navCategories);

  return (
    // Nav Categories
    <nav className="hidden w-1/6 h-full pl-16 text-left items-left bg-darkBlue md:flex md:flex-col">
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
