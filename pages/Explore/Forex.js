import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Forex = () => {
  const [forex, setForex] = useState();
  const router = useRouter();
  const categories = new Array(3).fill(router.route.split("/")[2]);

  //========================== FOREX API FETCH =================================================

  useEffect(() => {
    getForex();
  }, []);

  const getForex = async () => {
    const res = await fetch(
      "https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=EUR&to_symbol=USD&outputsize=compact&apikey=N6AXATLA2U2CFJTK"
    );
    const data = await res.json();
    setForex(data);
    console.log(data["Time Series FX (Daily)"]);
  };

  //===========================================================================================

  https: return (
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

export default Forex;
