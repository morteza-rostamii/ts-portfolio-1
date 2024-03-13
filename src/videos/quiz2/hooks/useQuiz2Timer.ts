
// currentTime - now_time = collapsed time

import { useState } from "react";

let timer: any = null;

function useQuiz2Timer() {
  const [timePassed, setTimePassed] = useState<number>(0);

  const startTimer = () => {
    const targetTime = new Date().getTime();

    const calculateTimePassed = () => {
      const currentTime = new Date().getTime();
      const difference = currentTime - targetTime;
      
      const timePassedSeconds = Math.max(0, Math.floor(difference / 1000));

      setTimePassed(timePassedSeconds);
    }

    // loop 
    timer = setInterval(() => {
      calculateTimePassed();
    }, 1000);

  }

  const stopTimer = () => {
    setTimePassed(0);
    console.log('stopped timer--');
    if (timer) clearInterval(timer);
  }

  // 01 : 22
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    // 01 : 03
    const minStr = `${minutes.toString().padStart(2, '0')}`;
    
    const secStr = `${seconds.toString().padStart(2, '0')}`;

    return {
      minStr,
      secStr,
    };
  }

  return {
    timePassed, // seconds
    setTimePassed,
    startTimer,
    stopTimer,
    formatTime,
  }
}

export default useQuiz2Timer

