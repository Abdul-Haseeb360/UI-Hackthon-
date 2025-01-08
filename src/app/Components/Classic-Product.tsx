import Image from "next/image";
import React from "react";
import hero from "../../../public/Images/shop-hero-2-png-picture-1.png";
function ClassicProduct() {
  return (
    <div>
      <div className="bg-[#2D8B7B] max-h-[709px] relative overflow-hidden xl:max-w-screen-2xl xl:mx-auto">
        {/* <Container> */}
        <div className="container mx-auto lg:pl-[209px] pl-8  ">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 items-center  ">
            {/* Left Column - Content */}
            <div className="text-white  z-10  pt-[60px] ">
              <span className="text-lg font-normal text-[20px] leading-[30px]">
                SUMMER 2020
              </span>
              <h1 className="text-[58px] leading-[80px] md:text-6xl font-bold mt-[30px] ">
                Vita Classic
                <br />
                Product
              </h1>
              <p className="font-normal text-sm text-white  max-w-md">
                We know how large objects will act, We know how  <br/> are objects will
                act, We know
              </p>
              <div className="flex items-center gap-4 my-8 lg:my-0 ">
                <span className="font-bold text-[24px] leading-[32px] pr-8 ">
                  $16.48
                </span>
                <button className="bg-[#2DC071] rounded-md hover:bg-[#2DC071]/90 font-bold text-white px-10 py-4 text-[14px] leading-[22px]">
                  ADD TO CART
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative w-[510px] h-[685px] hidden md:block lg:visible xl:block">
              <Image
                src={hero}
                alt="Vita Classic Product"
                fill
                className="object-cover "
                // sizes="(max-width: 1024px) 100vw, 50vw"  
                priority
              />
            </div>
          </div>
        </div>
      {/* </Container> */}
      </div>
    
    </div>  
  );
}

export default ClassicProduct;
