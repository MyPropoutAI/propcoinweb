import React from "react";
import SbtHero from "./SbtHero";
import SbtCards from "./SbtCards";

const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <SbtHero />
      <SbtCards />
    </div>
  );
};

export default page;
