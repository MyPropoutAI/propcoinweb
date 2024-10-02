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

const TokenRate = () => {
  return (
    <div className="py-5 px-5">
      <Card className="bg-stake-cards border-none px-5 py-5">
        <CardTitle>
          <p className={`${jost.className} text-xl text-gray-500 py-5`}>
            Token Rate
          </p>
        </CardTitle>
        <div className="flex flex-col gap-3">
          <Card className="bg-black border-none py-5 w-full pr-40">
            <div className="flex items-center gap-3">
              <div className="bg-stake-cards w-fit rounded-full flex items-center justify-center">
                <Image
                  src="/images/stakeusdt.svg"
                  alt="Stake USDT"
                  height={60}
                  width={60}
                  className="object-contain p-2"
                />
              </div>

              <aside>
                <section className="flex gap-1 items-center">
                  <p className={`${jost.className} text-xl text-white`}>USDT</p>
                  <span className={`${jost.className} text-lg text-gray-500`}>
                    | Tether usdt
                  </span>
                </section>
                <p
                  className={`${jost.className} text-[0.8rem] font-bold text-gray-500`}
                >
                  $1.00 USD
                </p>
              </aside>
            </div>
          </Card>

          <Card className="bg-black border-none py-5 w-full pr-40">
            <div className="flex items-center gap-3">
              <div className="bg-stake-cards w-fit rounded-full flex items-center justify-center">
                <Image
                  src="/images/stakeprop.svg"
                  alt="Stake PROP"
                  height={60}
                  width={60}
                  className="object-contain p-2"
                />
              </div>

              <aside>
                <section className="flex gap-1 items-center">
                  <p className={`${jost.className} text-xl text-white`}>PROC</p>
                  {/* <span className={`${jost.className} text-lg text-gray-500`}>
                    | Tether usdt
                  </span> */}
                </section>
                <p
                  className={`${jost.className} text-[0.8rem] font-bold text-gray-500`}
                >
                  $0.05 USD
                </p>
              </aside>
            </div>
          </Card>

          <Card className="bg-black border-none py-5 w-full pr-40">
            <div className="flex items-center gap-3">
              <div className="bg-stake-cards w-fit rounded-full flex items-center justify-center">
                <Image
                  src="/images/stakelsk.svg"
                  alt="Stake LISK"
                  height={60}
                  width={60}
                  className="object-contain p-2"
                />
              </div>

              <aside>
                <section className="flex gap-1 items-center">
                  <p className={`${jost.className} text-xl text-white`}>LISK</p>
                  {/* <span className={`${jost.className} text-lg text-gray-500`}>
                    | Tether usdt
                  </span> */}
                </section>
                <p
                  className={`${jost.className} text-[0.8rem] font-bold text-gray-500`}
                >
                  $0.005 USD
                </p>
              </aside>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default TokenRate;
