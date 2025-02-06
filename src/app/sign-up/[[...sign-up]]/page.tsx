import { SignUp } from '@clerk/nextjs'
import React from 'react'
import { WaveBackground } from '@/app/Components/Wave-bakcground'
function signUp() {
  return (
    <div className='flex justify-center my-20'>

<div className="flex min-h justify-center">
      {/* Left Section */}
      <div className="relative hidden w-1/2 flex-col justify-between bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600
py-20  px-12 rounded-lg lg:flex">
        <div className="relative z-10">
          <span className="text-2xl font-semibold">Seasonal Threads</span>
        </div>
        <div className="relative z-10">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white sm:text-4xl">Start your journey with us</h1>
            <span className="mt-8 block text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl">
              CREATE ACCOUNT
            </span>
          </div>
          <p className="max-w-md text-blue-100">
            Join our community and discover amazing products. Sign up now to get started with your shopping experience.
          </p>
        </div>
        <WaveBackground />
      </div>

      {/* Right Section */}
      <div className="flex w-full items-center justify-center lg:w-1/2">
        <div className="w-full max-w-md space-y-8 px-4 sm:px-6">
          <div className="space-y-2 text-center">
        <SignUp />
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default signUp