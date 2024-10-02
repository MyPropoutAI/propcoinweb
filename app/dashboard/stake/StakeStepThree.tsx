"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface StakeStepThreeProps {
  setStakeInfo: React.Dispatch<
    React.SetStateAction<{
      token: string | null;
      duration: string | null;
      amount: string;
    }>
  >;
  availableBalance: number; // Add a prop to accept the available balance
  token: string | null; // Add a prop to accept the selected token
}

const StakeStepThree: React.FC<StakeStepThreeProps> = ({
  setStakeInfo,
  availableBalance,
  token,
}) => {
  const [amount, setAmount] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
    setStakeInfo((prev) => ({ ...prev, amount: e.target.value }));
  };

  return (
    <div className="flex flex-col gap-36">
      <section>
        <header className="flex justify-between items-center py-2">
          <p className="text-lg font-bold text-gray-500">Stake Amount</p>
          <p className="text-lg font-bold text-gray-500">
            Avail. Bal: {availableBalance.toFixed(2)} {token}
          </p>
        </header>
        <div className="flex justify-between px-3 items-center py-3 bg-stake-cards rounded-md">
          <div className="flex items-center gap-3">
            <Image
              src={`/images/stake${token?.toLowerCase()}.svg`} // Update image src based on token
              alt="Stake Amount"
              height={40}
              width={40}
              className="object-contain p-2"
            />
            <input
              placeholder={`0.0 ${token}`} // Update placeholder to reflect selected token
              value={amount}
              onChange={handleChange}
              className="text-xl font-bold text-gray-500 bg-transparent outline-none"
              type="text"
            />
          </div>
        </div>
      </section>
      {/* <Button className="bg-indigo-600 flex w-full py-5 rounded-lg text-[1.1rem] text-white justify-center hover:bg-indigo-600">
        Continue
      </Button> */}
    </div>
  );
};

export default StakeStepThree;
