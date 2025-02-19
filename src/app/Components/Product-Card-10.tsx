import React, { Suspense } from "react";
import { ProductCardProps } from "@/types/index";

import ProductsPage from "./Products";
import Loader from "./Loader";

const ProductCard: React.FC<ProductCardProps> = async ({
  hideText = false,
}) => {
  return (
    <div className="h-auto mb-20 bg-white">
      {!hideText && (
        <div>
          <div>
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
      <div className="container mx-auto px-4 mt-20">
        <Suspense fallback={<Loader/>}>
          <ProductsPage />
        </Suspense>
      </div>
    </div>
  );
};

export default ProductCard;
