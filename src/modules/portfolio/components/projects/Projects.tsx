import { Button, Image, Input, InputGroup, InputRightElement, Textarea } from '@chakra-ui/react'
import { faker } from '@faker-js/faker'
import React, { useEffect, useState } from 'react'
import { BsSendFill } from 'react-icons/bs'
import { IoMdSend } from 'react-icons/io'
import ProjCard from './ProjCard'
import GridProjects from './GridProjects'
import SectionHead from '../SectionHead'

let projects = [
  {
    id: faker.string.uuid(),
    name: 'Airbnb clone',
    href: 'https://airbnb-1-0.vercel.app/',
    image: '/portfolio/projects/airbnb.png',
    description: 'Airbnb clone ui',
  },
  {
    id: faker.string.uuid(),
    name: 'Tesla Homepage',
    href: '/tesla',
    image: '/portfolio/projects/teslahomepage.png',
    description: 'A clone of tesla home page ui.',
  },
  {
    id: faker.string.uuid(),
    name: 'Spotify HomePage',
    href: '/spotify',
    image: '/portfolio/projects/spotify-home.jpg',
    description: 'A clone of spotify home page ui.',
  },
  {
    id: faker.string.uuid(),
    name: 'Color Game',
    href: '/colorGame',
    image: '/portfolio/projects/colorGuessGame.png',
    description: 'A color game in react',
  },
  {
    id: faker.string.uuid(),
    name: 'Restaurant Finder',
    href: '/restaurant',
    image: '/portfolio/projects/restaurant.jpg',
    description: 'Restaurant Finder ui',
  },
];

const placeholders = Array.from({length: 10}).map((el:any) => {
  return {
    id: faker.string.uuid(),
    name: 'placeholder',
    href: '#',
    image: faker.image.urlPlaceholder({
      width: 200,
      height: 200,
    }),
    description: faker.lorem.words({min: 10, max: 15}),   
  }
});

projects = [...projects, ...placeholders];

let page = 1;
let LIMIT = 6;
let prev = 0;

export default function Projects() {
  const [items, setItems] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  function fetchData() {
    return new Promise((resolve:any) => {
      setTimeout(() => {
        const chunk = projects.slice(prev, LIMIT * page);
        prev = LIMIT * page;
        resolve(chunk);
      }, 1000);
    })
  }

  async function getProjects() {
    console.log(page, 'get projs')

    if ((prev >= projects.length)) {
      console.log('--');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const projs: any = await fetchData();
      setLoading(false);
      setItems((c:any) => ([
        ...c,
        ...projs,
      ]));
      page += 1;
    }
    catch(error: any) {
      console.log(error?.message || error);
    }
  }

  // useEffect(() => {
  //   getProjects();
  // }, []);

  return (
    <section
    id='projects'
    className='
    grid grid-cols-1
    #md:grid-cols-2
    #bg-yellow-300 mb-10
    #p-4
    '
    >
      <div
      className='
      relative
      grid place-content-center gap-6
      mb-10 px-8 #max-w-[1000px] container mx-auto
      '
      >
        <SectionHead
        title={'My Projects'}
        subTxt={'These are some of my practice projects.'}
        />

        <div
        className='
        grid gap-4
        '
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))"
        }}
        >
          {
            projects?.length
            ?(
              projects.map((el:any) => (
                <ProjCard
                key={el.id}
                item={el}
                />
              ))
            ):''
          }
        </div>
        {/* <GridProjects 
        projects={items} 
        fetchData={getProjects} 
        prev={prev}
        originalProjs={projects}
        loading={loading}
        /> */}
      </div>
    </section>
  )
}