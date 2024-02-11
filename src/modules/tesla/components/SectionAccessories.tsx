import { useEffect, useState } from 'react'
import Logo from '../icons/Logo'
import { Link } from 'react-router-dom'
import useScreenSize from '@/hooks/useScreenSize'
import { FaGlobe, FaRegQuestionCircle, FaRegUserCircle } from 'react-icons/fa'
import { faker } from '@faker-js/faker'
import MegaMenu from './MegaMenu'

const links = [
  {
    id: faker.string.uuid(),
    name: 'Vehicles',
    href: '#'
  },
  {
    id: faker.string.uuid(),
    name: 'Energy',
    href: '#'
  },
  {
    id: faker.string.uuid(),
    name: 'Charging',
    href: '#'
  },
  {
    id: faker.string.uuid(),
    name: 'Discover',
    href: '#'
  },
  {
    id: faker.string.uuid(),
    name: 'Shop',
    href: '#'
  },
];

const SectionAccessories = () => {

  // responsive video -------------------
  const {width, } = useScreenSize();
  const [videoSource, setVideoSource] = useState('/tesla/Homepage-Model-Y-Mobile-NA.mp4');

  useEffect(() => {
    console.log(width);
    if (width >= 640) setVideoSource('/tesla/Homepage-Model-Y-Desktop-NA.mp4');
    else setVideoSource('/tesla/Homepage-Model-Y-Mobile-NA.mp4');
  }, [width]);

  // megaMenu----------------------------
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    if (megaOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [megaOpen]);

  console.log(activeTab);
  console.log(videoSource)
  return (
    <section
    className='
    relative h-[100vh]
    sm:h-[675px] 
    '
    >
      {/* video section */}
      <video 
      className='
      absolute top-0 bottom-0 left-0 right-0
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
        type='video/mp4'
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
        <div
        className='w-full z-10'
        onMouseLeave={() => setMegaOpen(false)}
        >
          {/* __HEADER__ */}
          {/* 
          -------------------------------
          ## only positioned elements and flex-items can be stacked using: z-index 
          -------------------------------
          */}
          <header
          className='
          relative
          h-14 flex items-center w-full z-[5]
          '
          style={{
            zIndex: '3000 !important'
          }}
          >
            <div
            className='
            flex items-center justify-between
            container mx-auto
            w-full #bg-red-50
            '
            >
              <div 
              className={`
              ${megaOpen ? 'text-black' : 'text-white'}
              w-24
              `}
              >
              <Logo/>
              </div>

              {/* navigation */}
              <nav
              className='
              hidden
              md:flex items-center gap-4
              '
              >
                {
                  links?.length
                  ?(
                    links.map((el:any) => (
                      <a 
                      className={`
                      ${megaOpen ? 'text-black' : 'text-white'}
                      ${megaOpen && activeTab === el.name ? 'bg-slate-100' : 'bg-none'}
                      p-1 px-2 rounded-md transition-all
                      `}
                      key={el.id}
                      href='#'

                      onMouseEnter={() => {
                        setActiveTab(el.name);
                        setMegaOpen(true);
                      }}
                      >
                        {el.name}
                      </a>
                    ))
                  ): ''
                }
              </nav>

              {/* desktop left */}
              <div
              className={`
              ${megaOpen ? 'text-black' : 'text-white'}
              hidden
              md:flex items-center gap-3
              `}
              >
                <button
                className='
                glass-effect p-1 rounded-full overflow-hidden
                '
                >
                <FaRegQuestionCircle size={22}/>
                </button>
                <button
                className='
                glass-effect p-1 rounded-full overflow-hidden
                '
                >
                <FaGlobe size={22}/>
                </button>
                <button
                className='
                glass-effect p-1 rounded-full overflow-hidden
                '
                >
                <FaRegUserCircle size={22}/>
                </button>
              </div>

              {/* ham menu */}
              <div
              className='
              flex md:hidden
              '
              >
                <button
                className='
                glass-effect
                p-1 px-3 rounded-md
                '
                >
                  Menu
                </button>
              </div>
            </div>
          </header>
          {/* mega menue */}
          {
            !!megaOpen && (
              <MegaMenu 
              setMegaOpen={setMegaOpen}
              activeTab={activeTab}
              />
            )
          }
        </div>

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
              Model Y
            </h1>
            <Link 
            className='decoration-gray-400 underline hover:decoration-white transition-all'
            to={'#'}>
              Schedule a Test Drive
            </Link>
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
              Faster Delivery
            </button>
            <button
            className='
            dark-glass-effect text-white
            p-1 px-3 rounded-md flex-1
            '
            >
              Custom Order
            </button>

            <p 
            className='text-center sm:col-span-2'
            >
            Euro NCAP 5-Star Safety Rating
            </p>
          </div>
        </div>
      </div>

      {/* back-drop */}
      {
        !!megaOpen &&(
          <div
          className='
          fixed top-0 bottom-0 left-0 right-0
          #bg-slate-100 #blur-lg bg-opacity-70
          z-[3] glass-background
          '
          >
          </div>
        )
      }
    </section>
  )
}

export default SectionAccessories