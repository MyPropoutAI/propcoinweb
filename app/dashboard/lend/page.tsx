import React from "react";
import LendHero from "./LendHero";
import LendTransactions from "./LendTransactions";

const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <LendHero />
      <LendTransactions />
    </div>
  );
};

export default page;
