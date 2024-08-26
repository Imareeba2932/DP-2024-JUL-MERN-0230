'use client'
import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
  email : Yup.string()
  .email('Please enter a valid email address')
  .required('Email is required'),

  password: Yup.string()
  .min(8, 'Password must be at least 8 characters')
  .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .matches(/\d/, 'Password must contain at least one number')
  .required('Password is required')
})

const Login = () => {
  // step1: formik initialization
  const loginForm = useFormik({
    initialValues: {
      email : '',
      password : '',
    },
    onSubmit: (values, {resetForm}) =>
    {
      console.log(values)
      resetForm()
    },
    validationSchema: LoginSchema
    
  
  })
  return (
    <div className='flex justify-center h-screen items-center'>
      <div className="border-2 w-1/5 shadow-lg rounded-lg p-8 bg-white">
        <h3 className="text-center font-bold text-2xl my-4">Login Form</h3>
        {/* Step 2: Data handling when submit */}
        <form onSubmit={loginForm.handleSubmit}>
          <label htmlFor="">Email Address</label>
          {/* step 3 */}
          <input
            className="w-full p-2 border-2 border-gray-300 rounded-md mb-5"
            type="email"
            id = 'email'
            onChange = {loginForm.handleChange}
            value = {loginForm.values.email}
          />
          {loginForm.errors.email && loginForm.touched.email ? (
            <div className='text-red-500 text-sm'>{loginForm.errors.email}</div>
          ) : null}

          <label htmlFor="">Password</label>
          <input
            className="w-full p-2 border-2 border-gray-300 rounded-md mb-5"
            type="password"
            id = 'password'
            onChange = {loginForm.handleChange}
            value = {loginForm.values.password}
          />
          {loginForm.errors.password && loginForm.touched.password ? (
            <div className='text-red-500 text-sm'>{loginForm.errors.password}</div>
          ) : null}

          <button className="bg-blue-500 py-2 px-4 text-white rounded-md w-full mt-5">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login;