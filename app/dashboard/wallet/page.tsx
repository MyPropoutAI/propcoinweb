import React from "react";
import { Jost } from "next/font/google";
import Image from "next/image";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const page = () => {
  return (
    <div className={`${jost.className} text-gray-200`}>
      <h1>Total Assets </h1>
    </div>
  );
};

export default page;
