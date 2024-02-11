import { useState } from 'react'
import { HiHome, HiSearch } from 'react-icons/hi'
import Logo from '../../svgs/Logo'
import Library from './Library'
import Foot from './Foot'
import { Link } from 'react-router-dom'

const navItems = [
  {
    id: 0,
    name: "Home",
    
    icon: <HiHome size={24}/>
  },
  {
    id: 1,
    name: "Search",
   
    icon: <HiSearch size={24}/>
  },
  
]

const Sidebar = () => {
  const [activeNav, setActiveNav] = useState<'Home' | 'Search'>('Home');

  return (
    <aside
    className='
    flex flex-col gap-4 justify-between h-full
    '
    >
      <div
      className='
      p-3 bg-neutral-900 rounded-lg
      '
      >
        <div
        className='
        text-white fill-white mb-4
        
        '
        >
          <Logo/>
        </div>

        <ul
        className='
        flex flex-col gap-3
        '
        >
          {
            navItems?.length
            ?(
              navItems.map((el:any,) => (
                <NavItem
                key={el.id}
                item={el}
                activeNav={activeNav}
                setActiveNav={setActiveNav}
                />
              ))
            ): ''
          }
        </ul>
      </div>

      <div
      className='
      flex flex-col gap-3 bg-neutral-900 rounded-lg
      h-full
      '
      >
        <Library/>

        <Foot/>
      </div>
    </aside>
  )
}

const NavItem = ({item, activeNav, setActiveNav}:any) => {
  return (
    <Link
    className={`
    ${item.name === activeNav ? 'text-white' : 'text-neutral-300'}
    flex items-center gap-3
    hover:text-white transition-all
    `}
    to={'#'}

    onClick={() => {
      setActiveNav(item.name)
    }}
    >
      <span>
        {item.icon}
      </span>
      <span>
      {item.name}
      </span>
    </Link>
  )
}

export default Sidebar