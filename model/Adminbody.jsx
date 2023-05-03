import React from 'react'
import SmallCard from './Smallcard'

export default function Adminbody() {
  return (
    <div className='px-72'>
        <p className='text-lg text-cyan-900 underline underline-offset-4'>
            Registration Requests</p>
            
                <div className=' grid grid-cols-3 justify-items-center w-full gap-x-8 gap-y-4 py-4'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                            (item) => (
                                <SmallCard key={item} />
                            )
                        )} 
                    
                </div>
            

    </div>
  )
}