import { useEffect, useState } from 'react'
import useScreenSize from '@/hooks/useScreenSize'
import { Image } from '@chakra-ui/react'



const SectionModelS = () => {

  // responsive video -------------------
  const {width, } = useScreenSize();
  const [activeImg, setActiveImg] = useState('/tesla/2/Model-S-homepage-mobile.avif');

  useEffect(() => {
    if (width >= 640) {
      setActiveImg('/tesla/2/Model-S-homepage-desktop1.avif');
    }
    else {
      setActiveImg('/tesla/2/Model-S-homepage-mobile.avif');
    }
  }, [width]);

  return (
    <section
    className='
    relative 
    #grid
    w-full
    max-h-[120vh] overflow-hidden
    border-b-4
    '
    >
      <div 
      className='
      w-full h-full bg-slate-500
      
      z-[1]
      '
      
      >
        <Image
        className='!object-cover w-full #h-full '
        src={activeImg}
        />
      </div>

      {/* content */}
      <div
      className='
      absolute top-0
      flex flex-col
      z-[2] text-white w-full h-full #bg-white
      '
      >

        {/* overlay */}
        <div
        className='
        flex flex-col items-center justify-between flex-1 h-full
        pt-10 pb-10 container mx-auto
        z-[2]
        '
        >
          {/* top title */}
          <div
          className='
          text-center
          '
          >
            <h1
            className='text-3xl font-bold'
            >
              Model S
            </h1>
          </div>

          {/* buttons */}
          <div
          className='
          grid gird-cols-1 gap-4
          sm:grid-cols-2 sm:place-content-center sm:max-w-[400px]
          w-full #bg-red-50 #-z-10
          '
          >
            <button
            className='
            white-glass-effect text-black
            p-1 px-3 rounded-md flex-1
            '
            >
              Test Drive
            </button>
            <button
            className='
            dark-glass-effect text-white
            p-1 px-3 rounded-md flex-1
            '
            >
              Custom Order
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionModelS