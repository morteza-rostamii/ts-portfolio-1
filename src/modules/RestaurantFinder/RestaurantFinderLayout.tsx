import React from 'react'
import { Outlet } from 'react-router'

const RestaurantFinderLayout = () => {
  return (
    <div className='flex flex-col h-full #bg-slate-50'>
      <Outlet/>
    </div>
  )
}

export default RestaurantFinderLayout