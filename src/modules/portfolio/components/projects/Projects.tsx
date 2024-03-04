import { faker } from '@faker-js/faker'
import ProjCard from './ProjCard'
import SectionHead from '../SectionHead'
//import { useState } from 'react';

let projects = [
  {
    id: faker.string.uuid(),
    name: 'Airbnb clone',
    href: 'https://airbnb-1-0.vercel.app/',
    image: 'https://firebasestorage.googleapis.com/v0/b/rostami--portfolio.appspot.com/o/projects%2Fairbnb.png?alt=media&token=bc0b30cd-0e4d-4fd2-a307-e9df6dd33880',
    description: 'Airbnb clone ui',
  },
  // {
  //   id: faker.string.uuid(),
  //   name: 'Tesla Homepage',
  //   href: '/tesla',
  //   image: '/portfolio/projects/teslahomepage.png',
  //   description: 'A clone of tesla home page ui.',
  // },
  {
    id: faker.string.uuid(),
    name: 'Budget App',
    href: '/budget',
    image: '',
    description: 'a budget application',
  },
  {
    id: faker.string.uuid(),
    name: 'Color Game',
    href: '/colorGame',
    image: 'https://firebasestorage.googleapis.com/v0/b/rostami--portfolio.appspot.com/o/projects%2FcolorGuessGame.png?alt=media&token=cc4418b8-bbd7-4949-a84a-f9508e89f192',
    description: 'A color game in react',
  },
  {
    id: faker.string.uuid(),
    name: 'search',
    href: '/search',
    image: '',
    description: 'an search input.',
  },
  {
    id: faker.string.uuid(),
    name: 'sudoku',
    href: '/sudoku',
    image: '',
    description: 'a sudoku game in react.',
  },
  {
    id: faker.string.uuid(),
    name: 'Travel website',
    href: 'https://rostami-react-ui-1.web.app/booking',
    image: 'https://firebasestorage.googleapis.com/v0/b/rostami--portfolio.appspot.com/o/projects%2Ftravel.png?alt=media&token=1faafa40-77ef-4c8a-8dc4-217386cba2d2',
    description: 'homepage design of a travel website.',
  },
  {
    id: faker.string.uuid(),
    name: 'Online Shop',
    href: 'https://rostami-react-ui-1.web.app/chair-site',
    image: 'https://firebasestorage.googleapis.com/v0/b/rostami--portfolio.appspot.com/o/projects%2FchairShop.png?alt=media&token=ff956b6b-596c-46c4-b506-c626b693fb5c',
    description: 'An online shop homepage ui.',
  },
  {
    id: faker.string.uuid(),
    name: 'digikala',
    href: 'https://rostami-react-ui-1.web.app/digikala',
    image: 'https://firebasestorage.googleapis.com/v0/b/rostami--portfolio.appspot.com/o/projects%2Fdigikala.png?alt=media&token=420a8489-fc3a-446f-a6ae-7ff983ca7525',
    description: 'digikala homepage ui',
  },
  {
    id: faker.string.uuid(),
    name: 'Restaurant Finder',
    href: '/restaurant',
    image: 'https://firebasestorage.googleapis.com/v0/b/rostami--portfolio.appspot.com/o/projects%2Frestaurant.jpg?alt=media&token=7d5f466f-13a8-4667-8ee1-d6a93c5fc6ff',
    description: 'Restaurant Finder ui',
  },
  
];

const placeholders = Array.from({length: 10}).map(() => {
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

// let page = 1;
// let LIMIT = 6;
// let prev = 0;

export default function Projects() {
  //const [items, setItems] = useState<any>([]);
  //const [loading, setLoading] = useState(true);

  // function fetchData() {
  //   return new Promise((resolve:any) => {
  //     setTimeout(() => {
  //       const chunk = projects.slice(prev, LIMIT * page);
  //       prev = LIMIT * page;
  //       resolve(chunk);
  //     }, 1000);
  //   })
  // }

  // async function getProjects() {
  //   console.log(page, 'get projs')

  //   if ((prev >= projects.length)) {
  //     console.log('--');
  //     setLoading(false);
  //     return;
  //   }

  //   try {
  //     setLoading(true);
  //     const projs: any = await fetchData();
  //     setLoading(false);
  //     setItems((c:any) => ([
  //       ...c,
  //       ...projs,
  //     ]));
  //     page += 1;
  //   }
  //   catch(error: any) {
  //     console.log(error?.message || error);
  //   }
  // }

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