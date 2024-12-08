import React from 'react'

function FilterBar() {
  return (
    <div>
      <div className="flex justify-between items-center px-4 py-2  bg-white border border-gray-300 h-[98px] rounded-md">
      {/* Left Section */}
      <div>
    
      <div className="text-[#737373] font-bold text-base ml-[195px]">
        Showing all <span className="font-bold text-[#737373]">12 results</span>
      </div>

      </div>
      {/* Middle Section */}
      <div className="flex items-center space-x-4">
        <span className="text-gray-500 font-bold text-[14px] leading-[24px] ">Views:</span>
        {/* Grid View Button */}
        <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100">
          <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
            <div className="bg-gray-800"></div>
            <div className="bg-gray-800"></div>
            <div className="bg-gray-800"></div>
            <div className="bg-gray-800"></div>
          </div>
        </button>
        {/* List View Button */}
        <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100">
          <div className="w-4 h-4 flex flex-col gap-0.5">
            <div className="h-1 bg-gray-800"></div>
            <div className="h-1 bg-gray-800"></div>
            <div className="h-1 bg-gray-800"></div>
          </div>
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 mr-[195px]">
        {/* Dropdown */}
        <select className="p-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option>Popularity</option>
          <option>Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
        {/* Filter Button */}
        <button className="px-4 py-2 bg-[#23A6F0] text-white font-medium rounded-md hover:bg-blue-600">
          Filter
        </button>
      </div>

    </div>
    </div>
  )
}

export default FilterBar
