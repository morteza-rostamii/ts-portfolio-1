import { Button } from "@chakra-ui/react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { formatNumToStr } from "./countDownUtils";

// Counter ------------
const Counter = ({
  type='sec',
  count,
  setCount,
}: {
  type: 'hour' | 'min' | 'sec',
  count: number,
  setCount: (c:any) => any,
}) => {
  //const [count, setCount] = useState(0);
  const MAX_HOUR = 99;
  const MAX_MIN = 59;
  const MAX_SEC = 59;
  
  const increment = () => {
    switch (type) {
      case 'hour':
        if (count < MAX_HOUR) {
          setCount((c:any) => ({
            ...c,
            hours: c.hours + 1,
          }));
        }
        else {
          setCount((c:any) => ({
            ...c,
            hours: 0,
          }));
        }
        break;
      case 'min':
        if (count < MAX_MIN) {
          setCount((c:any) => ({
            ...c,
            minutes: c.minutes + 1,
          }));
        }
        else {
          setCount((c:any) => ({
            ...c,
            minutes: 0,
          }));
        }
        break;
      case 'sec':
        if (count < MAX_SEC) {
          setCount((c:any) => ({
            ...c,
            seconds: c.seconds + 1,
          }));
        }
        else {
          setCount((c:any) => ({
            ...c,
            seconds: 0,
          }));
        }
        break;
      default:
        break;
    }
  }

  const decrement = () => {
    switch (type) {
      case 'hour':
        if (count > 0) {
          setCount((c:any) => ({
            ...c,
            hours: c.hours - 1,
          }));
        }
        else {
          setCount((c:any) => ({
            ...c,
            hours: MAX_HOUR,
          }));
        }
        break;
      case 'min':
        if (count > 0) {
          setCount((c:any) => ({
            ...c,
            minutes: c.minutes - 1,
          }));
        }
        else {
          setCount((c:any) => ({
            ...c,
            minutes: MAX_MIN,
          }));
        }
        break;
      case 'sec':
        if (count > 0) {
          setCount((c:any) => ({
            ...c,
            seconds: c.seconds - 1,
          }));
        }
        else {
          setCount((c:any) => ({
            ...c,
            seconds: MAX_SEC,
          }));
        }
        break;
      default: 
        break;
    }
  }

  return (
    <div
    className='
    flex flex-col items-center
    '
    >
      <Button
      onClick={increment}
      >
      <HiChevronUp size={24}/>
      </Button>
      <div
      className='
      text-2xl font-bold text-gray-700
      '
      >
        {formatNumToStr(count || 0)}
      </div>
      <Button
      onClick={decrement}
      >
      <HiChevronDown size={24}/>
      </Button>
    </div>
  )
}

export default Counter