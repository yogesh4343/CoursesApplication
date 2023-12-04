import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import Heading from '../Components/Heading'
import Loader from '../Components/Loader'
import NavBar from '../Components/NavBar'
import { courseReducer } from '../Store/Slice/CoursesSlice'

const Courses = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch( courseReducer() )
  },[dispatch])

  const {courses , status } = useSelector((state) => state.Course) 
  const {dta} = {...courses}

  return (
    <>
        <NavBar />
        <div className="container  m-auto  ">

        <Heading heading="Premium Courses"  /> 

        <div className="cards flex flex-wrap mt-14 gap-7 m-auto  justify-center   ">

 
        {status=== "loading" ? 
    <Loader />
:
  <>

        {dta && dta.map((curEl,ind)=>{
            return <Card key={ind} {...curEl} />
          })}
          </> }
          </div>
        </div>
          <Footer />
    </>
  )
}

export default Courses
