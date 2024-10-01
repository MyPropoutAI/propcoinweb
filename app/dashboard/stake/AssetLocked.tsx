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
      <Card className="bg-black pl-2 pr-20 ">
        <CardHeader>
          <p className={`${jost.className} text-xl text-gray-500 -mb-5`}>
            Lock Period
          </p>
        </CardHeader>
        <CardContent>
          <Image
            src={"/images/lock.svg"}
            alt="Asset Locked"
            height={200}
            width={200}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AssetLocked;
