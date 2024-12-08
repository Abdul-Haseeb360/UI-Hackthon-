import React from 'react'
import Head from "../Components/Dark-navbar"
import Navbar from '../Components/Light-navbar'
import Link from 'next/link'
import ClothCards from '../Components/ClothCards'
import FilterBar from '../Components/FilterBar'
import Clients from "../../../public/Images/desktop-clients-1.png"
import Image from 'next/image'
import Footer from '../Components/Footer'
import ProductCard from '../Components/Product-Card-10'

function page() {


  return (
    <div>
   <Head bgColor="bg-[#23856D]" />
   <Navbar/>
   <div className="w-full bg-[#FAFAFA] h-[92px] py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">

          <h1 className="text-2xl font-bold text-[#252B42]">Shop</h1>
          <nav aria-label="Breadcrumb" className="mt-2 sm:mt-0">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="text-[#252B42] text-base font-bold">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-400"> /</span>
              </li>
              <li className="text-gray-500">Shop</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <ClothCards/>
    <FilterBar/>
    <div>
    <Image src={Clients} alt=""/>
    </div>

    <ProductCard hideText={false}/>
    <Footer bgColor="bg-[#FFFFFF]"/>
    </div>
  )
}

export default page
