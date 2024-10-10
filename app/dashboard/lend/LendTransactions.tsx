"use client";
import { Card } from "@/components/ui/card";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TransactionTable from "./TransactionTable";
import Offers from "./Offers";
import { cn } from "@/lib/utils";

const LendTransactions = () => {
  const [activeTab, setActiveTab] = useState("make-offers");

  return (
    <Card className="bg-stake-cards border-none px-7 py-5">
      <Tabs>
        <TabsList
          defaultValue="make-offers"
          className="flex flex-row justify-center w-full border-none bg-transparent text-2xl"
        >
          <TabsTrigger
            value="make-offers"
            className={cn(
              "flex-1",
              activeTab !== "make-offers"
                ? "bg-transparent text-indigo-600"
                : "!bg-indigo-600 !text-white"
            )}
            onClick={() => setActiveTab("make-offers")}
          >
            Make Offers
          </TabsTrigger>
          <TabsTrigger
            value="offers-made"
            className={cn(
              "flex-1",
              activeTab !== "offers-made"
                ? "bg-transparent text-indigo-600"
                : "!bg-indigo-600 !text-white"
            )}
            onClick={() => setActiveTab("offers-made")}
          >
            Offers Made
          </TabsTrigger>
        </TabsList>
        <TabsContent value="make-offers">
          <TransactionTable />
        </TabsContent>
        <TabsContent value="offers-made">
          <Offers />
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default LendTransactions;
