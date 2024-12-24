import React from 'react'

function Pagination() {
  return (
    <div >
       <nav aria-label="Pagination" className="flex items-center justify-center mt-12     gap-1">
      <button
        className="px-4 py-2 text-sm text-gray-400 bg-white rounded hover:bg-gray-50 disabled:hover:bg-white"
        disabled
      >
        First
      </button>
      <button
        className="px-4 py-2 text-sm text-gray-500 bg-white rounded hover:bg-gray-50"
      >
        1
      </button>
      <button
        className="px-4 py-2 text-sm text-white bg-[#23A6F0] rounded hover:bg-blue-600"
        aria-current="page"
      >
        2
      </button>
      <button
        className="px-4 py-2 text-sm text-gray-500 bg-white rounded hover:bg-gray-50"
      >
        3
      </button>
      <button
        className="px-4 py-2 text-sm text-[#23A6F0] bg-white rounded hover:bg-gray-50"
      >
        Next
      </button>
    </nav>

    </div>
  )
}

export default Pagination
