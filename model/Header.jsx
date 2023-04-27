import React from 'react'
import Button from '@/components/Button'

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-white  h-24 px-4" > 
    <p className="font-bold text-lg  ">PRAAN</p>
        <div>
            <Button value="About"/>
            <Button value="Login"/>
            <Button value="Register"/>
        </div>
    </div>
  )
}