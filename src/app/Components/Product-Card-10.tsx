import Image from 'next/image'
import React from 'react'


interface Product {
  id: number
  name: string
  department: string
  originalPrice: number
  salePrice: number
  image: string
  colors: string[]
}
interface ProductCardProps {
  hideText?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    image: "/Images/1.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
  },
  {
    id: 2,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    image: "/Images/2.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
  },
  {
    id: 3,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    image: "/Images/3.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
  },
  {
    id: 4,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    image: "/Images/4.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
  },
  {
    id: 1,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    image: "/Images/5.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
  },
  {
    id: 2,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    image: "/Images/6.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
  },
  {
    id: 3,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    image: "/Images/7.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
  },
  {
    id: 4,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    image: "/Images/8.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
  }
]

const ProductCard: React.FC<ProductCardProps> = ({ hideText = false }) => {
  return (
    <div className='h-[1652px] bg-white'>
      <div className='mt-20'>
        <div className=''>
          <h4 className='font-normal text-[20px] leading-[30px] text-center text-[#737373]'>Featured Products</h4>
          <h3 className='font-bold pt-3 text-[20px] leading-[30px] text-center text-[#252B42]'>BESTSELLER PRODUCTS</h3>
          <p className='font-normal pt-3 text-[14px] leading-[20px] text-center text-[#737373]'>Problems trying to resolve the conflict between </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-20 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]  ">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative mb-6 overflow-hidden h-[427px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>

            {!hideText && (
            <div className="text-center space-y-2">
              <h3 className="text-base font-bold text-[#252B42]">{product.name}</h3>
              <p className="text-base font-bold text-[#737373]">{product.department}</p>
              <div className="flex items-c enter justify-center gap-1">
                <span className=" text-base font-bold text-[#737373] line-through">${product.originalPrice.toFixed(2)}</span>
                <span className="text-base font-bold text-[#23856D] ">${product.salePrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-center gap-2 pt-2">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 rounded-full border border-gray-200 mb-20"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default ProductCard