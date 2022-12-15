import React from "react";
import { useRouter } from "next/router";

const Crypto = () => {
  const router = useRouter();

  const categories = new Object(3).fill(router.route.split("/")[2]);

  return (
    <div className="flex h-full">
      {categories.map((category, i) => (
        <div
          key={i}
          className="flex w-1/3 m-5 transition duration-500 transform shadow-xl shadow-sky-800 card bg-reallyLightBabyBlue hover:cursor-pointer hover:scale-105"
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Crypto;
