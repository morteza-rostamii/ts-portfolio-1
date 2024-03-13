//import { Button } from "@chakra-ui/react"
import Quiz2Box from "./Quiz2Box"
import { useQuiz } from "./Quiz2Provider"
import Quiz2Timer from "./Quiz2Timer";
import GameScreen from "./GameScreen";

const Quiz2 = () => {
  const {
    //play,
    //questionsLoading,
    activeQuestion,
    questions,
    score,
    refClickSound,
    refCorrectSound,
    refWrongSound,
  } = useQuiz();

  return (
    <div 
    className="
    h-full p-4
    "
    >
      <section
      className="
      flex flex-col gap-4
      bg-green-100 max-w-[600px] mx-auto p-4
      "
      >
        <header
        className="
        flex items-center justify-between
        "
        >
          <div>
            <Quiz2Timer/>
          </div>

          <div>
            {score}
          </div>
        </header>

        <Quiz2Box/>

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

export default Quiz2