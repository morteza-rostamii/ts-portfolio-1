import create from 'zustand'
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { formatNumToStr } from "./countDownUtils";

const stopToast = (time:string) => toast(time);

const TOTAL_SEC = 0;
let totalSeconds = 0;
let intervalId: any | null = null;
let isTimerRunning = false;

const useCountDownStore = create<any>((set: any) => ({
  
  

  
}));

const unsub = useCountDownStore.subscribe((state:any) => {
  console.log('useCountDownStore: ', state);
});

export default useCountDownStore;