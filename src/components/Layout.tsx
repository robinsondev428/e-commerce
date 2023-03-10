import {Outlet, Link} from 'react-router-dom'
import Header from './header'
import background from '../assets/Background.jpg'

const Layout = () => {
  return (
    <div className="min-h-screen bg-scroll bg-no-repeat bg-auto" style={{backgroundImage: `url(${background})`}}>
      <Header/>
      <Outlet />
    </div>
  )
}

export default Layout
