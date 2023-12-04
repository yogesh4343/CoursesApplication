import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import NotFound from '../Components/NotFound'

const SearchPage = () => {

    const {searchCourse} = useSelector((state) => state.Course) ;


    const {dta ,len} = {...searchCourse}

  return (
    <>
    {len===0 ? <NotFound /> : <> 
        <NavBar />
        <div className="container m-auto  p-6 my-12 ">

    <div>

    <div className="cards flex flex-wrap mt-14 gap-7 m-auto  justify-center    ">
    {dta && dta.map((curEl,ind)=>{
       return <Card key={ind} {...curEl} />
     })}
    
      </div> 
      </div>
        </div> 
        <Footer />
        </>
        }
    </>
  )
}

export default SearchPage
