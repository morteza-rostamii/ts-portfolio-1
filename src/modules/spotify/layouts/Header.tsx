import { Button } from '@chakra-ui/react'
import React from 'react'
import Logo from '../svgs/Logo'

const Header = () => {
  return (
    <header
    className="
    h-14 bg-white p-4 shadow-md z-10
    "
    >
      <div
      className='
      flex items-center justify-between
      container mx-auto h-full
      '
      >
        <div>
          <Button
          size={'md'}
          >
          <Logo/>
          </Button>
        </div>

        <div>
          right 
        </div> 
      </div>
    </header>
  )
}

export default Header