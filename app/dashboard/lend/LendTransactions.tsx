import { Card } from "@/components/ui/card";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TransactionTable from "./TransactionTable";
import Offers from "./Offers";

const LendTransactions = () => {
  return (
    <Card className="flex flex-row justify-between p-10 bg-stake-cards text-white border-none rounded-lg">
      <Tabs defaultValue="">
        <TabsList>
          <TabsTrigger value="make-offers">Make Offers</TabsTrigger>
          <TabsTrigger value="offers-made">Offers Made</TabsTrigger>
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
