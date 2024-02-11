import { Button, IconButton } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const links1 = [
  {
    id: 0,
    name: 'About',
    href: '#',
  },
  {
    id: 1,
    name: 'Jobs',
    href: '#',
  },
  {
    id: 2,
    name: 'For the record',
    href: '#',
  },
]

const links2 = [
  {
    id: 0,
    name: 'For Artists',
    href: '#',
  },
  {
    id: 1,
    name: 'Developers',
    href: '#',
  },
  {
    id: 2,
    name: 'Advertising',
    href: '#',
  },
]

const socials = [
  {
    id: 0,
    icon: FaInstagram,
    name: 'Instagram',
  },
  {
    id: 1,
    icon: FaTwitter,
    name: 'Twitter',
  },
  {
    id: 2,
    icon: FaFacebook,
    name: 'Facebook',
  }
]

const SpoMainFoot = () => {
  return (
    <footer
    className='
    mt-12
    '
    >
      <div
      className='
      flex gap-20 border-b border-neutral-400 pb-10
      '
      >
        <div
        className='
        flex gap-20
        '
        >
          <div
          className='
          flex flex-col gap-2
          '
          >
            <h2 className='font-bold'>
              Company
            </h2>
            <ul
            className='
            flex flex-col gap-3 items-start
            '
            >
              {
                links1?.length
                ?(
                  links1.map((el:any) => (
                    <LinkItem
                    key={el.id}
                    item={el}
                    />
                  ))
                ): ''
              }
            </ul>
          </div>
          <div
          className='
          flex flex-col gap-2
          '
          >
            <h2 className='font-bold'>
              Communities
            </h2>
            <ul
            className='
            flex flex-col gap-3 items-start
            '
            >
              {
                links2?.length
                ?(
                  links2.map((el:any) => (
                    <LinkItem
                    key={el.id}
                    item={el}
                    />
                  ))
                ): ''
              }
            </ul>
          </div>
        </div>

        {/* social links */}
        <div
        className='
        flex gap-3 items-start justify-end w-full flex-wrap
        '
        >
          {
            socials?.length
            ?(
              socials.map((el:any) => {
                const Icon = el.icon;
                return (
                  <IconButton
                  key={el.id}
                  aria-label=''
                  icon={<Icon size={24}/>}
                  isRound={true}
                  colorScheme='blackAlpha'
                  />
                )
              })
            ): ''
          }
        </div>
      </div>

      <div
      className='
      py-10
      '
      >
      © 2024 Spotify AB
      </div>
    </footer>
  )
}

const LinkItem = ({item}: any) => {

  return (
    <Button
    as={Link}
    className='!font-light !text-neutral-300'
    to={item.href}
    variant={'link'}
    >
    {item.name}
    </Button>
  )
}

export default SpoMainFoot