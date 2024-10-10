import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  weight: ["500"],
});

// Define headers for the offers table
const offerHeaders = [
  { label: "Collection" },
  { label: "Amount Offered" },
  { label: "Return Rate" },
  { label: "Duration" },
  { label: "Status" },
];

const offerData = [
  {
    collection: "DeGods",
    amountOffered: "10 SOL",
    returnRate: "3.41%",
    duration: "20 Days",
    status: "Pending",
  },
  {
    collection: "CryptoPunks",
    amountOffered: "5 SOL",
    returnRate: "2.85%",
    duration: "15 Days",
    status: "Completed",
  },
  // Add more offer entries as needed
];

const OfferTransactionTable = () => {
  return (
    <div className={`${jost.className}`}>
      <Table className={`${jost.className} w-full text-gray-300`}>
        <TableHeader>
          <TableRow>
            {offerHeaders.map((header, index) => (
              <TableHead
                key={index}
                className="px-4 py-4 text-gray-300 text-xl"
              >
                {header.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {offerData.map((data, index) => (
            <TableRow key={index} className="border-b hover:bg-black">
              <TableCell className="font-medium px-4 py-4">
                <p className="text-xl">{data.collection}</p>
              </TableCell>
              <TableCell className="px-4 py-4">
                <p className="text-xl">{data.amountOffered}</p>
              </TableCell>
              <TableCell className="px-4 py-4">
                <p className="text-xl">{data.returnRate}</p>
              </TableCell>
              <TableCell className="px-4 py-4">
                <p className="text-xl">{data.duration}</p>
              </TableCell>
              <TableCell className="px-4 py-4">
                <p className="text-xl">{data.status}</p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OfferTransactionTable;
