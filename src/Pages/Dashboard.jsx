import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../Components/Footer'
import Heading from '../Components/Heading'
import LargeCard from '../Components/LargeCard'
import Loader from '../Components/Loader'
import NavBar from '../Components/NavBar'
import NotFound from '../Components/NotFound'

const Dashboard = () => {

  const { totalCourse, status } = useSelector((state) => state.Course)


  const objectsAreEqual = (a,b)=> a.id === b.id
  const result = []  ;
  totalCourse.forEach((item) => {
      let itemInResult = result.find((resultItem)=> objectsAreEqual(item, resultItem));
      
      if(!itemInResult){
          result.push(item);
      }
  });
  

  return (
    <>

      {totalCourse.length === 0 ? <NotFound /> : <>
        <NavBar />

        <div className="container m-auto ">

          <Heading heading="Enrolled Courses" />

          {status === "loading" ?
            <Loader />
            :
            <>
              <div className="card flex flex-col m-auto gap-8 w-full justify-center my-14 ">
                {result && result.map((curEl, ind) => {
                  return <LargeCard key={ind} cont={curEl} />
                })}
              </div>
            </>}
        </div>


        <Footer />

      </>}
    </>
  )
}

export default Dashboard
