import Calculator from "../calculator/Calculator"
import CandyCrush from "../candyCrush/CandyCrush"
import CountDown2 from "../countDown2.0/CountDown2"
import CountDownTimer from "../countDownTimer/CountDownTimer"
import CryptoPrice from "../cryptoPrice/CryptoPrice"
import MultiSelectInput1 from "../multiSelect/MultiSelectInput1"
import CommentsProvider from "../nestedComments/CommentsProvider"
import NestedComments from "../nestedComments/NestedComments"
import Quiz from "../quiz/Quiz"
import QuizProvider from "../quiz/QuizProvider"
import TodoList1 from "../todo1/TodoList1"
import TwitchHome from "../twitchHome/TwitchHome"
import UserProfile from "../userProfile/UserProfile"
import Wordle from "../wordle/Wordle"
import IndexSection from "./IndexSection"

const IndexPage = () => {
  return (
    <main
    className="
    flex flex-col gap-4 #bg-green-50 h-full
    "
    >
      {/* <CountDownTimer/> */}

      {/* <CountDown2/> */}

      {/* <CommentsProvider>
        <NestedComments/>
      </CommentsProvider> */}

      <QuizProvider>
      <Quiz/>
      </QuizProvider>

      
    </main>
  )
}

export default IndexPage