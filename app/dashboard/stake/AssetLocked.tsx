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
    <div className="flex flex-col items-center justify-center gap-4 bg-stake-cards border-none">
      <Card className="bg-stake-cards border-none rounded-lg p-5 relative">
        <div className="flex flex-col gap-5">
          <p className={`${jost.className} text-2xl text-gray-500 -mb-5`}>
            Lock Period
          </p>

          <div className="bg-radial-blue p-[1rem] ">{/* Content here */}</div>

          <Card className="bg-transparent border- rounded-lg mt-6 p-6 mx-6 -mb-[1.4rem] z-10">
            <div className="flex flex-col p-10">
              <Image
                src={"/images/stakelocked.svg"}
                alt="Asset Locked"
                height={200}
                width={200}
              />
              <p className={`${jost.className} text-xl text-gray-500 -mb-5`}>
                You have no staked assets
              </p>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default AssetLocked;
