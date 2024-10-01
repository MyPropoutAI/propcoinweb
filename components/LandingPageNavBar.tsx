"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";

const LandingPageNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="z-10 sticky top-0 left-0 bg-[#1E0B36]/50">
      <nav className="relative ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <span className="sr-only">Propcoin</span>
                <Image
                  src="/images/logo.svg"
                  alt="Propcoin logo"
                  width={60}
                  height={60}
                  className="h-8 w-auto sm:h-10"
                />
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-[#1E0B36] rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-300 hover:bg-[#2D1854] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden md:flex items-center gap-7 justify-end md:flex-1 lg:w-0">
              <Link href="/dashboard">
                <Button className="bg-[#5D3FD3] hover:bg-[#4B32A8]">
                  Launch dApp
                </Button>
              </Link>
              <Link href="/signup">
                <Button variant="outline">Log In</Button>
              </Link>
              <Link href="/signup">
                <Button variant="outline">Sign up</Button>
              </Link>
            </div>
          </div>
        </div>

        <motion.div
          className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ${
            isMenuOpen ? "" : "hidden"
          }`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            scale: isMenuOpen ? 1 : 0.95,
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-[#2D1854] divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    src="/images/logo.svg"
                    alt="Propcoin logo"
                    width={32}
                    height={32}
                    className="h-8 w-auto"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-[#2D1854] rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-300 hover:bg-[#3D2272] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={toggleMenu}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    href="/launch"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-[#3D2272]"
                  >
                    <span className="ml-3 text-base font-medium text-white">
                      Launch dApp
                    </span>
                  </Link>
                  <Link
                    href="/login"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-[#3D2272]"
                  >
                    <span className="ml-3 text-base font-medium text-white">
                      Log In
                    </span>
                  </Link>
                  <Link
                    href="/signup"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-[#3D2272]"
                  >
                    <span className="ml-3 text-base font-medium text-white">
                      Sign up
                    </span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </motion.div>
      </nav>
    </div>
  );
};

export default LandingPageNavBar;
