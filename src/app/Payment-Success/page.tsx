"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";

const PaymentSuccessContent = () => {
  const searchParams = useSearchParams();
  const amount = Number(searchParams.get("amount")) || 0;

  return (
    <div className="text-center w-full p-6">
      <h1 className="text-3xl font-bold">Thank you for your purchase! 🎉</h1>
      <p className="text-lg mt-2">
        You have paid <strong>${amount.toFixed(2)}</strong>
      </p>
      <Link href="/">
        <Button className="text-center">Go Back Home</Button>
      </Link>
    </div>
  );
};

const PaymentSuccess = () => {
  return (
    <Suspense fallback={<p className="text-center">Loading...</p>}>
      <PaymentSuccessContent />
    </Suspense>
  );
};

export default PaymentSuccess;
