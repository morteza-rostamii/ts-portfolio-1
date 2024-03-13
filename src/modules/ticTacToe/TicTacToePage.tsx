//import { useState } from "react"
//import { getRandomPlayer } from "./tictac--utils";
//import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import Actions from "./components/Actions";

const TicTacToePage = () => {
  // const [board, setBoard] = useState([
  //   ['x', 'o', ''],
  //   ['', '', ''],
  //   ['', 'o', 'x'],
  // ]);
  // // current player (turn)
  // const [currPlayer, setCurrPlayer] = useState<string>(getRandomPlayer());
  // // over: false, playing: true
  // const [gameState, setGameState] = useState<boolean>(true);

  return (
    <main
    className="
    grid place-content-center
    h-full
    "
    >
      <div
      className="bg-green-50 p-4"
      >
      <ScoreBoard/>
      {/* <GameBoard
      board={board}
      currPlayer={currPlayer}
      /> */}
      <Actions/>
      </div>
    </main>
  )
}

export default TicTacToePage