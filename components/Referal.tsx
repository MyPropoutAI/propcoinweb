import { Image } from "lucide-react";
//import Link from "next/link";

export default function Referral() {
  return (
    <div className=" w-full flex min-h-screen bg-black text-white">
      {/* Main Content */}
      <main className="p-4 w-[95%]">
        {/* Referral Card */}
        <div className="bg-gray-900 rounded-lg overflow-hidden mb-8">
          <div className="p-6 relative">
            <img
              src="/placeholder.svg?height=300&width=600"
              alt="Bull in suit"
              className="absolute top-0 right-0 w-1/2 h-full object-cover"
            />
            <div className="w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                Invite your friends to earn rewards and bonus.
              </h2>
              <p className="bg-orange-500 text-black px-4 py-2 rounded inline-block mb-4">
                Receive 25% bonuses on every person you refer.
              </p>
              <div className="flex">
                <input
                  type="text"
                  value="xxyhtsgbf675&hndsh5ir......"
                  readOnly
                  className="bg-gray-800 px-4 py-2 rounded-l w-full"
                />
                <button className="bg-indigo-600 px-4 py-2 rounded-r">
                  Copy link
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Invite Options */}
        <div className="space-y-4">
          <div className="bg-gray-900 p-4 rounded-lg flex justify-between items-center">
            <div className="flex items-center">
              <Image className="w-10 h-10 mr-4" />
              <div>
                <h3 className="font-bold">Invite a friend</h3>
                <p className="text-yellow-500">
                  +5,000 Propoints for you and your friends
                </p>
              </div>
            </div>
            <button className="bg-indigo-600 px-4 py-2 rounded">Invite</button>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg flex justify-between items-center">
            <div className="flex items-center">
              <Image className="w-10 h-10 mr-4" />
              <div>
                <h3 className="font-bold">
                  Invite a friend with a Telegram Premium
                </h3>
                <p className="text-yellow-500">
                  +25,000 Propoints for you and your friends
                </p>
              </div>
            </div>
            <button className="bg-indigo-600 px-4 py-2 rounded">Invite</button>
          </div>
        </div>
      </main>
    </div>
  );
}
