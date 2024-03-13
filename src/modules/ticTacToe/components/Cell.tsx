
const Cell = ({
  item,
  rowIndex,
  colIndex,
}: any) => {


  function handCellClick() {}

  return (
    <div
    id={`{"r":${rowIndex}, "c":${colIndex}}`}
    className='
    grid place-content-center w-10 h-10 rounded-md text-2xl
    bg-green-200 p-1'

    onClick={() => handCellClick}
    >
      {item}
    </div>
  )
}

export default Cell