"use client";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import Link from "next/link";

export default function Signup() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-black text-white">
      <div className="w-full md:w-1/2 bg-[#1E0A3C] p-8 flex flex-col justify-center items-center relative">
        <div className="absolute top-4 left-4 md:hidden">
          <ArrowLeft className="h-6 w-6" />
        </div>
        <div className="max-w-md text-center">
          <div className="mb-8">
            <Image
              src="/images/loginImage.svg"
              width={100}
              height={100}
              alt="Digital assets illustration"
              className="mx-auto w-64 h-64 object-contain"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">
            New assets, new opportunities
          </h2>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center">
        <div className="max-w-md w-full">
          <div className="mb-8">
            <Link href="/">
              <ArrowLeft className="h-6 w-6 hidden md:block" />
            </Link>
          </div>
          <div className="space-y-4 flex flex-col gap-2">
            <Link href="/otp">
              <Button className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white">
                Create wallet
              </Button>
            </Link>
            <Link href="/otp">
              <Button
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-black"
              >
                Connect wallet
              </Button>
            </Link>
          </div>
          <div className="mt-4 flex items-center space-x-2">
            <Checkbox id="terms" checked={agreed} onCheckedChange={setAgreed} />
            <label htmlFor="terms" className="text-sm text-gray-400">
              By continuing, you agree to Propcoin wallets{" "}
              <a href="#" className="text-[#8B5CF6]">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#8B5CF6]">
                Terms of Service
              </a>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
