import React from "react";
import { Jost } from "next/font/google";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const SwapHero = () => {
  return (
    <Card className="flex flex-row items-center justify-between p-10 bg-stake-cards text-white border-none rounded-lg ">
      <div>
        <section className="flex flex-col gap-5 justify-center">
          <h1 className={`${jost.className} text-3xl font-bold `}>
            Swap your asset!
          </h1>
          <p className={`${jost.className} text-xl`}>
            Easily swap your coins and tokens to any other of your choice. Gain
            quick control of the market by swapping easily and seamlessly
          </p>
        </section>
        <div className="flex w-full  mr-5 mt-5">
          <Button
            className={`${jost.className} bg-indigo-600 hover:bg-indigo-700 px-20`}
          >
            Swap assets
          </Button>
        </div>
      </div>

      <CardContent>
        <div className="flex justify-center py-5 relative">
          <Image
            src={"/images/swap.svg"}
            alt="lend"
            height={400}
            width={400}
            className="img_glow"
          />
          <div className="sbt_hero"></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SwapHero;
