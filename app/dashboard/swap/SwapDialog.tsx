import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Jost } from "next/font/google";
import SwapFunc from "./SwapFunc";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const SwapDialog = () => {
  return (
    <div className={`${jost.className} `}>
      <Dialog>
        <DialogTrigger>Swap assets</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Swap Asset</DialogTitle>
            <DialogDescription>
              <SwapFunc />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SwapDialog;
