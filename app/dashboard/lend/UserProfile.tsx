import Image from "next/image";
import React from "react";
import { Jost } from "next/font/google";
import LendingBoard from "./LendingBoard";

const jost = Jost({
  subsets: ["latin"],
  weight: ["500"],
});

const data = {
  duration: "20 Days",
  returnRate: "3.41%",
  floorPrice: "300 Sol",
};

const UserProfile = () => {
  return (
    <main className={`${jost.className}  `}>
      <div className={`${jost.className} flex flex-col items-center`}>
        {/* Cover Photo with Gradient */}
        <div className="w-full h-40 bg-gradient-to-r from-orange-500 via-red-500 to-pink-400 flex items-center justify-center">
          {/* Optional: You can add a title or name here */}
          <h1 className="text-red-300 text-2xl">DEGEN DEVELOPER</h1>
        </div>
        {/* Profile Picture */}
        <div className="relative -mt-20 mb-4">
          <div className="bg-blue-500 rounded-full w-32 h-32 flex items-center justify-center">
            {/* Replace with actual profile image */}

            <Image
              src={"/images/OIP.svg"}
              alt="NFT dp"
              className="rounded-full w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="text-center flex flex-col items-center">
        <h2 className="text-xl font-semibold">DeGods</h2>
        <div className="mt-4 text-gray-300">
          <div className="flex items-center">
            <div className="flex flex-col">
              <p className="text-xl">Duration</p>
              <p className="text-[0.9rem]">{data.duration}</p>
            </div>
            <div className="mx-4">
              <p
                className="h-4 border-2 border-gray-600 "
                style={{ height: "3.5rem" }}
              ></p>
            </div>
            <div className="flex flex-col">
              <p className="text-xl">% / Return / Loan</p>
              <p className="text-[0.9rem]">{data.returnRate}</p>
            </div>
            <div className="mx-4">
              <p
                className="h-4 border-2 border-gray-600 "
                style={{ height: "3.5rem" }}
              ></p>
            </div>
            <div className="flex flex-col">
              <p className="text-xl">Floor</p>
              <p className="text-[0.9rem]">{data.floorPrice}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-5 gap- py-5">
        <hr />
        <LendingBoard />
      </div>
    </main>
  );
};

export default UserProfile;
