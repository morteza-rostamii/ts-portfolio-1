import { Image, Link } from '@chakra-ui/react'
import { faker } from '@faker-js/faker'

const cars = [
  {
    id: faker.string.uuid(),
    name: 'Model S',
    image: '/tesla/vehicles/Mega-Menu-Vehicles-Model-S.avif'
  },
  {
    id: faker.string.uuid(),
    name: 'Model 3',
    image: '/tesla/vehicles/model-3.avif'
  },
  {
    id: faker.string.uuid(),
    name: 'Model X',
    image: '/tesla/vehicles/Mega-Menu-Vehicles-Model-X.avif'
  },
  {
    id: faker.string.uuid(),
    name: 'Model Y',
    image: '/tesla/vehicles/Mega-Menu-Vehicles-Model-Y.avif'
  },
  {
    id: faker.string.uuid(),
    name: 'Cybertruck',
    image: '/tesla/vehicles/cybertruck.avif'
  },
  {
    id: faker.string.uuid(),
    name: 'Help Me Choose',
    image: '/tesla/vehicles/Mega-Menu-Vehicles-HMC-RedBlue-EMEA.avif'
  },
]

const links = Array.from({length: 5}).map(() => ({
  id: faker.string.uuid(),
  name: faker.lorem.words({min:1, max: 2}),
  href: "#",
}));

const Vehicles = () => {
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
          cars?.length
          ?(
            cars.map((el:any) => (
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

export default Vehicles