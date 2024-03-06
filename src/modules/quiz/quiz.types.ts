
export type TQuestion = {
  id: string,
  question: string,
  options: Array<{id: string, option: string}>,
  category: string,
  difficulty: string,
  correctAnswer: string,
};