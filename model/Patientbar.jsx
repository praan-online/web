import Button from '@/components/Buttons'
import React from 'react'
import Link from 'next/link'

export default function () {
  return (
    <div className='w-64 h-screen rounded-xl bg-gradient-to-r from-sky-500 to-emerald-300'>
        <div className='text-center py-10 text-white space-y-6'>
            <Link 
            className='font-bold'
            href='/upload'>Upload Report</Link> <br />
            <Button value='View Report'/><br/>
            <Button value='Consult Doctor'/><br/>
            <Button value='Booking'/><br/>
            <Button value='Alert Settings'/><br/>
        </div>

        
    </div>
  )
}