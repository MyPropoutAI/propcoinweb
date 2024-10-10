import { Card } from "@/components/ui/card";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TransactionTable from "./TransactionTable";
import Offers from "./Offers";

const LendTransactions = () => {
  return (
    <Card className="bg-stake-cards border-none px-7 py-5">
      <Tabs defaultValue="make-offers">
        <TabsList className="flex flex-row justify-center w-full border-none bg-transparent text-gray-300 text-2xl">
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
