import EmojiPicker from 'emoji-picker-react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  IconButton,
} from '@chakra-ui/react'
import { BsEmojiGrimace } from 'react-icons/bs';

function EmojiSelector({
  setCommentData,
}: any) {

  const handEmojiInput = (data:any) => {
    console.log(data);
    setCommentData((c:any) => {
      return {
        ...c,
        text: c.text + data.emoji,
      }
    });
  }

  return (
    <Popover>
      <PopoverTrigger>
        <IconButton 
        aria-label=''
        type='button'
        icon={<BsEmojiGrimace size={20}/>}
        size={'sm'}
        isRound={true}
        variant={'outline'}
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        
        <PopoverBody
        padding={2}
        >
          <EmojiPicker 
          reactionsDefaultOpen={true}
          //allowExpandReactions={false}

          onEmojiClick={(data: any) => handEmojiInput(data)}
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default EmojiSelector