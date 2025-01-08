import Image from "next/image";
import React from "react";

import Produc1 from "../../../public/images/Product1.png";
import Produc2 from "../../../public/images/Product2.png";
import ACCESSORIES from "../../../public/images/ACCESSORIES.png";
import Produc4 from "../../../public/images/Product4.png";

function ShopCards() {
  return (
    <div className="bg-[#FAFAFA] lg:h-[770px] h-[1750px]  ">
      <div className="w-full bg-[#FAFAFA] text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-[#252B42] text-[24px] leading-[32px] font-bold mb-2">
              EDITORS PICK
            </h2>
            <p className="text-gray-400 font-normal text-sm">
            Problems trying to resolve the conflict between 
            </p>
          </div>

    <div className="container mx-auto px-4 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Men's Category - Takes up 1/3 width */}
        <div className="relative aspect-[3/4] md:aspect-auto">
            <div className="relative h-[500px]">
              <Image
                src={Produc1}
                alt="Men's Fashion"
                fill
                className="object-cover "
              />
              <div className="absolute inset-0  bg-black/20 hover:bg-black/30 transition-colors">
                <span className="absolute left-8 bottom-8  py-3 px-16 bg-white text-[#252B42] text-base font-bold">
                  MEN
                </span>
              </div>
            </div>
          
        </div>

        {/* Women's Category - Takes up 1/3 width */}
        <div className="relative aspect-[3/4] md:aspect-auto">
          
            <div className="relative h-[500px]">
              <Image
                src={Produc2}
                alt="Women's Fashion"
                fill
                className="object-fill"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors">
                <span className="absolute left-8 bottom-8 py-3 px-16 bg-white text-[#252B42] text-base font-bold">
                  WOMEN
                </span>
              </div>
            </div>
          
        </div>

        {/* Right Column - Accessories and Kids - Takes up 1/3 width */}
        <div className="flex flex-col gap-4">
          {/* Accessories Category */}
          <div className="relative  ">
            
              <div className="relative h-[242px]">
                <Image
                  src={ACCESSORIES}
                  alt="Accessories"
                  fill
                  className="object-fill"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors">
                  <span className="absolute left-8 bottom-8 py-3 px-16 bg-white text-[#252B42] text-base font-bold">
                    ACCESSORIES
                  </span>
                </div>
              </div>
            
          </div>

          {/* Kids Category */}
          <div className="relative aspect-[3/4] md:aspect-square">
            
              <div className="relative h-[242px]">
                <Image
                  src={Produc4}
                  alt="Kids Fashion"
                  fill
                  className="object-fill"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors">
                  <span className="absolute left-8 bottom-8 py-3 px-16 bg-white text-[#252B42] text-base font-bold">
                    KIDS
                  </span>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </div>

        
        </div>
      </div>
    </div>
  );
}

export default ShopCards;
