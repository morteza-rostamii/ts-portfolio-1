import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { formatNumToStr } from "./countDownUtils";

const stopToast = (time:string) => toast(time);

let TOTAL_SEC = 0;
let totalSeconds = 0;
let intervalId: any | null = null;
//let isTimerRunning = false;
let timerState: 'on' | 'off' | 'pause' = 'off'; 

export const RADIUS = 110;

function useCountDown() {
  // for calculation 
  //const [totalSeconds, setTotalSeconds] = useState(120);
  // time for display
  const [displayTime, setDisplayTime] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });
  // state of the timer for ui purposes
  const [timerStateUi, setTimerStateUi] = useState<'on' | 'off' | 'pause'>('off');
  // final display time at which we stopped
  //const [finalTime, setFinalTime] = useState<any>(null);

  // select time state------------
  const [pickTime, setPickTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // percentage time has collapsed
  const [percentagePassed, setPercentagePassed] = useState(2 * Math.PI * RADIUS);

  //@private
  function convertHmsToSeconds(theTime: {
    hours: number,
    minutes: number,
    seconds: number,
  }) {
    let seconds = 0;
    const SEC_IN_HOUR = 3600;
    const SEC_IN_MIN = 60;

    seconds = seconds + theTime.hours * SEC_IN_HOUR;
    seconds = seconds + theTime.minutes * SEC_IN_MIN;
    seconds = seconds + theTime.seconds;

    return seconds;
  }

  //@public
  const saveTimer = () => {
    // set the timer to the time he picked
    const newSeconds = convertHmsToSeconds(pickTime);

    totalSeconds = newSeconds;
    TOTAL_SEC = newSeconds;
    const hours = formatNumToStr(pickTime.hours);
    const minutes = formatNumToStr(pickTime.minutes);
    const seconds = formatNumToStr(pickTime.seconds);
    //console.log('save timer------------', totalSeconds, hours, minutes, seconds);

    setDisplayTime({
      hours,
      minutes,
      seconds,
    });
  }

  // window.setTime = () => {
  //   setDisplayTime({
  //     hours: '03',
  //     minutes: '03',
  //     seconds: '45'
  //   });
  // }

  const cancelTimer = () => {
    // close the modal and clear pickTime
  }

  // private functions--------------------

  function calcTime(seconds: number) {
    const SEC_IN_HOUR = 3600;
    const SEC_IN_MIN = 60;

    const hours = Math.floor(seconds / SEC_IN_HOUR);

    // remaining seconds
    seconds = seconds % SEC_IN_HOUR;

    const minutes = Math.floor(seconds / SEC_IN_MIN);

    // remainder
    seconds = seconds % SEC_IN_MIN;

    return {
      hours,
      minutes,
      seconds,
    }
  }

  function setupDisplayTime() {
    //  convert totalSeconds to: H:M:S format and update state
    const time = calcTime(totalSeconds);

    const hours = formatNumToStr(time.hours);
    const minutes = formatNumToStr(time.minutes);
    const seconds = formatNumToStr(time.seconds);

    // set time state
    setDisplayTime({
      hours,
      minutes,
      seconds,
    });
  }

  function setup() {
    intervalId = setInterval(() => {
      if (totalSeconds > 0) {
        // this is for logic =: because stale state problem. 
        timerState = 'on';
        // this is for ui
        setTimerStateUi('on');
        totalSeconds--;

        const percentage = calcProgress();
        updateProgress(percentage);
        
        console.log('timerState........', timerState);
      }
      else {
        // timer is at zero: 
        // stop interval
        console.log('--done')
        stop();
      }

      // set display time
      setupDisplayTime();

      //console.log(totalSeconds);
    }, 1000);
  }

  // public functions---------------------

  const start = () => {
    if (timerState === 'off' && totalSeconds > 0) {
      setup();
    }
  }

  const pause = () => {
    if (timerState === 'on' || timerState === 'pause') {
      if (timerState === 'on') {
        //console.log('clear interval')
        clearInterval(intervalId);
        timerState = 'pause';
        setTimerStateUi('pause');
      }
      else {
        // if not running. run again
        setup();
      }
    }
  }

  const stop = () => {
    console.log('-----------999999999999999999999', timerState);
    if (timerState === 'on' || timerState === 'pause') {
      console.log('************88888-----------stop.');
      clearInterval(intervalId);
      timerState = 'off';
      setTimerStateUi('off');
      //setFinalTime(displayTime);
      const finalTime = calcTime(totalSeconds);
      toast(`${formatNumToStr( finalTime.hours)}:${formatNumToStr(finalTime.minutes)}:${formatNumToStr(finalTime.seconds)}`);
  
      // reset timer to initial time
      totalSeconds = TOTAL_SEC;
      setupDisplayTime();

      // clear progressbar
      setPercentagePassed(2 * Math.PI * RADIUS);
    }
  }

  // initial timer setup
  useEffect(() => {
    //setupDisplayTime();
  }, []);

  // toast on finalTime set
  // useEffect(() => {
  //   if (finalTime) {
  //     toast(`${finalTime.hours}:${finalTime.minutes}:${finalTime.seconds}`);
  //   }
  // }, [finalTime]);

  // useEffect(() => {
  //   console.log(displayTime)
  // }, [displayTime.hours]);

  //---------------------- UPDATE Progress bar -----------------------

  const calcProgress = () => {
    const percentage = totalSeconds / TOTAL_SEC * 100;
    return percentage;
  }

  const updateProgress = (percentage: number) => {
    // radius of the circle
    
    // circumference of circle
    const circumference = 2 * Math.PI * RADIUS;
    // totalCircumference - percentage has progressed
    // 360 * 
    const offset = circumference - (percentage / 100) * circumference;

    const progress = document.getElementById('progress');

    // set dashed area to full circumference
    progress?.setAttribute('stroke-dasharray', circumference.toString());
    // progressed area.
    //progress?.setAttribute('stroke-dashoffset', offset.toString());

    //console.log('offset--', offset);
    setPercentagePassed(offset);
  }

  useEffect(() => {
    console.log(timerState);
  }, [timerState]);
  
  return {
    totalSeconds,
    displayTime,
    timerStateUi,
    //finalTime,
    pickTime,
    percentagePassed,
    //updateProgress,
    setPickTime,
    saveTimer,
    cancelTimer,
    //setTime,
    start,
    pause,
    stop,
  }
}

export default useCountDown