import Image from 'next/image'
import React from 'react'
import Univers from "../../../public/Images/col-md-6.png";

function NeuralUniverse() {
  return (
    <div>
       <div className="bg-white">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <Image 
              src={Univers} 
              alt="Universe illustration" 
              width={704} 
              height={682}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h5 className="font-bold text-sm sm:text-base text-[#BDBDBD] pb-4 sm:pb-6">SUMMER 2020</h5>
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight text-[#252B42] pb-4 sm:pb-6">Part of the Neural Universe</h2>
            <h4 className="font-normal text-lg sm:text-xl leading-relaxed text-[#737373] pb-6 sm:pb-8">
              We know how large objects will act, but things on a small scale.
            </h4>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-[#2DC071] rounded-md hover:bg-[#2DC071]/90 font-bold text-white px-6 py-3 text-sm sm:text-base">
                ADD TO CART
              </button>
              <button className="border-[#2DC071] border-2 rounded-md font-bold text-[#2DC071] px-6 py-3 text-sm sm:text-base">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NeuralUniverse
