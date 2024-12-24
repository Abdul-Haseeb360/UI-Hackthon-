import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function OurClient() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:h-[479px] sm:h-full ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2E4057]">
            Big Companies Are Here
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="mx-auto grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 items-center justify-center mt-12">
          {[
            { name: "Hooli", url: "/Images/hooli.png" },
            { name: "Lyft", url: "/Images/lyft.png" },
            { name: "Feather", url: "/Images/MercadoLibre.png" },
            { name: "Stripe", url: "/Images/stripe.png" },
            { name: "AWS", url: "/Images/aws.png" },
            { name: "Reddit", url: "/Images/Reddit.png" },
          ].map((company) => (
            <div key={company.name} className="flex items-center justify-center p-4">
              <Image
                src={company.url}
                alt={`${company.name} logo`}
                width={100}
                height={40}
                className="max-w-[120px] h-auto grayscale opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-[636px]">
      <div className="bg-[#2F80ED] text-white px-8 py-16 md:px-12 lg:px-16 flex flex-col justify-center">
        <div className="max-w-xl">
          <h2 className="text-sm font-semibold tracking-wider uppercase mb-4">
            WORK WITH US
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Now Let's grow Yours
          </h1>
          <p className="text-lg mb-8 text-white/90">
            The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
          </p>
          <Button 
            variant="outline" 
            className="w-fit text-white border-white hover:bg-white hover:text-[#2F80ED] transition-colors"
          >
            Button
          </Button>
        </div>
      </div>
      <div className="relative min-h-[400px] md:min-h-full">
        <Image
          src="/Images/Product8.png"
          alt="Person in coral sweater"
          fill
          className="object-fill"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </div>
    </div>



  )
}

export default OurClient
