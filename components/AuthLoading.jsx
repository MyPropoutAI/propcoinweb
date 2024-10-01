import { ArrowLeft } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function AuthLoading() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-black text-white">
      {/* Left side */}
      <div className="w-full md:w-1/2 bg-[#1E0A3C] p-8 flex flex-col justify-center items-center relative">
        <div className="absolute top-4 left-4 md:hidden">
          <ArrowLeft className="h-6 w-6" />
        </div>
        <div className="max-w-md text-center">
          <div className="mb-8">
            <Skeleton className="w-64 h-64 rounded-full mx-auto" />
          </div>
          <Skeleton className="h-8 w-3/4 mx-auto" />
        </div>
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center">
        <div className="max-w-md w-full">
          <div className="mb-8">
            <ArrowLeft className="h-6 w-6 hidden md:block" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
          <div className="mt-4 flex items-center space-x-2">
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-5 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
