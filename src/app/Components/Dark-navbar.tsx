
import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
} from "lucide-react";

interface NavbarProps {
  bgColor?: string; 
}
function Navbar({ bgColor = "bg-red-900"}: NavbarProps ) {
  return (
    <div>
      <div className={`w-full ${bgColor} text-white hidden lg:block `}>
        <div className="container mx-auto px-4">
          <div className="flex h-12 items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>0318-6835430</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>abdulhaseebshaik1234@gmail.com</span>
              </div>
            </div>

            <div className="hidden md:block">
              Follow Us and get a chance to win 80% off
            </div>

            <div className="flex items-center gap-4">
              <span>Follow Us :</span>
              <div className="flex items-center gap-3">
                <Instagram className="h-4 w-4" />
                <Youtube className="h-4 w-4" />
                <Facebook className="h-4 w-4" />
                <Twitter className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;








