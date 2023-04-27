import React from 'react'
import Dashheader from '@/model/Dashheader'
import Patientbar from '@/model/Patientbar'
import Patientdashbody from '@/model/Patientdashbody'

export default function register() {
  return (
    <div>
        <Dashheader/>
        <div className='flex'>
          <Patientbar/>
          <Patientdashbody/>
        </div>
    </div>
  )
}