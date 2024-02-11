import { Image, Link } from '@chakra-ui/react'
import { faker } from '@faker-js/faker'

const items = [
  {
    id: faker.string.uuid(),
    name: 'Powerwall',
    image: '/tesla/energy/Mega-Menu-Energy-Powerwall-Global.avif'
  },
  {
    id: faker.string.uuid(),
    name: 'Megapack',
    image: '/tesla/energy/Mega-Menu-Energy-Megapack.avif'
  },
]

const links = Array.from({length: 2}).map(() => ({
  id: faker.string.uuid(),
  name: faker.lorem.words({min:1, max: 2}),
  href: "#",
}));

const Energy = () => {
  return (
    <div
    className='
    flex
    '
    >
      <ul
      className='
      grid grid-cols-2 gap-4 px-8
      '
      >
        {
          items?.length
          ?(
            items.map((el:any) => (
              <CarCard
              key={el.id}
              item={el}
              />
            ))
          ): ''
        }
      </ul>
      <ul
      className='
      flex flex-col gap-3 px-8
      border-l
      '
      >
        {
          links?.length
          ?(
            links.map((el:any) => (
              <Link key={el.id} href={el.href}>
                {el.name}
              </Link>
            ))
          ):''
        }
      </ul>
    </div>
  )
}

const CarCard = ({item}: any) => {
  return (
    <div>
      <Link
      className='
      w-40 overflow-hidden block
      '
      >
        <Image
        className='w-full'
        src={item.image}
        />
      </Link>
      
      <div
      className='text-center'
      >
        <h3 className='font-bold'>
          {item.name}
        </h3>
        <div className='
        flex items-center gap-2 justify-center
        text-sm text-gray-600'>
          <Link>
          Learn
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Energy