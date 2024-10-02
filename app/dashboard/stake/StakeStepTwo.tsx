"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const StakeStepTwo = () => {
  const [selected, setSelected] = useState(null);

  const handleClick = (value: any) => {
    setSelected(value);
  };
  return (
    <div className="flex flex-col justify-between gap-36">
      <section>
        <div className="flex justify-between px-3 items-center py-3 bg-stake-cards rounded-md">
          <div className="flex items-center gap-3 ">
            <Image
              src="/images/stakeduration.svg"
              alt="Stake Duration"
              height={40}
              width={40}
              className="object-contain p-2"
            />
            <p className={`${jost.className} text-xl font-bold text-white`}>
              0
            </p>
          </div>

          <p className={`${jost.className} text-xl font-bold text-white`}>
            +0%
          </p>
        </div>

        <div className="text-nowrap flex gap-7 py-5 w-full">
          {["3 DAYS", "15 DAYS", "45 DAYS", "MAX"].map((label, index) => (
            <button
              key={index}
              className={`text-lg px-4 py-2 ${
                selected === label
                  ? "bg-indigo-600 text-white"
                  : "bg-[#0a0826] text-white"
              } ${label === "MAX" ? "bg-white text-[#3930bc]" : ""}`}
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

export default StakeStepTwo;
