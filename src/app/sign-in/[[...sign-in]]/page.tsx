import { WaveBackground } from "@/app/Components/Wave-bakcground";
import { SignIn } from "@clerk/nextjs";
import React from "react";

function signIn() {
  return (
    <div className="flex justify-center my-20 ">
      <div className="flex min-h justify-center">
        {/* Left Section */}
        <div
          className="relative hidden w-1/2 flex-col justify-between bg-gradient-to-r from-green-400 via-teal-500 to-blue-500


 py-20  px-12 lg:flex rounded-lg"
        >
          <div className="relative z-10">
            <span className="text-2xl font-semibold ">Seasonal Threads</span>
          </div>
          <div className="relative z-10">
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-white sm:text-4xl">
                Nice to see you again
              </h1>
              <span className="mt-8 block text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-4xl">
                WELCOME BACK 😊
              </span>
            </div>
            <p className="max-w-md text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <WaveBackground />
        </div>

        {/* Right Section */}
        <div className="flex w-full items-center justify-center lg:w-1/2">
          <div className="w-full max-w-md space-y-8 px-4 sm:px-6">
            <div className="space-y-2 text-center">
              <SignIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default signIn;
