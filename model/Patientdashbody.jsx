import React from 'react'

export default function Patientdashbody() {
  return (
     <div>
        <p className='px-4 text-lg underline underline-offset-4'>
            Latest Reports For You . . . . . . . .</p>
            <ul className="list-disc px-10">
              <li>abc</li> 
              <li>abc</li> 
              <li>abc</li> 
              <li>abc</li>
              <li>abc</li> 
              <li>abc</li> 
              <li>abc</li> 
              <li>abc</li>
            </ul>
        
        <p className="px-4 underline underline-offset-4">Graphical Report . . . . .</p>
        <img src="/img/graph.png" className='w-5/12'/>
    </div>
  )
}