import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
const aboutHeroImage = "/images-v2/AboutHerobg.png"; 
function AboutHeroSection() {
  return (
    <div> 
      <section className=" overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <h2 className="text-[#252B42] text-base tracking-[0.1px] font-bold uppercase">
                About Company
              </h2>
              <h1 className="text-[#252B42] mt-4 md:mt-9 text-4xl md:text-5xl lg:text-[58px] leading-tight md:leading-[80px] font-bold">
                About Us
              </h1>
              <p className="text-[#737373] text-lg md:text-xl leading-relaxed mt-4 md:mt-9 font-normal">
                We know how large objects will act, but things on a small scale
              </p>
              <Button 
                className="mt-6 md:mt-9 bg-[#23A6F0] text-white px-10 py-4 rounded-md hover:bg-blue-600 transition-colors text-sm md:text-base"
              >
                Get Quote Now
              </Button>
            </div>

            {/* Image */}
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[612px] mt-8 lg:mt-0">
              <Image
                src={aboutHeroImage}
                alt="About Us"
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutHeroSection;

