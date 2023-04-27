import React from 'react' 
 
export default function Input({label, name}) { 
  return ( 
    <div className='flex space-x-4  w-full justify-between '> 
 
                    <label for="labname w-5/12">{label}  </label> 
                    <input type="text"  name={name} className="border w-7/12 border-black rounded-lg px-2"/> 
                </div> 
  ) 
}