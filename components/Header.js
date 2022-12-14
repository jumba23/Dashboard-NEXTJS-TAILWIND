import React from "react";
import Image from "next/image";
import logo from "../public/orion.png";
import Link from "next/link";

const Header = () => {
  return (
    // {/* Flex container */}
    <div className="flex items-center px-20 border-b-4 border-blue-700 h-1/6 bg-gradient-to-r from-blue-900 to-blue-400">
      {/* Logo */}
      <div className="flex">
        <Image src={logo} className="w-16" alt="" />
        <p className="pl-10 text-5xl italic font-extrabold tracking-widest text-transparent border-indigo-500/50 bg-clip-text bg-gradient-to-r to-black from-lightBabyBlue">
          <Link href="/">
            OR<span className="text-black">I</span>ON
          </Link>
        </p>
      </div>
      {/* Button */}
      <div className="flex ml-auto">
        <a
          href="#"
          className="hidden p-3 px-6 pt-2 rounded-full shadow-lg text-lightBabyBlue bg-darkBlue baseline hover:bg-corflowerBlue hover:text-darkBlue hover:font-bold hover:border-darkBlue hover:border-2 md:block"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Header;
