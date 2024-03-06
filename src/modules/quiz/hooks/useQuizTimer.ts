import { useState } from "react";

let timer: any = null;

function useQuizTimer() {
  //---------timer
  const [timePassed, setTimePassed] = useState<number>(0);

  const startTimer = () => {
    // get current time each time timer starts
    const targetTime = new Date().getTime();
    
    // every 1 second =: calculate the collapsed time
    const calculateTimePassed = () => {
      // time in milliseconds
      const currentTime = new Date().getTime();
      const difference = currentTime - targetTime;

      // use max to not go into negative
      const timePassedSeconds = Math.max(0, Math.floor(difference / 1000));

      console.log('**timer', timePassedSeconds);

      setTimePassed(timePassedSeconds);

    }

    timer = setInterval(() => {
      calculateTimePassed();

      
    }, 1000);
  }

  const stopTimer = () => {
    setTimePassed(0);
    console.log('stop-timer', timer);
    if (timer) clearInterval(timer);
  }

  // format time to: minutes : seconds
  const formatTime = (time:number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const minStr = `${minutes.toString().padStart(2, '0')}`;
    
    const secStr = `${seconds.toString().padStart(2, '0')}`;

    return {
      minStr,
      secStr,
    };
  }

  return {
    timePassed,
    setTimePassed,
    startTimer,
    stopTimer,
    formatTime,
  };
}

export default useQuizTimer