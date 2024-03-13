//import { useState } from 'react'
import { Route, Routes } from 'react-router'
import PortLayout from '@/modules/portfolio/layouts/PortLayout'
import Portfolio from '@/modules/portfolio/pages/Portfolio'
//import You1Home from '@/modules/youtube1/You1Home'
//import You1Layout from '@/modules/youtube1/You1Layout'
import SpotifyHomePage from './modules/spotify/pages/SpotiHomePage'
import SpotiLayout from './modules/spotify/layouts/SpotiLayout'
//import TeslaLayout from './modules/tesla/components/TeslaLayout'
//import Tesla from './modules/tesla/Tesla'
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
//import BudgetPage from './modules/budgetApp/BudgetPage'
//import TicTacToePage from './modules/ticTacToe/TicTacToePage'

//import connectDb from '@/configs/indexedDb';
//import { useEffect, useState } from 'react'
//import PizzaLayout from './modules/pizzaApp/PizzaLayout'
//import PizzaPage from './modules/pizzaApp/PizzaPage'
///import Rating1Page from './modules/ratingComp1/Rating1Page'
import SearchInputPage from './modules/searchInput/SearchInputPage'
//import SudokuPage from './modules/sudoku/SudokuPage'
//import PaintPage from './modules/paintApp/PaintPage'
//import IndexPage from './modules/index/IndexPage'
//import IndexLayout from './modules/index/IndexLayout'
//import TaskUi1 from './modules/taskUi1/TaskUi1'
import { useEffect } from 'react'
import { faker } from '@faker-js/faker'
import Quiz from './modules/quiz/Quiz'
import QuizProvider from './modules/quiz/QuizProvider'
import CommentsProvider from './modules/nestedComments/CommentsProvider'
//import CommentSection from './modules/nestedComments/CommentSection'
import CountDownTimer from './modules/countDownTimer/CountDownTimer'
import NestedComments from './modules/nestedComments/NestedComments'
//import { useEffect } from 'react'
//import { initDB } from './configs/indexedDb'

function App() {

  // useEffect(() => {
  //   (async () => {
  //     await initDB();
  //   })();
  // }, []);

  useEffect(() => {
    faker.seed(123);
  }, []);

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
      duration: .5,
      delay: .5,
    }}
    >
      <Routes>
        <Route element={<PortLayout/>}>
          <Route path='/' element={<Portfolio/>}>
          </Route>
        </Route>

        {/* <Route element={<You1Layout/>}>
          <Route path='/youtube1' element={<You1Home/>}>
          </Route>
        </Route> */}

        <Route element={<SpotiLayout/>}>
          <Route path='/spotify' element={<SpotifyHomePage/>}>
          </Route>
        </Route>

        {/* tesla */}
        {/* <Route element={<TeslaLayout/>}>
          <Route path='/tesla' element={<Tesla/>}>
          </Route>
        </Route> */}

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

        {/* <Route 
        path='/budget' 
        element={<BudgetPage/>}>
        </Route> */}
        
        {/* <Route 
        path='/ticTacToe' 
        element={<TicTacToePage/>}>
        </Route> */}

        {/* pizza */}
        {/* <Route element={<PizzaLayout/>}>
          <Route 
          path='/pizza' 
          element={<PizzaPage/>}>
          </Route>
        </Route> */}

        {/* rating component 1 */}
        {/* <Route 
        path='/rating1' 
        element={<Rating1Page/>}>
        </Route> */}

        {/* search input */}
        <Route 
        path='/search' 
        element={<SearchInputPage/>}>
        </Route>

        {/* autocomplete search */}
        {/* <Route 
        path='/sudoku' 
        element={<SudokuPage/>}>
        </Route> */}

        {/* <Route 
        path='/paint' 
        element={<PaintPage/>}>
        </Route> */}

        {/* <Route 
        path='/taskui1' 
        element={<TaskUi1/>}>
        </Route> */}
        
        <Route 
        path='/quiz-app' 
        element={
          <QuizProvider>
            <Quiz/>
          </QuizProvider>
        }>
        </Route>

        <Route 
        path='/comments' 
        element={
          <CommentsProvider>
            <NestedComments/>
          </CommentsProvider>
        }>
        </Route>

        <Route 
        path='/timer' 
        element={<CountDownTimer/>}>
        </Route>
        
      </Routes>
    </motion.div>
  )
}

export default App
