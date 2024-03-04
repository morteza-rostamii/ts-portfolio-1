import { Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const ProjCard = ({item}: any) => {
  return (
    <Link
    to={item.href}
    target='_blank'
    className='
    group
    flex flex-col gap-3
    hover:cursor-pointer
    '
    >
      <div
      className='
      rounded-md overflow-hidden
      aspect-square
      group-hover:scale-[1.1] transition-all
      '
      >
        <Image
        className='!object-cover w-full h-full'
        src={item.image}
        alt={item.name}
        fallbackSrc='https://placehold.co/400x400/000000/FFFFFF/png'
        />
      </div>
        
      <div
      className='text-center'
      >
        <h2 className='text-lg font-semibold group-hover:underline'>
          {item.name}
        </h2>
        <p className='text-gray-500'>
          {item.description}
        </p>
      </div>
    </Link>
  )
}

export default ProjCard