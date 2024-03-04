import { Button, IconButton, Skeleton } from "@chakra-ui/react"
import React, { useEffect, useRef, useState } from "react";
import { HiClock, HiOutlineClock, HiOutlineMagnifyingGlass } from "react-icons/hi2"
import { IoTimeOutline } from "react-icons/io5";
import { useSearchWords } from "./hooks/useSearchWords";

const SearchInputPage = () => {
  const {words, setWords, isLoading, fetchWords} = useSearchWords();
  const [histories, setHistories] = useState<string[]>([]);
  const [term, setTerm] = useState('');
  const [focus, setFocus] = useState(false);
  
  const inputContainerRef: any = useRef(null);
  const formRef = useRef(null);

  // control input-------------
  const handInputChange = (v:string) => {
    // empty the words if: no term
    if (!v) {
      setWords([]);
    }
    setTerm(v)
  }; 

  // input focus --------------
  //const handInputFocus = () => setFocus(true);
  const handClickOutOfInput = (e: any) => {
    if (!inputContainerRef.current) return;
    //e.target.childNodes
    //const children = (inputContainerRef as any).current.childNodes;

    // const elementChildren = Array.from(children).filter((child:any) => child.nodeType === Node.ELEMENT_NODE);

    // check if clicked element is container of any of it's children
    if (inputContainerRef.current.contains(e.target)) {
      setFocus(true);
    }
    else {
      setFocus(false);
    }
  }

  useEffect(() => {
    if (!inputContainerRef.current) return;

    document.addEventListener('click', handClickOutOfInput);

    return () => document.removeEventListener('click', handClickOutOfInput);
  }, []);

  // search and api request------------
  const handSearchSubmit = async (e: any) => {
    e.preventDefault();

    if (!term) return;

    // add term to search history
    const searchHistory:string | null = localStorage.getItem('search-history');

    if (searchHistory) {
      const history: string[] = JSON.parse( searchHistory || '');

      // add new history item
      // const items = new Set([...history, term]);
      const items = [...history, term];

      // do not keep more than n item in history
      if (history.length > 6) items.shift();

      localStorage.setItem('search-history', JSON.stringify([...items]));
    }else {
      // no previous history
      localStorage.setItem('search-history', JSON.stringify([term]));
    }
    
    //fetch data------------
    fetchWords(term);
  }

  // get history from localStorage ----------
  useEffect(() => {
    console.log(histories)
    const history: string | null = localStorage.getItem('search-history');
    if (history) {
      const arr: string[] = JSON.parse(history || '');
      setHistories(arr);
    }
  }, [words]); 

  return (
    <main
    className="#grid place-content-center h-full"
    >
      <section
      className="container mx-auto p-10 md:p-20"
      >
        <h1
        className="
        text-3xl text-center mb-4 underline text-green-600
        "
        >
          search for synonym
        </h1>
        <div
        className={`
        ${(focus) ? 'border-2 shadow-md' : ''}
        relative
        #bg-slate-500 rounded-tr-[23px] rounded-tl-[23px]
        transition-all
        `}

        ref={inputContainerRef}
        >
          <form
          className={`
          ${(focus) ? 'rounded-tl-[23px] rounded-tr-[23px] border-b-2' : 'rounded-full border-2 '}
          
          flex gap-2 #min-w-[400px]
          z-30 #px-2 overflow-hidden p-1
          `}

          ref={formRef}
          onSubmit={handSearchSubmit}
          >
            <IconButton
            aria-label=""
            isRound={true}
            icon={<HiOutlineMagnifyingGlass size={24}/>}
            isDisabled={isLoading}
            isLoading={isLoading}
            />
            
            <input 
            className="
            border-none outline-none #bg-red-50 flex-1
            "
            type="search"
            placeholder="search for a word"

            value={term}
            onChange={(e:any) => handInputChange(e.target.value)}
            //onFocus={handInputFocus}
            disabled={isLoading}
            />
          </form>

          {
            !!(focus) && (
              <ol
              className="
              
              p-4 flex flex-col gap-2 h-[300px] overflow-y-scroll
              "
              >
                {
                  words?.length && term
                  ?(
                    //.slice(0, 6)
                    words.map((el:any, i:number) => (
                      <Skeleton
                      isLoaded={!isLoading}
                      >
                        <li 
                        className="
                        bg-slate-50 rounded-md p-1 px-2
                        transition-all
                        "
                        key={i}>
                          {el.word}
                        </li>
                      </Skeleton>
                    ))
                  ): (
                    histories?.length
                    ?(
                      histories.map((el:any, i:number) => (
                        <button 
                        className="flex items-center gap-2 bg-slate-50 rounded-md p-1 px-2 w-full hover:bg-slate-100 transition-all"
                        key={i}
                        
                        onClick={() => {
                          setTerm(el);

                          // wait that term is set.
                          setTimeout(() => {
                            if (formRef.current) 
                              (formRef.current as any).requestSubmit();
                          }, 100);
                        }}
                        >
                          <HiOutlineClock />
                          <span>
                          {el}
                          </span>
                        </button>
                      ))
                    ):''
                  )
                }
              </ol>
            )
          }
        </div>
      </section>
    </main>
  )
}

export default SearchInputPage