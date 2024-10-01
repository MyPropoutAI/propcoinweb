"use client";
import { ArrowLeft, Bell } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { AlignLeft } from "lucide-react";

interface NavBarProps {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}

const NavBar = ({ collapsed, setCollapsed }: NavBarProps) => {
  return (
    <header className="flex justify-between items-center py-3 bg-black px-4">
      <div className="flex items-center">
        <ArrowLeft className="hidden lg:block mr-2" />

        <AlignLeft
          className="block mr-2 lg:hidden"
          onClick={() => setCollapsed(!collapsed)}
        />
        <h1 className="text-lg lg:text-2xl font-bold">Welcome Adams!</h1>
      </div>
      <div className="flex items-center">
        <Button size="icon" variant="ghost">
          <Bell className="h-6 w-6" />
        </Button>
        <Button className="ml-4 bg-indigo-600">Play PROP Game</Button>
        <Button variant="outline" className="ml-4">
          0x9c3b...Caf2
        </Button>
      </div>
    </header>
  );
};

export default NavBar;
