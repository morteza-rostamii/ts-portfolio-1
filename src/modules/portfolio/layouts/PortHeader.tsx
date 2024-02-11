import React from 'react'
import Logo from '../icons/Logo'
import { Link } from 'react-router-dom'
import { Button, IconButton } from '@chakra-ui/react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { faker } from '@faker-js/faker';
import TopMenu from '../components/header/TopMenu'

const socials = [
  {
    id: faker.string.uuid(),
    name: 'Github',
    icon: BsGithub,
    href: 'https://github.com/morteza-rostamii/'
  },
  {
    id: faker.string.uuid(),
    name: 'Linkedin',
    icon: BsLinkedin,
    href: 'https://www.linkedin.com/in/morteza-rostami-929782277/'
  },
];

const navs = [
  {
    id: faker.string.uuid(),
    name: 'About',
    href: '#about',
  },
  {
    id: faker.string.uuid(),
    name: 'Skills',
    href: '#skills',
  },
  {
    id: faker.string.uuid(),
    name: 'Contact',
    href: '#contact',
  },
  {
    id: faker.string.uuid(),
    name: 'Projects',
    href: '#projects',
  },
];

const PortHeader = () => {

  const smoothScroll = (event:any, sectionId: string) => {
    event.preventDefault();

    const section = document.querySelector(sectionId);
    console.log(sectionId)
    if (section) {
      section.scrollIntoView({behavior: 'smooth'});
    }
  }

  return (
    <header
    className='
    h-16 flex items-center bg-white shadow-md z-10
    sticky top-0
    '
    >
      <div
      className='
      container mx-auto
      flex items-center justify-between
      '
      >
        <Link
        className='
        w-28 block
        '
        to={'/'}
        >
          <Logo/>
        </Link>

        <div
        className='flex items-center gap-4'
        >
          <nav
          className='hidden md:flex items-center gap-3'
          >
            {
              navs?.length
              ?(
                navs.map((el: any) => (
                  <a 
                  key={el.id}
                  href={el.href}
                  >
                    <Button
                    variant={'link'}
                    onClick={(e:any) => smoothScroll(e, el.href)}
                    >
                      {el.name}
                    </Button>
                  </a>
                ))
              ): ''
            }
          </nav>

          <div
          className='
          flex gap-3 items-center
          '
          >
            {
              socials?.length
              ?(
                socials.map((el:any) => {
                  const Icon = el.icon;

                  return (
                    <a
                    key={el.id}
                    className='inline-block'
                    href={el.href}
                    target='_blank'
                    >
                      <IconButton
                      aria-label=''
                      icon={<Icon size={24}/>}
                      isRound={true}
                      />
                    </a>
                  )
                })
              ):''
            }
            
          </div>
          
          <span className='block md:hidden'>
            <TopMenu
            navs={navs}
            smoothScroll={smoothScroll}
            />
          </span>
        </div>
      </div>
    </header>
  )
}

export default PortHeader