import Input from '@/components/Input' 
import React,{useState, useEffect} from 'react' 
import axios from 'axios'
 
export default function doctorregistration() { 
    const [name, setname] = useState('')
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')
    const [specialisation, setspecialisation] = useState('')
    const [address, setaddress] = useState('')
    const [number, setnumber] = useState('')

    const register =async (e)=>{
        e.preventDefault()
        try{
          let response = await axios.post('/api/doctor-reg', {
            name,
            number, address,
            specialisation,
            email, password
          })
          console.log(response)
          alert("Registration successful")
          location.href='/Login'
        }catch(err){
          if(err.response.status === 401){
            alert("Invalid username or password !")
            return
          }
          console.log(err)
          alert("Error!!")
        }
      }

  return ( 
   <div> 
 
        <div  className="py-8"> 
            <p className="text-center text-3xl font-bold"> PRAAN  </p> 
            <p className="text-center text-2xl font-bold text-blue-400">Doctor Registration </p> 
        </div >  
 
        <div className='flex justify-center items-center'>   
            <form onSubmit={register} id="docform" className="flex flex-col items-center w-96  space-y-5  text-center font-bold "> 
                <div className='flex space-x-4  w-full justify-between'> 
                    <label for="mobilenumber"> Name</label> 
                    <input value={name} onChange={e=>setname(e.target.value)} type="text" id="mobilenumber" name="mobilenumber" className="border border-black rounded-lg px-2" /> 
               </div> 
                <div className='flex space-x-4  w-full justify-between'> 
                    <label for="mobilenumber"> Phone Number</label> 
                    <input value={number} onChange={e=>setnumber(e.target.value)} type="text" id="mobilenumber" name="mobilenumber" className="border border-black rounded-lg px-2" /> 
               </div> 
             
               <div className='flex space-x-4  w-full justify-between'>  
                    <label for="address"> Email</label> 
                    <input value={email} onChange={e=>setemail(e.target.value)} type="text" id="address" name="address" className="border border-black rounded-lg px-2 " /> 
               </div>   
               <div className='flex space-x-4  w-full justify-between'>  
                    <label for="address"> Address</label> 
                    <input value={address} onChange={e=>setaddress(e.target.value)} type="text" id="address" name="address" className="border border-black rounded-lg px-2 " /> 
               </div> 
               <div className='flex space-x-4  w-full justify-between'>  
                    <label for="address"> Password</label> 
                    <input value={password} onChange={e=>setpassword(e.target.value)} type="text" id="address" name="address" className="border border-black rounded-lg px-2 " /> 
               </div> 
 
 
               <div className='flex space-x-4  w-full justify-between'>  
                    <label for="specialisation">Specialisation</label> 
                    <input value={specialisation} onChange={e=>setspecialisation(e.target.value)} type="text" id="specialisation" name="specialisation" className="border border-black rounded-lg px-2 " /> 
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