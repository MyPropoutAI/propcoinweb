import React from "react";
import {
  Card,
  CardDescription,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Jost, Roboto } from "next/font/google";
import Image from "next/image";
import StakeAssets from "./StakeAssets";
import { Button } from "@/components/ui/button";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Stakings = () => {
  return (
    <div>
      <Card className="bg-stake-cards border-none p-5 relative">
        <CardHeader className="py-5">
          <div className="flex gap-5 flex-col justify-center">
            <p className={`${jost.className} text-xl text-gray-500`}>
              Stakings
            </p>
            <p className={`${jost.className} text-lg text-gray-500`}>
              Lock up a certain amount of your digital assets for a specific
              period to earn
            </p>
          </div>
        </CardHeader>
        <div className=" bg-radial-yellow p-[1rem] bottom-[5rem] w-full right-32"></div>

        <CardContent>
          <div className="flex justify-center py-5">
            <Image
              src={"/images/stakebtc.svg"}
              alt="stake btc"
              width={150}
              height={150}
            />
          </div>
        </CardContent>
        <Button
          className={`${jost.className} bg-indigo-600 flex w-full py-5 rounded-lg text-[1.1rem] text-white justify-center hover:bg-indigo-600`}
        >
          <StakeAssets />
        </Button>
      </Card>
    </div>
  );
};

export default Stakings;
