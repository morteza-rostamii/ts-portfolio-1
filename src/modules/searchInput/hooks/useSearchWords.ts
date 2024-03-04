import { useState } from "react";

export function useSearchWords() {
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWords = async (term: string) => {
    //const URL = `https://api.datamuse.com/words?ml=${term}`
    const URL = `https://api.datamuse.com/words?rel_syn=${term}`

    setIsLoading(true);
    const response = await fetch(URL,{
      method: 'GET',
    });

    const data = await response.json();
    setIsLoading(false);

    setWords(data);
  }

  return {
    words,
    setWords,
    isLoading,
    fetchWords,
  }
}