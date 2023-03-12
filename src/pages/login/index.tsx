import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/AuthService';
import loginImg from '../../assets/login.jpg'
import logo from '../../assets/logo.png'
const Login = () => {
  interface LoginState {
    username:string,
    password:string,
    isLoading: boolean,
    
  }
  const [data, setData] = useState({
    username: "",
    password: ""
  })
  console.log("enter login");

  const { username, password } = data;
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  }

  return (
    <div className='h-screen'>
      <div className='container h-full mx-auto'>
        <div className='flex flex-row flex-wrap items-center justify-center p-8 mt-24'>
          <div className='shadow-md lg:w-6/12 md:shadow-slate-500'>
            <img
              src={loginImg}
              className=''
              alt="Sample Image" />
          </div>
          <div className="w-full px-8 pt-6 pb-8 mb-4 rounded lg:w-4/12 md:w-8/12">
            <div className='flex justify-center mb-4 '>
              <img
                src={logo}
                alt=""
                className=' bg-red-500 rounded-[24px] scale-75'
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-base font-bold text-red-500" htmlFor="username">
                Username
              </label>
              <input
                className="w-full px-3 py-2 border rounded shadow appearance-none text-grey-darker sm:w-full"
                id='username'
                name="username"
                type="text"
                placeholder="Username"
                onChange={handleChange}
                value={username} />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-base font-bold text-red-500 text-grey-darker" htmlFor="password">
                Password
              </label>
              <input
                className="items-center w-full px-3 py-2 mb-3 border rounded shadow appearance-none border-red text-grey-darker"
                id="password"
                type="password"
                placeholder="************" 
              />
              <p className="text-sm italic text-red">Please choose a password.</p>
            </div>
            <div className="flex items-center justify-between">
              <button className='px-8 py-2 text-base font-bold text-white duration-200 ease-linear bg-red-400 border rounded-full hover:bg-transparent hover:scale-110 hover:text-red-500'>
                Sign In
              </button>
              <a className="inline-block text-base font-bold text-red-400 align-baseline duration-300 hover:text-red-900 hover:scale-105" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
