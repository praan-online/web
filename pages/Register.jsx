import React from 'react'
import Dashheader from '../model/Dashheader'
export default function(){
  return(
    <>
    <Dashheader/>
    <div className="bg-[url('/img/hpic.jpg')] flex flex-row items-center justify-center py-36">
      <div className='rounded-xl flex flex-row w-72 justify-center items-center h-auto bg-gradient-to-r from-sky-500 to-emerald-300'>
        <div className='px-4 text-zinc-100 text-center py-5'>
          < p className='py-4 text-lg font-bold'> REGISTER</p>
          <label for="name"> FullName</label><br/>
          
          <input type="number" id="number" name="number" className='w-full rounded' /> <br/>
          <label for="Mobile No"> Mobile No</label><br/>
          <input type="number" id="number" name="number"className='w-full rounded' /><br/>
          <label for="password"> Create Password </label><br/>
          <input type="password" id="password" className='w-full rounded'  /><br/>
          <label for="password"> Confirm Password </label><br/>
          <input type="password" id="password" className='w-full rounded' /><br/>
        
          <button className='rounded-md bg-teal-500 w-60 mt-3 drop-shadow-lg'>Register</button>
        </div>
      </div>
    </div>
  </>
    )
  
  }