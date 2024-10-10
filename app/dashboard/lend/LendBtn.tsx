import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UserProfile from "./UserProfile";

const LendBtn = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>Lend</DialogTrigger>
        <DialogContent className="p-0 bg-black border-black !rounded-xl ">
          <DialogHeader>
            <DialogTitle className="">
              <UserProfile />
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LendBtn;
