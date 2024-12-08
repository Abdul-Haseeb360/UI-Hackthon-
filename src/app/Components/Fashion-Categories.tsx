import Image from "next/image";
import React from "react";

import Row from "../../../public/Images/row.png";
function ShopCards() {
  return (
    <div className="bg-[#FAFAFA] h-[770px]">
      <div className="w-full bg-[#FAFAFA] text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-[#252B42] text-[24px] leading-[32px] font-bold mb-2">
              EDITOR'S PICK
            </h2>
            <p className="text-gray-400 font-normal text-sm">
            Problems trying to resolve the conflict between 
            </p>
          </div>

          <div className="px-[195px]">
            <Image src={Row} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCards;
