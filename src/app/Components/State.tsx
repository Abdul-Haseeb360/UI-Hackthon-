import React from 'react'

function State() {

  const stats = [
    { number: "15K", text: "Happy Customers" },
    { number: "150K", text: "Monthly Visitors" },
    { number: "15", text: "Countries Worldwide" },
    { number: "100+", text: "Top Partners" },
  ]
  return (
    <div>
      <div className="w-full h-[264px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 py-12 sm:py-16 md:py-20 px-4">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <h2 className="font-bold text-4xl sm:text-5xl md:text-[58px] leading-tight sm:leading-[80px] text-[#252B42]">
            {stat.number}
          </h2>
          <p className="font-bold text-sm sm:text-base text-[#737373] mt-2">
            {stat.text}
          </p>
        </div>
      ))}
    </div>
      </div>
    </div>
  )
}

export default State
