"use client";

import { motion } from "framer-motion";
import { Twitter, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function About() {
  return (
    <div
      className="min-h-screen bg-[#1E0B36] text-white overflow-hidden bg-cover"
      style={{ backgroundImage: "url('/images/lpBg.png')" }}
    >
      <main className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="block">One-click Path to Prosperity,</span>{" "}
            <span className="block text-[#B8860B]">
              No Banks, Just Gain & Smart moves.
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            Use <span className="text-[#FFD700]">$Propcoin</span> to mint,
            tokenize and decentralize Real World Assets on-chain. A new way to
            register, mint, share, and secure your SBT collections on-chain.
            Swap, stake and gain full control over your assets.
          </p>
          <div className="mt-5 sm:mt-8 gap-7 sm:flex sm:justify-center">
            <Link href="/launch">
              <Button className="bg-[#5D3FD3] hover:bg-[#4B32A8]">
                Launch dApp
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline">Home</Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <p className="text-sm text-gray-400">Stay tuned</p>
          <p className="mt-1 text-sm text-gray-400">
            More info in official channels
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <Twitter />
            <Facebook />
            <Instagram />
          </div>
        </motion.div>
      </main>
    </div>
  );
}
