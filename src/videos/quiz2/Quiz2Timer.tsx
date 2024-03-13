import { useQuiz } from "./Quiz2Provider"

const Quiz2Timer = () => {
  const {
    timePassed,
    formatTime,
  } = useQuiz(); 

  return (
    <div>
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

export default Quiz2Timer