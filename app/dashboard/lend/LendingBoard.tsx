"use client";

import React, { useState } from "react";
import { Jost } from "next/font/google";
import { Button } from "@/components/ui/button";
import Success from "./Success";

const jost = Jost({
  subsets: ["latin"],
  weight: ["500"],
});

const LendingBoard = () => {
  const [amount, setAmount] = useState(1);
  const offer = 24;
  const yourReturn = 0.96;

  const incrementLend = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };

  const decrementLend = () => {
    setAmount((prevAmount) => Math.max(prevAmount - 1, 0)); // Prevent negative amounts
  };

  return (
    <main className={`${jost.className} flex flex-col gap-10 justify-between`}>
      <section>
        <div className="flex justify-between w-full items-center py-5">
          <section className="flex flex-col gap-2">
            <p>Your Offers</p>
            <div>
              <p className="px-3 border py-1 rounded-lg"> {offer}</p>
              <span className="text-gray-500 py-1 text-[0.8rem]">
                You have 56.2 SOL
              </span>
            </div>
            <p>Your return</p>
          </section>

          <section className="flex flex-col gap-3 py-3">
            <p>Number of Offers</p>
            <div className="flex gap-1">
              <p className="px-3 border py-1 rounded-lg">{amount}</p>
              <button
                className="px-3 border py-1 rounded-lg"
                onClick={incrementLend}
              >
                +
              </button>
              <button
                className="px-3 border py-1 rounded-lg"
                onClick={decrementLend}
              >
                -
              </button>
            </div>
            <p className="text-right pr-5">{yourReturn * amount + 0.5}</p>
          </section>
        </div>

        <hr className=" py-5" />
        <div className="flex justify-between">
          <p>Total Offer</p>
          <p className="">{offer * amount}</p>
        </div>
      </section>

      <div className="flex flex-col">
        <div className="bg-indigo-600 px-2 py-4 hover:bg-indigo-700 rounded-xl text-center">
          <Success />
        </div>
        <p className="text-gray-500 py-3 text-[0.8rem]">
          Offers can be revoked anytime until it is taken or borrowed
        </p>
      </div>
    </main>
  );
};

export default LendingBoard;
