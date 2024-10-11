import React from "react";
import { Jost, Roboto } from "next/font/google";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const SbtHero = () => {
  return (
    <Card className="flex flex-row items-center justify-between p-10 bg-stake-cards text-white border-none rounded-lg ">
      <div>
        <section className="flex flex-col gap-5 justify-center">
          <h1 className={`${jost.className} text-3xl font-bold `}>
            Fully own your data and control what you share
          </h1>
          <p className={`${jost.className} text-xl`}>
            Reduce risk of companies data breaches and create multiple SBTs
            representing different parts of your life (Work, Medical, Gaming...)
          </p>
        </section>
        <div className="flex w-full  mr-5 mt-5">
          <Button
            className={`${jost.className} bg-indigo-600 hover:bg-indigo-600 px-20`}
          >
            Mint SBTs
          </Button>
        </div>
      </div>

      <CardContent>
        <div className="flex justify-center py-5 relative">
          <Image
            src={"/images/sbt.svg"}
            alt="lend"
            height={500}
            width={500}
            className="img_glow"
          />
          <div className="sbt_hero"></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SbtHero;
