"use client";

import { motion } from "framer-motion";
import { Twitter, Facebook, Instagram } from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export default function LandingPage() {
  return (
    <div
      className="min-h-screen bg-[#1E0B36] text-white overflow-hidden bg-cover"
      style={{ backgroundImage: "url('/images/lpBg.png')" }}
    >
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-2xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              <span className="block">One-click Path to Prosperity,</span>{" "}
              <span className="block text-gray-400">
                No Banks, Just Gain & Smart moves.
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Use <span className="text-[#FFD700]">$Propcoin</span> to mint,
              tokenize and decentralize Real World Assets on-chain. A new way to
              register, mint, share, and secure your SBT collections on-chain.
              Swap, stake and gain full control over your assets.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex gap-7 sm:justify-start lg:justify-start">
              <Link href="/about">
                <Button variant="outline">Learn more</Button>
              </Link>
              <Link href="/">
                <Button className="bg-[#5D3FD3] hover:bg-[#4B32A8]">
                  Launch dApp
                </Button>
              </Link>
            </div>
            <motion.div
              className="mt-8 sm:mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-sm text-gray-400">Stay tuned</p>
              <p className="mt-1 text-sm text-gray-400">
                More info in official channels
              </p>
              <div className="mt-4 flex space-x-6">
                <Twitter />
                <Facebook />
                <Instagram />
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-12 lg:mt-0 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src="/images/heroImage2.svg"
              alt="Propcoin illustration"
              width={100}
              height={100}
              className="w-[30rem] h-auto"
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
