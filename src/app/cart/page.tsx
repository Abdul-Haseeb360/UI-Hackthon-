

import Cart from "@/app/Components/Cart";
import Navbar from "../Components/General-Navbar";
import Footer from "../Components/Footer";
import StripePayment from "../Components/Strip-payment";

export default function CartPage() {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-6">
      <Cart />
     {/* <StripePayment/> */}
      <Footer/>
    </div>
    </>
  );
}


