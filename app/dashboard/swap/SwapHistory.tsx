import React from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Jost } from "next/font/google";
import SwapDialog from "./SwapDialog";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const SwapHistory = () => {
  return (
    <div className={`${jost.className} `}>
      <Card className="flex flex-col   justify-between p-10 bg-stake-cards text-white border-none rounded-lg ">
        <h1 className="text-2xl pb-5">Swap history</h1>
        <hr />

        <div className=" flex flex-col items-center gap-3">
          <CardContent>
            <div className="flex justify-center py-5 relative">
              <Image
                src={"/images/swapicon.svg"}
                alt="swap icon"
                width={150}
                height={150}
                className="img_glow"
              />
              <div className="swap_blue"></div>
            </div>
          </CardContent>

          <p className="text-gray-500">
            No asset swap made so far. you can click on the link in the below to
            get started.
          </p>

          <div className="bg-indigo-600 hover:bg-indigo-700 px-32 py-2 rounded-xl">
            <SwapDialog />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SwapHistory;
