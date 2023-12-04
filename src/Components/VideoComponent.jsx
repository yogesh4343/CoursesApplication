import React from 'react'

const VideoComponent = ({vid}) => {
  return (
   <div className='w-fit h-fit'>

      <iframe w-fit  h-fit className='w-[23rem] h-[11rem] md:w-[40rem] md:h-[22rem] lg:w-[46rem] lg:h-[26rem]' src={vid} title="Learn Python in an Animated Way | Log2Base2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   </div>
  )
}

export default VideoComponent

