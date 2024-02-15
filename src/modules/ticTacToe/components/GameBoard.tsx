import Cell from "./Cell"

const GameBoard = ({
  board,
  currPlayer,
}: any) => {
  return (
    <div
    className="
    grid grid-cols-3 grid-rows-3 gap-4
    bg-red-50 p-4 rounded-md
    "
    >
      {
        board.map((row:any, i:number) => {
          return row.map((col:any, j:number) => {
            console.log(col)
            return(
              <Cell
              key={j}
              item={col}
              rowIndex={i}
              colIndex={j}
              />
            )
          })
        })
      }
    </div>
  )
}

export default GameBoard