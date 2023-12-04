import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteReducer } from '../Store/Slice/CoursesSlice'
import ProgressBar from './ProgressBar'

const LargeCard = ({cont}) => {

    const dispatch = useDispatch();
    const [check , unCheck] = useState(false)
    const [complete , setComplete] = useState("Course Not Completed")

    let description = cont.description.slice(0,160)


    const changeFunc = ()=>{

        if(check === true){
            unCheck(false)
            setComplete("Course Not Completed")
        }else{
            unCheck(true);
            setComplete("Course Completed")
        }
    }


    // delete 
    const deleteBtn = (x)=>{    
        dispatch(deleteReducer(x.id));
    }

  return (
   



    
<div className="flex m-auto  flex-col items-center bg-white border border-gray-200 rounded-lg shadow cursor-pointer md:w-[54rem] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 relative p-4 dark:hover:bg-gray-700">

<div className="delete flex  justify-center items-center text-center right-[6px] absolute md:right-[-9px] md:-top-6 bg-black rounded-full w-12 h-12 text-2xl text-white "  onClick={()=>deleteBtn(cont)}><span className=''>🗑️ </span></div>
<div className='flex'>

      
      <div className="tick absolute   md:top-[-7px] md:left-[-7px] flex  text-center gap-3 justify-center items-center "> 
     <input type="checkbox" onChange={()=>changeFunc()} value={check} name="" id="" className='h-7 w-6 rounded-full shadow'/>

    

     { check ?  <div className="span bg-green-500 px-2 rounded-lg text-white ">
        {complete}
     </div>  : <div className="span bg-gray-300 text-black px-2 rounded-lg">
        {complete}
     </div> }

 </div>


 <NavLink to={`/singlepage/${cont.id}`} className="flex flex-col  md:mt-4 md:flex-row items-end " >
    <img className="bg-cover  items-center rounded-t-lg mt-4 md:w-[11rem] md:h-[7rem]  md:rounded-none md:rounded-s-lg" src={cont.thumbnail} alt="img" />
    <div className="flex flex-col justify-between p-4 leading-normal">
     <div className="heading_author flex justify-between  font-serif">
     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{cont.name}</h5>
     <div className="auth italic ">
    ~ {cont.instructor}
     </div>
     </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}.....</p>
    </div>




   <div className="progress flex w-[4rem]  md:w-[5rem] items-end">  <ProgressBar percents={cont.price} /></div>


</NavLink>
</div>
 
    </div>
  )
}

export default LargeCard
