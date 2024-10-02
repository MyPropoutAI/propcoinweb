"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const StakeStepThree = () => {
  const [selected, setSelected] = useState(null);

  const handleClick = (value: any) => {
    setSelected(value);
  };
  return (
    <div className="flex flex-col gap-36">
      <section>
        <header className="flex justify-between items-center py-2">
          <p className={`${jost.className} text-lg font-bold text-gray-500`}>
            Stake Amount
          </p>

          <p className={`${jost.className} text-lg font-bold text-gray-500`}>
            Avail. Bal: 1000.00 lsk
          </p>
        </header>
        <div className="flex justify-between px-3 items-center py-3 bg-stake-cards rounded-md">
          <div className="flex items-center gap-3 ">
            <Image
              src="/images/stakelsk.svg"
              alt="Stake Duration"
              height={40}
              width={40}
              className="object-contain p-2"
            />
            <input
              placeholder=" 0.0 lsk"
              className={`${jost.className} text-xl font-bold text-gray-500 bg-transparent outline-none focus-none`}
              type="text"
            />
          </div>
        </div>
        <div className="text-nowrap flex items-center justify-between gap-5 py-5 w-full">
          {["25%", "50%", "75%", "MAX"].map((label, index) => (
            <button
              key={index}
              className={`text-xl px-5 py-2 ${
                selected === label
                  ? "bg-indigo-600 text-white"
                  : "bg-[#0a0826] text-white"
              }`}
              onClick={() => handleClick(label)}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      <Button
        className={`${jost.className} bg-indigo-600 flex w-full py-5 rounded-lg text-[1.1rem] text-white justify-center hover:bg-indigo-600`}
      >
        Continue
      </Button>
    </div>
  );
};

export default StakeStepThree;
