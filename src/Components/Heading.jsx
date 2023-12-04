import React from 'react'

const Heading = ({heading}) => {
  return (
    <div>
        <div className="welcome text-4xl mt-7 items-center text-center justify-center font-bold  text-purple-700 flex flex-col xl:flex-row xl:text-5xl dark:text-white "> <span className="pr-3">{heading}</span> </div>
    </div>
  )
}

export default Heading
