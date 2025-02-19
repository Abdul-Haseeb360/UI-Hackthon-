// import { fetchProducts } from "@/lib/fetchProducts"
// import { urlFor } from "@/lib/sanityClient"
// import Navbar from "@/app/Components/General-Navbar"
// import Footer from "@/app/Components/Footer"
// import Image from "next/image"
// import { Star, Heart, ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import AddToCartButton from "@/app/Components/CartButton"

// export default async function ProductPage({
//   params,
// }: {
//   params: { id: string }
// }) {
//   const product = await fetchProducts(params.id)

//   if (!product) {
//     return (
//       <>
//         <Navbar />
//         <div className="container mx-auto p-6">
//           <h1 className="text-2xl font-bold text-center">Product not found</h1>
//         </div>
//         <Footer />
//       </>
//     )
//   }

//   // Mock data for the UI elements not in Sanity
//   const reviews = 10
//   const rating = 4
//   const colors = ["#23A6F0", "#2DC071", "#E77C40", "#252B42"]

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Left Column - Image Gallery */}
//           <div className="relative">
//             <div className="relative aspect-square bg-gray-100 rounded-lg">
//               {product.productImage && (
//                 <Image
//                   src={urlFor(product.productImage).width(600).url() || "/placeholder.svg"}
//                   alt={product.title}
//                   fill
//                   className="object-cover rounded-lg"
//                   priority
//                 />
//               )}
//               <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
//                 <ChevronLeft className="h-6 w-6 text-gray-600" />
//               </button>
//               <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
//                 <ChevronRight className="h-6 w-6 text-gray-600" />
//               </button>
//             </div>
//             <div className="flex gap-4 mt-4">
//               <div className="w-24 h-24 relative bg-gray-100 rounded-lg">
//                 {product.productImage && (
//                   <Image
//                     src={urlFor(product.productImage).width(100).url() || "/placeholder.svg"}
//                     alt={product.title}
//                     fill
//                     className="object-cover rounded-lg"
//                   />
//                 )}
//               </div>
//               <div className="w-24 h-24 relative bg-gray-100 rounded-lg">
//                 {product.productImage && (
//                   <Image
//                     src={urlFor(product.productImage).width(100).url() || "/placeholder.svg"}
//                     alt={product.title}
//                     fill
//                     className="object-contain rounded-lg"
//                   />
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Product Details */}
//           <div className="space-y-6">
//             <h1 className="text-[#252B42] text-2xl font-bold">{product.title}</h1>

//             <div className="flex items-center gap-2">
//               <div className="flex">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
//                   />
//                 ))}
//               </div>
//               <span className="text-[#737373]">{reviews} Reviews</span>
//             </div>

//             <div className="text-[#252B42] text-2xl font-bold">${product.price.toFixed(2)}</div>

//             <div className="flex items-center gap-2">
//               <span className="text-[#737373] font-bold">Availability :</span>
//               <span className="text-[#23A6F0] font-bold">In Stock</span>
//             </div>

//             <p className="text-[#737373]">{product.description}</p>

//             <div className="h-[1px] bg-gray-200" />

//             <div className="flex gap-2">
//               {colors.map((color) => (
//                 <button
//                   key={color}
//                   className="w-8 h-8 rounded-full border-2 border-gray-200"
//                   style={{ backgroundColor: color }}
//                 />
//               ))}
//             </div>

//             <div className="flex gap-4">
//               <Button className="bg-[#23A6F0] text-white px-8 py-2 rounded-md hover:bg-blue-600">Select Options</Button>
//               <Button variant="outline" size="icon">
//                 <Heart className="h-5 w-5" />
//               </Button>
//                 <AddToCartButton product={{ id: params.id, title: product.title, price: product.price, image: product.productImage, quantity: 1 }} />
              
//             </div>

//             {product.tags && (
//               <div className="flex items-center gap-2">
//                 <span className="text-[#737373] font-bold">Tags:</span>
//                 <span className="text-[#737373]">{product.tags.join(", ")}</span>
//               </div>
//             )}
//           </div>
//         </div>
        
//       </div>
//       <Footer />
//     </>
//   )
// }




import { fetchProductById } from "@/lib/fetchProducts"
import { urlFor } from "@/lib/sanityClient"
import Navbar from "@/app/Components/General-Navbar"
import Footer from "@/app/Components/Footer"
import Image from "next/image"
import { Star, Heart, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import AddToCartButton from "@/app/Components/CartButton"

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await fetchProductById(params.id)

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto p-6">
          <h1 className="text-2xl font-bold text-center">Product not found</h1>
        </div>
        <Footer />
      </>
    )
  }

  const reviews = 10
  const rating = 4
  const colors = ["#23A6F0", "#2DC071", "#E77C40", "#252B42"]

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Image Gallery */}
          <div className="relative">
            <div className="relative aspect-square bg-gray-100 rounded-lg">
              {product.productImage && (
                <Image
                  src={urlFor(product.productImage).width(600).url() || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              )}
              <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-6">
            <h1 className="text-[#252B42] text-2xl font-bold">{product.title}</h1>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-[#737373]">{reviews} Reviews</span>
            </div>

            <div className="text-[#252B42] text-2xl font-bold">${product.price.toFixed(2)}</div>

            <div className="flex items-center gap-2">
              <span className="text-[#737373] font-bold">Availability :</span>
              <span className="text-[#23A6F0] font-bold">In Stock</span>
            </div>

            <p className="text-[#737373]">{product.description}</p>

            <div className="h-[1px] bg-gray-200" />

            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  className="w-8 h-8 rounded-full border-2 border-gray-200"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <Button className="bg-[#23A6F0] text-white px-8 py-2 rounded-md hover:bg-blue-600">Select Options</Button>
              <Button variant="outline" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <AddToCartButton product={{ id: params.id, title: product.title, price: product.price, image: product.productImage, quantity: 1 }} />
            </div>

            {product.tags && (
              <div className="flex items-center gap-2">
                <span className="text-[#737373] font-bold">Tags:</span>
                <span className="text-[#737373]">{product.tags.join(", ")}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

