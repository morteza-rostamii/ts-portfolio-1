import React from 'react'
import { Outlet } from 'react-router'
import You1Header from './You1Header'

const You1Layout = () => {
  return (
    <div>
      <You1Header/>
      <Outlet/>
    </div>
  )
}

export default You1Layout