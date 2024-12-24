import Image from 'next/image'
import React from 'react'
import Video from "../../../public/Images/Video card.png"

function VideoCard() {
  return (
    <div>
      <div className="h-[764px] w-auto">
    <div className="py-[112px] px-[226px] text-center">
        <Image src={Video} alt=''/>
    </div>
</div>
    </div>
  )
}

export default VideoCard
