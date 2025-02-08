"use client";
import { useSearchParams } from "next/navigation";
import StripePayment from "@/app/Components/Strip-payment";
import Navbar from "../Components/General-Navbar";
import Footer from "../Components/Footer";
import { Suspense } from "react";

const CheckoutContent = () => {
  const searchParams = useSearchParams();
  const amount = Number(searchParams.get("amount")) || 0;

  if (amount <= 0) {
    return <h1 className="text-center text-red-500">Invalid payment amount</h1>;
  }

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <p className="text-lg mb-2">Total Amount: ${amount.toFixed(2)}</p>
      <StripePayment amount={amount} />
    </div>
  );
};

const CheckoutPage = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<p className="text-center">Loading...</p>}>
        <CheckoutContent />
      </Suspense>
      <Footer />
    </>
  );
};

export default CheckoutPage;
