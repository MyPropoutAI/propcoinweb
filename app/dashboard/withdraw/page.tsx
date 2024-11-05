"use client";
import React, { useState } from "react";
import { Jost } from "next/font/google";

// Jost font setup
const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const coinOptions = [
  {
    value: "usdt",
    label: "USDT",
  },
  {
    value: "lsk",
    label: "LSK",
  },
  {
    value: "proc",
    label: "PROC",
  },
];

const Page = () => {
  // State for form inputs
  const [selectedCoin, setSelectedCoin] = useState("");
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Handler for the withdraw button
  const handleWithdraw = () => {
    if (!selectedCoin || !selectedNetwork || !address || !amount) {
      alert("Please fill all the fields");
      return;
    }
    setShowModal(true); // Show the modal
  };

  // Close modal handler
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={`${jost.className} text-black px-10 py-10`}>
      <h1 className="text-white font-bold text-xl">On chain withdrawal</h1>

      <section className="flex flex-col gap-5 mt-10 text-white text-xl">
        <div>
          <h2 className="text-gray-600 font-bold py-2">Coin</h2>
          <select
            value={selectedCoin}
            onChange={(e) => setSelectedCoin(e.target.value)}
            className="bg-stake-cards w-full px-5 py-5 rounded-lg hover:text-gray-200 focus:outline-none"
            aria-label="Select currency"
          >
            <option value="">Select Coin</option>
            {coinOptions.map((coinOption) => (
              <option key={coinOption.value} value={coinOption.value}>
                {coinOption.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <h2 className="text-gray-600 font-bold py-2">Address</h2>
          <input
            type="text"
            placeholder="Input or press and hold to paste an address"
            className="bg-stake-cards w-full px-5 py-5 rounded-lg"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div>
          <h2 className="text-gray-600 font-bold py-2">Network</h2>
          <select
            value={selectedNetwork}
            onChange={(e) => setSelectedNetwork(e.target.value)}
            className="bg-stake-cards w-full px-5 py-5 rounded-lg"
          >
            <option value="">Select Network</option>
            <option value="bep20">bep20</option>
            <option value="erc20">erc20</option>
            <option value="trc20">trC20</option>
          </select>
        </div>

        <div>
          <h2 className="text-gray-600 font-bold py-2">Amount</h2>
          <input
            type="text"
            placeholder="Min withdrawal amount 0.1"
            className="bg-stake-cards w-full px-5 py-5 rounded-lg"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button
          onClick={handleWithdraw}
          className="bg-indigo-600 px-5 py-3 text-gray-200 font-bold justify-center rounded-lg my-5 flex w-full"
        >
          Withdraw
        </button>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50">
          <div className="bg-indigo-300 text-black p-5 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Withdrawal Successful!</h2>
            <p>
              <strong>Coin:</strong> {selectedCoin}
            </p>
            <p>
              <strong>Network:</strong> {selectedNetwork}
            </p>
            <p>
              <strong>Amount:</strong> {amount}
            </p>
            <p>
              <strong>Address:</strong> {address}
            </p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
