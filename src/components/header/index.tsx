import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import { useUserContext } from '../../services/UserContext'
import logo from '../../assets/logo.png'
import drinkware from '../../assets/drinkware.png'
import {logout} from '../../services/AuthService';
import {UserContextType} from '../../types/usercontext'

const Header = () => {
  const {currentUser, setCurrentUser} = useUserContext();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleLogOut = () => {
    logout();
    setCurrentUser({});
    navigate('/');
  }

  const linkCss = "block py-2 pl-3 pr-4 font-serif rounded text-slate-300 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"

  return (
    <>
      <nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 bg-opacity-5">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="#" className="flex items-center">
            <img src={logo} className="h-8 sm:h-12" alt="DT logo" />
            <span className="self-center pl-2 font-serif text-xl tracking-wide text-white whitespace-nowrap">DengTiger</span>
          </a>
          <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div className="hidden w-full bg-transparent md:block md:w-auto" id="navbar-multi-level">
            <ul className="flex flex-col bg-transparent border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-lm md:font-medium md:border-0 ">
              <li>
                <div className='p-4'>
                  <a href="#" className={linkCss} aria-current="page">Home</a>
                </div>
              </li>
              <li>
                <div className='p-4 dropdown'
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                >
                  <button
                    className='block font-serif rounded dropbtn text-slate-300 hover:text-white md:p-0'
                  >
                    Products
                  </button>
                  {open ? (
                    <div className='absolute left-0 w-full mt-4 font-sans bg-gray-900 bg-opacity-90'>
                          <div className='flex flex-row justify-center h-72'>
                            <ul className='py-2 text-lg text-white'>
                              <li className='block px-4 py-2'>
                                <Link to="" className=''>Shop all</Link>
                              </li>
                              <li className='block px-4 py-2'>
                                <Link to="" className=''>New Arrivals</Link>
                              </li>
                              <li className='block px-4 py-2'>
                                <Link to="" className=''>Best Sellers</Link>
                              </li>
                            </ul>
                            <div className='my-auto ml-20 mr-10 border-l-2 h-5/6 border-slate-400'></div>
                            <ul className='py-2 mr-10 text-base text-white'>
                              <li className='block px-4 py-2 text-lg font-bold text-purple-200'>
                                <Link to="" className=''>Clothes</Link>
                              </li>
                              <li className='block px-4 py-2'>
                                <Link to="" className=''>T-shirt</Link>
                              </li>
                              <li className='block px-4 py-2'>
                                <Link to="" className=''>Hat</Link>
                              </li>
                              <li className='block px-4 py-2'>
                                <Link to="" className=''>Winter Coat</Link>
                              </li>
                              <li className='block px-4 py-2'>
                                <Link to="" className=''>Footwear</Link>
                              </li>
                              <li className='block px-4 py-2'>
                                <Link to="" className=''>Sweatshirt</Link>
                              </li>
                            </ul>
                            <ul className='py-2 mr-10 text-base text-white'>
                              <li className='block px-4 py-2 text-lg font-bold text-purple-200'>
                                <Link to="" className=''>Bags</Link>
                              </li>
                              <li className='block px-4 py-2'>
                                <Link to="" className=''>Backpack</Link>
                              </li>
                              <li className='block px-4 py-2'>
                                <Link to="" className=''>Drawstrings</Link>
                              </li>
                              <li className='block px-4 py-2'>
                                <Link to="" className=''>Duffels</Link>
                              </li>
                              <li className='block px-4 py-2'>
                                <Link to="" className=''>Totes</Link>
                              </li>
                              <li className='block px-4 py-2'>
                                <Link to="" className=''>Coolers</Link>
                              </li>
                              <li className='block px-4 py-2'>
                                <Link to="" className=''>Pouches</Link>
                              </li>
                            </ul>
                            <ul className='py-2 mr-10 text-base text-white'>
                              <li className='block px-4 py-2 text-lg font-bold text-purple-200'>
                                <Link to="" className=''>Food</Link>
                              </li>
                              <li className='block px-4 py-2'>
                                <Link to="" className=''>Bread</Link>
                              </li>
                              <li className='block px-4 py-2'>
                                <Link to="" className=''>Cake</Link>
                              </li>
                              <li className='block px-4 py-2'>
                                <Link to="" className=''>Chocolate</Link>
                              </li>
                              <li className='block px-4 py-2'>
                                <Link to="" className=''>Drink</Link>
                              </li>
                            </ul>
                            <ul className='py-2 mr-10 text-base text-white'>
                              <li className='block px-4 py-2 text-lg font-bold text-purple-200'>
                                <Link to="" className=''>Office</Link>
                              </li>
                              <li className='block px-4 py-2'>
                                <Link to="" className=''>Notebooks</Link>
                              </li>
                              <li className='block px-4 py-2'>
                                <Link to="" className=''>Journals</Link>
                              </li>
                              <li className='block px-4 py-2'>
                                <Link to="" className=''>Pens</Link>
                              </li>
                              <li className='block px-4 py-2'>
                                <Link to="" className=''>Desk Accessories</Link>
                              </li>
                              <li className='block px-4 py-2'>
                                <Link to="" className=''>Book Library</Link>
                              </li>  
                            </ul>
                            <ul className='py-2 mr-10 text-base text-white'>
                              <li className='block px-4 py-2 text-lg font-bold text-purple-200'>
                                <Link to="" className=''>Drinkware</Link>
                              </li>
                              <li className='block px-4 py-2'>
                                <Link to="" className=''>Water bottles</Link>
                              </li>
                              <li className='block px-4 py-2'>
                                <Link to="" className=''>Mugs</Link>
                              </li>
                              <li className='block px-4 py-2'>
                                <Link to="" className=''>Tumblers</Link>
                              </li>
                              <li className='block px-4 py-2'>
                                <Link to="" className=''>Glass</Link>
                              </li>
                            </ul>
                            <img src={drinkware} alt="" className='transition duration-300 ease-in-out hover:scale-75'/>
                          </div>
                    </div>
                  )
                    : null
                  }
                </div>
              </li>
              <li>
                <div className='p-4'>
                  <a href="#" className={linkCss}>About Us</a>
                </div>
              </li>
              <li>
                <div className='p-4'>
                  <Link to='/login' className={linkCss}>Contact Us</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header