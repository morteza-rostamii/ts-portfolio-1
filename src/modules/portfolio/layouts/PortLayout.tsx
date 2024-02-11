import React from 'react'
import { Outlet } from 'react-router'
import PortHeader from './PortHeader'

const PortLayout = () => {
  
  return (
    <div
    className='flex flex-col #h-full'

    // initial={{
    //   opacity: 0,
    // }}
    // animate={{
    //   opacity: 1,
    // }}
    // transition={{
    //   duration: 1,
    //   delay: 2,
    // }}
    >
      <PortHeader/>
      <Outlet/>
    </div>
  )
}

export default PortLayout