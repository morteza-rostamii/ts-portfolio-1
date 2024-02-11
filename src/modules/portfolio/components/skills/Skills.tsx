import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { faker } from '@faker-js/faker'
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import Autoplay from "embla-carousel-autoplay"
import SectionHead from '../SectionHead';
import SkillCard from './SkillCard';

const skills = [
  {
    id: faker.string.uuid(),
    name: 'Html',
    proficiency: 90,
    icon: FaHtml5, 
  },
  {
    id: faker.string.uuid(),
    name: 'Css',
    proficiency: 90,
    icon: FaCss3Alt, 
  },
  {
    id: faker.string.uuid(),
    name: 'Tailwind css',
    proficiency: 80,
    icon: BiLogoTailwindCss, 
  },
  {
    id: faker.string.uuid(),
    name: 'Javascript',
    proficiency: 90,
    icon: IoLogoJavascript, 
  },
  {
    id: faker.string.uuid(),
    name: 'Typescript',
    proficiency: 60,
    icon: SiTypescript, 
  },
  {
    id: faker.string.uuid(),
    name: 'React',
    proficiency: 80,
    icon: FaReact, 
  },
  {
    id: faker.string.uuid(),
    name: 'Next',
    proficiency: 60,
    icon: SiNextdotjs, 
  },
  {
    id: faker.string.uuid(),
    name: 'Redux',
    proficiency: 70,
    icon: SiRedux, 
  },
  {
    id: faker.string.uuid(),
    name: 'Node',
    proficiency: 60,
    icon: FaNodeJs, 
  },
]

export default function Skills() {
  return (
    <section
    id='skills'
    className='
  bg-slate-50 mb-10 p-4
    '
    >
      <SectionHead
      title={'My Skills'}
      subTxt={'These are technologies that i worked with over the past two years.'}
      />

      <Carousel
        // plugins={[
        //   Autoplay({
        //     delay: 6000,
        //     stopOnInteraction: true,
        //   }),
        // ]}
        
        opts={{
          align: "start",

        }}
        className="w-full #max-w-[90%]"
      >
        <CarouselContent className='-ml-[8.5px] #bg-green-300 w-full'>
          {
            skills?.length
            ?(
              skills.map((el:any) => (
                <CarouselItem 
                key={el.id} 
                className="
                sm:basis-1/2 
                md:basis-1/3
                lg:basis-1/5
                xl:basis-1/6
                
                ">
                  <SkillCard item={el}/>
                </CarouselItem>
              ))
            ): ''
          }
        </CarouselContent>
        <CarouselPrevious 
        className='!left-[20px]'
        />
        <CarouselNext className='!right-[20px]'/>
      </Carousel>
    </section>
  )
}

