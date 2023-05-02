import React, {useState, useEffect} from 'react'
import Dashheader from '../model/Dashheader'
import axios from 'axios'

export default function(){

  const [name, setname] = useState('')
  const [number, setnumber] = useState(0)
  const [password1, setpassword1] = useState('')
  const [password2, setpassword2] = useState('')

  const register =async()=>{
    if(password1!== password2 ){
      alert("Passwords doesn't match !")
      return
    }
    if(password1.length <6){
      alert("Password should be atleast 6 characters !")
      return
    }
    
    try{
      let response = await axios.put('/api/login', {
        name: name, 
        number: number,
        password: password1
      })
      alert("Register successful")
      console.log(response)
      location.href='/Login'
    }catch(err){
      console.log(err)
      alert("Error!!")
    }
  }

  return(
    <>
    <Dashheader/>
    <div className="bg-[url('/img/hpic.jpg')] flex flex-row items-center justify-center py-36">
      <div className='rounded-xl flex flex-row w-72 justify-center items-center h-auto bg-gradient-to-r from-sky-500 to-emerald-300'>
        <div className='px-4 text-zinc-100 text-center py-5'>
          < p className='py-4 text-lg font-bold'> REGISTER</p>
          <label for="name"> FullName</label><br/>
          
          <input
          onChange={e=>setname(e.target.value)}
          type="text" id="number" name="number" className='w-full rounded text-black' /> <br/>
          <label for="Mobile No"> Mobile No</label><br/>
          <input
          onChange={e=>setnumber(e.target.value)} type="number" id="number" name="number"className='w-full rounded text-black' /><br/>
          <label for="password"> Create Password </label><br/>
          <input
          onChange={e=>setpassword1(e.target.value)} type="password" id="password" className='w-full rounded text-black'  /><br/>
          <label for="password"> Confirm Password </label><br/>
          <input
          onChange={e=>setpassword2(e.target.value)} type="password" id="password" className='w-full rounded text-black' /><br/>
        
          <button
          onClick={register}
          className='rounded-md bg-teal-500 w-60 mt-3 drop-shadow-lg'>Register</button>
        </div>
      </div>
    </div>
  </>
    )
  
  }