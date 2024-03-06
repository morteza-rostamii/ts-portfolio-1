import { ReactNode, createContext, useContext, useEffect, useRef, useState } from "react"
import { TQuestion } from "./quiz.types";
import { faker } from "@faker-js/faker";
import useQuizTimer from "./hooks/useQuizTimer";
import useFetchQuestions from "./hooks/useFetchQuestions";

type TQuizContext = {
  //play: () => void,
};

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

// variables------------
export const WIN_SCORE = 20;
export const LOSE_SCORE = -20;
export const LOSE_TIME = 240; // seconds
export let GAME_STATE: 'off' | 'on' | 'win' | 'over' | 'draw' = 'off'; 
export let OPTION_STATE: 'unselected' | 'selected' | 'decided' =  'unselected';
let selectedChoice: string = '';

const QuizProvider = ({
  children,
}: {
  children: ReactNode,
}) => {
  
  const [uiState, setUiState] = useState<'off' | 'on' | 'win' | 'over' | 'draw'>('off');
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  // selected option
  const [selectedOption, setSelectedOption] = useState<string>('');
  // option button states
  const [optionStateUi, setOptionStateUi] = useState<'unselected' | 'selected' | 'decided'>('unselected');

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

  // ------------------ select option
  const handOptionSelection = (option: string) => {
    setSelectedOption(option);
    selectedChoice = option;

    // effect 
    (refClickSound?.current as any).play();

    // change option_state to selected
    OPTION_STATE = 'selected';
    setOptionStateUi('selected');

    // after 3 seconds change sate 
    setTimeout(() => {
      setOptionStateUi('decided');

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

      setGameState();
    }, 3000);
  }

  const play = async () => {
    await fetchQuestions();
    
    console.log('start_-----game');
    resetGame();
    startTimer();
  };

  const next = () => {
    if (activeQuestion < questions.length) {
      setActiveQuestion((c:number) => c + 1);

      //reset
      setSelectedOption('');
      selectedChoice = '';

      OPTION_STATE = 'unselected';
      setOptionStateUi('unselected');
    }
  };
  
  //---------------------------- Game State ---------------------------

  function cleanup():void {
    stopTimer();
  }

  function resetGame():void {

    setSelectedOption('');
    selectedChoice = '';

    GAME_STATE = 'on';
    setUiState('on');

    OPTION_STATE = 'unselected';
    setOptionStateUi('unselected');

    setActiveQuestion(0);

    setScore(0);
  }

  function setGameState():void {
    // check for draw 
    checkDraw();
  }

  const checkDraw = () => {
    if (activeQuestion === questions?.length - 1) {
      if (score < WIN_SCORE) {
        GAME_STATE = 'draw';
        setUiState('draw');
        cleanup();
      }
    }
  }

  const checkTimeout = () => {
    // if: timer runs out
    if (timePassed >= LOSE_TIME) {
      console.log('over', timePassed);
      GAME_STATE = 'over';
      setUiState('over');

      cleanup();
    }
  }

  const checkWinOrLoseScore = () => {
    // check for win
    if (score >= WIN_SCORE) {
      GAME_STATE = 'win';
      setUiState('win');
      cleanup();
    }

    // check for game over
    if (score <= LOSE_SCORE) {
      GAME_STATE = 'over';
      setUiState('over');
      cleanup();
    }
  }

  useEffect(() => {
    checkTimeout();
  }, [timePassed]);

  useEffect(() => {
    checkWinOrLoseScore();
  }, [score]);

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