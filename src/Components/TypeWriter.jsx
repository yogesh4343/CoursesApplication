import React from 'react'
import {useTypewriter , Cursor, Typewriter} from "react-simple-typewriter"

const TypeWriter = () => {
    // console.log(lang)
    const changeLanguage = []
    

  return (
    <div>
           <Typewriter
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={12}
              delaySpeed={1600}
              words={['Python' , "Javs Script" , 'Node.js' , "C++" , "Next.js" , 'Tailwind.Css']}
 />
     </div>
  )
}

export default TypeWriter
