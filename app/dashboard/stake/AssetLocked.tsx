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

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const AssetLocked = () => {
  return (
    <Card className="bg-stake-cards border-none rounded-lg p-5 relative pb-0 overflow-hidden">
      <div className="flex flex-col gap-5">
        <p className={`${jost.className} text-2xl text-gray-500 mt-3`}>
          Lock Period
        </p>

        <Card className="bg-gray-700 backdrop-blur-lg border-none rounded-none rounded-tl-lg rounded-tr-lg mt-6 p-6 mx-6 translate-y-4 ">
          <div className="flex flex-col p-10 relative">
            <Image
              src={"/images/stakelocked.svg"}
              alt="Asset Locked"
              height={260}
              width={260}
            />
            <p className={`${jost.className} text-xl text-gray-500 -mb-5`}>
              You have no staked assets
            </p>
            <div className="glow_blue"></div>
          </div>
        </Card>
      </div>
    </Card>
  );
};

export default AssetLocked;
