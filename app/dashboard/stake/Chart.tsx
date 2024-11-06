"use client";
import { Jost } from "next/font/google";
import { useState } from "react";
import { motion } from "framer-motion";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Stakecard from "./Stakecard";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const data = [
  { date: "Sep 8", value: 17000 },
  { date: "Sep 9", value: 16000 },
  { date: "Sep 10", value: 17500 },
  { date: "Sep 11", value: 15500 },
  { date: "Sep 12", value: 17000 },
];

const Chart = () => {
  return (
    <Card className=" bg-stake-cards border-none rounded-lg">
      <div className="flex bg-stake-cards border-none rounded-md text-white">
        <div className="flex-1 p-8 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <CardContent className="p-6">
              <div className="flex justify-between gap-10 items-center mb-4">
                <p
                  className={`${jost.className} text-2xl text-gray-500 text-nowrap`}
                >
                  Staking chart
                </p>
                <Stakecard />
              </div>
              <h3 className="text-2xl text-indigo-600 font-extrabold my-4">
                $26,568.00
              </h3>

              <ResponsiveContainer width="100%" height={240}>
                <LineChart data={data}>
                  <XAxis dataKey="date" />
                  <YAxis dataKey={"value"} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#8884d8"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </motion.div>
        </div>
      </div>
    </Card>
  );
};

export default Chart;
