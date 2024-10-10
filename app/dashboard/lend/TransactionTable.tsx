import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const headers = [
  { label: "Collections" },
  { label: "Available Pool" },
  { label: "Highest loan offer" },
  { label: "Loan Duration" },
  { label: "%Return/loan" },
  { label: " " },
];

const tableData = [
  {
    collection: "DeGods",
    floorPrice: "300 Sol",
    loansAvailable: 5789,
    lastLoanToken: "250.50 SOL",
    loanDuration: "20 Days",
    returnRate: "3.41 %",
    apy: "140% APY",
  },
  {
    collection: "CryptoPunks",
    floorPrice: "400 Sol",
    loansAvailable: 1250,
    lastLoanToken: "180.25 SOL",
    loanDuration: "15 Days",
    returnRate: "2.85 %",
    apy: "120% APY",
  },
  {
    collection: "Bored Apes",
    floorPrice: "500 Sol",
    loansAvailable: 3000,
    lastLoanToken: "300 SOL",
    loanDuration: "30 Days",
    returnRate: "4.00 %",
    apy: "150% APY",
  },
  {
    collection: "World of Women",
    floorPrice: "350 Sol",
    loansAvailable: 1800,
    lastLoanToken: "150 SOL",
    loanDuration: "25 Days",
    returnRate: "3.50 %",
    apy: "130% APY",
  },
  {
    collection: "Doodles",
    floorPrice: "280 Sol",
    loansAvailable: 2000,
    lastLoanToken: "200 SOL",
    loanDuration: "18 Days",
    returnRate: "3.00 %",
    apy: "125% APY",
  },
  {
    collection: "CloneX",
    floorPrice: "450 Sol",
    loansAvailable: 1600,
    lastLoanToken: "230 SOL",
    loanDuration: "22 Days",
    returnRate: "3.80 %",
    apy: "135% APY",
  },
];

const TransactionTable = () => {
  return (
    <Table className={`${jost.className} w-full text-gray-300`}>
      {/* <TableCaption>A list of your recent lend and borrowing transactions.</TableCaption> */}
      <TableHeader>
        <TableRow>
          {headers.map((header, index) => (
            <TableHead key={index} className="px-4 py-2">
              {header.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((data, index) => (
          <TableRow key={index} className="border-b hover:bg-black">
            <TableCell className="font-medium px-4 py-2">
              <p className={`${jost.className} text-xl`}>{data.collection}</p>
              <p className={`${jost.className} text-[0.8rem] text-gray-400`}>
                {data.floorPrice}{" "}
                <span className={`${jost.className} text-md text-gray-500`}>
                  floor
                </span>
              </p>
            </TableCell>
            <TableCell className="px-4 py-2">
              <p className={`${jost.className} text-xl`}>
                {data.loansAvailable}
              </p>
              <p className={`${jost.className} text-[0.8rem] text-gray-400`}>
                {data.loansAvailable}{" "}
                <span className={`${jost.className} text-md text-gray-500`}>
                  loans available
                </span>
              </p>
            </TableCell>
            <TableCell className="px-4 py-2">
              <p className={`${jost.className} text-xl`}>
                {data.lastLoanToken}
              </p>
              <p className={`${jost.className} text-[0.8rem] text-gray-400`}>
                {data.lastLoanToken}{" "}
                <span className={`${jost.className} text-md text-gray-500`}>
                  last loan token
                </span>
              </p>
            </TableCell>
            <TableCell className="px-4 py-2">
              <p className={`${jost.className} text-xl`}>{data.loanDuration}</p>
            </TableCell>
            <TableCell className="px-4 py-2">
              <p className={`${jost.className} text-xl`}>{data.returnRate}</p>
              <p className={`${jost.className} text-[0.8rem] text-gray-400`}>
                {data.apy}
              </p>
            </TableCell>
            <TableCell className="px-4 py-2">
              <Button
                className={`${jost.className} text-xl bg-indigo-600 rounded-lg`}
              >
                Lend
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TransactionTable;
