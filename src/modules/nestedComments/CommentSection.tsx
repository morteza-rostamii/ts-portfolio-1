import { Spinner } from "@chakra-ui/react";
import Comment from "./Comment";
import { useComments } from "./CommentsProvider";

const CommentSection = () => {
  const {
    comments,
    setComments,
  } = useComments();

  let rootNodes = [];
  if (comments?.length) {
    rootNodes = comments.filter((comment:any) => comment.parentId === null);

  }

  return(
    <div
    className="
    flex flex-col gap-4 #items-center
    "
    >
      {
        rootNodes?.length
        ?(
          rootNodes.map((root:any) => (
            <Comment
            key={root.id}
            comment={root}
            childComments={comments.filter((c:any) => c.parentId === root.id)}
            depth={1}
            comments={comments}
            setComments={setComments}
            />
          ))
        ): <Spinner/>
      }
    </div>
  )
}

export default CommentSection