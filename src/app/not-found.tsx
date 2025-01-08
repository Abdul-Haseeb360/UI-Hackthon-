import React from "react";
import Navbar from "./Components/General-Navbar";
import Footer from "./Components/Footer";
import Link from "next/link";

function notfound() {
  return (
    <div>
      <Navbar />

      <div className="max-w-md w-full space-y-8 text-center mx-auto my-10">
        <div>
          <h1 className="text-9xl font-extrabold text-gray-900">404</h1>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Page not found
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sorry, we couldn&#39;t find the page you&#39;re looking for.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <Link
            href="/"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
          >
            Go back home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default notfound;
