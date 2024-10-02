import React from "react";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const StakeStepOne = () => {
  return (
    <div className="flex flex-col gap-3">
      <Card className="bg-stake-cards border-none py-5 w-full pr-40">
        <div className="flex items-center gap-3">
          <Image
            src="/images/stakeusdt.svg"
            alt="Stake USDT"
            height={60}
            width={60}
            className="object-contain p-2"
          />
          <p className={`${jost.className} text-xl font-bold text-white`}>
            USDT
          </p>
        </div>
      </Card>

      <Card className="bg-stake-cards border-none py-5 w-full pr-40">
        <div className="flex items-center gap-3">
          <Image
            src="/images/stakeprop.svg"
            alt="Stake PROP"
            height={60}
            width={60}
            className="object-contain p-2"
          />
          <p className={`${jost.className} text-xl font-bold text-white`}>
            PROC
          </p>
        </div>
      </Card>
      <Card className="bg-stake-cards border-none py-5 w-full pr-40">
        <div className="flex items-center gap-3">
          <Image
            src="/images/stakelsk.svg"
            alt="Stake LISK"
            height={60}
            width={60}
            className="object-contain p-2"
          />
          <p className={`${jost.className} text-xl font-bold text-white`}>
            LISK
          </p>
        </div>
      </Card>

      <Button
        className={`${jost.className} bg-indigo-600 flex w-full py-5 rounded-lg text-[1.1rem] text-white justify-center hover:bg-indigo-600`}
      >
        Continue
      </Button>
    </div>
  );
};

export default StakeStepOne;
