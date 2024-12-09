import Link from 'next/link'
import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react'

interface FooterProps {
  bgColor?: string; 
}

function Footer({ bgColor = "bg-[#FAFAFA]"}: FooterProps) {
  return (
    <div  >
      <div className={` w-full ${bgColor} h-[142px] text-white `}>
        <div className="flex justify-between items-center px-[130px] py-10 ">
          <Link href="/" className="text-2xl font-bold text-[#252B42] mr-[577px]">
            Bandage
          </Link>
          
          <div className="flex items-center gap-5">
            <Link href="https://facebook.com" className= " text-blue-400 hover:text-blue-400 transition-colors">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://instagram.com" className=" text-blue-400  hover:text-pink-400 transition-colors">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://twitter.com" className=" text-blue-400  hover:text-blue-400 transition-colors">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container px-4 my-[50px]">
        <div className="grid grid-cols-1 gap-2 mx-[115px] md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div>
            <h3 className="mb-6 text-base font-bold text-[#252B42]">Company Info</h3>
            <ul className="space-y-4 font-bold text-base">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">About Us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Carrier</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">We are hiring</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-6 text-base font-bold text-[#252B42]">Legal</h3>
            <ul className="space-y-4 font-bold text-base">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">About Us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Carrier</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">We are hiring</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Blog</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="mb-6 text-base font-bold text-[#252B42]">Features</h3>
            <ul className="space-y-4 font-bold text-base">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Business Marketing</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">User Analytic</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Live Chat</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Unlimited Support</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-6 text-base font-bold text-[#252B42]">Resources</h3>
            <ul className="space-y-4 font-bold text-base">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">iOS & Android</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Watch a Demo</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Customers</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">API</a></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="mb-6 text-base font-bold text-[#252B42]">Get In Touch</h3>
            <form className="flex max-w-md">
      <input
        type="email"
        placeholder="Your Email"
        className="flex-1 rounded-l-lg border border-r-0 border-gray-300 px-4 py-3 text-gray-600 placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="rounded-r-lg bg-[#29ABE2] px-2 py-3 font-medium text-white hover:bg-[#29ABE2]/90 focus:outline-none focus:ring-2 focus:ring-[#29ABE2] focus:ring-offset-2"
      >
        Subscribe
      </button>
    </form>
              <p className="text-sm text-muted-foreground mt-2">Lore imp sum dolor Amit</p>
          </div>
        </div>
      </div>

      <div className='h-[74px] bg-[#FAFAFA] '>
      <h6 className='font-bold text-[14] leading-[24px] text-[#737373] py-6 px-[127px]'>Made With Love By Finland All Right Reserved </h6>
      </div>
    </div>
  )
}

export default Footer
