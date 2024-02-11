import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useScreenSize from '@/hooks/useScreenSize'

const SectionExperience = () => {

  // responsive video -------------------
  const {width, } = useScreenSize();
  const [videoSource, setVideoSource] = useState('/tesla/Homepage-Demo-Drive-Mobile-NA.webm');

  useEffect(() => {
    console.log(width);
    if (width >= 640) setVideoSource('/tesla/Homepage-Demo-Drive-Desktop-NA.webm');
    else setVideoSource('/tesla/Homepage-Demo-Drive-Mobile-NA.webm');
  }, [width]);

  return (
    <section
    className='
    relative #min-h-[100vh]
    #sm:h-[675px] max-h-[120vh] border-b-4
    '
    >
      {/* video section */}
      <video 
      className='
      w-full h-full bg-slate-500 object-cover
      
      z-[1]
      '
      id='background-video' 
      autoPlay
      loop 
      muted 
      //poster='https://assets.codepen.io/6093409/river.jpg'
      // adding key forces re-mount of video element each time source changes
      key={videoSource}
      >
        <source 
        src={videoSource}
        type='video/webm'
        //media='(min-width: 640px)'
        />

      </video>

      {/* content */}
      <div
      className='
      absolute top-0
      flex flex-col
      z-20 text-white w-full h-full
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
              Experience Tesla
            </h1>
            <Link 
            className='decoration-gray-400 underline hover:decoration-white transition-all'
            to={'#'}>
              Schedule a Test Drive Today
            </Link>
          </div>

          {/* buttons */}
          <div
          className='
          grid gird-cols-1 gap-4
          sm:place-content-center sm:max-w-[400px]
          w-full #bg-red-50 #-z-10
          '
          >
            <button
            className='
            #white-glass-effect text-white
            p-1 px-20 rounded-md flex-1 border-2 border-white
            hover:bg-gray-100 hover:text-black transition-all
            '
            >
              Test drive
            </button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default SectionExperience