import React from 'react'
import { NavLink } from 'react-router-dom'
import Buttons from './Buttons/Buttons'
import Footer from './Footer'
import NavBar from './NavBar'

const NotFound = () => {
  return (
    <div>
    <NavBar />


       <div className='cards flex flex-wrap mt-14 gap-7 m-auto  justify-center flex-col text-center cursor-pointer h-[14rem]'><span className='span text-6xl font-bold   text-purple-700 dark:text-purple-600'>No Courses Found! </span> <NavLink to="/course" >  <Buttons btn="Explore More" /> </NavLink>  </div> 

    <Footer />
    </div>
  )
}

export default NotFound
