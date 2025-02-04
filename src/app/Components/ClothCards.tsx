import { items } from '@/constant/data';
import Image from 'next/image';
import React from 'react'

function ClothCards() {
  return (
    <div>
      <div className="w-full px-4 py-8 bg-[#FAFAFA] lg:w-full xl:max-w-screen-2xl xl:mx-auto">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="relative group cursor-pointer overflow-hidden w-full aspect-square"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default ClothCards;
