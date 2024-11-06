import React from "react";
import { Jost } from "next/font/google";
import Image from "next/image";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Fiat = () => {
  return (
    <div
      className={`${jost.className} text-gray-200 flex flex-col justify-center items-center py-20 gap-5`}
    >
      <div className="flex justify-center py-5 relative">
        <Image
          src={"/images/money.svg"}
          alt="stake btc"
          width={150}
          height={150}
          className="img_glow"
        />
        <div className="glow_yellow"></div>
      </div>
    </div>
  );
};

export default Fiat;
