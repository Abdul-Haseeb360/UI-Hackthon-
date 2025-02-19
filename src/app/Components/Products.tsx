"use client";

import { useEffect, useState } from "react";
import { fetchProducts } from "@/lib/fetchProducts";
import Pagination from "@/app/Components/Pagination";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanityClient";

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  productImage: { asset: { url: string } };
  tags: string[];
  isNew: boolean;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 8; // Number of products per page

  useEffect(() => {
    const loadProducts = async () => {
      const { products, total } = await fetchProducts(page, limit);
      setProducts(products);
      setTotalPages(Math.ceil(total / limit));
    };

    loadProducts();
  }, [page]);

  return (
    <div className="container mx-auto px-4 mt-20">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Link
            href={`/product-v2/${product._id}`}
            key={product._id}
            className="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md"
          >
            <div className="aspect-[4/3] overflow-hidden bg-gray-100">
              {product.productImage && product.productImage.asset ? (
                <Image
                  src={urlFor(product.productImage).url() || "/placeholder.svg"}
                  width={400}
                  height={300}
                  alt={product.title}
                  className="h-full w-full object-center transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-gray-100">
                  <Image
                    src="/placeholder.svg"
                    width={100}
                    height={100}
                    alt="Placeholder"
                    className="h-24 w-24 opacity-50"
                  />
                </div>
              )}
            </div>

            <div className="p-4">
              <h2 className="mb-1 text-lg font-semibold text-gray-900 line-clamp-1">
                {product.title}
              </h2>
              <p className="mb-2 text-sm text-gray-600 line-clamp-2">
                {product.description}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-lg font-bold text-gray-900">${product.price}</p>
                {product.tags && product.tags.length > 0 && (
                  <div className="flex gap-1">
                    {product.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs text-gray-600 ring-1 ring-inset ring-gray-500/10"
                      >
                        {tag}
                      </span>
                    ))}
                    {product.tags.length > 2 && (
                      <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        +{product.tags.length - 2}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Component */}
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
