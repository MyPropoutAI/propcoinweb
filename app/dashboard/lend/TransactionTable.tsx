import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import LendBtn from "./LendBtn";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  weight: ["500"],
});

// Define headers for the table
const headers = [
  { label: "Collections" },
  { label: "Available Pool" },
  { label: "Highest Loan Offer" },
  { label: "Loan Duration" },
  { label: "% Return/Loan" },
  { label: "" },
];

// Sample data for the table
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
    <div className={`${jost.className}`}>
      <Table className={`${jost.className} w-full text-gray-300`}>
        <TableHeader>
          <TableRow>
            {headers.map((header, index) => (
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
          {tableData.map((data, index) => (
            <TableRow key={index} className="border-b hover:bg-black">
              <TableCell className="font-medium px-4 py-4">
                <p className="text-xl">{data.collection}</p>
                <p className="text-[0.8rem] text-gray-400">
                  {data.floorPrice}{" "}
                  <span className="text-md text-gray-500">floor</span>
                </p>
              </TableCell>
              <TableCell className="px-4 py-4">
                <p className="text-xl">{data.loansAvailable}</p>
                <p className="text-[0.8rem] text-gray-400">
                  {data.loansAvailable}{" "}
                  <span className="text-md text-gray-500">loans available</span>
                </p>
              </TableCell>
              <TableCell className="px-4 py-4">
                <p className="text-xl">{data.lastLoanToken}</p>
                <p className="text-[0.8rem] text-gray-400">
                  {data.lastLoanToken}{" "}
                  <span className="text-md text-gray-500">last loan token</span>
                </p>
              </TableCell>
              <TableCell className="px-4 py-4">
                <p className="text-xl">{data.loanDuration}</p>
              </TableCell>
              <TableCell className="px-4 py-4">
                <p className="text-xl">{data.returnRate}</p>
                <p className="text-[0.8rem] text-gray-400">{data.apy}</p>
              </TableCell>
              <TableCell className="px-4 py-2">
                <button className="text-xl bg-indigo-600 rounded-lg px-4 py-2">
                  <LendBtn />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionTable;
