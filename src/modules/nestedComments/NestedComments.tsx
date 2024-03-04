import { Button } from "@chakra-ui/react";
import { BsFilterLeft } from "react-icons/bs";
import CommentInput from "./CommentInput";
import { useEffect, useState } from "react";
import CommentSection from "./CommentSection";
import { useComments } from "./CommentsProvider";

const NestedComments = () => {
  const {setComments, } = useComments();

  useEffect(() => {
    // fetch comments from localStorage
    let storeComments;
    if (localStorage.getItem('comments')) {
      storeComments = JSON.parse(localStorage.getItem('comments') || '');
    }

    // refresh state
    setComments(storeComments || []);
  }, []);

  return (
    <div
    className="
    flex items-center #justify-center h-full p-4 w-full
    max-w-[600px] mx-auto
    "
    >
      
      <section
      className="
      #sbg-green-50 p-3 rounded-md w-full #m-4 h-full
      "
      >
        <div
        className="
        flex items-center gap-3 mb-3
        "
        >
          <h1 
          className="
          text-lg font-bold 
          "
          >
          68 Comments
          </h1>
          <Button
          variant={'outline'}
          borderRadius={'9999px'}
          size={'sm'}
          leftIcon={<BsFilterLeft size={20}/>}
          >
            Sort by
          </Button>
        </div>

        <CommentInput/>

        <CommentSection/>
      </section>
    </div>
  )
}

export default NestedComments