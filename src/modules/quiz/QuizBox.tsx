import { Button } from "@chakra-ui/react";
import Option from "./Option";
import { useQuiz } from "./QuizProvider";
import { HiArrowLongRight } from "react-icons/hi2";

const QuizBox = () => {
  const {
    questions,
    activeQuestion,
    optionStateUi,
    next,
  } =  useQuiz();

  return (
    <div
    className="
    flex flex-col gap-3
    bg-white p-4 #rounded-lg
    "
    >
      <h2
      className="
      text-lg text-gray-700
      "
      dangerouslySetInnerHTML={{
        __html: questions?.length && questions[activeQuestion].question
      }}
      >
        {/* {questions?.length && questions[activeQuestion].question} */}
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
              <Option
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

      isDisabled={optionStateUi === 'decided' ? false : true}
      onClick={next}
      style={{
        display: activeQuestion < questions?.length - 1 ? 'flex' : 'none'  
      }}
      >
        next
      </Button>
    </div>
  )
}

export default QuizBox