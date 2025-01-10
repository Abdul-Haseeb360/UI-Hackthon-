import Link from "next/link"
import { Search, ShoppingCart, Heart, Menu, ChevronDown } from 'lucide-react'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function   Navbar() {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 lg:px-0 ">
        <div className="flex h-16 items-center  justify-between">
          <Link href="/">
            <h3 className="text-2xl font-bold text-[#252B42]">
              Bandage
            </h3>
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
                <Link href="/shop">Shop</Link>
                <ChevronDown className="h-4 w-4" />
              </button>
              {/* Add dropdown menu here if needed */}
            </div>
            <Link
              href="/about"
              className="text-[14px] leading-[24px] font-bold text-[#737373] hover:text-blue-500"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-[14px] leading-[24px] font-bold text-[#737373] hover:text-blue-500"
            >
              Blog
            </Link>
            <Link
              href="/contact"
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
            <Link
              href="/login"
              className="hidden lg:flex items-center gap-1 text-[14px] leading-[24px] font-bold text-[#23A6F0] hover:text-blue-600"
            >
              <span>Login</span>
              <span>/</span>
              <span>Register</span>
            </Link>

            {/* Desktop & Mobile Icons */}
            <button className="p-2 text-[#23A6F0] hover:text-blue-500">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
            <button className="p-2 text-[#23A6F0] hover:text-blue-500">
              <div className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[10px] text-white">
                  1
                </span>
              </div>
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
                    href="/shop"
                    className="text-xl font-semibold flex justify-between items-center text-[#252B42] hover:text-blue-500"
                  >
                    Shop
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/about"
                    className="text-xl font-semibold text-[#252B42] hover:text-blue-500"
                  >
                    About
                  </Link>
                  <Link
                    href="/blog"
                    className="text-xl font-semibold text-[#252B42] hover:text-blue-500"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contact"
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
  )
}

