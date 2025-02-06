"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store/store";
import { addToCart, removeFromCart, decreaseQuantity } from "@/app/store/cartSlice";
import { Trash, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty 🛒</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-4 mb-4"
              >
                {/* Product Image */}
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="h-5 w-5" />
                  </Button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    <Plus className="h-5 w-5" />
                  </Button>
                </div>

                {/* Remove Button */}
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  <Trash className="h-5 w-5" />
                </Button>
              </div>
            ))}
          </div>

          {/* Total Price & Checkout */}
          <div className="flex justify-between items-center mt-6">
            <h3 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h3>
            <Button className="bg-[#23A6F0] text-white px-6 py-3 rounded-md hover:bg-blue-600">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
