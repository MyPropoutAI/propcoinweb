import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const LendBtn = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>Lend</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <div></div>
            </DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LendBtn;
