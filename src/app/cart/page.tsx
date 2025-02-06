

import Cart from "@/app/Components/Cart";
import Navbar from "../Components/General-Navbar";
import Footer from "../Components/Footer";

export default function CartPage() {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">Your Shopping Cart</h1>
      <Cart />
      <Footer/>
    </div>
    </>
  );
}
