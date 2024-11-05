import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Jost } from "next/font/google";
import { Card, CardHeader } from "@/components/ui/card";

// Jost font setup
const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const page = () => {
  return (
    <div className={`${jost.className} py-5 px-10 flex-col flex gap-10`}>
      <Card className="flex flex-col gap-5  px-10 py-10 bg-stake-cards text-gray-200 border-none">
        <h1 className="text-2xl">
          Looking for help? Here are our most frequently asked question?
        </h1>
        <h2>
          Everything you need to know about Propcoin and how it works. Can't
          find the answer to your question? Don't worry click "I've got a
          question" or "Chat to our team".{" "}
        </h2>

        <section className="flex gap-3 justify-between">
          <div className="border rounded-lg flex items-center justify-between px-3 py-3 flex-1">
            <p>I've got a question</p>
            <FaCircleArrowRight className="text-indigo-600 text-xl" />
          </div>
          <div className="border rounded-lg flex items-center justify-between px-3 py-3 flex-1">
            <p>Chat to our team</p>
            <FaCircleArrowRight className="text-indigo-600 text-xl" />
          </div>
        </section>
      </Card>

      <Card className="flex flex-col gap-5  px-10 py-10 bg-stake-cards text-gray-200 border-none">
        <h1 className="text-2xl font-bold">Generally Asked Questions</h1>
        <h2>Below are questions asked by our existing users.</h2>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Propout all about?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Propcoin is a wallet that houses your Crypto, NFTs, Real world
              assets and other SBTs collection
            </AccordionContent>

            <AccordionTrigger>
              Do I need to have an idea of trading ?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              No You don't need to have an idea of trading to use Propcoin.
            </AccordionContent>

            <AccordionTrigger>
              Do I need to pay to use Propcoin ?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              No You don't .
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </div>
  );
};

export default page;
