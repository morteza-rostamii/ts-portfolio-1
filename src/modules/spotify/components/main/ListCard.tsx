import { IconButton, Image } from '@chakra-ui/react'
import { IoIosPlay } from "react-icons/io";

const ListCard = ({item}: any) => {

  console.log(item)
  return (
    <div
    className='
    group
    bg-neutral-700 p-2 rounded-md cursor-pointer
    hover:bg-neutral-600
    '
    >
      <div
      className='
      relative rounded-md overflow-hidden
      aspect-square mb-3
      '
      >
        <Image
        className='w-full object-cover'
        src={item.image}
        alt={item.title}
        />

        <span
        className='
        hidden
        absolute bottom-2 right-2
        group-hover:block
        '
        >
          <IconButton
          className='hover:scale-[1.05]'
          aria-label=''
          isRound={true}
          icon={<IoIosPlay size={24}/>}
          colorScheme='green'
          />
        </span>
      </div>
      <div>
        <h2
        className='
        font-bold text-white mb-2
        '
        >
          {item.title}
        </h2>
        <p 
        className='text-sm truncate'
        >
          {item.description}
        </p>
      </div>
    </div>
  )
}

export default ListCard