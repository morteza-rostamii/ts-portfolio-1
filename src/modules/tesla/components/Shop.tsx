import { Image, Link } from '@chakra-ui/react'
import { faker } from '@faker-js/faker'

const items = [
  {
    id: faker.string.uuid(),
    name: 'Charging',
    image: '/tesla/shop/Mega-Menu-Shop-Charging.avif'
  },
  {
    id: faker.string.uuid(),
    name: 'Vehicle Accessories',
    image: '/tesla/shop/Mega-Menu-Shop-Vehicle-Accessories.avif'
  },
  {
    id: faker.string.uuid(),
    name: 'Apparel',
    image: '/tesla/shop/Mega-Menu-Shop-Apparel.avif'
  },
  {
    id: faker.string.uuid(),
    name: 'Lifestyle',
    image: '/tesla/shop/Mega-Menu-Shop-Lifestyle.avif'
  },
]

// const links = Array.from({length: 5}).map((el:any) => ({
//   id: faker.string.uuid(),
//   name: faker.lorem.words({min:1, max: 2}),
//   href: "#",
// }));

const Shop = () => {
  return (
    <div
    className='
    flex
    '
    >
      <ul
      className='
      grid grid-cols-4 gap-4 px-8
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
      
      <Link
      className='text-center'
      >
        <h3 className='font-bold'>
          {item.name}
        </h3>
        
      </Link>
    </div>
  )
}

export default Shop