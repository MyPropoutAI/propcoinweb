"use client";

//import { useState } from "react";
import { motion } from "framer-motion";
//import { Bell, ChevronLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
//import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const cryptoPrices = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    amount: "110,702,353",
    price: "$65,567",
    change: "+1.23%",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    amount: "4,480,464",
    price: "$3,567",
    change: "-2.20%",
  },
  {
    name: "Ripple",
    symbol: "XRP",
    amount: "1,090",
    price: "$0.1897",
    change: "+7.23%",
  },
  {
    name: "Lisk",
    symbol: "LSK",
    amount: "500",
    price: "$0.0087",
    change: "-5.90%",
  },
  {
    name: "Bitcoin",
    symbol: "BTC",
    amount: "110,702,353",
    price: "$65,567",
    change: "+1.23%",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    amount: "4,480,464",
    price: "$3,567",
    change: "-2.20%",
  },
  {
    name: "Ripple",
    symbol: "XRP",
    amount: "1,090",
    price: "$0.1897",
    change: "+7.23%",
  },
  {
    name: "Lisk",
    symbol: "LSK",
    amount: "500",
    price: "$0.0087",
    change: "-5.90%",
  },
];

export default function CryptoDashboard() {
  //const [selectedItem, setSelectedItem] = useState("Dashboard");

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Main content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>Crypto prices</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[calc(100vh-250px)]">
                <div className="space-y-4">
                  {cryptoPrices.map((crypto, index) => (
                    <motion.div
                      key={`${crypto.symbol}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex justify-between items-center p-4 bg-gray-800 rounded-lg"
                    >
                      <div className="flex items-center">
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt={`${crypto.name} logo`}
                          className="w-10 h-10 mr-4"
                        />
                        <div>
                          <p className="font-bold">{crypto.name}</p>
                          <p className="text-sm text-gray-400">
                            {crypto.symbol}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400">{crypto.amount}</p>
                        <p className="font-bold">{crypto.price}</p>
                      </div>
                      <div
                        className={`text-sm ${
                          crypto.change.startsWith("+")
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {crypto.change}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
