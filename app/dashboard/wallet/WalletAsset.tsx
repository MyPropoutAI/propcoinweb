import React from "react";
import { Jost } from "next/font/google";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const WalletAsset = () => {
  return (
    <div className={`${jost.className} text-gray-200 flex flex-col gap-5`}>
      <Card className="bg-stake-cards px-5 py-5 text-gray-200 border-none"></Card>
    </div>
  );
};

export default WalletAsset;
