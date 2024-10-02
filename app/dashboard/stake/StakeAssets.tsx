import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Jost } from "next/font/google";
import StakeStepOne from "./StakeStepOne";
import StakeStepTwo from "./StakeStepTwo";
import StakeStepThree from "./StakeStepThree";
import StakeStepFour from "./StakeStepFour";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const StakeAssets = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>Stake Assets</DialogTrigger>
        {/* STAKE ONE  */}
        {/* <DialogContent className="bg-black border-none">
          <DialogHeader>
            <DialogTitle>
              <p className={`${jost.className} text-xl font-bold text-white`}>
                Choose Token to stake
              </p>
            </DialogTitle>
            <DialogDescription>
              <StakeStepOne />
            </DialogDescription>
          </DialogHeader>
        </DialogContent> */}

        {/* STAKE TWO  */}

        {/* <DialogContent className="bg-black border-none">
          <DialogHeader>
            <DialogTitle>
              <p className={`${jost.className} text-xl font-bold text-white`}>
                Set the Period of stake
              </p>
            </DialogTitle>
            <DialogDescription>
              <StakeStepTwo />
            </DialogDescription>
          </DialogHeader>
        </DialogContent> */}

        {/* STAKE THREE  */}

        {/* <DialogContent className="bg-black border-none">
          <DialogHeader>
            <DialogTitle>
              <p className={`${jost.className} text-xl font-bold text-white`}>
                Enter the Amount
              </p>
            </DialogTitle>
            <DialogDescription>
              <StakeStepThree />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>  */}

        {/* STAKE FOUR  */}

        <DialogContent className="bg-black border-none">
          <DialogHeader>
            <DialogTitle>
              <p className={`${jost.className} text-xl font-bold text-white`}>
                Confirm Staking
              </p>
            </DialogTitle>
            <DialogDescription>
              <StakeStepFour />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StakeAssets;
