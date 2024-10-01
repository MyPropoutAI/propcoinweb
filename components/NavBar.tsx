"use client";
import { ArrowLeft } from "lucide-react";
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
      <div className="flex items-center space-x-2">
        <Button className="bg-indigo-600 hover:bg-indigo-700">
          Launch Dapp
        </Button>
        <Button variant="outline" className="text-yellow-500 border-yellow-500">
          <div className="w-5 h-5 bg-yellow-500 rounded-full mr-2"></div>
          0x8c3b...Cof2
        </Button>
      </div>
    </header>
  );
};

export default NavBar;
