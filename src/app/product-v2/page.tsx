import { fetchProducts } from '@/lib/fetchProducts';
import { urlFor } from '@/lib/sanityClient';
import Navbar from '../Components/General-Navbar';
import Footer from '../Components/Footer';
import Image from 'next/image';


export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <>
    
    <Navbar/>
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
            {product.productImage && (
              <Image
                src={urlFor(product.productImage).width(300).url()}
                alt={product.title}
                className="w-full h-48 object-contain rounded-t-lg mb-4"
              />
            )}
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
            <p className="text-lg font-bold text-gray-900">Price: ${product.price.toFixed(2)}</p>
            {product.tags && (
              <p className="text-sm text-gray-500">Tags: {product.tags.join(', ')}</p>
            )}
            {product.isNew && (
              <span className="inline-block bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full mt-2">
                New!
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}
