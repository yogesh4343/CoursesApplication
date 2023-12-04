import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import Buttons from '../Components/Buttons/Buttons'
import CourseInfo from '../Components/CourseInfo'
import Footer from '../Components/Footer'
import Heading from '../Components/Heading'
import Loader from '../Components/Loader'
import NavBar from '../Components/NavBar'
import VideoComponent from '../Components/VideoComponent'
import { courseReducer } from '../Store/Slice/CoursesSlice'

const SinglePage = () => {
    const param = useParams()
  
    const dispatch = useDispatch()

    const [newCheckArray , setNewCheckArray] = useState([]);
    const [check , unCheck] = useState(false)

    const {courses , status} = useSelector((state) => state.Course) 
  const {dta} = {...courses}

    useEffect(()=>{
      dispatch( courseReducer() )
    },[dispatch , param ])



    const [changeTopic, setChangeTopic] = useState('')
    const [changeday, setChangeDay] = useState("") 
    const [changeContent, setChangeContent] = useState("") 
    const [videos , setVideos] = useState("")

    const changeCont  =  changeContent.split("?")

let img = ""
let course = ""


const newCourse = []
const newSingleCourse = []


dta && dta.filter((curEl,ind)=>{
    if(curEl._id === param.id){
        newSingleCourse.push(curEl)
        img = curEl.thumbnail
        course = curEl.name

        return curEl.syllabus && curEl.syllabus.map((cur,ix)=>{
            newCourse.push(cur)
        })
    }
})


const courseClickFunc = (ele)=>{
    setChangeTopic(ele.topic);
    setChangeDay(ele.Day);
    setChangeContent(ele.content);
    setVideos(ele.video)
}




let totalNewCourse = newCourse.length;

let totalCheckCourse = newCheckArray.length;

let percent = (totalCheckCourse / totalNewCourse) * 100


useEffect(()=>{
  // dispatch(percentageReducer(percent))
  newSingleCourse && newSingleCourse.map((curEl,inx)=>{

    setChangeTopic(curEl.name);
    setChangeDay(curEl.duration);
    setVideos(curEl.url)

  })
},[percent , totalCheckCourse , totalNewCourse ])

const addCheckFunc = (curEl)=>{

  if(check === false){
     
      setNewCheckArray((prev)=>{
              return [...prev , curEl]
          })
          unCheck(true)
  }else{
      unCheck(false);

     let fil =  newCheckArray && newCheckArray.filter((cur, ix)=>{
        return cur._id !== curEl._id
      });
      setNewCheckArray(fil)

  }
}
 

  return (
    <>
        <NavBar />

      <div className="container m-auto mt-6 ">



      {status=== "loading" ? 
    <div className='text-center '>  <Loader /> </div>
: <>

      <Heading heading={course}/> 

      <CourseInfo courseInfo={newSingleCourse} pct={percent}/>


        <div className="top flex flex-col gap-4  h-[30rem] lg:flex-row md:h-[42rem] lg:h-[34rem] cursor-pointer ">
        <div className="topLeft w-[96%] m-auto flex justify-center lg:w-[76%]">

        <VideoComponent  vid={videos}/>
        </div>
        <div className="topRight w-[96%] h-[105rem]  m-auto  overflow-y-scroll  lg:w-[36%] lg:h-[34rem] shadow-sm">
            <div className="smallCards font-bold text-[15px]">

         
<p className='text-center my-5  text-2xl text-deep-orange-600'>Course Started Here 👇 </p>

                {newCourse && newCourse.map((curEl,inx)=>{

               return <div key={inx} className="smallCard w-full text-left text-black p-4 rounded-xl  my-2 shadow-lg   " onClick={()=>courseClickFunc(curEl)}>
                       <div className="tickSpan flex justify-between">  <p> {curEl.Day} : {curEl.topic}</p> <span className='ml-4'> <input onClick={()=>addCheckFunc(curEl)} type="checkbox" name="checkBox" id="checkBox" className='h-5 w-5 rounded-full shadow' /> </span> </div>
                </div>
                })}
                    
               
            </div>
        </div>
        </div>
                <NavLink to="/course" className="m-8 text-center md:text-left" > <Buttons btn="Enroll Courses" /> </NavLink>



                     
       

        <div className="bottom my-14 md:my-8">


            <div className="day font-bold text-center  text-3xl my-4 lg:text-left">
                 {changeday} <span> {changeTopic} </span> 
            </div>
            <div className="cont text-xl p-4  ">
          {changeCont  && changeCont.map((cur,z)=>{
            return <> <p> {cur} </p> <br /> </>
          })}
            </div>
        </div>
      </> }

      </div>

      <Footer />
    </>
  )
}

export default SinglePage
