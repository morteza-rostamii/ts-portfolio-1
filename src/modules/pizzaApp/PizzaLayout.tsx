import React from 'react'
import { Outlet } from 'react-router'

const PizzaLayout = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default PizzaLayout