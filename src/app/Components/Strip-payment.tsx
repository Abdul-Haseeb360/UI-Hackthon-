// "use client";

// import convertToSubCurrency from "@/lib/ConvertToSubCurrency";
// import CheckoutPage from "@/app/Components/CheckoutPage";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
//   throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
// }

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// );

// const StripePayment = () => {
//   const amount = 49.99;
//   return (
//     <div>
//       {/* <h1 className="text-6xl font-bold text-center">
//         Ali Jawwad has requested $ {amount}
//       </h1> */}

//       <Elements
//         stripe={stripePromise}
//         options={{
//           mode: "payment",
//           amount: convertToSubCurrency(amount),
//           currency: "usd",
//         }}
//       >
//         <CheckoutPage amount={amount} />
//       </Elements>
//     </div>
//   );
// };

// export default StripePayment;



// "use client";

// import convertToSubCurrency from "@/lib/ConvertToSubCurrency";
// import CheckoutPage from "@/app/Components/CheckoutPage";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
//   throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
// }

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// const StripePayment = ({ amount }: { amount: number }) => {
//   return (
//     <div>
//       <Elements
//         stripe={stripePromise}
//         options={{
//           mode: "payment",
//           amount: convertToSubCurrency(amount),
//           currency: "usd",
//         }}
//       >
//         <CheckoutPage amount={amount} />
//       </Elements>
//     </div>
//   );
// };

// export default StripePayment;

"use client";

import convertToSubCurrency from "@/lib/ConvertToSubCurrency";
import CheckoutPage from "@/app/Components/CheckoutPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const StripePayment = ({ amount }: { amount: number }) => {
  // Ensure amount is a valid positive number
  const validAmount = Number(amount) || 0;
  if (validAmount <= 0) {
    return <h1 className="text-center text-red-500">Invalid payment amount</h1>;
  }

  return (
    <div>
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubCurrency(validAmount),
          currency: "usd",
        }}
      >
        <CheckoutPage amount={validAmount} />
      </Elements>
    </div>
  );
};

export default StripePayment;
