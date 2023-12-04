import React from 'react'
import Buttons from './Buttons/Buttons';
import Heading from './Heading';

const RegisterNow = () => {
  return (
    <div>
       <div className="w-full h-[380px] m-auto flex flex-col justify-center items-center gap-[42px]  overflow-hidden">

        <div className="flex flex-col justify-center gap-[28px]">

          <Heading heading="Register Now!" />

          <p className="text-[#4b4b4b] w-full  text-2xl text-center  h-[50px] font-Poppins  leading-7 md:h-auto sm:w-[510px] md:w-[562px] ">            Begin your journey today or preview a sample profile. Your next career move awaits!
          </p>
        </div>
        
       <div className="relative ">
       
        <div className="absolute  z-0   top-[-6rem] left-[-45.5rem] md:left-[-46.5rem]"> <svg xmlns="http://www.w3.org/2000/svg" width="746" height="221" viewBox="0 0 746 221" fill="none">
          <path d="M742 142C642 112 474.946 225.305 353 91.0001C205 -71.9999 -98.5465 3.74269 -34.4997 217.5" stroke="#BEEB42" strokeWidth="6" strokeLinecap="round"/>
        </svg></div>
        
        
        <div className="text-center my-8">
        
        
        <Buttons className=" " btn="Book Free Trial"/>

         <div className="mt-5 md:hidden">
           <Buttons btn="View Sample Profile"/>
         </div>
        </div>

        <div className="absolute    z-0  top-[-12rem] left-[9.6rem] md:left-[8.6rem]  "> <svg xmlns="http://www.w3.org/2000/svg" width="654" height="265" viewBox="0 0 654 265" fill="none">
        
        <path d="M3.50032 241C40.3833 251.61 141.277 258.23 280.5 109.9999C406.499 -17.0005 479.5 -46.9998 519.5 185C519.5 256.214 909.331 192.166 988 168" stroke="#BEEB42" strokeWidth="6" strokeLinecap="round"/>
        </svg></div>
      </div>
      </div>
  </div>
  )
}

export default RegisterNow
