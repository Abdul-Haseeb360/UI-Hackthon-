import React from "react";

import { PaginationProps } from "@/types";
const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onPageChange,
}) => {
  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center mt-12 gap-1 "

    >

      <button
        className="px-4 py-2 text-sm text-gray-500 bg-white rounded-lg border-2 hover:bg-gray-50 disabled:cursor-not-allowed"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`px-4 py-2 text-sm border ${
            page === index + 1
              ? "text-white bg-[#23A6F0]"
              : "text-gray-500 bg-white"
          } rounded-lg hover:bg-gray-`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      {/* Next Page */}
      <button
        className="px-4 py-2 text-sm text-[#23A6F0] bg-white rounded-lg border-2  hover:bg-gray-50 disabled:cursor-not-allowed"
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
