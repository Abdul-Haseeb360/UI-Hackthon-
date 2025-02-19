"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { hatch } from "ldrs";
import Navbar from "../Components/General-Navbar";
import Footer from "../Components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import Loader from "../Components/Loader";

const PaymentSuccessContent = () => {
  const searchParams = useSearchParams();
  const amount = Number(searchParams.get("amount")) || 0;

  return (
    <>
      <Navbar />

      <div className=" bg-gray-50 p-4 flex items-center justify-center">
        <Card className="w-full max-w-md p-6">
          <CardContent className="flex flex-col items-center text-center space-y-6">
            <div className="rounded-full bg-green-100 p-3">
              <Check className="h-8 w-8 text-green-500" />
            </div>

            <h2 className="text-2xl font-semibold text-gray-900">
              Payment Successful!
            </h2>

            <p className="text-gray-500">
              Thank you for your purchase.{" "}
              <p className="text-lg mt-2">
                You have paid <strong>${amount.toFixed(2)}</strong>
              </p>
            </p>

            <Link href="/shop-v2">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8">
                Continue Shopping
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
};

hatch.register();

// Default values shown

const PaymentSuccess = () => {
  return (
    <Suspense fallback={<Loader />}>
      <PaymentSuccessContent />
    </Suspense>
  );
};

export default PaymentSuccess;
