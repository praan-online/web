import React from 'react'
import Dashheader from '../model/Dashheader'
export default function(){
  return(
    <>
    <Dashheader/>
      <div className="bg-[url('/img/hpic.jpg')] flex flex-row items-center justify-center py-36">
        <div className='rounded-xl flex flex-row w-72 h-96 bg-gradient-to-r from-sky-500 to-emerald-300'>
          <div className='px-5 lg:px-10 text-zinc-100 text-center w-full'>
            < p className='py-4 text-lg font-bold'> LOGIN</p>
            <label for="name"> username</label><br/>
            <input type="text" id="name" name="name" className='w-full rounded'/><br/>
            <label for="password">Password </label><br/>
            <input type="password" id="password" className='w-full rounded' /><br/>
            <button className='rounded-md bg-teal-500 block w-full mt-3 drop-shadow-lg'>Login</button>
          </div>
        </div>
      </div>
    </>
    )
}

