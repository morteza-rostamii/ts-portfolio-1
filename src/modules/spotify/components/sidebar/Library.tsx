import LibIcon from '../../svgs/LibIcon'
import { Button, IconButton } from '@chakra-ui/react'
import { HiPlus } from 'react-icons/hi'

const libItems = [
  {
    id: 0,
    title: 'Create your first playlist',
    text: "It's easy, we'll help you",
    btnText: 'Create playlist',
  },
  {
    id: 1,
    title: "Let's find some podcasts to follow",
    text: "We'll keep you updated on new episodes",
    btnText: 'Browse podcasts',
  },
]

const Library = () => {
  return (
    <div
    className='
    relative
    p-3
    '
    >
      <header
      className='
      flex items-center justify-between
      text-neutral-200 
      sticky top-0 mb-4
      '
      >
        <span
        className='
        flex items-center gap-2 text-neutral-300
        fill-neutral-200 
        '
        >
          <LibIcon/>
          <h2>
            Your Library
          </h2>
        </span>
        <IconButton
        aria-label=''
        icon={<HiPlus size={24}/>}
        isRound={true}
        size={'sm'}
        variant={'ghost'}
        color={'white'}
        colorScheme='whiteAlpha'
        />

      </header>

      <ul
      className='
      flex flex-col gap-4
      h-52 overflow-auto
      '
      >
        {
          libItems?.length
          ?(
            libItems.map((el:any,) => (
              <LibCard
              key={el.id}
              item={el}
              />
            ))
          ): ''
        }
      </ul>
    </div>
  )
}

const LibCard = ({item}:any) => {

  return  (
    <div
    className='
    bg-neutral-800 rounded-lg p-3
    '
    >
      <h2
      className='font-semibold mb-2'
      >
      {item.title}
      </h2>
      <p
      className='text-sm mb-3'
      >
        {item.text}
      </p>

      <Button
      className='
      hover:scale-[1.05]
      '
      borderRadius={'9999px'}
      size={'sm'}
      >
        {item.btnText}
      </Button>
    </div>
  )
}

export default Library