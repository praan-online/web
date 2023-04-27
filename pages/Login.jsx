import React, {useState, useEffect} from 'react'
import Dashheader from '../model/Dashheader'
import axios from 'axios'

export default function(){
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')

  const login =async ()=>{
    try{
      let response = await axios.post('/api/login', {
        number: username, 
        password: password
      })
      console.log(response)
      alert("Login successful")
    }catch(err){
      if(err.response.status === 401){
        alert("Invalid username or password !")
        return
      }
      console.log(err)
      alert("Error!!")
    }
  }

  return(
    <>
    <Dashheader/>
      <div className="bg-[url('/img/hpic.jpg')] flex flex-row items-center justify-center py-36">
        <div className='rounded-xl flex flex-row w-72 h-96 bg-gradient-to-r from-sky-500 to-emerald-300'>
          <div className='px-5 lg:px-10 text-zinc-100 text-center w-full'>
            < p className='py-4 text-lg font-bold'> LOGIN</p>
            <label for="name"> Mobile number</label><br/>
            <input
            onChange={e=>setusername(e.target.value)} type="text" id="name" name="name" className='w-full rounded text-black'/><br/>
            <label for="password">Password </label><br/>
            <input
            onChange={e=>setpassword(e.target.value)}
             type="password" id="password" className='w-full rounded text-black' /><br/>
            <button
            onClick={login} 
            className='rounded-md bg-teal-500 block w-full mt-3 drop-shadow-lg'>Login</button>
          </div>
        </div>
      </div>
    </>
    )
}

