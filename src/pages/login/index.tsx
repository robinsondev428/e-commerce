import React, { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/AuthService';
import {authImg} from '../../assets'
import {logo} from '../../assets'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const navigate = useNavigate()
  
  interface LoginState{
    email: string,
    password: string,
  }

  const initialValues = {
    email: "",
    password: "",
  }
  
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(8, "Too Short").max(50, "Too Long").required("Required")
  })

  const handleSubmit = async (values:LoginState, {setSubmitting}:any) => {
    try {
          // await login(values.email, values.password)
          navigate("/collections");
        } catch (err) {
          console.error('error', err)
        }
  };
  
  return (
    <div className='h-screen'>
      <div className='container h-full mx-auto'>
        <div className='flex flex-row flex-wrap items-center justify-center p-8 mt-24'>
          <div className='shadow-md lg:w-6/12 md:shadow-slate-500'>
            <img
              src={authImg}
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
            <Formik
              initialValues={initialValues}
              validationSchema={loginSchema}
              onSubmit={handleSubmit}
              >
              {({ errors, touched, isSubmitting}) => (
              <Form>
                <div className="mb-4">
                  <label className="block mb-2 text-base font-bold text-red-500" htmlFor="username">
                    Email
                  </label>
                  <Field
                    className={`items-center w-full px-3 py-2 mb-3 border rounded shadow appearance-none border-red text-grey-darker ${errors.email && touched.email ? "input-error" : null}`}
                    id='email'
                    name="email"
                    type="text"
                    placeholder="email"
                     />
                     <ErrorMessage name='email' className='error'/>
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-base font-bold text-red-500 text-grey-darker" htmlFor="password">
                    Password
                  </label>
                  <Field
                    className={`items-center w-full px-3 py-2 mb-3 border rounded shadow appearance-none border-red text-grey-darker ${errors.password && touched.password ? "input-error" : null}`}
                    id="password"
                    type="password"
                    name='password'
                    placeholder="************"
                  />
                  <ErrorMessage name='password' className='error'/>
                  <p className="text-sm italic text-red">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                  <button type='submit' className='px-8 py-2 text-base font-bold text-white duration-200 ease-linear bg-red-400 border rounded-full hover:bg-transparent hover:scale-110 hover:text-red-500' disabled={isSubmitting}>
                    Sign In
                  </button>
                  {/* <Link className="inline-block text-base font-bold text-red-400 align-baseline duration-300 hover:text-red-900 hover:scale-105" to="/">
                    Forgot Password?
                  </Link> */}
                </div>
              </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
