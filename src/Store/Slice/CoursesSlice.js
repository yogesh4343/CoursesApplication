import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const STATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const CourseSlice = createSlice({
    name:"Course",
    initialState:{
        courses :[],

        totalCourse:localStorage.getItem("coursesAdded") ? JSON.parse(localStorage.getItem("coursesAdded")) : [],
        
        searchCourse : [],
        
        // percent : ""

    },
    status: STATUS.IDLE,



    reducers:{
        getStatus(state,action){
            state.status = action.payload
        },

        getCourses(state,action){
            state.courses = action.payload
        },
        addEnrollCourse(state,action){

            state.totalCourse.push(action.payload)
        },

        showCourse(state,action){
            state.searchCourse = action.payload
        },

        deleteFunc(state, action){
            state.totalCourse = action.payload
        }
       

    }
})


export default CourseSlice.reducer;

export const {getStatus , getCourses , addEnrollCourse , showCourse  ,deleteFunc } = CourseSlice.actions



export  function courseReducer(){
        return async function courseThunk(dispatch , action){
            dispatch(getStatus(STATUS.LOADING))

            try{
                let link = `https://apiforcourses-production.up.railway.app/api`
                    const {data} = await axios.get(link)
                dispatch(getStatus(STATUS.IDLE));
                dispatch(getCourses(data))
                
            }catch (err) {  
                dispatch(getStatus(STATUS.ERROR));
            }
        }

}



// single course 

export  function elrollCourseReducer(addEnroll){
        return async function enrollCourseThunk(dispatch , getState){
            dispatch(getStatus(STATUS.LOADING))

            try{
                let oldCourses = getState().Course.totalCourse

                const objectsAreEqual = (a,b)=> a.id === b.id
                const result = []  ;
                oldCourses.forEach((item) => {
                    let itemInResult = result.find((resultItem)=> objectsAreEqual(item, resultItem));
                    
                    if(!itemInResult){
                        result.push(item);
                    }
                });                
                

                dispatch(getStatus(STATUS.IDLE));

                
                dispatch(addEnrollCourse(addEnroll))

                localStorage.setItem('coursesAdded' , JSON.stringify(getState().Course.totalCourse))

                
            }catch (err) {  
                dispatch(getStatus(STATUS.ERROR));
            }
        }

}





// search func 

export  function searchReducer(searchCont){
        return async function searchThunk(dispatch , getState){
            dispatch(getStatus(STATUS.LOADING))

            try{
                let link = `https://apiforcourses-production.up.railway.app/api?name=${searchCont}`
                    const {data} = await axios.get(link)
                dispatch(getStatus(STATUS.IDLE));
                dispatch(showCourse(data))
                
            }catch (err) {  
                dispatch(getStatus(STATUS.ERROR));
            }
        }

}

// delet 
export  function deleteReducer(idx){
        return async function deleteThunk(dispatch , getState){
            dispatch(getStatus(STATUS.LOADING))

            try{


                let oldCourses = getState().Course.totalCourse


                let filterArr = oldCourses.filter((curEl , id)=>{
                    return curEl.id !== idx
                })

                dispatch(getStatus(STATUS.IDLE));
                dispatch(deleteFunc(filterArr))

                localStorage.setItem('coursesAdded' , JSON.stringify(getState().Course.totalCourse))
                
            }catch (err) {  
                dispatch(getStatus(STATUS.ERROR));
            }
        }

}