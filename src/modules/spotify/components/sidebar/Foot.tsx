import { Button } from '@chakra-ui/react'
import React from 'react'
import { HiGlobe } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const linkItems = [
  {
    id: 0,
    name: 'Legal',
    href: '#',
  },
  {
    id: 1,
    name: 'Privacy Center',
    href: '#',
  },
  {
    id: 2,
    name: 'Privacy Policy',
    href: '#',
  },
  {
    id: 3,
    name: 'Cookies',
    href: '#',
  },
  {
    id: 4,
    name: 'About Ads',
    href: '#',
  },
  {
    id: 5,
    name: 'Accessibility',
    href: '#',
  },
]

const Foot = () => {
  return (
    <footer
    className='
    flex flex-col gap-8
    p-3
    '
    >
      <ul
      className='
      flex gap-4 flex-wrap
      '
      >
        {
          linkItems?.length
          ?(
            linkItems.map((el:any) => (
              <LinkCard
              key={el.id}
              item={el}
              />
            ))
          ): ''
        }
      </ul>

      <div>
      <Button
      className='
      hover:scale-[1.05]
      hover:border-2
      '
      borderRadius={'9999px'}
      size={'sm'}
      variant={'outline'}
      colorScheme='whiteAlpha'
      color={'white'}
      leftIcon={<HiGlobe size={20}/>}
      >
        English
      </Button>
      </div>
    </footer>
  )
}

const LinkCard = ({item}:any) => {

  return (
    <>
      <Link
      className='
      text-sm text-neutral-300 
      hover:underline
      '
      to={'#'}
      >
        {item.name}
      </Link>
    </>
  )
}

export default Foot