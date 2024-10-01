//import Image from "next/image";

import LandingPage from "@/components/LandingPage";
import LandingPageNavBar from "@/components/LandingPageNavBar";

export default function Home() {
  return (
    <div className="">
      <LandingPageNavBar />
      <LandingPage />
    </div>
  );
}
