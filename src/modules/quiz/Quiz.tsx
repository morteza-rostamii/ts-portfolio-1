import { Button, Skeleton } from "@chakra-ui/react"
import Option from "./Option"
import { useQuiz } from "./QuizProvider"
import { TQuestion } from "./quiz.types";
import { HiArrowLongRight } from "react-icons/hi2";
import GameScreen from "./GameScreen";
import QuizBox from "./QuizBox";
import QuizTimer from "./QuizTimer";

const Quiz = () => {
  const {
    questions,
    activeQuestion,
    score,
    uiState,

    // refs
    refClickSound,
    refCorrectSound,
    refWrongSound,
  } =  useQuiz();

  return (
    <div className="h-full p-4 #bg-red-50">

      <section
      className="
      flex flex-col #gap-4
      #p-4 bg-green-100 #h-full rounded-md overflow-hidden
      max-w-[600px] mx-auto shadow-md
      "
      >

        <header
        className="
        flex items-center justify-between p-4 #rounded-lg shadow-md
        "
        >
          <div>
              
            <QuizTimer/>
              
          </div>

          <div
          className="
          grid place-content-center
          font-bold text-xl bg-white p-1 px-2 rounded-full w-8 h-8
          "
          >
            {score}
          </div>
        </header>

        <QuizBox/>
        
        {/* footer */}
        <footer
        className="
       p-4 #rounded-lg text-lg font-bold
        "
        >
          <p
          className="
          flex items-center gap-3
          "
          >
            {activeQuestion + 1}
            <span>out of</span>
            {questions?.length} 
          </p>
        </footer>
      </section>

      <GameScreen/>

      {/* sound effects */}
      <div>
        <audio 
        className="bg-red-50"
        src={'/quiz/click.mp3'}
        //autoPlay={true}
        //controls={true}
        ref={refClickSound}
        />
        <audio 
        src={'/quiz/failed.mp3'}
        //autoPlay={true}
        //controls={true}
        ref={refWrongSound}
        />
        <audio 
        src={'/quiz/yay-6120.mp3'}
        //autoPlay={true}
        //controls={true}
        ref={refCorrectSound}
        
        />
      </div>
    </div>
  )
}

export default Quiz