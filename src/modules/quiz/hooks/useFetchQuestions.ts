import helper from "@/utils/helpers";
import { faker } from "@faker-js/faker";
import { useState } from "react";

function useFetchQuestions() {
  const [questions, setQuestions] = useState<any[]>([]);
  const [questionsLoading, setQuestionsLoading] = useState(false);

  //---------------- fetch questions
  async function fetchQuestions():Promise<any> {
    // computer
    //const URL = 'https://opentdb.com/api.php?amount=10&category=18&type=multiple';

    //const URL = 'https://opentdb.com/api.php?amount=10&category=15&type=multiple';
    const URL = 'https://the-trivia-api.com/v2/questions/';

    try {
      setQuestionsLoading(true);
      const response = await fetch(URL);

      if (!response.ok) throw new Error(`HTTP error, status: ${response?.status}`);

      const data = await response.json();

      console.log('data', data);
      setQuestionsLoading(false);
      if (data) {
        const questions = data;

        const edited: any[] = questions.map((item:any) => {
          let options = [...item.incorrectAnswers, item.correctAnswer];
          options = options.map((el:any) => ({
            id: faker.string.uuid(),
            option: el,
          }));
          
          options = helper.shuffleArray(options);

          return {
            id: faker.string.uuid(),
            question: item.question.text,
            //category: item.category,
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
    questionsLoading,
    fetchQuestions,
  }
}

export default useFetchQuestions