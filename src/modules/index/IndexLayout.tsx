import { Outlet } from "react-router"

const IndexLayout = () => {
  return (
    <div className="h-full">
      <Outlet/>
    </div>
  )
}

export default IndexLayout