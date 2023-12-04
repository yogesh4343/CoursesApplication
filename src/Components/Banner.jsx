
import React from 'react'
import Buttons from "./Buttons/Buttons"
import imageIcon from "../Images/lapt.jpeg"
import { NavLink } from 'react-router-dom'

const Banner = () => {
  return (
    <div >
      <div className="container flex justify-between m-auto mt-8">
        <div className="left w-full flex text-center justify-center flex-col p-8 lg:w-[50%] lg:text-left">
          <div className="welcomeHeading flex flex-row m-auto lg:m-0">
            <div className="welcome text-5xl font-bold text-gray-800 flex flex-col xl:flex-row xl:text-5xl dark:text-white "> <span className="pr-3">Welcome To</span>  <span className="span text-purple-700 dark:text-purple-600"> Coder's App</span></div>
          </div>

          <div className="lang text-xl font-bold text-gray-800   mt-3 md:text-3xl dark:text-white">
            Learn
            <span className="text-purple-700 dark:text-purple-600 "> Python</span>
          </div>

          <div className="para text-sm  text-gray-800 md:text-xl dark:text-white my-7 ">
            Confused on which course to take? I have got you covered. Browse courses and find out the best course for you. Its free! It's my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.
          </div>


          <NavLink to="/course" >   <Buttons className="bts" btn="Free Courses" clr="black" /> </NavLink>
        
        
        </div>

        <div className="right w-[44%] hidden bg-cover lg:flex">
          <img className="" src={imageIcon} alt="img" />
        </div>
      </div>
    </div>
  )
}

export default Banner
