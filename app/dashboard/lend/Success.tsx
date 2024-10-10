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
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  weight: ["500"],
});

const Success: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger onClick={handleOpen}>Place Offer</DialogTrigger>
        <DialogContent
          className={`${jost.className} bg-purple-700 py-10 border-none w-fit px-5`}
        >
          <DialogHeader>
            <DialogTitle>Offer placed successfully</DialogTitle>
            <DialogDescription />
          </DialogHeader>
        </DialogContent>
      </Dialog>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
      )}
    </>
  );
};

export default Success;
