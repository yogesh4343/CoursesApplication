import React from 'react'
import { NavLink } from 'react-router-dom'
import Buttons from './Buttons/Buttons'

const Card = (props) => {

  const desc = props.description.slice(0,160)

  return (
    <>
      <NavLink  to={`/singlepage/${props._id}`} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <img className="rounded-t-lg" src={props.thumbnail} alt="Img" />
  
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
      
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}...</p>
        

          <div className="auth flex justify-between items-center ">

          <Buttons btn="Read More..." />
          
          <div className="author">
          <p className=" font-normal text-gray-900 dark:text-gray-400 "> <span className="font-bold">Author:</span> {props.instructor}</p>
        </div>
      </div>
  </div>
</NavLink>
 
    </>
  )
}

export default Card
