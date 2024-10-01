"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Copy } from "lucide-react";
import Image from "next/image";

export default function Component() {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    setIsConnected(true);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Left side */}
      <div className="w-1/2 bg-[#1c1633] p-8 flex flex-col justify-between">
        <ArrowLeft className="h-6 w-6" />
        <div className="flex flex-col items-center text-center">
          <div className="relative w-64 h-64 mb-8">
            <Image
              src="/placeholder.svg?height=256&width=256"
              alt="New assets illustration"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <h2 className="text-2xl font-bold">New assets, new opportunities</h2>
        </div>
        <div /> {/* Spacer */}
      </div>

      {/* Right side */}
      <div className="w-1/2 bg-black p-8 flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <ArrowLeft className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Metamask</h1>
        </div>

        {isConnected && (
          <div className="bg-purple-700 rounded-lg p-4 mb-8 flex items-center">
            <CheckCircle className="h-5 w-5 mr-2" />
            <span>Your wallet has been linked successfully.</span>
          </div>
        )}

        <div className="flex-grow flex flex-col items-center justify-center">
          <div className="bg-white p-4 rounded-lg mb-4">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="QR Code"
              width={200}
              height={200}
            />
          </div>
          <p className="text-gray-400 mb-4">Scan this QR with your phone</p>
          <Button
            onClick={handleConnect}
            className="bg-purple-600 hover:bg-purple-700 text-white w-full mb-4"
          >
            {isConnected ? "Wallet Connected" : "Connect Wallet"}
          </Button>
          <Button
            variant="outline"
            className="w-full flex items-center justify-center"
          >
            <Copy className="h-4 w-4 mr-2" />
            Copy
          </Button>
        </div>
      </div>
    </div>
  );
}
