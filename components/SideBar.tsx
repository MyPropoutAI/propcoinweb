import React from "react";
//import { Button } from "./ui/button";
import Image from "next/image";
//import { HelpCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Send, Twitter } from "lucide-react";

const navItem = [
  { title: "Overview", link: "/dashboard", icon: "/icons/overview.svg" },
  { title: "My Assets", link: "/dashboard/asset", icon: "/icons/asset.svg" },
  {
    title: "Airdrop Quest",
    link: "/dashboard/airdrop",
    icon: "/icons/airdrop.svg",
  },
  { title: "Wallet", link: "/dashboard/wallet", icon: "/icons/wallet.svg" },
  { title: "SBT", link: "/dashboard/sbt", icon: "/icons/sbt.svg" },
  { title: "Help & FAQ", link: "/dashboard/help", icon: "/icons/help.svg" },
];
const SideBar = () => {
  const pathname = usePathname();
  return (
    <aside className="w-full lg:w-64 bg-[#111] p-4 lg:p-6 rounded-md">
      <div className="flex items-center mb-8">
        <div className="w-10 h-10 bg-yellow-500 rounded-full mr-2"></div>
        <span className="text-xl font-bold">PROPCOIN</span>
      </div>
      <nav className="flex flex-col space-y-6">
        {navItem.map((item, index) => {
          return (
            // Add this return statement
            <Link key={index} href={item.link}>
              <div
                key={index}
                className={`my-1 text-white font-normal w-[10rem] flex space-x-3 items-center rounded-md p-2 hover:bg-gray-200 hover:text-white text-md ${
                  pathname === item.link &&
                  "bg-indigo-600  shadow-sm text-white"
                }`}
              >
                <Image
                  alt="img"
                  width={100}
                  height={100}
                  src={item.icon}
                  className="mr-2 h-5 w-5"
                />
                {item.title}
              </div>
            </Link>
          );
        })}
      </nav>
      <div className="absolute bottom-4 left-4 flex space-x-4">
        <Send className="w-6 h-6" />
        <Twitter className="w-6 h-6" />
        <MessageCircle className="w-6 h-6" />
      </div>
    </aside>
  );
};

export default SideBar;
