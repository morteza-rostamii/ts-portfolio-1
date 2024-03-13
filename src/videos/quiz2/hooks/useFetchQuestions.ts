import { useState } from "react"
import { TQuestion } from "../quiz2.types";
import { faker } from "@faker-js/faker";
import helper from "@/utils/helpers";

function useFetchQuestions() {
  const [questions, setQuestions] = useState<any[]>([]);
  const [questionsLoading, setQuestionsLoading] = useState(false);

  async function fetchQuestions(): Promise<any> {
    const URL = 'https://the-trivia-api.com/v2/questions/';

    try {
      setQuestionsLoading(true);
      const response = await fetch(URL);

      if (!response.ok) throw new Error(`http error: status: ${response?.status}`);

      const data = await response.json();

      console.log('data', data);

      setQuestionsLoading(false);

      if (data) {
        const questions: any[] = data;

        const edited: TQuestion[] = questions.map((item:any) => {
          let options = [...item.incorrectAnswers, item.correctAnswer];
          options = options.map((el:any) => ({
            id: faker.string.uuid(),
            option: el,
          }));
          
          options = helper.shuffleArray(options);

          return {
            id: faker.string.uuid(),
            question: item.question.text,
            category: item.category,
            difficulty: item.difficulty,
            options: options,
            correctAnswer: item.correctAnswer,
          }
        });

        setQuestions(edited);
      }

    }
    catch(error:any) {
      console.log(error?.message || error);
    }
  }

  return {
    questions,
    fetchQuestions,
    questionsLoading,
  }
}

export default useFetchQuestions