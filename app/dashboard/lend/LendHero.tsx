import React from "react";
import { Jost, Roboto } from "next/font/google";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const LendHero = () => {
  return (
    <Card className="flex flex-row justify-between p-10 bg-stake-cards text-white border-none rounded-lg ">
      <section className="flex flex-col gap-5 justify-center">
        <h1 className={`${jost.className} text-4xl font-bold `}>Lend</h1>
        <p className={`${jost.className} text-3xl`}>
          Make loan offers on NFT collections. If you are not paid back on time,
          you get to keep the NFTs.
        </p>
      </section>

      <CardContent>
        <div className="flex justify-center py-5 relative">
          <Image
            src={"/images/lendhero.svg"}
            alt="lend"
            height={300}
            width={300}
            className="img_glow"
          />
          <div className="glow_red"></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LendHero;
