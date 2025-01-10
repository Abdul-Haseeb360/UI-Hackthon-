import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function WorkWithUs() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full container mx-auto h-[636px]">
      <div className="bg-[#2F80ED] text-white px-8 py-16 md:px-12 lg:px-16 flex flex-col justify-center">
        <div className="max-w-xl">
          <h2 className="text-base font-bold mb-4">
            WORK WITH US
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-[40px] lg:leading-[50px] font-bold mb-6">
            Now Let&#39;s grow Yours
          </h1>
          <p className="text-sm font-normal mb-8 text-white/90">
            The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
          </p>
          <Button 
            
            className=" text-white bg-transparent border py-4 px-10"
          >
            Button
          </Button>
        </div>
      </div>
      <div className="relative min-h-[400px] md:min-h-full">
        <Image
          src="/images-v2/Product8.png"
          alt="Person in coral sweater"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </div>
    </div>
  )
}

export default WorkWithUs
