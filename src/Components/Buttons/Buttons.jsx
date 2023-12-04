import React from 'react'

const Buttons = ({btn}) => {
  
  return (
    <div>
      <button type="button" className="text-white bg-black hover:bg-blue-800 focus:ring-3 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> {btn} </button>
    </div>
  )
}

export default Buttons
