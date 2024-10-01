"use client";

import {
  ConnectWallet,
  useAddress,
  useConnectionStatus,
  useDisconnect,
} from "@thirdweb-dev/react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Component() {
  const address = useAddress();
  const connectionStatus = useConnectionStatus();
  const disconnect = useDisconnect();
  const [showDisconnect, setShowDisconnect] = useState(false);

  const handleAddWallet = () => {
    setShowDisconnect(true);
  };

  const handleDisconnect = () => {
    disconnect();
    setShowDisconnect(false);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-purple-900 to-black text-white">
      <div className="w-1/2 flex flex-col justify-center items-center p-12">
        <div className="relative w-80 h-80">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Connect%20wallet%201-Zx8VR6vsCzT5VaQ6EzzRMAT6KToujG.png"
            alt="Digital assets illustration"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h2 className="text-3xl font-bold mt-8">
          New assets, new opportunities
        </h2>
      </div>
      <div className="w-1/2 bg-black flex flex-col justify-center p-12">
        <button className="text-white mb-8">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-4xl font-bold mb-8">Choose Wallet</h1>
        <ConnectWallet
          theme="dark"
          btnTitle="Connect Wallet"
          modalSize="wide"
          welcomeScreen={{
            title: "Choose your preferred wallet",
            img: {
              src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Connect%20wallet%201-Zx8VR6vsCzT5VaQ6EzzRMAT6KToujG.png",
              width: 150,
              height: 150,
            },
          }}
          modalTitleIconUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Connect%20wallet%201-Zx8VR6vsCzT5VaQ6EzzRMAT6KToujG.png"
        />
        <p className="text-sm text-gray-500 mt-4">
          We do not own your private keys and cannot access your funds without
          your confirmation
        </p>
        {connectionStatus === "connected" && !showDisconnect && (
          <button
            className="mt-8 bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors"
            onClick={handleAddWallet}
          >
            Add wallet
          </button>
        )}
        {showDisconnect && (
          <button
            className="mt-8 bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors"
            onClick={handleDisconnect}
          >
            Disconnect
          </button>
        )}
        {address && (
          <p className="mt-4 text-sm text-gray-400">
            Connected address: {address.slice(0, 6)}...{address.slice(-4)}
          </p>
        )}
      </div>
    </div>
  );
}
