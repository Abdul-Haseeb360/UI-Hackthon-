"use client"
import Link from "next/link";
import { ShoppingCart, Heart, Menu, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import SearchComponent from "./SearchComponent";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export default function Navbar() {
 
  const notify = () =>
    toast.success('Product added Successfully!', {
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
                <ChevronDown className="h-4 w-4" />
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
              href="/product-v2"
              className="text-[14px] leading-[24px] font-bold text-[#737373] hover:text-blue-500"
            >
              Products
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
            {/* <Link
              href="/login"
              className="hidden lg:flex items-center gap-1 text-[14px] leading-[24px] font-bold text-[#23A6F0] hover:text-blue-600"
            >
              </Link> */}
              <div className="hidden lg:flex items-center gap-1 text-[14px]  leading-[24px] font-bold text-[#23A6F0] hover:text-blue-600">

              <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton showName/>
            </SignedIn>
              </div>
            {/* <Login >
            </Login> */}
            {/* Desktop & Mobile Icons */}
            <button className="p-2 text-[#23A6F0] hover:text-blue-500">
              <SearchComponent />
              <span className="sr-only">Search</span>
            </button>
            <button className="p-2 text-[#23A6F0] hover:text-blue-500">
              <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
                {/* <button onClick={notify}> </button> */}
                {/* <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick={false}
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                  transition={Bounce}
                  /> */}

                  </Link>
              <span className="sr-only">Cart</span>
            </button>
            <button className="hidden lg:block p-2 text-[#23A6F0] hover:text-blue-500">
              <div className="relative">
                <Heart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[10px] text-white">
                  1
                </span>
              </div>
              <span className="sr-only">Wishlist</span>
            </button>

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
