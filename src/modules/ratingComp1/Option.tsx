
const Option = ({
  item,
  selectedOption,
  setSelectedOption,
}: any) => {
  return (
    <button
    className={`
    ${item.id === selectedOption ? 'bg-orange-500' : 'bg-slate-700 hover:bg-slate-400'}
    grid place-content-center rounded-full
    text-center w-10 h-10
     transition-all
    `}

    onClick={() => setSelectedOption(item.id)}
    >
      {item.id}
    </button>
  )
}

export default Option