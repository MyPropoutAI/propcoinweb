"use client";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import React from "react";
import { ReactNode } from "react";
import { useState } from "react";
import { X } from "lucide-react";
type LayoutProps = {
  children: ReactNode;
};

const layout = ({ children }: LayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex relative">
      <div className="hidden lg:flex lg:w-[20%] sticky top-0 left-0 p-3 bg-black">
        <SideBar />
      </div>
      <div
        className={
          collapsed ? "absolute w-[20] left-0 top-0 h-[100vh] " : "hidden"
        }
      >
        <div className="relative">
          <X
            onClick={() => setCollapsed(false)}
            className="absolute top-4 right-4"
          />
          <SideBar />
        </div>
      </div>
      <div className="w-[100%] lg:w-[80%]">
        <NavBar collapsed={collapsed} setCollapsed={setCollapsed} />
        {children}
      </div>
    </div>
  );
};

export default layout;
