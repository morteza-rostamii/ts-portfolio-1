import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../icons/Logo'

const PortFooter = () => {
  return (
    <footer
    className='
    flex items-center
    shadow-border z-10 h-14 bg-slate-50
    '
    >
      <div
      className='
      flex items-center justify-between
      container mx-auto
      '
      >
        <div>
          <Link
          className='
          w-28 block
          '
          to={'/'}
          >
            <Logo/>
          </Link>
        </div>

        <div>
        © <span>2024</span>
        </div>  
      </div>
    </footer>
  )
}

export default PortFooter