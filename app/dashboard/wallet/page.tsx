"use client";
import React, { useState, ChangeEvent } from "react";
import { Jost } from "next/font/google";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import WalletAsset from "./WalletAsset";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Define the type for each currency object
interface Currency {
  name: string;
  sign: string;
}

// Define the available currencies
const currency: Currency[] = [
  { name: "USD", sign: "$" },
  { name: "EUR", sign: "€" },
  { name: "GBP", sign: "£" },
  { name: "JPY", sign: "¥" },
  { name: "NGN", sign: "₦" },
];

// Account balance (assuming it's a number)
const acctBalance: number = 1500.0;

const page: React.FC = () => {
  // The type of `selectedCurrency` will be inferred as `Currency` based on the initial state
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(
    currency[0]
  ); // Default to USD

  // Handle the change event for the currency selection
  const handleCurrencyChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const selected = currency.find((cur) => cur.name === e.target.value);
    if (selected) {
      setSelectedCurrency(selected);
    }
  };

  return (
    <div className={`${jost.className} text-gray-200 flex flex-col gap-5`}>
      <Card className="bg-stake-cards px-5 py-5 text-gray-200 border-none">
        <h1>Total Assets </h1>
        <section>
          {/* Display balance with selected currency sign */}
          <div className="flex gap-1 font-bold items-center">
            <h1 className="flex gap-1">
              {selectedCurrency.sign}
              {acctBalance}
            </h1>

            {/* Dropdown for currency selection */}
            <select
              onChange={handleCurrencyChange}
              value={selectedCurrency.name}
              className="bg-transparent"
            >
              {currency.map((cur) => (
                <option
                  key={cur.name}
                  value={cur.name}
                  className=" hover:bg-gray-700 bg-stake-cards outline-none"
                >
                  {cur.name}
                </option>
              ))}
            </select>
          </div>
        </section>

        <div className="flex gap-2 mt-10">
          <button className="bg-indigo-600 rounded-lg px-7 py-2 flex justify-center items-center text-[1.1rem] gap-1">
            <Image
              src="/icons/withdraw.svg"
              alt="Deposit icon"
              width={20}
              height={20}
              className="transform rotate-180"
            />
            Deposit
          </button>
          <Link
            href="/dashboard/withdraw"
            className="bg-indigo-600 rounded-lg px-7 py-2 flex justify-center items-center text-[1.1rem] gap-1"
          >
            <Image
              src="/icons/withdraw.svg"
              alt="withdraw icon"
              width={20}
              height={20}
            />
            Withdraw
          </Link>
        </div>
      </Card>
      <WalletAsset />
    </div>
  );
};

export default page;
