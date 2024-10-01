"use client";

import { useState } from "react";
import {
  // ArrowLeft,
  HelpCircle,
  // LayoutDashboard,
  // Wallet,
  //Send,
  //Gift,
  Coins,
  //HelpCircle as Question,
  //ChevronDown,
  ArrowUpRight,
  DollarSign,
  //ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
//import Link from "next/link";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function MyAssets() {
  const [timeRange, setTimeRange] = useState("last7days");

  const assets = [
    { name: "PROC", balance: 600.0, usd: 0.89578 },
    { name: "LSK", balance: 300.0, usd: 0.89578 },
    { name: "USDT", balance: 500.0, usd: 0.89578 },
    { name: "STABLE", balance: 400.0, usd: 0.89578 },
  ];

  const recentActivities = [
    {
      from: "PROC",
      to: "LSK",
      dateTime: "Mar 15, 2:30 PM",
      amount: 100,
      points: 20,
      action: "Swap",
    },
    {
      from: "LSK",
      to: "USDT",
      dateTime: "Mar 15, 1:00 PM",
      amount: 55,
      points: 10,
      action: "Swap",
    },
  ];

  const chartData = [
    { name: "5", PROC: 400, LSK: 240, USDT: 240, STABLE: 180 },
    { name: "6", PROC: 300, LSK: 139, USDT: 221, STABLE: 180 },
    { name: "7", PROC: 200, LSK: 980, USDT: 229, STABLE: 180 },
    { name: "8", PROC: 278, LSK: 390, USDT: 200, STABLE: 180 },
    { name: "9", PROC: 189, LSK: 480, USDT: 218, STABLE: 180 },
    { name: "10", PROC: 239, LSK: 380, USDT: 250, STABLE: 180 },
    { name: "11", PROC: 349, LSK: 430, USDT: 210, STABLE: 180 },
    { name: "12", PROC: 400, LSK: 240, USDT: 240, STABLE: 180 },
  ];

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Main Content */}
      <main className="flex-1 p-4">
        {/* Header */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Total Balance Card */}
          <Card className="col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Total balance</CardTitle>
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last7days">Last 7 days</SelectItem>
                  <SelectItem value="last30days">Last 30 days</SelectItem>
                  <SelectItem value="last3months">Last 3 months</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">
                $1,500.00 <span className="text-green-500 text-lg">+5.77%</span>
              </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="PROC" fill="#8884d8" />
                    <Bar dataKey="LSK" fill="#82ca9d" />
                    <Bar dataKey="USDT" fill="#ffc658" />
                    <Bar dataKey="STABLE" fill="#ff7300" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Best Coin Card */}
          <Card>
            <CardHeader>
              <CardTitle>Best coin</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">$1,500.00</div>
              <div className="flex items-center mb-4">
                <Coins className="w-6 h-6 mr-2 text-primary" />
                <span>Propcoin PROC</span>
                <span className="ml-2 text-green-500">+12.24%</span>
              </div>
              <div className="h-24 bg-accent rounded-lg mb-4"></div>
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Swap Coin
              </Button>
            </CardContent>
          </Card>

          {/* All Assets Card */}
          <Card className="col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>All assets</CardTitle>
              <HelpCircle className="w-5 h-5" />
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Balance</TableHead>
                    <TableHead>USD</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {assets.map((asset, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        <div className="flex items-center">
                          <Coins className="w-6 h-6 mr-2 text-primary" />
                          {asset.name}
                        </div>
                      </TableCell>
                      <TableCell>{asset.balance.toFixed(2)}</TableCell>
                      <TableCell>${asset.usd.toFixed(6)}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            className="bg-primary text-primary-foreground hover:bg-primary/90"
                          >
                            Swap
                          </Button>
                          <Button
                            size="sm"
                            className="bg-primary text-primary-foreground hover:bg-primary/90"
                          >
                            Stake
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Summary Card */}
          <Card>
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold">$1,500.00</div>
              <div className="flex items-center">
                <DollarSign className="w-6 h-6 mr-2 text-green-500" />
                <div>
                  <div className="font-semibold">$1,500.00</div>
                  <div className="text-sm text-muted-foreground">
                    Available to trade
                  </div>
                </div>
                <HelpCircle className="w-5 h-5 ml-auto" />
              </div>
              <div className="flex items-center">
                <ArrowUpRight className="w-6 h-6 mr-2 text-green-500" />
                <div>
                  <div className="font-semibold">$1,500.00</div>
                  <div className="text-sm text-muted-foreground">
                    Available to cash out
                  </div>
                </div>
                <HelpCircle className="w-5 h-5 ml-auto" />
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Cash out
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activities Card */}
          <Card className="col-span-1 lg:col-span-3">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent activities</CardTitle>
              <HelpCircle className="w-5 h-5" />
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>From</TableHead>
                    <TableHead>To</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Points</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentActivities.map((activity, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="flex items-center">
                          <Coins className="w-6 h-6 mr-2 text-primary" />
                          {activity.from}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Coins className="w-6 h-6 mr-2 text-primary" />
                          {activity.to}
                        </div>
                      </TableCell>
                      <TableCell>{activity.dateTime}</TableCell>
                      <TableCell>${activity.amount}</TableCell>
                      <TableCell>{activity.points}</TableCell>
                      <TableCell>{activity.action}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
