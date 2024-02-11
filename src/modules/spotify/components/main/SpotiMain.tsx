import { Button, IconButton } from '@chakra-ui/react'
import React from 'react'
import { HiArrowLeft } from 'react-icons/hi'
import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";
import MSection from './MSection';
import { Link } from 'react-router-dom';

const navs = [
  {
    id: 0,
    name: "Premium",
    href: '#',
  },
  {
    id: 1,
    name: "Support",
    href: '#',
  },
  {
    id: 2,
    name: "Download",
    href: '#',
  }
]

const SpotiMain = () => {
  return (
    <div
    className=' 
    flex flex-col
    overflow-y-scroll h-full overflow-x-hidden
    '
    >
      <header
      className='
      sticky top-0 z-10 bg-neutral-900 h-20
      flex items-center justify-between px-4 py-8 overflow-hidden
      '
      >
        <div
        className='
        flex items-center gap-3
        '
        >
          <IconButton
          aria-label=''
          icon={<HiChevronLeft size={24}/>}
          size={'sm'}
          isRound={true}
          colorScheme='whiteAlpha'
          variant={'ghost'}
          />          
          <IconButton
          aria-label=''
          icon={<HiChevronRight size={24}/>}
          size={'sm'}
          isRound={true}
          colorScheme='whiteAlpha'
          variant={'ghost'}
          />
        </div>

        <div
        className='
        flex items-center gap-6 h-full
        '
        >
          <ul
          className='
          hidden
          md:flex items-center gap-3
          '
          >
            {
              navs?.length
              ?(
                navs.map((el:any,) => (
                  <NavItem
                  key={el.id}
                  item={el}
                  />
                ))
              ): ''
            }
          </ul>

          <div className='hidden md:block h-[30px] w-[1.2px] bg-neutral-400 self-center'>
          </div>

          <div
          className='
          flex items-center gap-4
          '
          >
            <Button
            className='hover:scale-[1.05]'
            borderRadius={'9999px'}
            variant={'ghost'}
            colorScheme='whiteAlpha'
            >
              Sign up
            </Button>
            <Button
            className='hover:scale-[1.05]'
            borderRadius={'9999px'}
            
            >
              Log in
            </Button>
          </div>
        </div>
      </header>

      <MSection/>
    </div>
  )
}

const NavItem = ({item}:any) => {

  return (
    <Button
    className='
    !text-neutral-300
    hover:!text-white
    hover:scale-[1.05]
    '
    as={Link}
    to={item.href}
    variant={'link'}
    >
      {item.name}
    </Button>
  )
}

export default SpotiMain