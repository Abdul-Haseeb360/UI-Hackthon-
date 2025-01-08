"use client"
import { ChevronDown, Grid, List } from 'lucide-react'
import React, { useState } from 'react'

function FilterBar() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  return (
    <div className="bg-white lg:my-0 my-5 rounded-md lg:px-8   xl:justify-center xl:gap-52 sm:px-5 space-y-4 sm:space-y-0 sm:flex sm:justify-between lg:h-[98px] sm:items-center">
      {/* Results Count */}
      <div className="text-center sm:text-left">
        <div className="text-[#737373] font-bold text-sm sm:text-base">
          Showing all <span className="font-bold text-[#737373]">12 results</span>
        </div>
      </div>

      {/* View Toggle and Sort */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        {/* View Toggle */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-500 font-bold text-xs sm:text-sm">Views:</span>
          <button 
            className={`p-2 border border-gray-300 rounded-md hover:bg-gray-100 ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <Grid className="w-4 h-4 text-gray-800" />
          </button>
          <button 
            className={`p-2 border border-gray-300 rounded-md hover:bg-gray-100 ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
            onClick={() => setViewMode('list')}
          >
            <List className="w-4 h-4 text-gray-800" />
          </button>
        </div>

        {/* Sort Dropdown */}
        <div className="relative w-full sm:w-auto px-5 lg:px-2">
          <select className="w-full sm:w-auto appearance-none p-2 pr-8 border border-gray-300 rounded-md text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>Popularity</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <ChevronDown className="absolute right-6 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>
      </div>

      {/* Filter Button */}
      <div className="flex justify-center sm:justify-end">
        <button className="px-4 py-2 bg-[#23A6F0] text-white font-medium text-sm rounded-md hover:bg-blue-600 transition-colors duration-200">
          Filter
        </button>
      </div>
    </div>
  )
}

export default FilterBar
