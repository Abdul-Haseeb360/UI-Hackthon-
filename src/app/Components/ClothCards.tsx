import { items } from '@/constant/products.data';
import Image from 'next/image';
import React from 'react'


function ClothCards() {
 
  return (
    <div>
      <div className=" w-auto  px-4 py-8 bg-[#FAFAFA]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mx-[178px]">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative group cursor-pointer overflow-hidden"
          >
            <Image
              src={item.src}
              alt={item.title}
              width={500}
              height={500}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
            />
        
          </div>
        ))}
      </div>
    </div>

    </div>
  )
}

export default ClothCards;
