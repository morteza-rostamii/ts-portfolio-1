import { Image, Link } from '@chakra-ui/react'
import { faker } from '@faker-js/faker'
import React from 'react'

const links = Array.from({length: 4}).map((el:any) => ({
  id: faker.string.uuid(),
  name: faker.lorem.words({min:1, max: 2}),
  href: "#",
}));

const Discover = () => {
  return (
    <div
    className='
    grid grid-cols-3 gap-20
    '
    >
      {
        Array.from({length: 3}).map((el:any, i:number) => (
          <div 
          className='
          flex flex-col gap-4
          '
          key={i}>
            <h2 className='text-gray-500 text-lg'>
              {faker.lorem.words({min: 1, max: 2})}
            </h2>
            <ul
            className='
            flex flex-col gap-3
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
        ))
      }
    </div>
  )
}

export default Discover