"use client";
import React, { useState } from "react";
import { Jost } from "next/font/google";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import SBT from "./SBT";
import Fiat from "./Fiat";
import NFT from "./NFT";
import Crypto from "./Crypto";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const WalletAsset = () => {
  const [selected, setSelected] = useState<string>("crypto"); // State to keep track of the selected link

  const handleClick = (section: string) => {
    // Explicitly typing the 'section' parameter as a string
    setSelected(section);
  };
  return (
    <div className={`${jost.className} text-gray-200 flex flex-col gap-5`}>
      <Card className="bg-stake-cards px-10 py-10 text-gray-200 border-none">
        <nav className="flex gap-10">
          <a
            href="#"
            className={`text-xl ${
              selected === "crypto" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => handleClick("crypto")}
          >
            Crypto
          </a>
          <a
            href="#"
            className={`text-xl ${
              selected === "sbt" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => handleClick("sbt")}
          >
            SBTs
          </a>
          <a
            href="#"
            className={`text-xl ${
              selected === "fiat" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => handleClick("fiat")}
          >
            Fiat
          </a>
          <a
            href="#"
            className={`text-xl ${
              selected === "nft" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => handleClick("nft")}
          >
            NFTs
          </a>
        </nav>

        {/* Conditional content rendering based on the selected link */}
        <div className="mt-5">
          {selected === "crypto" && <Crypto />}
          {selected === "sbt" && <SBT />}
          {selected === "fiat" && <Fiat />}
          {selected === "nft" && <NFT />}
        </div>
      </Card>
    </div>
  );
};

export default WalletAsset;
