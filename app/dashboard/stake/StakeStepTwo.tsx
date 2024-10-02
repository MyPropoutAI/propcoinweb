"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface StakeStepTwoProps {
  setStakeInfo: React.Dispatch<
    React.SetStateAction<{
      token: string | null;
      duration: string | null;
      amount: string;
    }>
  >;
}

const StakeStepTwo: React.FC<StakeStepTwoProps> = ({
  setStakeInfo,
}: StakeStepTwoProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (value: string) => {
    setSelected(value);
    setStakeInfo((prev) => ({ ...prev, duration: value }));
  };

  return (
    <div className="flex flex-col justify-between gap-36">
      <section>
        <div className="flex justify-between px-3 items-center py-3 bg-stake-cards rounded-md">
          <div className="flex items-center gap-3">
            <Image
              src="/images/stakeduration.svg"
              alt="Stake Duration"
              height={40}
              width={40}
              className="object-contain p-2"
            />
            <p className="text-xl font-bold text-white">0</p>
          </div>
          <p className="text-xl font-bold text-white">+0%</p>
        </div>
        <div className="text-nowrap flex gap-7 py-5 w-full">
          {["3 DAYS", "15 DAYS", "45 DAYS", "MAX"].map((label) => (
            <button
              key={label}
              className={`text-lg px-4 py-2 ${
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
    </div>
  );
};

export default StakeStepTwo;
