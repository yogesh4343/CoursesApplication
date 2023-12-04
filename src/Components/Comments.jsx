import React from 'react'
import CommentCard from './CommentCard'
import Heading from './Heading'

const Comments = () => {
  return (
    <div className='flex  flex-wrap justify-center gap-4 p-4'>
     <Heading heading=" User Thoughts" />
    <div className="container m-auto flex justify-center   flex-wrap" ></div>
    <CommentCard />
    <CommentCard />
    </div>
  )
}

export default Comments
