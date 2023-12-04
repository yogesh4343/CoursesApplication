import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { searchReducer } from '../Store/Slice/CoursesSlice'


const NavBar = () => {

  const [search , setSearch]= useState("")
  const navigate = useNavigate();

  const dispatch = useDispatch();

    const searchFunc = (e)=>{
      setSearch(e)
    }


    const submitFunc = (element)=>{
      element.preventDefault()
          dispatch(searchReducer(search))
          navigate("/searchPage")
    }


    const crossSearchFunc = ()=> {
      setSearch("")
    }
  
  return (
    <div className="shadow-custom">
    <div className="container pt-5 pb-2 px-4 m-auto flex justify-between cursor-pointer  font-[font-Coolvetica] sm:text-xl  ">

      {/* left nav */}
      <div className="left font-[font-Coolvetica] text-purple-700 font-bold">
        Coder's
      </div>

      {/* right nav */}
      <div className="right flex  flex-row gap-3 list-none sm:gap-5 ">
        <NavLink to="/" className="hover:underline"> Home  </NavLink>
        <NavLink to="/course"  className="hover:underline">  Courses </NavLink>
        <NavLink to="/dashboard"  className="hover:underline"> Dashboard
        </NavLink>
      </div>

    </div>
<hr />


    {/* // bottom  */}

    <div className="bottom  px-6 py-2  container   m-auto flex justify-between cursor-pointer  font-[font-Coolvetica] sm:text-xl ">
    <div className="left text-blue-800">
    <NavLink to="/" > 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
   </svg> </NavLink>


    </div>
    <div className="right">
    <form  onClick={(e)=>submitFunc(e)} >
    <div className="relative text-gray-600 focus-within:text-gray-400">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input type="search" name="q" className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none  " placeholder="Search..." autoComplete="off" onChange={(e)=>searchFunc(e.target.value)} />
      <span className='absolute right-[2px] text-red-600 top-[5px] font-bold ' onClick={()=>crossSearchFunc()}>🗑️</span>
    </div>
  </form>


    </div>
</div>

</div>


  )
}

export default NavBar
