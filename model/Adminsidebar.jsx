import React from 'react'
import Button from '@/components/Button'

export default function Adminsidebar() {
  return (
    <div className='fixed w-64 flex h-screen justify-center py-16 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-300 px-4 '>
        <div className='text-center flex flex-col  text-white space-y-6'>
            <div className='h-24 w-24 rounded-full border-4 border-t-cyan-900 border-r-cyan-900 border-b-cyan-700 border-l-cyan-700 bg-slate-100 '></div>
            <Button value='Edit Profile'/><br/>
            <Button value='Log Out'/><br/>
        </div>
    </div>
  )
}