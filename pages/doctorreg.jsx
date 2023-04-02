import React from 'react'

 function Doctorregistration() {
  return (
    <div>
       <div className="py-8">
          <p className='text-center text- font-bold'>PRAAN</p>
          <p className='text-center text-lg font-bold'>Doctor Registration</p>
       </div> 
       <div>
       <form className='grid grid-cols-3 mx-10 my-4 border-spacing-x-3  spacing-y-5 text-center'>
         <div className=''>
            <label htmlFor="fname">First Name</label>
            <input type="text" id="name" name="fname" className='border border-black rounded-lg'></input>
          </div>
          <div>
            <label htmlFor="name">LastName</label>
            <input type="text" id="lname" name="lname" className='border border-black rounded-lg' ></input>
          </div>
          <div>
            <label htmlFor="name">Mobile Number</label>
            <input type="number" id="mobile number" name="mobilenumber"className='border border-black rounded-lg' ></input>
          </div>
          <div>
            <label htmlFor="name">certificate</label>
            <input></input>
          </div>
          
          <div>
            <label htmlFor="name">Email</label>
            <input type="email" id="Email" name="Email"className='border border-black rounded-lg' ></input>
          </div>
          <button className='rounded-md bg-teal-500 block w-36 mt-10 drop-shadow-lg'>Register</button>
       </form>
       
       </div>
    </div>
  )
}

export default Doctorregistration
