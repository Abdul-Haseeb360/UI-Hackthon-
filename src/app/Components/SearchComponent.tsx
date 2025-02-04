"use client"
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/lib/sanityClient';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  _id: string;
  title: string;
  productImage: any;
  slug: {
    current: string;
  };
}

export default function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useEffect(() => {
    if (searchTerm.trim()) {
      const query = `*[_type == "product" && title match $searchTerm]{
        _id,
        title,
        productImage,
        "slug": slug.current
      }`;

      const params = { searchTerm: `${searchTerm.toLowerCase()}*` }; // Ensure lowercase matching

      client.fetch(query, params).then((results) => {
        console.log("Sanity Search Results:", results); // Debugging
        setSearchResults(results);
      }).catch((error) => {
        console.error("Sanity search error:", error);
      });

    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);


  return (
    <div className="relative">
      <div className="flex items-center border border-gray-300 rounded-md">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full p-2 pr-10 focus:outline-none rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute right-3 h-5 w-5 text-gray-400" />
      </div>
      {searchResults.length > 0 && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {searchResults.map((product) => (
            <li key={product._id} className="p-2 hover:bg-gray-100">
              <Link href={`/product-v2/${product.slug}`} className="flex items-center space-x-2">
                {product.productImage && (
                  <Image
                    src={urlFor(product.productImage).width(50).url() || "/placeholder.svg"}
                    width={50}
                    height={50}
                    alt={product.title}
                    className="object-cover rounded"
                  />
                )}
                <span>{product.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
