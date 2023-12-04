import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'
import Loader from './Loader'

const RecommandedCourse = () => {

  const {courses , status} = useSelector((state) => state.Course) 
  const {dta} = {...courses}

  return (
    <>
       <div className="container m-auto px-5 lg:mt-24">
       <div className="heading my-9 justify-center text-center text-5xl font-bold flex flex-col xl:flex-row xl:text-5xl dark:text-white text-purple-700 "> Recommended Courses </div> 


      <div className="cards flex flex-wrap gap-4 justify-center p-4">
   
      {status=== "loading" ? 
        <Loader />
        :
       <>
        {dta && dta.map((curEl,ind)=>{
           if(curEl.feature === true){
            return  <Card key={ind} {...curEl} />
          }
        })}
      </> }
       </div>
       </div>

    </>
  )
}

export default RecommandedCourse
