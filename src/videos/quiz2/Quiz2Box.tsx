import { Button } from "@chakra-ui/react"
import { HiArrowLongRight } from "react-icons/hi2"
import { useQuiz } from "./Quiz2Provider"
import Quiz2Option from "./Quiz2Option";

const Quiz2Box = () => {
  const {
    questions,
    activeQuestion,
    next,
    optionStateUi,
  } = useQuiz();

  return (
    <div
    className="
    flex flex-col gap-3
    bg-white p-2
    "
    >
      <h2
      className="
      text-lg text-gray-700
      "
      >
        {questions?.length ? questions[activeQuestion].question : ''}
      </h2>  

      <ul
      className="
      flex flex-col gap-4
      "
      >
        {
          questions?.length
          ?(
            questions[activeQuestion].options.map((option:any) => (
              <Quiz2Option
              key={option.id}
              item={option}
              question={questions[activeQuestion]}
              />
            ))
          ): ''
        }
      </ul>

      <Button
      className="mt-6"
      borderRadius={'9999px'}
      colorScheme="blackAlpha"
      variant={'outline'}
      rightIcon={<HiArrowLongRight size={24}/>}

      onClick={next}

      isDisabled={optionStateUi === 'decided' ? false : true}
      style={{
        display: activeQuestion < questions?.length - 1 ? 'flex' : 'none'  
      }}
      >
        Next
      </Button>
    </div>
  )
}

export default Quiz2Box