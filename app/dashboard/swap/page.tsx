import React from "react";
import SwapHero from "./SwapHero";
import SwapHistory from "./SwapHistory";

const page = () => {
  return (
    <div className="flex flex-col gap-3">
      <SwapHero />
      <SwapHistory />
    </div>
  );
};

export default page;
