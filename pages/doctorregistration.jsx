import Input from '@/components/Input' 
import React from 'react' 
 
export default function doctorregistration() { 
  return ( 
   <div> 
 
        <div  className="py-8"> 
            <p className="text-center text-3xl font-bold"> PRAAN  </p> 
            <p className="text-center text-2xl font-bold text-blue-400">Doctor Registration </p> 
        </div >  
 
        <div className='flex justify-center items-center'>   
            <form id="docform" className="flex flex-col items-center w-96  space-y-5  text-center font-bold "> 
                <Input name='fname' label='First Name'/> 
                <Input name='lname' label='Last Name'/> 
                 
                 
                <div className='flex space-x-4  w-full justify-between'> 
                    <label for="mobilenumber"> Phone Number</label> 
                    <input type="number" id="mobilenumber" name="mobilenumber" className="border border-black rounded-lg px-2" /> 
               </div> 
             
               <Input name='email' label='E-mail'/>       
               <div className='flex space-x-4  w-full justify-between'>  
                    <label for="address"> Address</label> 
                    <input type="text" id="address" name="address" className="border border-black rounded-lg px-2 " /> 
               </div> 
 
 
               <div className='flex space-x-4  w-full justify-between'>  
                    <label for="specialisation">Specialisation</label> 
                    <input type="text" id="specialisation" name="specialisation" className="border border-black rounded-lg px-2 " /> 
               </div> 
 
                <div className='flex  space-x-4  w-full justify-between'> 
                        Doctor certification: 
                        <label for="labcertificate"></label> 
                        <input type="file" id="labcertificate" name="labcertificate"/> 
                </div> 
 
                <button className='bg-blue-400 px-4 py-2 rounded-md w-60 text-white' type="submit" form="docform" value="Submit">Submit</button> 
            </form> 
        </div>  
         
     
 
    </div> 
  ) 
}