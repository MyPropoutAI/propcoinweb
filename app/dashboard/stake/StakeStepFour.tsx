import React from "react";
import { Button } from "@/components/ui/button";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const StakeStepFour = () => {
  return (
    <div className="flex flex-col gap-32">
      <div className="px-5 py-5 bg-stake-cards rounded-lg">
        <p className={`${jost.className} text-lg font-bold text-gray-500`}>
          Stake info :
        </p>

        <section className="mt-5">
          <div className="flex justify-between">
            <p className={`${jost.className} text-lg text-gray-500`}>
              Stake info :
            </p>

            <p className={`${jost.className} text-lg  text-gray-500`}>
              Stake info :
            </p>
          </div>
          <div className="flex justify-between">
            <p className={`${jost.className} text-lg text-gray-500`}>
              Stake info :
            </p>

            <p className={`${jost.className} text-lg  text-gray-500`}>
              Stake info :
            </p>
          </div>
          <div className="flex justify-between">
            <p className={`${jost.className} text-lg text-gray-500`}>
              Stake info :
            </p>

            <p className={`${jost.className} text-lg  text-gray-500`}>
              Stake info :
            </p>
          </div>
          <div className="flex justify-between">
            <p className={`${jost.className} text-lg text-gray-500`}>
              Stake info :
            </p>

            <p className={`${jost.className} text-lg  text-gray-500`}>
              Stake info :
            </p>
          </div>
        </section>
      </div>

      <Button
        className={`${jost.className} bg-indigo-600 flex w-full py-5 rounded-lg text-[1.1rem] text-white justify-center hover:bg-indigo-600`}
      >
        Stake
      </Button>
    </div>
  );
};

export default StakeStepFour;
