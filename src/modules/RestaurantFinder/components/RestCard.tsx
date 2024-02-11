import { Image } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { HiArrowLongLeft, HiOutlineBookmark, HiOutlinePhone, HiStar } from 'react-icons/hi2'
import { motion } from 'framer-motion'

const RestCard = ({item}: any) => {
  let initX = 0;
  const [offsetX, setOffsetX] = useState(0);

  const cardRef = useRef(null);

  // event handlers --------------------

  const handMouseDown = (e:any) => {
    const cardEl:any = cardRef.current;
    if (!cardEl) return;

    initX = e.offsetX;

    // mouseMove
    document.addEventListener('mousemove', handMouseMove);

    // mouseUp
    document.addEventListener('mouseup', handMouseUp);
  }

  const handMouseUp = (e:any) => {
    const cardEl:any = cardRef.current;
    if (!cardEl) return;
    // remove: mouse move
    document.removeEventListener('mousemove', handMouseMove);

    // card back to it's position
    cardEl.style.transform = `translateX(${0}px)`;
  }

  const handMouseMove = (e:any) => {
    const translateAmount = initX - e.offsetX;

    const cardEl:any = cardRef.current;
    if (!cardEl) return;
    console.log(e.offsetX, initX, initX - e.offsetX);
    //group-hover:-translate-x-28

    //cardEl.style.translateX = initX - e.offsetX;

    if (translateAmount <= 200 && translateAmount >= 0) {
      cardEl.style.transform = `translateX(-${translateAmount}px)`;
    }

  }

  // useEffect(() => {
  //   const cardEl:any = cardRef.current;
  //   if (!cardEl) return;
  //   cardEl.addEventListener('mousedown', handMouseDown);
  // }, []);

  return (
    <div
    className='
    relative group
    flex items-center gap-4
    bg-red-50 #rounded-md #p-3 #shadow-md border-b-4 border-gray-100
    !select-none
    '
    >
      <div
      className='
      absolute right-0 top-1/2 -translate-y-1/2
      flex items-center gap-2 #bg-red-50 h-full p-2
      '
      >
        <button
        className='
        flex flex-col items-center p-2 gap-1
        bg-white rounded-md text-green-500 hover:text-green-400
        '
        >
          <span className=''>
            <HiOutlinePhone size={24}/>
          </span>
          {/* <span className='text-sm #text-gray-400'>
            Phone
          </span> */}
        </button>
        <button
        className='
        flex flex-col items-center p-2 gap-1
        bg-white rounded-md text-orange-500 hover:text-orange-400
        '
        >
          <span>
            <HiOutlineBookmark size={24}/>
          </span>
          {/* <span className='text-sm '>
            mark
          </span> */}
        </button>
      </div>

      <div
      className='
      relative flex items-center gap-4 bg-white w-full
      group-hover:-translate-x-28 transition-all h-full p-3
      '
      ref={cardRef}
      >
        <div
        className='
        aspect-[1/1] w-24 rounded-md overflow-hidden
        '
        >
          <Image
          className='
          w-full h-full
          '
          objectFit={'cover'}
          src={item.image}
          alt={item.name}
          fallbackSrc={'https://placehold.co/400'}
          />
        </div>

        <div
        className='
        flex flex-col gap-1
        self-start
        '
        >
          <h2
          className='
          font-bold
          '
          >
            {item.name}
          </h2>
          <p className='text-sm text-gray-500'>
            {item.address}
          </p>
          <p className='text-sm text-gray-500'>
            {item.distance.hours} hours {item.distance.minutes} min
          </p>
        </div>
        <div
        className='
        flex items-center #gap-1 p-2
        text-sm text-red-500 font-bold
        bg-red-100 self-start w-8 h-8 rounded-full
        ml-auto
        '
        >
          <span>
          {item.stars}
          </span>
          <HiStar size={20}/>
        </div>
      </div>

      {/* <motion.button
      className='
      absolute top-[50%] right-4
      '
      animate={{
        x: [-10, 10, -10],
        transition: {
          duration: 2, ease: 'easeInOut',
          repeat: Infinity,
        }
      }}
      >
        <HiArrowLongLeft size={24}/>
      </motion.button> */}
    </div>
  )
}

export default RestCard