import React from 'react'
import { Outlet } from 'react-router'
import PortHeader from './PortHeader'

const PortLayout = () => {
  return (
    <div>
      <PortHeader/>
      <Outlet/>
    </div>
  )
}

export default PortLayout