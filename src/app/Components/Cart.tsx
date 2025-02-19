"use client";

import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/app/store/store";
import Image from "next/image";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "@/app/store/cartSlice";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import Link from "next/link";

const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleNavigateToCheckout = () => {
    router.push(`/Checkout?amount=${totalPrice}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
        Your Cart 🛒
      </h2>

      {cartItems.length === 0 ? (
        <div className="mx-auto text-center ">
          <p className="text-center text-gray-500 pb-4">
            Your cart is empty. Start shopping now and find something you'll
            love!😊
          </p>
          <Link href="/shop-v2">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8">
              Shop Now
            </Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center gap-4 p-4 border rounded-lg shadow-md bg-white"
            >
              <div className="w-full sm:w-20 h-20 flex-shrink-0 mb-4 sm:mb-0">
                {item.image ? (
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt="Product Image"
                    width={80}
                    height={80}
                    className="rounded-lg object-cover w-full h-full"
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
              </div>

              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500">${item.price.toFixed(2)} each</p>

                <div className="flex items-center justify-center sm:justify-start space-x-2 mt-2">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="bg-gray-300 hover:bg-gray-400 text-black px-2 py-1 rounded"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="bg-gray-300 hover:bg-gray-400 text-black px-2 py-1 rounded"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-end gap-2 mt-4 sm:mt-0">
                <span className="text-xl font-bold text-blue-600 order-2 sm:order-1">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>

                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="order-1 sm:order-2"
                >
                  <Trash className="h-5 w-5" />
                </Button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center border-t pt-4">
            <h3 className="text-xl sm:text-2xl font-bold">Total:</h3>
            <span className="text-xl sm:text-2xl font-bold text-green-600">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          <button
            onClick={handleNavigateToCheckout}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
