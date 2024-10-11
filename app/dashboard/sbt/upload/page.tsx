import React from "react";

import { Jost } from "next/font/google";
import { Card } from "@/components/ui/card";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const page = () => {
  return (
    <div className={`${jost.className} text-3xl font-bold flex flex-col gap-5`}>
      <Card>Card</Card>
    </div>
  );
};

export default page;
