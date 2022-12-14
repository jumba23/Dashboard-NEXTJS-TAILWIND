import Link from "next/link";
import React from "react";

const NavCategoryLink = ({ links }) => {
  return (
    // Nav Links
    <ul>
      {links.map((link) => (
        <li key={link}>
          <Link href={`/${link}`} className="text-2xl font-normal text-white">
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavCategoryLink;
