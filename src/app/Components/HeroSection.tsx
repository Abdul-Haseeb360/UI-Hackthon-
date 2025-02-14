import React from "react";
import Image from "next/image";
import Link from "next/link";
const heroSetion = "/images-v2/heroSection.jpg";

function HeroSection() {
  return (
    <div className="lg:w-full">
      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[716px] ">
        <Image
          src={heroSetion}
          alt="Hero Section Image"
          className="object-cover text-center "
          fill
          loading="eager"
          
        />
        {/* Overlay Text */}
        
       <div className="container">
       <div className="absolute inset-0 lg:my-[208px] my-20 container mx-auto">
          <div className="text-white px-4 sm:px-8 md:px-16 lg:px-[197px] xl:px-0 max-w-[90%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%]">
            <h5 className="text-[16px] leading-[24px] font-bold uppercase tracking-wide">
              Summer 2020
            </h5>
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[58px] leading-[1.2] font-bold mt-4 sm:mt-[35px]">
              NEW COLLECTION
            </h1>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-[1.5] mt-4 sm:mt-[35px]">
              We know how large objects will act,<br/> but things on a small scale.
            </p>
           <Link href="/shop-v2">
           <button className="mt-6 sm:mt-[35px] px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#2DC071] hover:bg-green-600 text-white font-bold text-[18px] sm:text-[20px] md:text-[24px] leading-[1.2] rounded-md shadow-lg transition duration-300">
              Shop Now
            </button>
           </Link>
          </div>
        </div>
       </div>
        
      </section>
    </div>
  );
}

export default HeroSection;

