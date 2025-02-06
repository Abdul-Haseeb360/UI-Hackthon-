

import Cart from "@/app/Components/Cart";
import Navbar from "../Components/General-Navbar";
import Footer from "../Components/Footer";

export default function CartPage() {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-6">
      <Cart />
      <Footer/>
    </div>
    </>
  );
}
