import useCountDown, { RADIUS } from "./useCountDown"
import { IconButton } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import { FaPause, FaStop,  } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import SettingsModal from "./SettingsModal";
//import './countDown.css';

const CountDownTimer = () => {
  const {
    //totalSeconds,
    displayTime,
    //timerStateUi,
    //finalTime,
    //setTime,
    start,
    pause,
    stop,
    pickTime,
    setPickTime,
    saveTimer,
    cancelTimer,
    percentagePassed,
    //settingsOpen,
  } = useCountDown();
  
  const TRACK_COLOR = '#f8fafc';
  const PROGRESS_COLOR = '#fca5a5';

  // useEffect(() => {
     

  //    updateProgress(20);
  // }, []);

  return (
    <div
    className="
    grid place-content-center pt-20    
    "
    >
      <div className="
      grid place-content-center #bg-yellow-400 w-[240px] h-[240px]
      relative">
        <svg
        className="#bg-red-400 absolute top-0 bottom-0 z-10 transition-all"
        width={240}
        height={240}
        >
          {/* track */}
          <circle
          cx={120}
          cy={120}
          r={RADIUS}
          fill="none"
          stroke={TRACK_COLOR}
          strokeWidth={20}
          />

          {/* progress bar */}
          <circle
          id="progress"
          // set to half of svg width and height
          cx={120}
          cy={120}
          r={RADIUS}
          fill="none"
          stroke={PROGRESS_COLOR}
          strokeWidth={20}
          // 0 is length of dashed or colored area and 565.48, gives you an empty track all around: circumference (length of gaps between dashed areas)
          strokeDasharray={`0, ${2 * Math.PI * RADIUS}`}
          // progress bar filled from the beginning
          //strokeDasharray={`0, ${2 * Math.PI * RADIUS}`}

          strokeDashoffset={percentagePassed}
          />
        </svg>

        {/* counter container */}
        <div
        className="
        relative z-20
        grid place-content-center text-center gap-4
        bg-green-100 p-3 #rounded-md
        w-[200px] h-[200px] rounded-full
        "
        >
          <SettingsModal
          pickTime={pickTime}
          setPickTime={setPickTime}
          saveTimer={saveTimer}
          cancelTimer={cancelTimer}
          >
            <div
            className="
            bg-white rounded-md font-bold text-3xl p-2
            "
            //onClick={settingsOpen}
            >
              <span >
              {displayTime.hours}
              </span>
              :
              <span >
              {displayTime.minutes}
              </span>
              :
              <span >
              {displayTime.seconds}
              </span>
            </div>
          </SettingsModal>

          {/* actions */}
          <div
          className="
          flex items-center justify-center gap-2
          "
          >
            <IconButton
            aria-label=""
            size={'sm'}
            icon={<FaPlay size={18}/>}
            isRound={true}
            colorScheme="green"

            onClick={start}
            />
            <IconButton
            aria-label=""
            size={'sm'}
            icon={<FaPause size={18}/>}
            isRound={true}
            colorScheme="green"

            onClick={pause}
            />
            <IconButton
            aria-label=""
            size={'sm'}
            icon={<FaStop size={18}/>}
            isRound={true}
            colorScheme="green"

            onClick={stop}
            />
          
          </div>
        </div>

      </div>
      
      <Toaster/>
    </div>
  )
}

export default CountDownTimer