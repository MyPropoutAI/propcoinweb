"use client";

import React, { useState } from "react";
import { RiSwapFill } from "react-icons/ri";
import { Jost } from "next/font/google";
import Image from "next/image";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Define types for currencies and exchange rates (without BTC)
type Currency = "PROC" | "LSK" | "USDT";

type ExchangeRates = {
  [key in Currency]: {
    [key in Currency]: number; // Each currency should map to each other currency
  };
};

const SwapFunc: React.FC = () => {
  // State for selected cryptocurrencies and amounts
  const [fromCurrency, setFromCurrency] = useState<Currency>("PROC");
  const [toCurrency, setToCurrency] = useState<Currency>("LSK");
  const [fromAmount, setFromAmount] = useState<number | "">(""); // Separate state for fromAmount
  const [toAmount, setToAmount] = useState<number | "">(""); // Separate state for toAmount
  const [swappedAmount, setSwappedAmount] = useState<number | null>(null);
  const [showSwapDialog, setShowSwapDialog] = useState(false); // State to control visibility of the swap result dialog

  // Modal visibility states
  const [showFromModal, setShowFromModal] = useState(false);
  const [showToModal, setShowToModal] = useState(false);

  // Sample exchange rates (to be replaced with real data)
  const exchangeRates: ExchangeRates = {
    PROC: { PROC: 1, LSK: 13, USDT: 1600 },
    LSK: { PROC: 0.077, LSK: 1, USDT: 120 },
    USDT: { PROC: 0.0006, LSK: 0.0083, USDT: 1 },
  };

  // Handle currency swap calculation
  const handleSwap = () => {
    if (fromAmount && fromCurrency && toCurrency) {
      const rate = exchangeRates[fromCurrency][toCurrency];
      setSwappedAmount(Number(fromAmount) * rate);
      setShowSwapDialog(true); // Show the dialog after calculating the swapped amount
    }
  };

  // Function to swap fromCurrency and toCurrency
  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount); // Optionally set `fromAmount` to `toAmount` on swap
    setToAmount(""); // Reset toAmount after swap if desired
  };

  // Function to get image src for each currency
  const getCurrencyImage = (currency: Currency) => {
    switch (currency) {
      case "PROC":
        return "/images/stakeproc.svg";
      case "LSK":
        return "/images/stakelisk.svg";
      case "USDT":
        return "/images/stakeusdt.svg";
      default:
        return "";
    }
  };

  return (
    <div className={`${jost.className} text-black`}>
      {/* From Currency and Amount on the Same Line */}
      <div className="bg-gray-700 px-4 py- rounded-lg shadow-lg mb-4">
        <div className="flex justify-between items-center">
          <div className="flex-1 mr-2">
            <label className="font-bold text-xl">From: </label>
            <div className="relative">
              <button
                onClick={() => setShowFromModal(true)}
                className="w-full bg-indigo-600 max-w-fit px-2 py-1 rounded-lg outline-none font-extrabold text-lg text-white flex items-center justify-start"
              >
                <Image
                  src={getCurrencyImage(fromCurrency)}
                  alt={`${fromCurrency} logo`}
                  width={20}
                  height={20}
                  className="mr-2"
                />
                {fromCurrency}
              </button>
              <dialog
                open={showFromModal}
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg backdrop-blur-md z-50"
              >
                <h3 className="font-bold text-xl mb-2">Select From Currency</h3>
                {(["PROC", "LSK", "USDT"] as Currency[]).map((currency) => (
                  <button
                    key={currency}
                    onClick={() => {
                      setFromCurrency(currency);
                      setShowFromModal(false);
                    }}
                    className="w-full p-2 text-lg font-bold text-gray-800 hover:bg-black hover:text-gray-200 rounded-lg mb-2 flex items-center justify-start"
                  >
                    <Image
                      src={getCurrencyImage(currency)}
                      alt={`${currency} logo`}
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    {currency}
                  </button>
                ))}
              </dialog>
            </div>
          </div>

          {/* Amount Input for From Currency */}
          <div className="flex-1">
            <label className="font-bold text-xl">Amount: </label>
            <input
              type="number"
              value={fromAmount}
              onChange={(e) =>
                setFromAmount(e.target.value ? Number(e.target.value) : "")
              }
              placeholder="0.00"
              className="w-full p-2 bg-transparent outline-none font-extrabold text-lg text-white"
            />
          </div>
        </div>
      </div>

      {/* Swap Icon in Between - Centered */}
      <div className="my-4 flex justify-center">
        <button
          onClick={swapCurrencies}
          className="cursor-pointer text-3xl text-indigo-600 p-2 rounded-full"
        >
          <RiSwapFill />
        </button>
      </div>

      {/* To Currency and Amount */}
      <div className="bg-gray-700 px-4 py- rounded-lg shadow-lg mb-4">
        <div className="flex justify-between items-center">
          <div className="flex-1 mr-2">
            <label className="font-bold text-xl">To: </label>
            <div className="relative">
              <button
                onClick={() => setShowToModal(true)}
                className="w-full bg-indigo-600 max-w-fit px-2 py-1 rounded-lg outline-none font-extrabold text-lg text-white flex items-center justify-start"
              >
                <Image
                  src={getCurrencyImage(toCurrency)}
                  alt={`${toCurrency} logo`}
                  width={20}
                  height={20}
                  className="mr-2"
                />
                {toCurrency}
              </button>
              <dialog
                open={showToModal}
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg backdrop-blur-md z-50"
              >
                <h3 className="font-bold text-xl mb-2">Select To Currency</h3>
                {(["PROC", "LSK", "USDT"] as Currency[]).map((currency) => (
                  <button
                    key={currency}
                    onClick={() => {
                      setToCurrency(currency);
                      setShowToModal(false);
                    }}
                    className="w-full p-2 text-lg font-bold text-gray-800 hover:bg-black hover:text-gray-200 rounded-lg mb-2 flex items-center justify-start"
                  >
                    <Image
                      src={getCurrencyImage(currency)}
                      alt={`${currency} logo`}
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    {currency}
                  </button>
                ))}
              </dialog>
            </div>
          </div>

          {/* Amount Input for To Currency */}
          <div className="flex-1">
            <label className="font-bold text-xl">Amount: </label>
            <input
              type="number"
              value={toAmount}
              onChange={(e) =>
                setToAmount(e.target.value ? Number(e.target.value) : "")
              }
              placeholder="0.00"
              className="w-full p-2 bg-transparent outline-none font-extrabold text-lg text-white"
            />
          </div>
        </div>
      </div>

      {/* Swap Button */}
      <button
        onClick={handleSwap}
        className="w-full px-6 py-3 bg-indigo-600  hover:bg-indigo-700  text-white rounded cursor-pointer mb-4"
      >
        Swap
      </button>

      {/* Show the Swap Result Dialog */}
      {showSwapDialog && swappedAmount !== null && (
        <dialog
          open={showSwapDialog}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg backdrop-blur-md z-50"
        >
          <h3 className="font-bold text-xl mb-2">Swapped Amount</h3>
          <p className="text-lg">
            You will receive {swappedAmount} {toCurrency}
          </p>
          <button
            onClick={() => setShowSwapDialog(false)}
            className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded"
          >
            Close
          </button>
        </dialog>
      )}
    </div>
  );
};

export default SwapFunc;
