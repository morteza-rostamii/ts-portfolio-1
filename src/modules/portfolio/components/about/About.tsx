import { Avatar, Button, IconButton, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import SectionHead from '../SectionHead'
import { faker } from '@faker-js/faker'
import './About.css';
import {motion} from 'framer-motion'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi2';

const aboutItems = [
  {
    id: faker.string.uuid(),
    text: 'I am great at the English language. Basically, I can search for anything on Google and I can read any documentation.'
  },
  {
    id: faker.string.uuid(),
    text: "I have a decent grasp of HTML, CSS, and Javascript💻"
  },
  {
    id: faker.string.uuid(),
    text: "I've worked with React.js, at this point at least for a year and recently I got into Next.js which I really like.😄"
  },
  {
    id: faker.string.uuid(),
    text: 'I have also worked with state management libraries like redux and redux-tool-kit and recently I mostly use (Zustand) in my projects. which is pretty neat!'
  },
  {
    id: faker.string.uuid(),
    text: 'I have worked with Axios to fetch data from (rest API) and do all CRUD operations.'
  },
  {
    id: faker.string.uuid(),
    text: 'When it comes to styling, I am pretty fast⏩ with __tailwind__ and Chakra Ui.'
  },
  {
    id: faker.string.uuid(),
    text: 'After all these, I also ventured into the world of backend and full-stack development. I learned some Node.js and Express.js! and basically (MERN) stack!'
  },
  {
    id: faker.string.uuid(),
    text: 'So I have some experience with setting up a rest API, working with authentication, MongoDB and SQL databases, orm and ...! and limited experience with docker and ci/cd!👍'
  },
  {
    id: faker.string.uuid(),
    text: "Currently, I'm looking to get a position as a front-end developer in a decent company. to do a great job for them!! make some money and use the money and experience to fuel my further progress into full-stack development and beyond!! thanks.💪"
  },
]

export default function About() {
  const [listOpen, setListOpen] = useState(false);

  return (
    <section
    id='about'
    className='
    grid grid-cols-1
    #md:grid-cols-2
    #bg-yellow-300 mb-10
    '
    >
      <div
      className='
      grid place-content-center #gap-6
      mb-10 px-3 md:px-4
      '
      >
        <SectionHead
        title={'About me'}
        subTxt={'Some words about what i have been doing so far.'}
        />

        <Avatar 
        className='object-cover w-full !border-2 !border-gray-400 mx-auto mb-8'
        src={'/portfolio/me.jpg'}
        size={'2xl'}
        />
        <div
        className='
        flex flex-col items-center justify-center gap-4
        '
        >
          <motion.ol
          className='
          relative
          flex flex-col gap-4 overflow-hidden
          text-gray-600 max-w-[600olx] w-full
          '
          style={{
            counterReset: 'item',
            listStyle: 'none',
            //height: listOpen ? 'auto' : '300px',
          }}
          
          initial={{
            height: 280,
          }}
          animate={{
            height: listOpen ? '100%' : 280,
          }}
          >
            {
              aboutItems?.length
              ?(
                aboutItems.map((el:any) => (
                  <li 
                  className='
                  bg-slate-50 py-1 px-2 rounded-md #font-bold text-gray-500 max-w-[600px]
                  hover:bg-slate-100
                  '
                  key={el.id}
                  
                  >
                    {el.text}
                  </li>
                ))
              ):''
            }

          </motion.ol>
          
          <IconButton
          aria-label=''
          className='!animate-bounce'
          icon={listOpen ? <HiChevronUp size={24}/> : <HiChevronDown size={24}/>}
          isRound={true}
          colorScheme='blue'
          size={'sm'}
          onClick={() => setListOpen((c:any) => !c)}
          >
            more
          </IconButton>

         
          {/* 
          
          Hello! I'm (Morteza Rostami) a web developer from Iran! During the past 2 years, I've been working with (javascript) and tech stack around its ecosystem. so, I have experience with frontend frameworks like (react.js) and (next.js)! i am also familiar with the backend (Node.js)! and I can work with Linux command line and (Git & Github) and many other things! if you are looking for a passionate (web developer) to build your projects, I am more than happy to join your team. 🤝✌
          */}
        </div>
      </div>

      {/* <div
      className='grid place-content-center'
      >
        
      </div> */}
    </section>
  )
}