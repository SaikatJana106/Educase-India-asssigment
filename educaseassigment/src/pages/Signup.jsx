import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='max-w-6xl h-screen m-auto w-fit p-2 space-y-3 flex flex-col'>
      <h1 className='max-w-2xs py-2 text-2xl font-bold'>Create your PopX account</h1>
      <div>
        <label className='absolute ml-2 bg-white w-fit transform translate-y-[-50%] text-xs h-fit text-violet-500'>Full Name</label>
        <input className='border-2 border-gray-400 rounded-sm px-4 py-1 placeholder-gray-500 placeholder:text-sm' placeholder='Enter your Name' type="text" />
      </div>
      <div>
        <label className='absolute ml-2 bg-white w-fit transform translate-y-[-50%] text-xs h-fit text-violet-500'>Phone number</label>
        <input className='border-2 border-gray-400 rounded-sm px-4 py-1 placeholder-gray-500 placeholder:text-sm' placeholder='Enter your Phoneno' type="tel" />
      </div>
      <div>
        <label className='absolute ml-2 bg-white w-fit transform translate-y-[-50%] text-xs h-fit text-violet-500'>Email address</label>
        <input className='border-2 border-gray-400 rounded-sm px-4 py-1 placeholder-gray-500 placeholder:text-sm' placeholder='Enter Your Email' type="mail" />
      </div>
      <div>
        <label className='absolute ml-2 bg-white w-fit transform translate-y-[-50%] text-xs h-fit text-violet-500'>Password</label>
        <input className='border-2 border-gray-400 rounded-sm px-4 py-1 placeholder-gray-500 placeholder:text-sm'placeholder='Enter Password' type="password" />
      </div>
      <div>
        <label className='absolute ml-2 bg-white w-fit transform translate-y-[-50%] text-xs h-fit text-violet-500'>Company name</label>
        <input className='border-2 border-gray-400 rounded-sm px-4 py-1 placeholder-gray-500 placeholder:text-sm'placeholder='Enter Company name'  type="text" />
      </div>

      <div className='flex flex-col'>
        <label>Are You Agency?</label>
        <div>
          <input type="radio" value="Yes" name='agency' />
          <label>Yes</label>
          <input className='mx-2' type="radio" value="No" name='agency' />
          <label>No</label>
        </div>
      </div>

      <Link to={"/login"} className='text-gray-100 bg-violet-600 w-full py-2.5 rounded-md text-xl mt-auto text-center'>
        Create Account
      </Link>
    </div>
  )
}

export default Signup
