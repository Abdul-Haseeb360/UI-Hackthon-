"use client";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/store/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCart } from "@/types";


export default function AddToCartButton({ product }: { product: ProductCart }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <>
      <Button onClick={handleAddToCart} className="bg-[#23A6F0] hover:bg-blue-600 text-white px-4 py-2 flex items-center gap-2">
        <ShoppingCart className="w-5 h-5" /> 
      </Button>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
