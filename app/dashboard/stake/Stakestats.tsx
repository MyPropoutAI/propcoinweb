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

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const Stakestats = () => {
  return (
    <div className="flex items-center gap-5 container ">
      <Card className="bg-stake-cards border-none pl-2 pr-20 ">
        <CardHeader>
          <p className={`${jost.className} text-xl text-gray-500 -mb-5`}>
            Total value locked
          </p>
        </CardHeader>
        <CardContent>
          <p className={`${jost.className} text-xl font-extrabold text-white`}>
            $1,000,000.84
          </p>
        </CardContent>
      </Card>

      <Card className="bg-stake-cards border-none pl-2 pr-20 ">
        <CardHeader>
          <p className={`${jost.className} text-xl text-gray-500 -mb-5`}>
            Points Generated
          </p>
        </CardHeader>
        <CardContent>
          <p className={`${jost.className} text-xl font-extrabold text-white`}>
            500,000.02
          </p>
        </CardContent>
      </Card>

      <Card className="bg-stake-cards border-none pl-2 pr-20 ">
        <CardHeader>
          <p className={`${jost.className} text-xl text-gray-500 -mb-5`}>
            APY Rate
          </p>
        </CardHeader>
        <CardContent>
          <p className={`${jost.className} text-xl font-extrabold text-white`}>
            91.32%
          </p>
        </CardContent>
      </Card>

      <Card className="bg-stake-cards border-none pl-2 pr-20 ">
        <CardHeader>
          <p className={`${jost.className} text-xl text-gray-500 -mb-5`}>
            Stakers
          </p>
        </CardHeader>
        <CardContent>
          <p className={`${jost.className} text-xl font-extrabold text-white`}>
            2065
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Stakestats;
