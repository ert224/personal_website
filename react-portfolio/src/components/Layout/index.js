import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  return (
    <>
    <Sidebar/>
    <div className="App">
      <div className="page">
        <Outlet />
      </div>
    </div>
    </>
  )
}

export default Layout
