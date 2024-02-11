import { Button,  } from '@chakra-ui/react'
import HeroImg from './HeroImg';
import { HiArrowLongRight } from 'react-icons/hi2';
import { BsGithub } from 'react-icons/bs';
import './Hero.css'

const Hero = () => {
  return (
    <section
    className='
    grid place-content-center mb-10 bg-white
    '
    >
      <div
      className='
      flex flex-col items-center justify-center 
      text-center p-8 pt-20
      gap-4
      md:gap-14

      '
      >
        <a
        href='https://react.dev/'
        target='_blank'
        className="
        grid place-content-center 
        #w-28 #h-28 #bg-red-50"
        >
          <HeroImg/>
        </a>

        <div
        className='
        flex flex-col 
        gap-0
        md:gap-10
        '
        >
          <a
          href='https://react.dev/'
          target='_blank'
          className='
          content 
          #text-cyan-500 
          #underline
          #bg-red-50 p-2
          text-6xl 
          md:text-9xl
          '
          >
            <h2>React.Dev</h2>
            <h2>React.Dev</h2>
            <h2>React.Dev</h2>
          </a>

          <h2
          className='
          text-slate-500
          max-w-[500px] md:text-lg
          '
          >
          I am a <span className='text-cyan-600 font-bold underline'>React.js</span> frontend developer. i also have experience with backend technologies such as <span className='text-green-600 underline'>Node.js</span>! 🤘 
          </h2>
        </div>

        <div
        className='
        flex gap-4 items-center w-full flex-wrap
        justify-center #bg-red-50
        '
        >
          <Button
          className='#flex-1 #md:flex-auto'
          rightIcon={<HiArrowLongRight size={20}/>}
          // /iconSpacing={14}
          borderRadius={'9999px'}
          colorScheme='green'
          variant={'outline'}

          onClick={() => {
            const section = document.querySelector('#projects');
            if (section) {
              section.scrollIntoView({behavior: 'smooth'});
            }
          }}
          >
            Projects
          </Button>
          <a
          className='inline-block'
          href={'https://github.com/morteza-rostamii/'}
          target='_blank'
          >
            <Button
            className='#flex-1 #md:flex-auto'
            rightIcon={<BsGithub size={20}/>}
            borderRadius={'9999px'}
            colorScheme='green'
            
            >
              Github
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero