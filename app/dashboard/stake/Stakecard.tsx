"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Stakecard = () => {
  const [timeFrame, setTimeFrame] = useState("last-week");
  const [stakeOption, setstakeOption] = useState("staked");

  return (
    <div>
      <div className="flex gap-3">
        {/* staked options */}
        <Select value={stakeOption} onValueChange={setstakeOption}>
          <SelectTrigger className="w-[180px] border-gray-700 text-gray-600">
            <SelectValue className="text-white" placeholder="staked" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="staked">Staked</SelectItem>
            <SelectItem value="unstaked">Unstaked</SelectItem>
            <SelectItem value="claimable">Claimable</SelectItem>
          </SelectContent>
        </Select>

        {/* staked duration */}
        <Select value={timeFrame} onValueChange={setTimeFrame}>
          <SelectTrigger className="w-[180px] border-gray-700 text-gray-600">
            <SelectValue className="text-gray-700" placeholder="Last week" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="24-hours">24 hours</SelectItem>
            <SelectItem value="last-week">Last week</SelectItem>
            <SelectItem value="last-month">Last month</SelectItem>
            <SelectItem value="3 months">3 months</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Stakecard;
