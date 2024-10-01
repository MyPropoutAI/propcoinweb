"use client";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function VerifyOtp() {
  const [pin, setPin] = useState(["", "", "", "", "", ""]);

  const handlePinChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);
      if (value && index < 5) {
        document.getElementById(`pin-${index + 1}`)?.focus();
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-black text-white">
      <div className="w-full md:w-1/2 bg-[#1E0A3C] p-8 flex flex-col justify-center items-center relative">
        <div className="absolute top-4 left-4 md:hidden">
          <Link href="/">
            <ArrowLeft className="h-6 w-6" />
          </Link>
        </div>
        <div className="max-w-md text-center">
          <div className="mb-8">
            <Image
              src="/images/loginImage.svg"
              width={100}
              height={100}
              alt="Digital assets illustration"
              className="mx-auto"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">
            New assets, new opportunities
          </h2>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center">
        <div className="max-w-md w-full">
          <div className="mb-8">
            <ArrowLeft className="h-6 w-6 hidden md:block" />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-[#8B5CF6]">
            Set your PIN
          </h1>
          <p className="mb-8 text-gray-400">
            This password is used to verify your identity. Propcoin wallet does
            not store your password. It cannot be retrieved, rendering the
            wallet unusable. Please keep your PIN safe.
          </p>
          <div className="flex justify-between mb-8">
            {pin.map((digit, index) => (
              <input
                key={index}
                id={`pin-${index}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handlePinChange(index, e.target.value)}
                className="w-12 h-12 text-center text-2xl bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-[#8B5CF6]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
