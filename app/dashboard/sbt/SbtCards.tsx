import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import React from "react";

import { Jost } from "next/font/google";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, ArrowTopLeftIcon } from "@radix-ui/react-icons";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const SbtCards = () => {
  return (
    <div className={`${jost.className} text-3xl font-bold flex flex-col gap-3`}>
      <section className="flex gap-3 ">
        <Card className="flex-1 px-5 py-10 bg-gradient-to-r from-[#CCD024] to-[#1F8406] border-none text-white flex flex-col justify-between">
          <CardHeader>
            Medical <br />
            Collections
          </CardHeader>
          <CardFooter className="flex justify-end ">
            <ArrowRightIcon />
          </CardFooter>
        </Card>

        <Card className="flex-1 px-5 py-10 bg-gradient-to-r from-[#5CCCCC] to-[#9306C5] border-none text-white flex flex-col justify-between">
          <CardHeader>Educational Collections</CardHeader>
          <CardFooter className="flex justify-end">
            <ArrowRightIcon />
          </CardFooter>
        </Card>

        <Card className="flex-1 px-5 py-10 bg-gradient-to-r from-[#EB854C] to-[#A29208] border-none text-white flex flex-col justify-between">
          <CardHeader>
            I.D <br /> Collections
          </CardHeader>
          <CardFooter className="flex justify-end">
            <ArrowRightIcon />
          </CardFooter>
        </Card>
      </section>

      <section className="flex gap-3 ">
        <Card className="flex-1 px-5 py-10 bg-gradient-to-r from-[#24D073] to-[#062984] border-none text-white flex flex-col justify-between">
          <CardHeader>
            RWA <br />
            Collections
          </CardHeader>
          <CardFooter className="flex justify-end ">
            <ArrowRightIcon />
          </CardFooter>
        </Card>

        <Card className="flex-1 px-5 py-10 bg-gradient-to-r from-[#DF59E1] to-[#D00F27] border-none text-white flex flex-col justify-between">
          <CardHeader>
            Bio <br /> Collections
          </CardHeader>
          <CardFooter className="flex justify-end">
            <ArrowRightIcon />
          </CardFooter>
        </Card>

        <Card className="flex-1 px-5 py-10 bg-gradient-to-r from-[#385819] to-[#320051] border-none text-white flex flex-col justify-between">
          <CardHeader>
            Game <br />
            Collections
          </CardHeader>
          <CardFooter className="flex justify-end">
            <ArrowRightIcon />
          </CardFooter>
        </Card>
      </section>
    </div>
  );
};

export default SbtCards;
