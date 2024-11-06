"use client";

import { useState } from "react";
import { motion } from "framer-motion";
//import { Bell, ChevronLeft } from "lucide-react";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { Jost } from "next/font/google";
import Image from "next/image";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const data = [
  { date: "Sep 5", value: 1600 },
  { date: "Sep 6", value: 1500 },
  { date: "Sep 7", value: 1650 },
  { date: "Sep 8", value: 1700 },
  { date: "Sep 9", value: 1600 },
  { date: "Sep 10", value: 1750 },
  { date: "Sep 11", value: 1550 },
  { date: "Sep 12", value: 1700 },
];

const cryptoPrices = [
  { name: "Bitcoin", symbol: "BTC", price: "65,567", change: "+1.23%" },
  { name: "Ethereum", symbol: "ETH", price: "3,567", change: "-2.20%" },
  { name: "Ripple", symbol: "XRP", price: "0.1897", change: "+7.23%" },
  { name: "Lisk", symbol: "LSK", price: "0.0087", change: "-5.90%" },
];

const transactions = [
  {
    from: "LSK",
    to: "USDT",
    amount: "5.2344",
    date: "Wed. 24th Sep, 2024 . 02:45PM",
  },
  {
    from: "Propcoin",
    to: "PROC",
    amount: "33,300",
    date: "3% (999) | Ends 24th Sep, 2024",
  },
];

export default function HomePage() {
  const [timeFrame, setTimeFrame] = useState("1 week");
  const [cryptoPair, setCryptoPair] = useState("PROC/USD");

  return (
    <div className={`${jost.className} flex bg-black text-white`}>
      {/* Main content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="mb-8 bg-[#111]">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-gray-200">Wallet balance</p>
                  <h3 className="text-3xl font-bold text-white">$1,500.00</h3>
                </div>
                <div className={`${jost.className} flex gap-3`}>
                  <Select value={cryptoPair} onValueChange={setCryptoPair}>
                    <SelectTrigger className="w-[180px] text-gray-600 font-bold bg-transparent border-gray-600">
                      <SelectValue placeholder="Select pair" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PROC/USD">PROC/USD</SelectItem>
                      <SelectItem value="BTC/USD">BTC/USD</SelectItem>
                      <SelectItem value="ETH/USD">ETH/USD</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={timeFrame} onValueChange={setTimeFrame}>
                    <SelectTrigger className="w-[180px] text-gray-600 font-bold bg-transparent border-gray-600">
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1 week">1 week</SelectItem>
                      <SelectItem value="1 month">1 month</SelectItem>
                      <SelectItem value="3 months">3 months</SelectItem>
                    </SelectContent>
                  </Select>
                  {/* <Select value={cryptoPair} onValueChange={setCryptoPair}>
                    <SelectTrigger className="w-[180px] bg-indigo-600">
                      <SelectValue placeholder="Select pair" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PROC/USD">PROC/USD</SelectItem>
                      <SelectItem value="BTC/USD">BTC/USD</SelectItem>
                      <SelectItem value="ETH/USD">ETH/USD</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={timeFrame} onValueChange={setTimeFrame}>
                    <SelectTrigger className="w-[180px] ml-2 bg-indigo-600">
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1 week">1 week</SelectItem>
                      <SelectItem value="1 month">1 month</SelectItem>
                      <SelectItem value="3 months">3 months</SelectItem>
                    </SelectContent>
                  </Select> */}
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#8884d8"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-[#111]">
            <CardHeader>
              <CardTitle className="flex justify-between items-center text-gray-200">
                Crypto prices
                <Button variant="link" className="text-indigo-400">
                  <Link href="/dashboard/crypto">View all</Link>
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cryptoPrices.map((crypto) => (
                  <div
                    key={crypto.symbol}
                    className="flex justify-between items-center p-4 bg-gray-800 rounded-lg"
                  >
                    <div className="flex items-center">
                      <img
                        src="/placeholder.svg?height=32&width=32"
                        alt={`${crypto.name} logo`}
                        className="w-8 h-8 mr-2"
                      />
                      <div>
                        <p className="font-bold">{crypto.name}</p>
                        <p className="text-sm text-gray-400">{crypto.symbol}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">${crypto.price}</p>
                      <p
                        className={`text-sm ${
                          crypto.change.startsWith("+")
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {crypto.change}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#111]">
            <CardHeader>
              <CardTitle className="flex justify-between items-center text-gray-200">
                Latest transaction
                <Button variant="link" className="text-indigo-400">
                  <Link href="/dashboard/all-transactions">View all</Link>
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {transactions.map((transaction, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-4 border-b border-gray-700 last:border-b-0"
                >
                  <div className="flex items-center">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      alt={`${transaction.from} logo`}
                      className="w-10 h-10 mr-2"
                    />
                    <div>
                      <p className="font-bold">{transaction.from}</p>
                      <p className="text-sm text-gray-400">
                        {transaction.amount}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="/placeholder.svg?height=24&width=24"
                      alt="Arrow icon"
                      className="w-6 h-6 mx-2"
                    />
                  </div>
                  <div className="flex items-center">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      alt={`${transaction.to} logo`}
                      className="w-10 h-10 mr-2"
                    />
                    <div>
                      <p className="font-bold">{transaction.to}</p>
                      <p className="text-sm text-gray-400">
                        {transaction.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
