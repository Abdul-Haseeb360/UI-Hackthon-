"use client";
import Link from "next/link";
import { ShoppingCart, Heart, Menu, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bounce, toast } from "react-toastify";
import SearchComponent from "./SearchComponent";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

export default function Navbar() {
  const notify = () =>
    toast.success("Product added Successfully!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 lg:px-0 ">
        <div className="flex h-16 items-center  justify-between">
          <Link href="/">
            <h3 className="text-2xl font-bold text-[#252B42]">Bandage</h3>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-[14px] leading-[24px] font-bold text-[#737373] hover:text-blue-500"
            >
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-[14px] leading-[28px] font-bold text-[#737373] hover:text-blue-500">
                <Link href="/shop-v2">Shop</Link>
              </button>
              {/* Add dropdown menu here if needed */}
            </div>
            <Link
              href="/about-v2"
              className="text-[14px] leading-[24px] font-bold text-[#737373] hover:text-blue-500"
            >
              About
            </Link>
            <Link
              href="/contact-v2"
              className="text-[14px] leading-[24px] font-bold text-[#737373] hover:text-blue-500"
            >
              Contact
            </Link>
            <Link
              href="/pages"
              className="text-[14px] leading-[24px] font-bold text-[#737373] hover:text-blue-500"
            >
              Pages
            </Link>
          </nav>

          <div className="flex items-center space-x-4 lg:space-x-6">
            <button className="p-2 text-[#23A6F0] hover:text-blue-500">
              <SearchComponent />
              <span className="sr-only">Search</span>
            </button>
            <button className="p-2 text-[#23A6F0] hover:text-blue-500">
              <Link href="/cart">
                <div className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {totalCartItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {totalCartItems}
                    </span>
                  )}
                </div>
              </Link>
              <span className="sr-only">Cart</span>
            </button>
            <button className="hidden lg:block p-2 text-[#23A6F0] hover:text-blue-500">
              <div className="relative">
                <Heart className="h-5 w-5" />
              </div>
              <span className="sr-only">Wishlist</span>
            </button>
            <div className="flex items-center justify-end gap-1 text-sm sm:text-[14px] leading-[24px] font-bold text-[#23A6F0] hover:text-blue-600">
              <SignedOut>
                <SignInButton>
                  <button className="px-2 py-1 rounded-md border border-[#23A6F0] hover:bg-[#23A6F0] hover:text-white transition-colors duration-200">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-8 h-8 sm:w-10 sm:h-10",
                      userButtonTrigger: "focus:shadow-none",
                    },
                  }}
                />
              </SignedIn>
            </div>
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="lg:hidden p-2 text-[#23A6F0]">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[540px]">
                <SheetTitle className="text-left text-lg font-semibold text-[#252B42] mb-4">
                  Menu
                </SheetTitle>
                <nav className="flex flex-col gap-4 mt-8">
                  <Link
                    href="/"
                    className="text-xl font-semibold text-[#252B42] hover:text-blue-500"
                  >
                    Home
                  </Link>
                  <Link
                    href="/shop-v2"
                    className="text-xl font-semibold flex justify-between items-center text-[#252B42] hover:text-blue-500"
                  >
                    Shop
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/about-v2"
                    className="text-xl font-semibold text-[#252B42] hover:text-blue-500"
                  >
                    About
                  </Link>
                  <Link
                    href="/product-v2"
                    className="text-xl font-semibold text-[#252B42] hover:text-blue-500"
                  >
                    Products
                  </Link>
                  <Link
                    href="/contact-v2"
                    className="text-xl font-semibold text-[#252B42] hover:text-blue-500"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/pages"
                    className="text-xl font-semibold text-[#252B42] hover:text-blue-500"
                  >
                    Pages
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
}
