import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function PricingHeroSection() {
  return (
    <div className="mt-3">
      <h5 className="font-bold text-base text-center text-[#737373] py-12">
        PRICING
      </h5>
      <h1 className="font-bold text-[58px] leading-[80px] text-center">
        Simple Pricing
      </h1>
      <div className="flex mx-auto  justify-center pt-4">
        <Link href="/">
          <h1>Home</h1>
        </Link>
        <ChevronRight />
        <Link href="/pricing-v2">
        <h1>Pricing</h1>
        </Link>
      </div>
    </div>
  );
}

export default PricingHeroSection;
