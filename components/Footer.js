import React from "react";
import Weather from "./footer/Weather";
import News from "./footer/News";

const Footer = () => {
  return (
    <div className="flex h-1/3">
      <News />
      <Weather />
    </div>
  );
};

export default Footer;
