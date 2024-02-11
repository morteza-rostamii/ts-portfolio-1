import { Image, Link } from '@chakra-ui/react'
import { faker } from '@faker-js/faker'

const items = [
  {
    id: faker.string.uuid(),
    name: 'Charging',
    image: '/tesla/charging/Mega-Menu-Charging-Charging-Global.avif'
  },
  {
    id: faker.string.uuid(),
    name: 'Home Charging',
    image: '/tesla/charging/Mega-Menu-Charging-Home-Charging-Global.avif'
  },
  {
    id: faker.string.uuid(),
    name: 'Supercharging',
    image: '/tesla/charging/Mega-Menu-Charging-Supercharging-EMEA.avif'
  },
];

const links = Array.from({length: 4}).map(() => ({
  id: faker.string.uuid(),
  name: faker.lorem.words({min:1, max: 2}),
  href: "#",
}));

const Charging = () => {
  return (
    <div
    className='
    flex
    '
    >
      <ul
      className='
      grid grid-cols-3 gap-4 px-8
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
      w-40 block
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
          <Link>
          Order
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Charging