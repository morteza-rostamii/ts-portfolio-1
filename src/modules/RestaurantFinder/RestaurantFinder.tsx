import { pexelsClient } from '@/configs/config'
import { IconButton } from '@chakra-ui/react'
import { faker } from '@faker-js/faker'
import React, { useEffect, useState } from 'react'
import { HiArrowSmallLeft, HiMagnifyingGlass, HiOutlineShoppingBag } from 'react-icons/hi2'
import RestCard from './components/RestCard'



const RestaurantFinder = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const QUERY = 'food';
  const COUNT = 10;

  useEffect(() => {
    function fetchData() {
      try {
        //data.photos[i].src.medium,
        //pexelsClient.photos.search({ query: QUERY, per_page: COUNT })
        
        const restaurants:any = Array.from({length: COUNT}).map((el:any, i:number) => ({
          id: faker.string.uuid(),
          name: faker.location.street(),
          address: faker.location.streetAddress(),
          distance: {
            hours: faker.datatype.number({min: 1, max: 9}),
            minutes: faker.datatype.number({min: 1, max: 60}),
          },
          image: faker.image.urlLoremFlickr({category: QUERY}),
          stars: faker.datatype.number({min: 1, max: 5}),
        }))

        setRestaurants(restaurants);
      }
      catch(error:any) {
        console.log(error?.message || error);
      }
    }
    fetchData();
  }, []);

  return (
    <div
    className='
    flex #items-center p-4
    flex-1 w-full
    '
    >
      <div
      className='
      max-w-[350px] bg-slate-50 w-full mx-auto rounded-md overflow-hidden
      #p-3 max-h-[100vh]
      
      '
      >
        <header
        className='
        flex items-center justify-between w-full
        mb-4 p-3
        '
        >
          
          <IconButton
          aria-label=''
          icon={<HiArrowSmallLeft size={24}/>}
          borderRadius={'9999px'}

          />
          <div
          className='flex items-center gap-3'
          >
            <IconButton
            aria-label=''
            icon={<HiMagnifyingGlass size={24}/>}
            borderRadius={'9999px'}
            />
            <IconButton
            aria-label=''
            icon={<HiOutlineShoppingBag size={24}/>}
            borderRadius={'9999px'}

            />
          </div>
        </header>

        <div
        className='
        overflow-y-auto h-[550px]
        '
        
        >
          <h2
          className='font-bold text-xl mb-3 p-3 text-gray-500'
          >
            Restaurants
          </h2>
          
          <ul
          className='
          flex flex-col #gap-4
          
          '
          >
            {
              restaurants?.length
              ?(
                restaurants.map((el:any) => (
                  <RestCard
                  key={el.id}
                  item={el}
                  />
                ))
              ):''
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RestaurantFinder