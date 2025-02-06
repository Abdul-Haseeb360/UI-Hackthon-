import Image from "next/image";
import React from "react";
import Pagination from "./Pagination";
import { ProductCardProps } from "@/types/index";
import Link from "next/link"
import { fetchProducts } from "@/lib/fetchProducts"
import { urlFor } from "@/lib/sanityClient"

const ProductCard: React.FC<ProductCardProps> = async ({ hideText = false }) => {
  const Products = await fetchProducts();
  return (
    <div className="h-auto mb-20 bg-white">
      {!hideText && (
        <div >
          <div >
            <h4 className="font-normal text-[20px] lg:pt-10 mt-28  leading-[30px] text-center text-[#737373]">
              Featured Products
            </h4>
            <h3 className="font-bold pt-3 text-[20px] leading-[30px] text-center text-[#252B42]">
              BESTSELLER PRODUCTS
            </h3>
            <p className="font-normal pt-3 text-[14px] leading-[20px] text-center text-[#737373]">
              Problems trying to resolve the conflict between{" "}
            </p>
          </div>
        </div>
      )}

      {/* <div className="container mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative mb-6 overflow-hidden h-[427px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-fill  transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              <div className="text-center space-y-2">
                <h3 className="text-base font-bold text-[#252B42]">{product.name}</h3>
                <p className="text-base font-bold text-[#737373]">{product.department}</p>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-base font-bold text-[#BDBDBD]">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-base font-bold text-[#23856D]">
                    ${product.salePrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-center gap-2 pt-2">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full border border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

<div className="container mx-auto px-4 mt-20">
        {/* <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Products</h1> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Products.map((product:any) => (
            <Link href={`/product-v2/${product._id}`} key={product._id}>
              <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
                {/* {product.productImage && (
                  <Image
                    src={urlFor(product.productImage).url()}
                    width={300}
                    height={200}
                    alt={product.title}
                    className="w-full h-48 object-contain rounded-t-lg mb-4"
                  />
                )} */}
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h2>
                <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                <p className="text-lg font-bold text-gray-900">Price: ${product.price}</p>
                {product.tags && <p className="text-sm text-gray-500">Tags: {product.tags.join(", ")}</p>}
                {product.isNew && (
                  <span className="inline-block bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full mt-2">
                    New!
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
          <Pagination/>
    </div>
  );
};

export default ProductCard;
