import React from 'react'

export default function patientregistration() {
  return (
    <div>
        <div className="py-7">
            <p className=' text-center text-3xl font-bold'>PRAAN</p>
            <p className='text-center text-2xl font-bold text-blue-400'>Patient Registration</p>
        </div>

        <div className='flex justify-center items-center'>
            <form id="patientform" className=' flex flex-col  space-y-2 text-center' >
                
                    <div className=' flex space-x-4   justify-between'>
                        <label for="fname" >First Name</label>
                        <input type="text" id="fname" name="fname" className='border  border-black rounded-lg px-2'/><br/>
                    </div>
                     
                    <div className='flex space-x-4   justify-between'>
                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lname" className='border border-black rounded-lg px-2'/> <br/>
                    </div>  
                    <div className='flex space-x-4  justify-between'>
                        <label for="gender">Gender</label>
                        <input type="text" id="gender" name="gender" className='border border-black rounded-lg px-2'/> <br/>
                    </div>   
                    <div className='flex space-x-4  justify-between'>
                        <label for="email">E-mail</label>
                        <input type="text" id="email" name="email" className='border border-black rounded-lg px-2'/> <br/>
                    </div>   
                    <div className='flex space-x-4  w-full justify-between'>
                        <label for="mobilenumber">Mobile Number</label>
                        <input type="number" id="mobilenumber" name="mobilenumber" className='border border-black rounded-lg px-2'/> <br/>
                    </div>
                    
                    <div className='flex space-x-4  w-full justify-between'>
                        <label for="dob">Date of Birth</label>
                        <input type="date" id="dob" name="dob" className='border border-black rounded-lg px-2'/> <br/>
                    </div> 
                    <div className='flex space-x-4  w-full justify-between'>
                        <label for="patientaddr">Address line 1</label>
                        <input type="text" id="patientaddr" name="patientaddr" className='border border-black rounded-lg px-2'/> <br/>
                    </div>
                    <div className='flex space-x-4  w-full justify-between'>
                        <label for="city">City</label>
                        <input type="text" id="city" name="city" className='border border-black rounded-lg px-2'/> <br/>
                    </div>
                    <div className='flex space-x-4  w-full justify-between'>
                        <label for="country">Country</label>
                        <input type="text" id="country" name="country" className='border border-black rounded-lg px-2'/> <br/>
                    </div>
                    <div className='flex space-x-4  w-full justify-between'>
                        <label for="pincode">Pincode</label>
                        <input type="number" id="pincode" name="pincode" className='border border-black rounded-lg px-2'/> <br/>
                    </div>
                    <div className='flex space-x-4 w-full justify-between'>
                        <label for="disease">Any known medical conditions:</label>
                        <input type="checkbox" id="diabetes" name="disease"/> Diabetes<br/>
                        <input type="checkbox" id="pressure" name="disease"/>High BP
                    </div>
                    <div className='flex space-x-4  w-full justify-between'>
                        <label for="disease">if other,specify:</label>
                        <input type="text" id="other" name="disease" className='border border-black rounded-lg px-2'/> <br/>
                    </div>
                    <div className='place-content-center py-5'>
                    <button className='bg-blue-400 px-4 py-2 rounded-md w-60 text-white ' type="submit" form="patientform" value="Submit">Submit</button>
                </div>
            </form>
        </div>

    </div>
  )
}