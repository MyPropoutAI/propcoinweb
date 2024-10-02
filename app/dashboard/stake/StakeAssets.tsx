"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Jost } from "next/font/google";
import StakeStepOne from "./StakeStepOne";
import StakeStepTwo from "./StakeStepTwo";
import StakeStepThree from "./StakeStepThree";
import StakeStepFour from "./StakeStepFour";
import ProgressBar from "./progressBar";
import { HiArrowLeft } from "react-icons/hi";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const StakeAssets = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [stakeInfo, setStakeInfo] = useState<{
    token: string | null;
    duration: string | null;
    amount: string;
  }>({
    token: null,
    duration: null,
    amount: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePreviousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleStake = () => {
    // Handle staking logic here
    alert("Stake Confirmed!");
    // Close the dialog
    setIsOpen(false);
    // Reset the steps and stake info if needed
    setCurrentStep(1);
    setStakeInfo({ token: null, duration: null, amount: "" });
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger>Stake Assets</DialogTrigger>
        <DialogContent className="bg-black border-none">
          <DialogHeader className="flex items-center">
            {currentStep > 1 && (
              <button onClick={handlePreviousStep} className="mr-2">
                <div className="w-full">
                  <HiArrowLeft className="h-6 w-6 text-white float-left" />
                </div>
              </button>
            )}
            <DialogTitle>
              <p className={`${jost.className} text-xl font-bold text-white`}>
                {currentStep === 1
                  ? "Choose Token to Stake"
                  : currentStep === 2
                  ? "Set the Period of Stake"
                  : currentStep === 3
                  ? "Enter the Amount"
                  : "Confirm Staking"}
              </p>
            </DialogTitle>
          </DialogHeader>
          <ProgressBar currentStep={currentStep} totalSteps={4} />
          <DialogDescription>
            {currentStep === 1 && <StakeStepOne setStakeInfo={setStakeInfo} />}
            {currentStep === 2 && <StakeStepTwo setStakeInfo={setStakeInfo} />}
            {currentStep === 3 && (
              <StakeStepThree
                setStakeInfo={setStakeInfo}
                availableBalance={1000} // Replace with actual balance logic
                token={stakeInfo.token}
              />
            )}
            {currentStep === 4 && <StakeStepFour stakeInfo={stakeInfo} />}
          </DialogDescription>
          <div className="flex justify-end mt-4">
            {currentStep < 4 && (
              <Button
                onClick={handleNextStep}
                className="bg-indigo-600 flex w-full py-5 rounded-lg text-[1.1rem] text-white justify-center hover:bg-indigo-600"
              >
                Continue
              </Button>
            )}
            {currentStep === 4 && (
              <Button
                className="bg-indigo-600 flex w-full py-5 rounded-lg text-[1.1rem] text-white justify-center hover:bg-indigo-600"
                onClick={handleStake}
              >
                Stake
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StakeAssets;
