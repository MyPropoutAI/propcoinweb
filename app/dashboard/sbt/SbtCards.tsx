import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import React from "react";
import { Jost } from "next/font/google";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const cardData = [
  { title: "Medical Collections", gradient: "from-[#CCD024] to-[#1F8406]" },
  { title: "Educational Collections", gradient: "from-[#5CCCCC] to-[#9306C5]" },
  { title: "I.D Collections", gradient: "from-[#EB854C] to-[#A29208]" },
  { title: "RWA Collections", gradient: "from-[#24D073] to-[#062984]" },
  { title: "Bio Collections", gradient: "from-[#DF59E1] to-[#D00F27]" },
  { title: "Game Collections", gradient: "from-[#385819] to-[#320051]" },
];

const SbtCards = () => {
  return (
    <div className={`${jost.className} text-3xl font-bold flex flex-col gap-5`}>
      {Array.from({ length: 2 }, (_, index) => (
        <section key={index} className="flex gap-5">
          {cardData.slice(index * 3, index * 3 + 3).map((card, idx) => (
            <Card
              key={idx}
              className={`flex-1 px-5 py-10 bg-gradient-to-r ${card.gradient} border-none text-white flex flex-col justify-between`}
            >
              <CardHeader>
                {card.title.includes(" ")
                  ? card.title.split(" ").map((word, i) => (
                      <React.Fragment key={i}>
                        {word} <br />
                      </React.Fragment>
                    ))
                  : card.title}
              </CardHeader>
              <CardFooter className="flex justify-end">
                <Link href="/dashboard/sbt/upload">
                  <ArrowRightIcon />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </section>
      ))}
    </div>
  );
};

export default SbtCards;
