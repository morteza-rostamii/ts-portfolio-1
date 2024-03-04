import { IconButton } from "@chakra-ui/react";
import SetTimeModal from "./SetTimeModal";
import useCountDownStore from "./countDown2.store"
import { FaPause, FaPlay, FaStop } from "react-icons/fa";
import { useEffect } from "react";

const CountDown2 = () => {
  const {
    timeUi,
    start,
    pause, 
    stop,
    init,
  } = useCountDownStore();

  useEffect(() => {
    init();
  }, []);

  return (
    <div
    className="
    grid place-content-center h-full
    "
    >
      <section>

        <div
        className="
        flex items-center justify-center
        w-[200px] h-[200px] bg-green-200 rounded-full
        "
        >

          {/* counter container */}
          <div
          className="
          relative z-20
          grid place-content-center text-center gap-4
          bg-green-100 p-3 #rounded-md
          w-[200px] h-[200px] rounded-full
          "
          >
            <SetTimeModal
            
            >
              <div
              className="
              bg-white rounded-md font-bold text-3xl p-2
              "
              //onClick={settingsOpen}
              >
                <span >
                {timeUi.hours}
                </span>
                :
                <span >
                {timeUi.minutes}
                </span>
                :
                <span >
                {timeUi.seconds}
                </span>
              </div>
            </SetTimeModal>

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
        

      </section>
    </div>
  )
}

export default CountDown2