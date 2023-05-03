import Input from '@/components/Input'
import React, {useState} from 'react'
import Link from 'next/link'

export default function Booking() {
    const [name, setname] = useState('')
    const [Age, setAge] = useState('')
    const [mobilenumber, setmobilenumber] = useState('')
    const [date, setdate] = useState('')
    const [type, settype] = useState('')
  return (
   <div>

        <div  className="py-8">
            <p className="text-center text-3xl font-bold"> PRAAN  </p>
            <p className="text-center text-2xl font-bold text-blue-400">Booking slots</p>
        </div > 

        <div className='flex justify-center items-center'>  
            <form id="labform" className="flex flex-col items-center w-96  space-y-8  text-center font-bold ">
            <div className='flex space-x-4  w-full justify-between'>
                <label for="Age"> Name</label>
                    <input type="text" id="name" name="Age" className="border border-black rounded-lg px-2" />
                     </div>
                

                <div className='flex space-x-4  w-full justify-between'>
                <label for="Age"> Age</label>
                    <input type="number" id="Age" name="Age" className="border border-black rounded-lg px-2" />
                     </div>
                
                <div className='flex space-x-4  w-full justify-between'>
                <label for="mobilenumber"> Mobile number</label>
                    <input type="number" id="mobilenumber" name="mobilenumber" className="border border-black rounded-lg px-2" />
                     </div>
            
                
                     
                        

                    <div className='flex justify-center items-center'>
                        <label for="availability"> Appointment request date</label>
                        <input type="date" id="yes" name="availability" className="flex flex-col items-center w-96  space-y-8  text-center font-bold" />
                         </div>
                
                         <div className='flex justify-center items-center'>
                        <label for="availability"> Test type </label><br /><br />
                        <input type="radio" id="test" name="availability" className="flex flex-col items-center w-9  space-y-5  text-center font-bold" />Diabetes <br />
                        <input type="radio" id="test" name="availability" className="flex flex-col items-center w-9  space-y-5  text-center font-bold" />Blood pressure <br />
                        <input type="radio" id="test" name="availability" className="flex flex-col items-center w-9  space-y-5  text-center font-bold" />Jaundice <br />
                         </div><input type="radio" id="test" name="availability" className="flex flex-col items-center w-9  space-y-5  text-center font-bold" />Blood count <br />
                

                
                   
                

                
                  

                
                <Link href='/patientdash'>
                    <button className='bg-blue-400 px-4 py-2 rounded-md w-60 text-white' type="submit" form="labform" value="Submit">Submit</button>
                </Link>
            </form>
        </div> 
        
    

    </div>
  )
}