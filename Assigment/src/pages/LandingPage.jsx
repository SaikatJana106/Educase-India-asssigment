import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className='max-w-6xl h-screen m-auto w-fit p-5 flex flex-col justify-end'>
            <h1 className='font-semibold text-2xl'>Welcome to PopX</h1>
            <span className='text-gray-500 max-w-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
            <Link to={"/signup"} className='w-full bg-violet-400 hover:bg-violet-500 hover:text-gray-100 rounded-md p-2 my-2 cursor-pointer text-center'>Create Account</Link>
            <Link to={"/login"} className='w-full bg-violet-400 hover:bg-violet-500 hover:text-gray-100 rounded-md p-2 cursor-pointer text-center'>Already Registered? Login</Link>
        </div>
    )
}

export default LandingPage
