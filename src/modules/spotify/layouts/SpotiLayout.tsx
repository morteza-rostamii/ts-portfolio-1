import { Outlet } from 'react-router'

const SpotiLayout = () => {
  return (
    <div className='h-full'>
      <Outlet/>
    </div>
  )
}

export default SpotiLayout