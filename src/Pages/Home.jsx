import React, { useEffect } from 'react'
import Banner from '../Components/Banner'
import { useDispatch } from 'react-redux'
import NavBar from '../Components/NavBar'
import RecommandedCourse from '../Components/RecommandedCourse'
import { courseReducer } from '../Store/Slice/CoursesSlice'
import Footer from '../Components/Footer'
import RegisterNow from '../Components/RegisterNow'


const Home = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch( courseReducer() )
  },[dispatch])


  return (
    <>
            <NavBar />

            <Banner />
            
            <RecommandedCourse  />

            <RegisterNow />

            <Footer />
    </>
  )
}

export default Home
