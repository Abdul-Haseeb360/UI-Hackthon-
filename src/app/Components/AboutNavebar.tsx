'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

function ResponsiveNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div id="responsive-navbar" className="w-full bg-white ">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          <Link href="/">
            <h3 className='text-2xl font-bold text-[#252B42]'>
              Bandage
            </h3>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-[14px] leading-[24px] font-bold text-[#737373] hover:text-blue-500">
              Home
            </Link>
            <Link href="/About" className="text-[14px] leading-[24px] font-bold text-[#737373] hover:text-blue-500">
              Product
            </Link>
            <Link href="/blog" className="text-[14px] leading-[24px] font-bold text-[#737373] hover:text-blue-500">
              Pricing
            </Link>
            <Link href="/Contact" className="text-[14px] leading-[24px] font-bold text-[#737373] hover:text-blue-500">
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/login" className="text-[14px] leading-[22px] font-bold text-[#23A6F0] hover:text-blue-600">
              Login
            </Link>
            <button className='py-3 px-6 flex items-center gap-2 bg-[#23A6F0] rounded font-bold text-white text-[14px] leading-[22px] hover:bg-blue-600 transition-colors'>
              Become a member <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white">
            <nav className="flex flex-col items-center gap-4 py-4">
              <Link href="/" className="text-[14px] leading-[24px] font-bold text-[#737373] hover:text-blue-500">
                Home
              </Link>
              <Link href="/About" className="text-[14px] leading-[24px] font-bold text-[#737373] hover:text-blue-500">
                Product
              </Link>
              <Link href="/blog" className="text-[14px] leading-[24px] font-bold text-[#737373] hover:text-blue-500">
                Pricing
              </Link>
              <Link href="/Contact" className="text-[14px] leading-[24px] font-bold text-[#737373] hover:text-blue-500">
                Contact
              </Link>
              <Link href="/login" className="text-[14px] leading-[22px] font-bold text-[#23A6F0] hover:text-blue-600">
                Login
              </Link>
              <button className='py-3 px-6 flex items-center gap-2 bg-[#23A6F0] rounded font-bold text-white text-[14px] leading-[22px] hover:bg-blue-600 transition-colors'>
                Become a member <ArrowRight size={16} />
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}

export default ResponsiveNavbar

