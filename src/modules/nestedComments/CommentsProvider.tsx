import { ReactNode, createContext, useContext, useState } from "react"
import { sortCommentsByDateDesc } from "./commentsHelpers";

type TCommentsContext = {
  comments: any[],
  setComments: (c:any) => any,
};

const CommentsContext = createContext<TCommentsContext>({
  comments: [],
  setComments: () => {},
});

export const useComments = () => {
  const {
    comments, 
    setComments,
  } = useContext(CommentsContext);

  return {
    comments,
    setComments,
  };
};

const CommentsProvider = ({
  children,
}: {
  children: ReactNode,
}) => {
  const [comments, setComments] = useState([]);

  console.log(sortCommentsByDateDesc(comments));
  const context = {
    comments: sortCommentsByDateDesc(comments),
    setComments: setComments,
  };

  return (
    <>
    <CommentsContext.Provider value={context}>
      {children}
    </CommentsContext.Provider>
    </>
  )
}

export default CommentsProvider