import { useQuiz } from './Quiz2Provider'
import styles from './quiz2.module.css'
import { HiClipboardCheck } from 'react-icons/hi';

const Quiz2Option = ({
  item,
  question,
}: any) => {
  const {
    handOptionSelection,
    selectedOption,
    optionStateUi,

  } = useQuiz();

  return (
    <button

    id={(optionStateUi === 'selected') && (selectedOption === item.option) ? styles.option_animate : ''}

    className={`
    ${
      optionStateUi === 'decided'
      ?(
        item.option === question.correctAnswer
        ? 'bg-green-500' 
        :'bg-red-500'
      ): 'bg-sky-100 hover:bg-sky-200'
    }

    p-2 flex items-center justify-between font-bold transition-all
    `}

    onClick={() => {
      if (selectedOption) return;
      handOptionSelection(item.option);
    }}

    style={{
      pointerEvents: optionStateUi === 'selected' || optionStateUi === 'decided' ? 'none' : 'auto'
    }}
    >
      {item.option}
      {selectedOption === item.option ? <HiClipboardCheck size={24} color='white'/> : <></>}
    </button>
  )
}

export default Quiz2Option