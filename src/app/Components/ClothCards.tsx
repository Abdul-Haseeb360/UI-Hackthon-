import Image from 'next/image';
import React from 'react'
function ClothCards() {
  const items = [
    { id: 1, src: "/Images/9.png", title: "CLOTHS", count: "5 Items" },
    { id: 2, src: "/images/10.png", title: "CLOTHS", count: "5 Items" },
    { id: 3, src: "/images/11.png", title: "CLOTHS", count: "5 Items" },
    { id: 4, src: "/images/12.png", title: "CLOTHS", count: "5 Items" },
    { id: 5, src: "/images/13.png", title: "CLOTHS", count: "5 Items" },
  ];
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
            {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-lg font-semibold">{item.title}</h3>
              <p className="text-white">{item.count}</p>
            </div> */}
          </div>
        ))}
      </div>
    </div>

    </div>
  )
}

export default ClothCards
