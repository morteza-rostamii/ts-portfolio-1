import { ReactNode, createContext, useContext, useEffect, useRef, useState } from "react"
import useFetchQuestions from "./hooks/useFetchQuestions";
import useQuiz2Timer from "./hooks/useQuiz2Timer";

const QuizContext = createContext<any>({});

export const useQuiz = () => {
  const {
    play,
    questions,
    questionsLoading,
    activeQuestion,
    next,
    score,
    handOptionSelection,
    selectedOption,
    optionStateUi,
    timePassed,
    startTimer,
    stopTimer,
    formatTime,
    uiState,
    refClickSound,
    refCorrectSound,
    refWrongSound,
  } = useContext(QuizContext);

  return {
    play,
    questions,
    questionsLoading,
    activeQuestion,
    next,
    score,
    handOptionSelection,
    selectedOption,
    optionStateUi,
    timePassed,
    startTimer,
    stopTimer,
    formatTime,
    uiState,
    refClickSound,
    refCorrectSound,
    refWrongSound,
  };
};

// types 
type TOptionState = 'unselected' | 'selected' | 'decided';
type TGameState = 'off' | 'on' | 'win' | 'over' | 'draw';

// variables------------
let selectedChoice: string = '';

export const WIN_SCORE = 20;
export const LOSE_SCORE = -20;
export const LOSE_TIME = 240; // 4 min

// game loop
let gameLoopId: any = null;

const Quiz2Provider = ({
  children,
}: {
  children: ReactNode,
}) => {

  // active question
  const [activeQuestion, setActiveQuestion] = useState<number>(0);

  // selected option // text
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [optionStateUi, setOptionStateUi] = useState<TOptionState>('unselected');

  // ------score
  const [score, setScore] = useState<number>(0);

  //------- game state
  const [uiState, setUiState] = useState<TGameState>('off');

  //--------------- audio
  const refClickSound = useRef(null);
  const refCorrectSound = useRef(null);
  const refWrongSound = useRef(null);

  // ------------- questions
  const {
    questions,
    fetchQuestions,
    questionsLoading
  } = useFetchQuestions();

  //-------------timer
  const {
    timePassed,
    startTimer,
    stopTimer,
    formatTime,
  } = useQuiz2Timer();

  // ----------------------- game events -------------------

  const setupGame = () => {
    resetGame();
    startTimer();
  }

  const play = async () => {
    await fetchQuestions();

    // start or reset the game
    setupGame();
  }

  const next = () => {
    if (activeQuestion < questions.length - 1) {
      setActiveQuestion((c:number) => c + 1);

      // reset selected option
      clearSelectedOption();
      setupOptionState('unselected');
    }
  }

  const handOptionSelection = (option: string) => {
    setupSelectedOption(option);

    // sound effect
    (refClickSound?.current as any).play();

    setupOptionState('selected');

    // after 3 seconds
    setTimeout(() => {

      setupOptionState('decided');

      // correct
      if (selectedChoice === questions[activeQuestion].correctAnswer) {
        // sound
        (refCorrectSound?.current as any).play();
        setScore((c:number) => c + 5);
      }
      // wrong
      else {
        // sound
        (refWrongSound?.current as any).play();
        setScore((c:number) => c - 5);
      }

    }, 3000);
  }

  // --------------------------- set & clean -----------------------

  const setupSelectedOption = (option: string) => {
    setSelectedOption(option);
    selectedChoice = option;
  }

  const clearSelectedOption = () => {
    setSelectedOption('');
    selectedChoice = '';
  }

  const setupOptionState = (state: TOptionState) => {
    //OPTION_STATE = state;
    setOptionStateUi(state);
  }

  const setupGameState = (gameState: TGameState) => {
    setUiState(gameState);
  }

  const cleanup = () => {
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
        console.log('draw');

        setupGameState('draw');
        over = true;
      }
    }

    return over;
  }

  const checkTimeout = (): boolean => {
    let over = false;

    if (timePassed >= LOSE_TIME) {
      console.log('time over: ', timePassed);
      setupGameState('over');
      over = true;
    }

    return over;
  }

  const checkWinOrLoseScore = (): boolean => {
    let over = false;

    if (score >= WIN_SCORE) {
      console.log('win score');
      setupGameState('win');
      over = true;
    }

    if (score <= LOSE_SCORE) {
      console.log('lose score');

      setupGameState('over');
      over = true;
    }
    return over;
  }

  // game loop
  useEffect(() => {
    
    if (uiState === 'on') {

      gameLoopId = setInterval(() => {

        if (
          checkDraw() ||
          checkTimeout() ||
          checkWinOrLoseScore()
        ) {
          console.log('gameLoopStopped');
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

    questions,
    questionsLoading,

    activeQuestion,
    next,
    score,
    handOptionSelection,
    selectedOption,
    optionStateUi,

    timePassed,
    startTimer,
    stopTimer,
    formatTime,
    uiState,

    refClickSound,
    refCorrectSound,
    refWrongSound,
  };

  return (
    <>
    <QuizContext.Provider value={context}>
      {children}
    </QuizContext.Provider>
    </>
  )
}

export default Quiz2Provider