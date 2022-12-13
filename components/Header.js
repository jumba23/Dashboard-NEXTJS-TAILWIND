import React from "react";
import Image from "next/image";
import logo from "../img/orion.png";

const Header = () => {
  return (
    <header className="relative px-20 py-6 shadow-black bg-babyBlue">
      {/* Flex container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex content-center pt-3">
          <Image src={logo} className="w-12" alt="" />
          <h1 className="pl-3 text-4xl text-darkBlue">ORION</h1>
        </div>
        {/* Button */}
        <a
          href="#"
          className="hidden p-3 px-6 pt-2 rounded-full shadow-lg text-lightBabyBlue bg-darkBlue baseline hover:bg-corflowerBlue hover:text-darkBlue hover:font-bold md:block"
        >
          Sign Up
        </a>
      </div>
    </header>
  );
};

export default Header;
