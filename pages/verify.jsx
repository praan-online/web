import React from 'react'

export default function verify() {
  return (
    <div className="bg-[url('/img/hpic.jpg')] h-screen flex flex-row items-center justify-center py-36">
        <div className='rounded-xl flex flex-row  w-96 h-50 bg-gradient-to-r from-sky-500 to-emerald-300'>
            <div className='px-4 py-6 text-center text-zinc-100'>
                <p className='py-4 px-4 text-center'>Please Enter the OTP to verify your Account </p>
                <label for="otp" className='text-xs px-6'>Please enter the otp sent to your mobile number</label><br/>
                <input className='text-black'type="number" id="otp" name="otp"/><br/>
                
                <button className='rounded-md bg-teal-500 w-60 mt-3 drop-shadow-lg '>Validate OTP</button>
                <button className='rounded-md bg-teal-500 w-60 mt-3 drop-shadow-lg '>Resend OTP</button>       
            </div>
            
        </div>
    </div>
  )
}