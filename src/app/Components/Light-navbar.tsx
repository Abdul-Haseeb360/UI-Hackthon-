import React from 'react'
import { ChevronDown, Search, ShoppingCart, Heart, } from 'lucide-react'
import Link from 'next/link'
function Navbar() {
  return (
    <div >
       <div className="w-full bg-white h-[58px]">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" >
            <h3 className='text-2xl font-bold text-[#252B42] mr-[120px]'>
            Bandage
            </h3>
          </Link>

          <nav className="hidden md:flex items-center gap-8 mr-[350px]">
            <Link href="/" className="text-[14px] leading-[24px] font-bold text-[#737373] hover:text-blue-500">
              Home
            </Link>
            <div className="relative ">
              <button className="flex items-center gap-1 text-[14px] leading-[28px] font-medium text-[#252B42] hover:text-blue-500">
                <Link href="/Shop" >Shop</Link>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <Link href="/about" className="text-[14px] leading-[24px] font-bold text-[#737373] hover:text-blue-500">
              About
            </Link>
            <Link href="/blog" className="text-[14px] leading-[24px] font-bold text-[#737373] hover:text-blue-500">
              Blog
            </Link>
            <Link href="/contact" className="text-[14px] leading-[24px] font-bold text-[#737373] hover:text-blue-500">
              Contact
            </Link>
            <Link href="/pages" className="text-[14px] leading-[24px] font-bold text-[#737373] hover:text-blue-500">
              Pages
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden md:flex items-center gap-1 text-[14px] leading-[24px] font-bold text-[#23A6F0] hover:text-blue-600">
              <span>Login</span>
              <span>/</span>
              <span>Register</span>
            </Link>
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
            <button className="p-2 text-[#23A6F0] hover:text-blue-500">
              <div className="relative">
                <Heart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[10px] text-white">
                  1
                </span>
              </div>
              <span className="sr-only">Wishlist</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
