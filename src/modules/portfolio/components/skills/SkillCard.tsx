import { useEffect, useRef } from 'react'
import {motion, useInView} from 'framer-motion'
import Proficiency from './Proficiency';

const SkillCard = ({item}: any) => {
  const Icon = item.icon;

  //card into view animation -------------
  const cardRef = useRef(null);

  const isInView = useInView(cardRef);

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <div
    className='
    content
    relative overflow-hidden
    grid place-content-center text-center
    p-8  #whitespace-nowrap
    rounded-full w-40 h-40 mx-auto border-2 border-slate-300
    '
    //style={{backgroundImage: `url('${item.icon}')`}}

    ref={cardRef}
    >
      <Icon size={80}/>
      
      <Proficiency 
      proficiency={item.proficiency}/>

      <motion.div 
      className='
      item
      absolute bottom-0 w-full
      bg-cyan-200 bg-opacity-50 -z-10     
      '
      // style={{
      //   height: `${item.proficiency}%`,
      // }}

      animate={{
        height: isInView ? item.proficiency + '%' : '0%',
      }}
      transition={{
        duration: 1,
        delay: .3,
        type: 'spring',
        stiffness: 20,
        damping: 3,
      }}
      >
      </motion.div>
    </div>
  )
}

export default SkillCard