import { Button, Image } from "@chakra-ui/react"
import Option from "./Option"
import React, { useState } from "react"

const options = [
  {
    id: 1,
  }, 
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
]

const QuestionStep = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handFromSubmit = (e: React.FormEvent) => {
    e.preventDefault();


  }

  return (
    <form
    className="
    flex flex-col gap-6
    bg-slate-800 text-white p-6 rounded-xl
    max-w-[320px]
    "
    
    onSubmit={handFromSubmit}
    >
      <div
      className="
      grid place-content-center
      self-start p-2 rounded-full
      bg-slate-700
      "
      >
        <Image
        src="/rating1/icon-star.svg"
        />
      </div>

      <div>
        <h1
        className="
        text-2xl mb-2
        "
        >
          How did we do?
        </h1>

        <p
        className="
        text-gray-300
        "
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet labore quasi aliquam architecto id impedit quos.
        </p>
      </div>

      {/* list of options */}

      <ul
      className="
      flex gap-4 justify-between #flex-wrap
      "
      >
        {
          options?.length
          ?(
            options.map((el:any) => (
              <Option
              key={el.id}
              item={el}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              />
            ))
          ): ''
        }
      </ul>

      <Button
      className="
      hover:!bg-white hover:!text-orange-500 tracking-wider
      "
      borderRadius={'9999px'}
      colorScheme="orange"
      >
        SUBMIT
      </Button>
    </form>
  )
}

export default QuestionStep