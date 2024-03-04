
<!-- 

# 

-->






















































<!-- 

# basic nested comments in react:
==
import { Button } from "@chakra-ui/react";
import { BsFilterLeft } from "react-icons/bs";
import CommentInput from "./CommentInput";

const comments = [
  { "id": "1", "text": "Root Comment 1", "parentId": null },
    { "id": "2", "text": "Reply 1.1", "parentId": "1" },
      { "id": "3", "text": "Reply 1.1.1", "parentId": "2" },
        { "id": "8", "text": "Reply 1.1.1.1", "parentId": "3" },
    { "id": "4", "text": "Reply 1.2", "parentId": "1" },


  
  
  { "id": "5", "text": "Root Comment 2", "parentId": null },
  { "id": "6", "text": "Reply 2.1", "parentId": "5" }
]



const NestedComments = () => {

  return (
    <div
    className="
    flex items-center justify-center #h-full pt-20
    
    "
    >
      
      <section
      className="
      bg-green-50 p-3 rounded-md
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

const CommentSection = () => {
  const rootNodes = comments.filter(comment => comment.parentId === null);

  return(
    <div>
      {
        rootNodes?.length
        ?(
          rootNodes.map(root => (
            <Comment
            key={root.id}
            comment={root}
            childComments={comments.filter(c => c.parentId === root.id)}
            depth={1}
            />
          ))
        ):'no comments'
      }
    </div>
  )
}

const Comment = ({
  comment,
  childComments,
  depth,
}:any) => {

  if (depth > 3) return <>too deep</>

  return (
    <div
    style={{
      marginLeft: comment?.parentId && '10px', 
    }}
    >
      <p>
        {comment.text}
      </p>

      <ul>
        {
          childComments?.length
          ?(
            childComments.map((child:any) => (
              <Comment
              key={child.id}
              comment={child}
              childComments={comments.filter((c:any) => c.parentId === child.id)}
              depth={depth + 1}
              />
            ))
          ): <span className="bg-red-100">no replies</span>
        }
      </ul>
    </div>
  )
}

export default NestedComments


-->




<!-- 










































# nested comments javascript traversal:
==

function traverseComments(nodeId: string) {
  // go through the whole thing and find at least one child
  const children = comments.filter((comment:any) => {
    return comment.parentId === nodeId;
  });

  // base case: if node has no child =: return
  if (children.length === 0) {
    return;
  }

  // go through children and recursive call
  children.forEach((child:any) => {
    console.log('child--', child.text);
    traverseComments(child.id);
  });
}

const rootNodes = comments.filter((el:any) => el.parentId === null);

console.log(rootNodes);

rootNodes.forEach((root:any) => {
  console.log('root--', root);
  traverseComments(root.id);
})

-->