import React from 'react'
import Button from '../components/Buttons'
import Link from 'next/link'
function Dashheader() {
  return (
    <div className='flex justify-between items-center bg-white h-24 px-4'>
        <p className='font-bold text-lg px-4'>PRAAN</p>
        <div className='flex gap-5'>
          <div className='mx-4'>
          <Link  href="/">Home</Link>
          </div>
          <div className='mx-4'>
          <Link  href="/Login">Login</Link>
          </div>
          <div className='mx-4'>
          <Link  href="/userselection">Register</Link>
          </div>
        </div>
    </div>
  )
}

export default Dashheader