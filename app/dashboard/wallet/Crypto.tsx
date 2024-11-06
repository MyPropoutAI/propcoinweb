import React from "react";
import { Jost } from "next/font/google";
import Image from "next/image";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const currency = [
  {
    id: 1,
    name: "Usdt",
    amount: 20,
    value: "USDT",
    price: 200,
    icon: "/images/stakeusdt.svg",
  },
  {
    id: 2,
    name: "Lisk",
    amount: 20,
    value: "LSK",
    price: 120,
    icon: "/images/stakelisk.svg",
  },
  {
    id: 3,
    name: "Propcoin",
    amount: 20,
    value: "PROC",
    price: 90,
    icon: "/images/stakeproc.svg",
  },
];

const Crypto = () => {
  return (
    <div className={`${jost.className} text-gray-200 flex flex-col gap-5`}>
      {currency.map((cur, i) => (
        <section
          className="flex items-center gap-5 bg-stake-cards mt-3 p-3 rounded-lg"
          key={i}
        >
          <Image src={cur.icon} alt="" width={50} height={50} />
          <div className="flex justify-between w-full">
            <div>
              <p className="text-gray-200 text-xl">{cur.name}</p>
              <p className="text-gray-500 text-lg ">{cur.value}</p>
            </div>

            <div>
              <p className="text-gray-600">{cur.amount}</p>
              <p className="text-gray-600">{cur.price} USD</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Crypto;
