import React from 'react'
import herosetion from "../../../public/Images/Herosection.jpg"
import Image from 'next/image'
function HeroSection() {
  return (
//     <div className="relative h-[716p]">
//   {/* Background Image */}
//   <Image 
//     src={herosetion} 
//     alt="Hero Section Image" 
//     height={716} 
//     className="w-full object-cover" 
//   />
  
//   {/* Overlay Text */}
//   <div className="absolute top-1/4 left-8 text-white ml-[197px]">
//     <h5 className="text-[16px]  leading-[24px] font-bold uppercase tracking-wide">Summer 2020</h5>
//     <h1 className="text-[58px] leading-[80px] md:text-5xl font-bold mt-[35px]">NEW COLLECTION</h1>
//     <p className="text-lg font-normal text-[20px] leading-[30px] mt-[35px]">
//       We know how large objects will act, <br/> but things on a small scale.
//     </p>
//     <button className="mt-[35px] px-10 py-4 bg-[#2DC071] hover:bg-green-600 text-white font-bold text-[24px] leading-[32px] rounded-md shadow-lg">
//       Shop Now
//     </button>
//   </div>
// </div>

<div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[716px]">
{/* Background Image */}
<Image 
  src={herosetion} 
  alt="Hero Section Image" 
  fill
  className="object-cover"
  priority
/>

{/* Overlay Text */}
<div className="absolute inset-0 flex items-center">
  <div className="text-white px-4 sm:px-8 md:px-16 lg:px-[197px] max-w-[90%] md:max-w-[70%] lg:max-w-[60%]">
    <h5 className="text-[14px] sm:text-[16px] leading-[24px] font-bold uppercase tracking-wide">Summer 2020</h5>
    <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[58px] leading-[1.2] font-bold mt-4 sm:mt-[35px]">NEW COLLECTION</h1>
    <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-[1.5] mt-4 sm:mt-[35px]">
      We know how large objects will act, but things on a small scale.
    </p>
    <button className="mt-6 sm:mt-[35px] px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#2DC071] hover:bg-green-600 text-white font-bold text-[18px] sm:text-[20px] md:text-[24px] leading-[1.2] rounded-md shadow-lg transition duration-300">
      Shop Now
    </button>
  </div>
</div>
</div>

  )
}

export default HeroSection
