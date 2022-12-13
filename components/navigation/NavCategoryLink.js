import React from "react";

const NavCategoryLink = ({ links }) => {
  console.log(links);
  return (
    <>
      {links.map((link) => (
        <div key={link}>
          <h2 className="text-2xl font-normal text-white">{link}</h2>
        </div>
      ))}
    </>
  );
};

export default NavCategoryLink;
