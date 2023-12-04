import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { elrollCourseReducer } from '../Store/Slice/CoursesSlice'
import Buttons from './Buttons/Buttons'

const CourseInfo = ({courseInfo , pct}) => {

    const dispatch = useDispatch();

  let  obj={}

    const enrollFunc = (x)=>{
      dispatch( elrollCourseReducer(x) )
    }

  return (
    <div>
        <div className="container  w-full p-6 justify-start flex flex-col lg:flex-row ">
       
       <div className="left w-full lg:w-[60%] ">
       { courseInfo && courseInfo.map((curEl,ix)=>{

         obj={name:curEl.name,
          instructor : curEl.instructor,
          description: curEl.description,
          thumbnail : curEl.thumbnail,
          id  : curEl._id,
          price : pct,

        }

        return <div key={ix}>
        <p> <span className="font-bold text-xl">  Course name : </span>  <span>{curEl.name}</span></p>
        <p> <span className="font-bold text-xl" > Instructor's name : </span> <span>{curEl.instructor}</span></p>
        <p> <span className="font-bold text-xl"> Description : </span> <span>{curEl.description}</span></p>
        <p> <span className="font-bold text-xl"> Enrollment status  : </span> <span>{curEl.enrollmentStatus}</span></p>
        <p><span className="font-bold text-xl"> Course Duration : </span> <span>{curEl.duration}</span></p>
        <p > <span className="font-bold text-xl">Schedule : </span> <span>{curEl.schedule}</span></p>
        <p > <span className="font-bold text-xl">Location : </span> <span className="text-green-700 font-bold">{curEl.location}</span></p>
        <p > <span className="font-bold text-xl" >Pre-requisites : </span> <span>{curEl.prerequisites}</span></p>
        </div>
        })}
       </div>


       <NavLink to="/dashboard" onClick={()=>enrollFunc(obj)} className="right w-full my-12 flex justify-center items-end lg:w-[40%] lg:justify-end  ">
          <Buttons  btn="Save To Dashboard" />
       </NavLink>
       
                
        </div>
    </div>
  )
}

export default CourseInfo
