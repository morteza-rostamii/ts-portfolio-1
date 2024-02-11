import { Button } from '@chakra-ui/react'
import ListCard from './ListCard';
import SpoMainFoot from './SpoMainFoot';
import { Link } from 'react-router-dom';
import { faker } from '@faker-js/faker';

faker.seed(123);

const playlists = Array.from({length: 4}).map(() => {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.words({min: 1, max: 2}),
    description: faker.lorem.words({min: 4, max: 6}),
    image: faker.image.urlLoremFlickr({category: 'music'}),
  };
});

const MSection = () => {
  
  return (
    <div
    className='
    flex flex-col gap-3
    p-3
    '
    >
      <div
      className='
      flex items-center justify-between overflow-hidden
      '
      >
        <Button
        className='
        !text-neutral-300 !text-xl
        hover:!text-white
        //hover:scale-[1.05]
        '
        as={Link}
        to={'#'}
        variant={'link'}
        >
          Spotify Playlist
        </Button>
        <Button
        className='
        !text-neutral-300
        hover:!text-white
        //hover:scale-[1.05]
        '
        as={Link}
        to={'#'}
        variant={'link'}
        size={'sm'}
        >
          Show all
        </Button>
      </div>

      {/* grid */}
      <div
      className='
      grid gap-4
      
      '
      style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))'
      }}
      >
        {
          playlists?.length
          ?(
            playlists.map((el:any) => (
              <ListCard
              key={el.id}
              item={el}
              />
            ))
          ): ''
        }
      </div>

      {/* footer */}
      <SpoMainFoot/>
    </div>
  )
}

export default MSection