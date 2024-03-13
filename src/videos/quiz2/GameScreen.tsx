import { Button } from '@chakra-ui/react'
import { useQuiz } from './Quiz2Provider';

const GameScreen = () => {
  const {
    uiState,
    play,
    questionsLoading,
    //score,
  } = useQuiz();

  console.log(uiState);
  return (
    <div>
      
      {/* overlay */}
      <div
      className="
      fixed top-0 bottom-0 left-0 right-0 bg-slate-800
      grid place-content-center #bg-opacity-60 text-white text-center
      "
      style={{
        display: uiState === 'on' ? 'none' : 'grid'
      }}
      >

        {/* game is off */}
        <div
        style={{
          display: uiState === 'off' ? 'block' : 'none',
        }}
        >
          <h1
          className="
          text-4xl font-bold mb-4 
          "
          >
            Quiz Game
          </h1>
          <p
          className=" 
          text-lg mb-4
          "
          >
            start a new quiz game now.
          </p>
        </div>

        {/* game won */}
        <div
        style={{
          display: uiState === 'win' ? 'block' : 'none',
        }}
        >
          <h1
          className="
          text-4xl font-bold mb-4 
          "
          >
            You Won the game.
          </h1>
          <p
          className=" 
          text-lg mb-4
          "
          >
            click to start a new game.
          </p>
        </div>

        {/* game over */}
        <div
        style={{
          display: uiState === 'over' ? 'block' : 'none',
        }}
        >
          <h1
          className="
          text-4xl font-bold mb-4 
          "
          >
            Game over
          </h1>
          <p
          className=" 
          text-lg mb-4
          "
          >
            you can start a new game.
          </p>
        </div>

        {/* draw */}
        <div
        style={{
          display: uiState === 'draw' ? 'block' : 'none',
        }}
        >
          <h1
          className="
          text-4xl font-bold mb-4 
          "
          >
            You did not win or lose!
          </h1>
          <p
          className=" 
          text-lg mb-4
          "
          >
            start a new quiz game again.
          </p>
        </div>

        <Button
        colorScheme="red"
        onClick={play}

        isLoading={questionsLoading}
        >
          Play
        </Button>
      </div>
    </div>
  )
}

export default GameScreen