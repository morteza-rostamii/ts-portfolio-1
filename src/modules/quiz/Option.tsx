import { Button } from '@chakra-ui/react'
import styles from './quiz.module.css'
import { useRef } from 'react'
import { useQuiz } from './QuizProvider'
import { HiClipboardCheck } from 'react-icons/hi'

const Option = ({
  item,
  question,
}: any) => {
  const {
    selectedOption,
    handOptionSelection,
    optionStateUi,
  }  = useQuiz();

  return (
    
    <Button 
    id={(optionStateUi === 'selected') && (selectedOption === item.option) ? styles.option_animate : ''}
    className={`
    ${
      optionStateUi === 'decided'
      ?(
        item.option === question.correctAnswer
        ? 'bg-green-500' 
        :'bg-red-500'
      ): ''
      }
    #bg-sky-100 p-2 !rounded-[9999px] font-bold 
    #!text-white !whitespace-normal
    `}
    colorScheme={'gray'}
    variant={'outline'}

    onClick={() => {
      // only allowed to pick one option for each question
      if (selectedOption) return;
      handOptionSelection(item.option);
    }}

    rightIcon={selectedOption === item.option ? <HiClipboardCheck size={24} color='white'/> : <></>}

    //isDisabled={}
    style={{
      pointerEvents: optionStateUi === 'selected' || optionStateUi === 'decided' ? 'none' : 'auto'
    }}
    >
      <span
      dangerouslySetInnerHTML={{
        __html: item.option
      }}
      ></span>
    </Button>
  )
}

export default Option