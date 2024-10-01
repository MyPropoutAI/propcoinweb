import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { X, ArrowDownUp } from "lucide-react";

const cryptoOptions = [
  { value: "LSK", label: "LSK", icon: "🟣" },
  { value: "USDT", label: "USDT", icon: "🟢" },
  { value: "PROC", label: "PROC", icon: "🟠" },
];

export default function Swap() {
  const [fromCrypto, setFromCrypto] = useState(cryptoOptions[0]);
  const [toCrypto, setToCrypto] = useState(cryptoOptions[1]);
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [showCryptoList, setShowCryptoList] = useState(false);
  const [swapSuccess, setSwapSuccess] = useState(false);

  const handleSwap = () => {
    // Simulate swap process
    setTimeout(() => {
      setSwapSuccess(true);
      setTimeout(() => setSwapSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Main content */}
      <div className="flex-1 p-8">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Swap Asset</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2">From</label>
                <div className="flex items-center">
                  <Select
                    onValueChange={(value) =>
                      setFromCrypto(
                        cryptoOptions.find((c) => c.value === value)!
                      )
                    }
                  >
                    <SelectTrigger className="w-32 bg-indigo-600">
                      <SelectValue placeholder={fromCrypto.label} />
                    </SelectTrigger>
                    <SelectContent>
                      {cryptoOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.icon} {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    type="number"
                    placeholder="0.00"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                    className="flex-1 ml-2 bg-gray-700 border-gray-600"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <Button
                  variant="ghost"
                  onClick={() => {
                    const temp = fromCrypto;
                    setFromCrypto(toCrypto);
                    setToCrypto(temp);
                  }}
                >
                  <ArrowDownUp />
                </Button>
              </div>
              <div>
                <label className="block mb-2">To</label>
                <div className="flex items-center">
                  <Select
                    onValueChange={(value) =>
                      setToCrypto(cryptoOptions.find((c) => c.value === value)!)
                    }
                  >
                    <SelectTrigger className="w-32 bg-indigo-600">
                      <SelectValue placeholder={toCrypto.label} />
                    </SelectTrigger>
                    <SelectContent>
                      {cryptoOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.icon} {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    type="number"
                    placeholder="0.00"
                    value={toAmount}
                    onChange={(e) => setToAmount(e.target.value)}
                    className="flex-1 ml-2 bg-gray-700 border-gray-600"
                  />
                </div>
              </div>
              <Button
                className="w-full bg-indigo-600 hover:bg-indigo-700"
                onClick={handleSwap}
              >
                Swap
              </Button>
              <p className="text-xs text-gray-400">
                Displayed numbers are indicative and can be different from the
                actual swap rate. Trade at your own risk.
              </p>
            </div>
          </CardContent>
        </Card>

        {showCryptoList && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <Card className="bg-gray-800 border-gray-700 w-80">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold">Select Asset</h3>
                  <Button
                    variant="ghost"
                    onClick={() => setShowCryptoList(false)}
                  >
                    <X />
                  </Button>
                </div>
                {cryptoOptions.map((option) => (
                  <Button
                    key={option.value}
                    variant="ghost"
                    className="w-full justify-start mb-2"
                    onClick={() => {
                      setFromCrypto(option);
                      setShowCryptoList(false);
                    }}
                  >
                    {option.icon} {option.label}
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {swapSuccess && (
          <div className="fixed top-4 right-4 bg-indigo-600 p-4 rounded-md shadow-lg">
            <p>
              You swapped {fromAmount} {fromCrypto.label} for {toAmount}{" "}
              {toCrypto.label}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
