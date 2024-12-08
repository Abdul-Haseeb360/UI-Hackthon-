import React from 'react'
import herosetion from "../../../public/Images/Herosection.jpg"
import Image from 'next/image'
function HeroSection() {
  return (


    <div className="relative h-[716p]">
  {/* Background Image */}
  <Image 
    src={herosetion} 
    alt="Hero Section Image" 
    height={716} 
    className="w-full object-cover" 
  />
  
  {/* Overlay Text */}
  <div className="absolute top-1/4 left-8 text-white ml-[197px]">
    <h5 className="text-[16px]  leading-[24px] font-bold uppercase tracking-wide">Summer 2020</h5>
    <h1 className="text-[58px] leading-[80px] md:text-5xl font-bold mt-[35px]">NEW COLLECTION</h1>
    <p className="text-lg font-normal text-[20px] leading-[30px] mt-[35px]">
      We know how large objects will act, <br/> but things on a small scale.
    </p>
    <button className="mt-[35px] px-10 py-4 bg-[#2DC071] hover:bg-green-600 text-white font-bold text-[24px] leading-[32px] rounded-md shadow-lg">
      Shop Now
    </button>
  </div>
</div>

//     <div className="relative bg-blue-500 text-white h-screen flex items-center">
//   <div className="container mx-auto flex flex-col md:flex-row items-center">
//     {/* <!-- Left Content --> */}
//     <div className="w-full md:w-1/2 px-6">
//       <p className="text-sm uppercase tracking-wide">Summer 2020</p>
//       <h1 className="text-4xl md:text-5xl font-bold mt-2">New Collection</h1>
//       <p className="text-lg mt-4">
//         We know how large objects will act, but things on a small scale.
//       </p>
//       <button className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md shadow-lg">
//         Shop Now
//       </button>
//     </div>
//     {/* <!-- Right Content --> */}
//     <div className="w-full md:w-1/2 px-6">
//       <Image
//         src={herosetion}
//         alt="New Collection"
//         className="rounded-md shadow-lg"
//       />
//     </div>
//   </div>
// </div>

  )
}

export default HeroSection
