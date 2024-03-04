import { Avatar, Button, IconButton } from '@chakra-ui/react'
import { faker } from '@faker-js/faker'
import { useState } from 'react'
import { HiOutlineThumbDown, HiOutlineThumbUp } from 'react-icons/hi'
import CommentInput from './CommentInput'
import { useComments } from './CommentsProvider'

const Comment = ({
  comment,
  childComments,
  depth,
}:any) => {
  const {
    comments,
    setComments,
  } = useComments();
  const [replyBoxOpen, setReplyBoxOpen] = useState(false);

  const closeReplyBox = () => {
    setReplyBoxOpen(false);
  }

  //if (depth > 3) return <></>

  return (
    <div
    className=''
    style={{
      marginLeft: comment?.parentId && '25px', 
    }}
    >
      <div
      className='
      flex gap-3 mb-3
      '
      >
        <div>
          <Avatar 
          src={faker.image.avatar()} 
          size={comment?.parentId && 'sm'}/>
        </div>

        <div
        className='text-gray-500 text-sm flex-1'
        >
          <div>
            <span>
              @username
            </span>
            <span>
              7 month ago
            </span>
          </div>

          <p
          className='
          mb-3 text-gray-800
          '
          >
            {comment.text}
          </p>

          <div
          className='
          flex items-center gap-2 mb-3
          '
          >
            <span
            className='
            flex items-center gap-2
            '
            >
              <IconButton
              aria-label=''
              icon={<HiOutlineThumbUp size={20}/>}
              //<HiThumbUp />
              isRound={true}
              size={'sm'}
              />
              <span
              className='text-xs text-gray-500'
              >
                12
              </span>
            </span>

            <IconButton
            aria-label=''
            icon={<HiOutlineThumbDown size={20}/>}
            //<HiHandThumbDown />
            isRound={true}
            size={'sm'}
            />

            <Button
            className='ml-3'
            style={{
              display: depth === 3 ? 'none' : 'block',
            }}

            size={'sm'}
            variant={'outline'}
            borderRadius={'9999px'}

            onClick={() => setReplyBoxOpen((c:any) => !c)}
            >
              reply
            </Button>
          </div>

          {/* reply box */}
          <div
          className={`
          ${replyBoxOpen ? 'block ' : 'hidden '}
          
          `}
          >
          <CommentInput 
          onCancel={closeReplyBox}
          size={'xs'}
          type={'reply'}
          parentId={comment.id}
          setComments={setComments}
          closeReplyBox={closeReplyBox}
          />
          </div>
           
        </div>
      </div>

      <ul
      className='
      flex flex-col gap-3
      '
      >
        {
          childComments?.length
          ?(
            childComments.map((child:any) => (
              <Comment
              key={child.id}
              comment={child}
              childComments={comments?.filter((c:any) => c.parentId === child.id)}
              depth={depth + 1}
              />
            ))
          ): <></>
        }
      </ul>
    </div>
  )
}

export default Comment