import { ReactNode, createContext, useContext, useEffect, useRef, useState } from "react"
import useQuizTimer from "./hooks/useQuizTimer";
import useFetchQuestions from "./hooks/useFetchQuestions";

// type TQuizContext = {
//   //play: () => void,
// };

const QuizContext = createContext<any>({
  play: () => {},
});

export const useQuiz = () => {
  const {
    play,
    handOptionSelection,
    uiState,
    questionsLoading,
    questions,
    activeQuestion,
    selectedOption,
    optionStateUi,
    refClickSound,
    refCorrectSound,
    refWrongSound,
    score,
    next,

    // timer
    timePassed,
    setTimePassed,
    startTimer,
    stopTimer,
    formatTime,

  } = useContext(QuizContext);

  return {
    play,
    handOptionSelection,
    uiState,
    questionsLoading,
    questions,
    activeQuestion,
    selectedOption,
    optionStateUi,
    refClickSound,
    refCorrectSound,
    refWrongSound,
    score,
    next,

    // timer
    timePassed,
    setTimePassed,
    startTimer,
    stopTimer,
    formatTime,
  };
};

type TGameState = "off" | "on" | "win" | "over" | "draw";
type TOptionState = 'unselected' | 'selected' | 'decided';

// variables------------
export const WIN_SCORE = 20;
export const LOSE_SCORE = -20;
export const LOSE_TIME = 240; // seconds
//export let GAME_STATE: TGameState = 'off'; 
//export let OPTION_STATE: TOptionState =  'unselected';
let selectedChoice: string = '';
let gameLoopId: any = null;

const QuizProvider = ({
  children,
}: {
  children: ReactNode,
}) => {
  
  const [uiState, setUiState] = useState<TGameState>('off');
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  // selected option
  const [selectedOption, setSelectedOption] = useState<string>('');
  // option button states
  const [optionStateUi, setOptionStateUi] = useState<TOptionState>('unselected');

  // -------------score
  const [score, setScore] = useState(0);

  //--------------- audio
  const refClickSound = useRef(null);
  const refCorrectSound = useRef(null);
  const refWrongSound = useRef(null);

  //----------------timer
  const {
    timePassed,
    setTimePassed,
    startTimer,
    stopTimer,
    formatTime,
  } = useQuizTimer();

  // fetch questions
  const {
    questions,
    questionsLoading,
    fetchQuestions,
  } = useFetchQuestions();
  
  //---------------------------- Game Events ---------------------------

  // Game loop
  const setupGame = () => {
    resetGame();
    startTimer();
  }

  // --------------start the game:
  const play = async () => {
    await fetchQuestions();
    console.log('start-----game');
    // enter a loop
    setupGame();
  };

  // ------------------ select option
  const handOptionSelection = (option: string) => {
    setupSelectedOption(option);

    // effect 
    (refClickSound?.current as any).play();

    // change option_state to selected
    setupOptionState('selected');

    // after 3 seconds change sate 
    setTimeout(() => {
      setupOptionState('decided');

      // correct
      if (questions[activeQuestion].correctAnswer === selectedChoice) {
        (refCorrectSound.current as any).play();
        setScore((c:any) => c + 5);
      }
      // wrong
      else {
        (refWrongSound.current as any).play();
        setScore((c:any) => c - 5);
      }

      //refreshGameState();
    }, 3000);
  }

  const next = () => {
    if (activeQuestion < questions.length) {
      setActiveQuestion((c:number) => c + 1);

      //reset
      clearSelectedOption();

      setupOptionState('unselected');
    }
  };
  
  //---------------------------- set & clean ---------------------------

  const setupGameState = (gameState: TGameState) => {
    //GAME_STATE = gameState;
    setUiState(gameState);
  }

  const setupOptionState = (state: TOptionState) => {
    //OPTION_STATE = state;
    setOptionStateUi(state);
  }

  const setupSelectedOption = (option: string) => {
    setSelectedOption(option);
    selectedChoice = option;
  }

  const clearSelectedOption = () => {
    setSelectedOption('');
    selectedChoice = '';
  }

  function cleanup():void {
    stopTimer();
  }

  //---------------------------- Game State ---------------------------

  function resetGame():void {

    clearSelectedOption();

    setupGameState('on');
    
    setupOptionState('unselected');

    setActiveQuestion(0);

    setScore(0);
  }
  
  //---------------------------- Game State change ---------------------------
  
  const checkDraw = (): boolean => {
    let over = false;
    if (activeQuestion === questions?.length - 1) {
      if (score < WIN_SCORE) {
        setupGameState('draw');
        over = true;
      }
    }
    return over;
  }

  const checkTimeout = (): boolean => {
    let over = false;
    // if: timer runs out
    if (timePassed >= LOSE_TIME) {
      console.log('over', timePassed);
      setupGameState('over');
      over = true;
    }
    console.log('timeout over:: ', over);
    return over;
  }

  const checkWinOrLoseScore = (): boolean => {
    let over = false;
    // check for win
    if (score >= WIN_SCORE) {
      setupGameState('win');
      over = true;
    }

    // check for game over
    console.log(score, LOSE_SCORE)
    if (score <= LOSE_SCORE) {
      setupGameState('over');
      over = true;
    }
    return over;
  }

  // Game Loop
  useEffect(() => {
    
    if (uiState === 'on') {
      gameLoopId = setInterval(() => {

        console.log('--game loop:: ')
        
        // stop the Game
        if (
          checkDraw() ||
          checkTimeout() || 
          checkWinOrLoseScore()
        ) {
          console.log('end game---');
          clearInterval(gameLoopId);
          cleanup();
        }
      }, 200);
    }

    return () => clearInterval(gameLoopId);
  }, [uiState, score, timePassed, activeQuestion]);

  // End-----------------------

  const context = {
    play,
    handOptionSelection,
    questions,
    activeQuestion,
    uiState,
    questionsLoading,
    selectedOption,
    optionStateUi,

    refClickSound,
    refCorrectSound,
    refWrongSound,
    score,
    next,

    // timer
    timePassed,
    setTimePassed,
    startTimer,
    stopTimer,
    formatTime,
  };

  return (
    <>
    <QuizContext.Provider value={context}>
      {children}
    </QuizContext.Provider>
    </>
  )
}

export default QuizProvider