import React from "react";
//import { Button } from "./ui/button";
import Image from "next/image";
//import { HelpCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Send, Twitter } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const navItem = [
  { title: "Dashboard", link: "/dashboard", icon: "/icons/dashboard.svg" },
  { title: "Wallet", link: "/dashboard/wallet", icon: "/icons/wallet.svg" },
  { title: "Fund", link: "/dashboard/fund", icon: "/icons/funds.svg" },
  { title: "Stake", link: "/dashboard/stake", icon: "/icons/stake.svg" },
  { title: "Swap", link: "/dashboard/swap", icon: "/icons/stake.svg" },
  { title: "Lend", link: "/dashboard/lend", icon: "/icons/lend.svg" },
  { title: "Mint SBT", link: "/dashboard/sbt", icon: "/icons/sbt.svg" },
  {
    title: "Withdraw",
    link: "/dashboard/withdraw",
    icon: "/icons/withdraw.svg",
  },
  { title: "Tokenize", link: "/dashboard/tokenize", icon: "/icons/stake.svg" },
  {
    title: "Airdrop Quest",
    link: "/dashboard/airdrop",
    icon: "/icons/airdrop.svg",
  },

  { title: "Help & FAQ", link: "/dashboard/help", icon: "/icons/help.svg" },
];
const SideBar = () => {
  const pathname = usePathname();
  return (
    <aside className="w-full lg:w-64 bg-[#111] p-4 lg:p-6 rounded-md flex flex-col">
      <div className="flex items-center mb-8">
        <div className="w-10 h-10 bg-yellow-500 rounded-full mr-2">
          <Image
            src="/images/logo.svg"
            width={50}
            height={50}
            alt="logo"
            className="w-10 h-10"
          />
        </div>
        <span className="text-xl font-bold">PROPCOIN</span>
      </div>
      <nav className="flex flex-col space-y-3">
        {navItem.map((item, index) => {
          return (
            // Add this return statement
            <Link key={index} href={item.link}>
              <div
                key={index}
                className={` text-white font-normal w-[10rem] flex space-x-3 items-center rounded-md p-2 hover:bg-indigo-300 hover:text-white text-md ${
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
      <div className=" flex mt-[10rem] justify-center items-center space-x-3">
        {/* <MessageCircle className="w-6 h-6" /> */}
        <Link
          href="https://www.instagram.com/mypropoutai/"
          title="social"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="w-6 h-6 cursor-pointer" />
        </Link>

        <Link
          href="https://x.com/MyPropOut "
          title="social"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter className="w-6 h-6 cursor-pointer" />
        </Link>

        <Link
          href="https://t.me/+0THrDm5u1CUwZTU0"
          title="social"
          target="_blank"
          rel="noreferrer"
        >
          <Send className="w-6 h-6 cursor-pointer" />
        </Link>
      </div>
    </aside>
  );
};

export default SideBar;
