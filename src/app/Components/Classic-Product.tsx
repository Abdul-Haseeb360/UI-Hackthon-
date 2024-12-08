import Image from "next/image";
import React from "react";
import hero from "../../../public/Images/shop-hero-2-png-picture-1.png";
import Univers from "../../../public/Images/col-md-6.png";
function ClassicProduct() {
  return (
    <div>
      <div className="bg-[#2D8B7B] min-h-[709px] relative overflow-hidden">
        <div className="container mx-auto pl-[209px] py-16 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-[112px]  ">
            {/* Left Column - Content */}
            <div className="text-white space-y-6 z-10  pt-[60px] ">
              <span className="text-lg font-normal text-[20px] leading-[30px]">
                SUMMER 2020
              </span>
              <h1 className="text-[58px] leading-[80px] md:text-6xl font-bold mt-[30px] ">
                Vita Classic
                <br />
                Product
              </h1>
              <p className="font-normal text-sm text-white max-w-md">
                We know how large objects will act, We know how are objects will
                act, We know
              </p>
              <div className="flex items-center gap-4 ">
                <span className="font-bold text-[24px] leading-[32px] pr-8 ">
                  $16.48
                </span>
                <button className="bg-[#2DC071] rounded-md hover:bg-[#2DC071]/90 font-bold text-white px-10 py-4 text-[14px] leading-[22px]">
                  ADD TO CART
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative w-[510px] h-[685px]">
              <Image
                src={hero}
                alt="Vita Classic Product"
                fill
                className="object-cover object-center "
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white h-[682px] flex justify-center">
      <div className="ml-[132px]">
        <Image src={Univers} alt="" width={704} height={682}/>
      </div>
      <div className="mt-[178px]">
        <h5 className="font-bold text-base text-[#BDBDBD] pb-8">SUMMER 2020</h5>
        <h2 className="font-bold text-[40px] leading-[50px] text-[#252B42] pb-8">Part of the Neural Universe</h2>
        <h4 className="font-normal text-[20px] leading-[30px] text-[#737373] pb-8">We know how large objects will act, <br/> but things on a small scale.</h4>
        <button className="bg-[#2DC071] rounded-md hover:bg-[#2DC071]/90 font-bold text-white px-10 py-4 text-[14px] leading-[22px] mr-3">
                  ADD TO CART
        </button>
        <button className=" border-[#2DC071] border-2 rounded-md font-bold text-[#2DC071] px-10 py-4 text-[14px] leading-[22px]">
        READ MORE
        </button>
      </div>
      </div>
    </div>  
  );
}

export default ClassicProduct;
