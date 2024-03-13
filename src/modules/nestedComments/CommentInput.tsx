import { Avatar, Button, Textarea } from "@chakra-ui/react"
import { faker } from "@faker-js/faker"
import EmojiSelector from "./EmojiSelector"
import { useState } from "react";
import { TComment } from "./nestedComments.types";
import { useComments } from "./CommentsProvider";

const CommentInput = ({
  size,
  onCancel,
  type='comment',
  parentId=null,
  closeReplyBox,
}:any) => {
  //const [actionsOpen, setActionsOpen] = useState(false);
  const [commentData, setCommentData] = useState({
    text: '',
  });
  const {
    //comments,
    setComments,
  } = useComments();

  const createComment = () => {
    if (!commentData?.text) return;

    const comment: TComment = {
      id: faker.string.uuid(),
      text: commentData.text,
      likes: faker.datatype.number({max: 2000}),
      parentId: parentId,
      createdAt: new Date(),
      user: {
        id: faker.string.uuid(),
        username: faker.person.firstName(),
        avatar: faker.image.avatar(),
      },
    };

    // push new comment into localStorage array
    let storeComments;
    if (localStorage.getItem('comments')) {
      storeComments = JSON.parse(localStorage.getItem('comments') || '');
    }

    let newComments = [];
    if (storeComments?.length) newComments = [...storeComments, comment];
    else newComments = [comment];

    localStorage.setItem('comments', JSON.stringify(newComments));

    // refresh state
    setComments((c:any) => ([
      ...c,
      comment,
    ]));

    // clear input
    setCommentData({
      text: '',
    });

    if (type === 'reply') closeReplyBox();
  }

  return (
    <div
    className="
    flex items-center gap-3 w-full mb-3
    "
    >
      <div
      className="
      self-start
      "
      >
        <Avatar
        src={'https://avatars.githubusercontent.com/u/136324075?v=4'}
        size={size}
        />
      </div>

      <form
      className="
      flex-1
      "
      >
        <Textarea
        variant={'flushed'}
        rows={2}

        value={commentData.text}
        onChange={(e:any) => setCommentData((c:any) => ({
          ...c,
          text: e.target.value,
        }))}
        />

        <div
        className="
        flex items-center justify-between gap-4
        "
        >
          <EmojiSelector
          setCommentData={setCommentData}
          />

          <div
          className="
          flex items-center gap-3
          py-3
          "
          >
            {
              type === 'reply'
              ?(
                <Button
                size={'sm'}
                variant={'outline'}
                borderRadius={'9999px'}

                onClick={onCancel}
                >
                  Cancel
                </Button>
              ):''
            }
            <Button
            size={'sm'}
            variant={'outline'}
            borderRadius={'9999px'}

            onClick={createComment}
            >
              Comment
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CommentInput