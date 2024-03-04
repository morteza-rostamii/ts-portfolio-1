import create from 'zustand'
//import { useEffect, useState } from "react";
//import toast from "react-hot-toast";
import { formatNumToStr, secondsToHms } from "./countDown.utils";
//import { TDisplayTime } from './countDown2.types';

//const stopToast = (time:string) => toast(time);

const TIME = {
  HOUR: 'hour',
  MINUTE: 'minute',
  SECOND: 'second',
};

// 120 = 2min
// H : M : S
let SEC_TOTAL = 120;
let totalSeconds = 120; // 120
let intervalId = null;

// timerState
let timerState: 'on' | 'off' | 'pause' = 'off';

const useCountDownStore = create<any>((set: any, get:any) => ({

  // display time // 00 : 
  timeUi: {
    hours: '00',
    minutes: '00',
    seconds: '00',
  },

  // for time selector view
  timeSelect: {
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
  
  // setters---------------- 120
  setTimeUi: (currentSeconds: number) => {

    // 120 =: H:M:S
    const time = secondsToHms(currentSeconds);

    // 2 =: "02"
    const hours = formatNumToStr(time.hours);
    const minutes = formatNumToStr(time.minutes);
    const seconds = formatNumToStr(time.seconds);

    set((s:any) => ({
      ...s,
      timeUi: {
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      },
    }));
  },

  setTimeSelect: (
    count: number, 
    type: 'hour' | 'minute' | 'second', 
    ) => {

    switch (type) {
      case TIME.HOUR:
        set((s:any) => ({
          ...s,
          timeSelect: {
            ...s.timeSelect,
            hours: count,
          },
        }));
        break;
      case TIME.MINUTE:
        set((s:any) => ({
          ...s,
          timeSelect: {
            ...s.timeSelect,
            minutes: count,
          },
        }));
        break;
      case TIME.SECOND:
        set((s:any) => ({
          ...s,
          timeSelect: {
            ...s.timeSelect,
            seconds: count,
          },
        }));
        break;
      default:
        break;
    };
  },

  // private methods--------------

  setup: () => {
    intervalId = setInterval(() => {

      if (totalSeconds > 0) {
        timerState = 'on';

        totalSeconds--;

      }
      else {
        stop();
      }

      get().setTimeUi(totalSeconds);

    }, 1000);
  },

  // public actions---------------
  
  init: () => {
    get().setTimeUi(totalSeconds);
  },

  saveSelectedTime: () => {

  },

  start: () => {
    if (timerState === 'off' && totalSeconds > 0) {
      get().setup();
    }
  },
  
  pause: () => {

  },

  stop: () => {

  },

}));

const unsub = useCountDownStore.subscribe((state:any) => {
  console.log('useCountDownStore: ', state);
});

export default useCountDownStore;