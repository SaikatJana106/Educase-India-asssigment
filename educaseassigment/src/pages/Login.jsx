import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='max-w-6xl m-auto w-fit p-5'>
      <div className='w-fit h-screen border border-gray-900 p-5'>
        <h1 className='text-2xl font-bold max-w-xs'>Signin to your PopX account</h1>
        <p className='max-w-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptates veritatis saepe,</p>
        <div className='relative py-4'>
          <label className='absolute ml-2 bg-white w-fit transform translate-y-[-50%] text-xs h-fit text-violet-500'>Email address</label>
          <input className='border-2 border-gray-900 rounded-sm px-4 py-1 placeholder-gray-500 placeholder:text-sm' placeholder='Enter email address' type="text" required />
        </div>
        <div>
          <label className='absolute ml-2 bg-white w-fit transform translate-y-[-50%] text-xs h-fit text-violet-500'>Password</label>
          <input className='border-2 border-gray-900 rounded-sm px-4 py-1 placeholder-gray-500 placeholder:text-sm' placeholder='Enter Password' type="text" />
        </div>
        <Link to={"/profile"} className='bg-gray-200 py-2 rounded-lg text-center w-full my-2 block hover:bg-violet-600 hover:text-white'>Login</Link>
      </div>
    </div>

  )
}

export default Login
