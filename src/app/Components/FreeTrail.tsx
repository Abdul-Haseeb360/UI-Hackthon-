import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

function FreeTrail() {
  return (
    <div className="text-center">
      <h2 className="font-bold text-[#252B42] text-[50px] leading-[50px] ">
        Start your 14 days free trial
      </h2>
      <p className="font-normal text-sm text-[#737373] py-8">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent.
      </p>
      <Button className="bg-[#23A6F0]">Try it free now</Button>
      <div className="flex justify-center gap-4 py-8">
        <Link href="https://twitter.com/">
          <Twitter />
        </Link>
        <Link href="https://www.facebook.com/">
          <Facebook />
        </Link>
        <Link href="https://www.instagram.com/">
          <Instagram />
        </Link>
        <Link href="https://www.linkedin.com/">
          <Linkedin />
        </Link>
      </div>
    </div>
  );
}

export default FreeTrail;
