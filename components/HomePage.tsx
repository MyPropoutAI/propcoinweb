import { ArrowRight, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-black text-white">
      {/* Main content */}
      <main className="flex-1 p-4 lg:p-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Your PROC */}
          <div className="bg-[#111] rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">Your PROC</h2>
            <div className="bg-blue-200 rounded-lg mb-4">
              <img
                src="/placeholder.svg"
                alt="PROC NFT"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-yellow-500">POINTS</span>
              <span>0</span>
            </div>
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
              Get my Referral link
            </Button>
          </div>

          {/* PROPOINTS EARNED */}
          <div className="space-y-6">
            <div className="bg-blue-600 rounded-lg p-4">
              <h2 className="text-xl font-bold mb-4">PROPOINTS EARNED</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-black rounded-lg p-2 text-center">
                  <div className="text-sm">Total Points</div>
                  <div className="text-2xl font-bold text-indigo-400">6.0K</div>
                </div>
                <div className="bg-black rounded-lg p-2 text-center">
                  <div className="text-sm">Points Per Hour</div>
                  <div className="text-2xl font-bold text-indigo-400">0.0</div>
                </div>
                <div className="bg-black rounded-lg p-2 text-center">
                  <div className="text-sm">Ranking</div>
                  <div className="text-2xl font-bold text-indigo-400">1/10</div>
                </div>
              </div>
            </div>
            <div className="bg-[#111] rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span>From</span>
                <span>To</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Propoints</span>
                <ArrowRight />
                <span className="text-lg font-bold">PROPCOIN</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span>0 Propoints</span>
                <span className="text-yellow-500">0 PROC available</span>
              </div>
            </div>
          </div>
        </div>

        {/* PROPCOIN LAUNCH COUNTDOWN */}
        <div className="bg-indigo-900 rounded-lg p-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full mr-4"></div>
            <div>
              <div className="text-sm">Anticipate our coin listing.</div>
              <div className="text-xl font-bold">PROPCOIN LAUNCH COUNTDOWN</div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm">Day</div>
            <div className="text-2xl font-bold">30</div>
            <div className="text-sm">22:50:44</div>
          </div>
        </div>

        {/* Get instant $Propoints [$PROC] when you: */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <h2 className="text-xl font-bold mb-4">
              Get instant $Propoints [$PROC] when you:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-800 rounded-lg p-4">
                <h3 className="font-bold mb-2">DAILY STAKE</h3>
                <div className="flex justify-between items-center">
                  <span>10 LSK</span>
                  <ArrowRight />
                  <span>10 $PROC</span>
                </div>
              </div>
              <div className="bg-blue-800 rounded-lg p-4">
                <h3 className="font-bold mb-2">DAILY SWAP</h3>
                <div>Swap assets on-chain for $PROC</div>
              </div>
              <div className="bg-blue-800 rounded-lg p-4">
                <h3 className="font-bold mb-2">Join PropOut Testnet</h3>
              </div>
            </div>
          </div>
          <div className="bg-[#111] rounded-lg p-4">
            <h3 className="font-bold mb-2">
              Flip assets easily using $PROC, click on the button below.
            </h3>
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
              Enter $PROC Dapp
            </Button>
          </div>
        </div>

        {/* Social links */}
        <div className="flex justify-center space-x-4">
          <Button variant="ghost" className="text-gray-400 hover:text-white">
            <Facebook className="h-6 w-6" />
          </Button>
          <Button variant="ghost" className="text-gray-400 hover:text-white">
            <Twitter className="h-6 w-6" />
          </Button>
          <Button variant="ghost" className="text-gray-400 hover:text-white">
            <Instagram className="h-6 w-6" />
          </Button>
        </div>
      </main>
    </div>
  );
}
