import { useState } from 'react'
import { Route, Routes } from 'react-router'
import PortLayout from './modules/portfolio/PortLayout'
import Portfolio from './modules/portfolio/Portfolio'
import You1Home from './modules/youtube1/You1Home'
import You1Layout from './modules/youtube1/You1Layout'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route element={<PortLayout/>}>
          <Route path='/' element={<Portfolio/>}>
          </Route>
        </Route>

        <Route element={<You1Layout/>}>
          <Route path='/youtube1' element={<You1Home/>}>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
