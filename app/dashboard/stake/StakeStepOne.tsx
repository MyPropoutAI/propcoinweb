"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

interface StakeStepOneProps {
  setStakeInfo: React.Dispatch<
    React.SetStateAction<{
      token: string | null;
      duration: string | null;
      amount: string;
    }>
  >;
}

const StakeStepOne: React.FC<StakeStepOneProps> = ({ setStakeInfo }) => {
  const [selectedToken, setSelectedToken] = useState<string | null>(null);

  const handleSelectToken = (token: string) => {
    setSelectedToken(token);
    setStakeInfo((prev) => ({ ...prev, token }));
  };

  return (
    <div className="flex flex-col gap-3">
      {["USDT", "PROC", "LISK"].map((token) => (
        <Card
          key={token}
          className={`bg-stake-cards border-none py-5 w-full pr-40 cursor-pointer ${
            selectedToken === token ? "bg-indigo-600" : ""
          }`}
          onClick={() => handleSelectToken(token)}
        >
          <div className="flex items-center gap-3">
            <Image
              src={`/images/stake${token.toLowerCase()}.svg`}
              alt={`Stake ${token}`}
              height={60}
              width={60}
              className="object-contain p-2"
            />
            <p className="text-xl font-bold text-white">{token}</p>
          </div>
        </Card>
      ))}
      {selectedToken && (
        <p className="mt-4 text-white">
          You have selected: <strong>{selectedToken}</strong>
        </p>
      )}
    </div>
  );
};

export default StakeStepOne;
