//import React, { useEffect, useState } from 'react'
import { useQuiz } from './QuizProvider'

const QuizTimer = () => {
  //const [timePassed, setTimePassed] = useState(0);
  const {
    timePassed,
    //setTimePassed,
    formatTime,
  } = useQuiz();

  return (
    <div
    className='
    font-bold bg-white p-1 px-2 rounded-md 
    '
    >
      <span>
        {formatTime(timePassed).minStr}
      </span>
      <span>:</span>
      <span>
        {formatTime(timePassed).secStr}
      </span>
    </div>
  )
}

export default QuizTimer