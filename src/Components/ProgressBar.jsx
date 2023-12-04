import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const ProgressBar = ({percents}) => {
    const percentage = Math.round(percents);

  return (
    <div className='w-[8rem]'>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          rotation: 0,

          strokeLinecap: 'butt',

          textSize: '16px',

          pathTransitionDuration: 0.5,

        pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
        textColor: 'black',
        trailColor: '#d6d6d6',
        backgroundColor: '#3e98c7',
      })}
    />
    </div>
  )
}

export default ProgressBar
