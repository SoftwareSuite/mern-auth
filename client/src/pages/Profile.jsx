import React from 'react'
import { useSelector } from "react-redux"

export default function Profile() {
  const {currentUser} = useSelector((state)=>state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img className='h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2' src={currentUser.profilePicture} alt=''/>

        <input defaultValue={currentUser.username} type='text' id='username' placeholder='Username' className='bg-slate-100 p-3 rounded-lg'/>

        <input defaultValue={currentUser.email} type='text' id='email' placeholder='Email' className='bg-slate-100 p-3 rounded-lg'/>

        <input type='text' id='password' placeholder='Password' className='bg-slate-100 p-3 rounded-lg'/>

        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Update</button>

      </form>
      <div className='mt-5 flex justify-between'>
        <span className='text-red-500 cursor-pointer font-semibold hover:opacity-80'>Delete Account</span>
        <span className='text-red-500 cursor-pointer font-semibold hover:opacity-80'>Sign Out</span>
      </div>
    </div>
  )
}
