import React from 'react'

const Profile = () => {
    return (
        <div className='max-w-6xl m-auto w-fit bg-gray-200 h-screen'>
            <span className='py-5 block font-semibold bg-white'>Account Settings</span>
            <div className='border-b-2 border-dashed border-gray-900 space-y-2 p-5'>
                <div className='flex gap-2'>
                    <div className='h-15 w-15'>
                        <img className='w-full h-full object-cover object-center rounded-full' src="/pic.jpg" alt="" />

                    </div>
                    <div className='flex flex-col'>
                        <span className='text-lg font-semibold'>Marry Doe</span>
                        <span>Marry@gmail.com</span>
                    </div>

                </div>
                <p className='max-w-2xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo laborum modi repudiandae quia dolore iure perferendis.</p>
            </div>

        </div>
    )
}

export default Profile
