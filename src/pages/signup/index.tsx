import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { authImg, logo } from '../../assets';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  
  interface SignupState {
    username: string,
    email: string,
    password: string,
    password2: string
  }
  
  const initialValues:SignupState = {
    username:"",
    email:"",
    password:"",
    password2:"",
  }
  
  const signupSchema = Yup.object().shape({
    username: Yup.string().required("Username Required"),
    email: Yup.string().email("Valid Email Required").required("Password Required"),
    password: Yup.string().min(8, "Password must be 8 characters at least!").required("Password Required"),
    password2: Yup.string().required("Please confirm your password").oneOf([Yup.ref("password")], "Passwords do not match")
  })
  
  const handleSubmit = (values:SignupState) =>{
    console.log(values)
    navigate('/login')
  }
  
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
            validationSchema={signupSchema}
            onSubmit={handleSubmit}
            >
            {({ errors, touched}) => (
            <Form>
              <div className="mb-4">
                <label className="block mb-2 text-base font-bold text-red-500" htmlFor="username">
                  Username
                </label>
                <Field
                  className={`items-center w-full px-3 py-2 mb-3 border rounded shadow appearance-none border-red text-grey-darker ${errors.username && touched.username ? "input-error" : null}`}
                  id='username'
                  name="username"
                  type="text"
                  placeholder="username"
                   />
                   <ErrorMessage name='username' className='error'/>
              </div>
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
              <div className="mb-4">
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
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-base font-bold text-red-500 text-grey-darker" htmlFor="password">
                  Confirm Password
                </label>
                <Field
                  className={`items-center w-full px-3 py-2 mb-3 border rounded shadow appearance-none border-red text-grey-darker ${errors.password2 && touched.password2 ? "input-error" : null}`}
                  id="password2"
                  type="password"
                  name='password2'
                  placeholder="************"
                />
                <ErrorMessage name='password2' className='text-sm error'/>
              </div>
              <div className="flex items-center justify-between">
                <button type='submit' className='px-8 py-2 text-base font-bold text-white duration-200 ease-linear bg-red-400 border rounded-full hover:bg-transparent hover:scale-110 hover:text-red-500'>
                  Sign Up
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

export default Signup;