//import { useState } from 'react'
import { Route, Routes } from 'react-router'
import PortLayout from '@/modules/portfolio/layouts/PortLayout'
import Portfolio from '@/modules/portfolio/pages/Portfolio'
import You1Home from '@/modules/youtube1/You1Home'
import You1Layout from '@/modules/youtube1/You1Layout'
import SpotifyHomePage from './modules/spotify/pages/SpotiHomePage'
import SpotiLayout from './modules/spotify/layouts/SpotiLayout'
import TeslaLayout from './modules/tesla/components/TeslaLayout'
import Tesla from './modules/tesla/Tesla'
import RestaurantFinder from './modules/RestaurantFinder/RestaurantFinder'
import RestaurantFinderLayout from './modules/RestaurantFinder/RestaurantFinderLayout'
//import RestaurantSingle from './modules/RestaurantFinder/RestaurantSingle'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import {motion} from 'framer-motion'
import ColorGame from './modules/colorGame/ColorGame'
// @ts-ignore
import { fireApp } from './fire/firebase'

function App() {

  return (
    <motion.div
    className='h-full'
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
    transition={{
      duration: 1,
      delay: 1,
    }}
    >
      <Routes>
        <Route element={<PortLayout/>}>
          <Route path='/' element={<Portfolio/>}>
          </Route>
        </Route>

        <Route element={<You1Layout/>}>
          <Route path='/youtube1' element={<You1Home/>}>
          </Route>
        </Route>

        <Route element={<SpotiLayout/>}>
          <Route path='/spotify' element={<SpotifyHomePage/>}>
          </Route>
        </Route>

        {/* tesla */}
        <Route element={<TeslaLayout/>}>
          <Route path='/tesla' element={<Tesla/>}>
          </Route>
        </Route>

        {/* Restaurants Finder */}
        <Route element={<RestaurantFinderLayout/>}>
          <Route path='/restaurant' element={<RestaurantFinder/>}>
          </Route>
        </Route>

        {/* color game */}
        {/* <Route element={<Color/>}>
        </Route> */}
        <Route 
        path='/colorGame' 
        element={<ColorGame/>}>
        </Route>
      </Routes>
    </motion.div>
  )
}

export default App
