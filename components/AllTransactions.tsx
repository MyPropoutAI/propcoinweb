"use client";

//import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
//import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const transactions = [
  {
    from: { name: "LSK", amount: "5.2344" },
    to: { name: "USDT", amount: "2.45" },
    date: "Wed. 24th Sep, 2024 . 02:45PM",
  },
  {
    from: { name: "Propcoin", amount: "33,300" },
    to: { name: "PROC", amount: "3% (999)" },
    date: "Ends 24th Sep, 2024",
    status: "Swapped",
  },
  {
    from: { name: "LSK", amount: "5.2344" },
    to: { name: "USDT", amount: "2.45" },
    date: "Wed. 24th Sep, 2024 . 02:45PM",
  },
  {
    from: { name: "Propcoin", amount: "33,300" },
    to: { name: "PROC", amount: "3% (999)" },
    date: "Ends 24th Sep, 2024",
    status: "Swapped",
  },
  {
    from: { name: "LSK", amount: "5.2344" },
    to: { name: "USDT", amount: "2.45" },
    date: "Wed. 24th Sep, 2024 . 02:45PM",
  },
  {
    from: { name: "Propcoin", amount: "33,300" },
    to: { name: "PROC", amount: "3% (999)" },
    date: "Ends 24th Sep, 2024",
    status: "Swapped",
  },
  {
    from: { name: "LSK", amount: "5.2344" },
    to: { name: "USDT", amount: "2.45" },
    date: "Wed. 24th Sep, 2024 . 02:45PM",
  },
  {
    from: { name: "Propcoin", amount: "33,300" },
    to: { name: "PROC", amount: "3% (999)" },
    date: "Ends 24th Sep, 2024",
    status: "Swapped",
  },
];

export default function LatestTransactions() {
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
              <CardTitle>Latest transaction</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[calc(100vh-250px)]">
                <div className="space-y-4">
                  {transactions.map((transaction, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex justify-between items-center p-4 bg-gray-800 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt={`${transaction.from.name} logo`}
                          className="w-10 h-10"
                        />
                        <div>
                          <p className="font-bold">{transaction.from.name}</p>
                          <p className="text-sm text-gray-400">
                            {transaction.from.amount}
                          </p>
                        </div>
                      </div>
                      <ArrowLeftRight className="h-6 w-6 text-gray-400" />
                      <div className="flex items-center space-x-4">
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt={`${transaction.to.name} logo`}
                          className="w-10 h-10"
                        />
                        <div>
                          <p className="font-bold">{transaction.to.name}</p>
                          <p className="text-sm text-gray-400">
                            {transaction.to.amount}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">
                          {transaction.date}
                        </p>
                        {transaction.status && (
                          <p className="text-sm text-indigo-400">
                            {transaction.status}
                          </p>
                        )}
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
