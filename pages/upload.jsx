import React from 'react'
export default function 
() {
  return (
    <div className="bg-[url('/img/hpic.jpg')] flex flex-row items-center justify-center py-36">
        <div className='rounded-xl flex flex-row  w-72 h-96 bg-gradient-to-r from-sky-500 to-emerald-300'>
            <div className='px-4 text-zinc-100'>
                <p className='py-4 text-lg'>Upload Report</p>
                <label for="name" >Name</label><br/>
                <input type="text" id="name" name="name"/><br/>
                <label for="desc">Description</label><br/>
                <input type="text" id="desc" name="desc"/> <br/>
                <input type="file" id="desc" name="desc"/> <br/>
                <button className='rounded-md bg-teal-500 w-60 mt-3 drop-shadow-lg '>upload</button>       
            </div>
            
        </div>
    </div>
  )
}