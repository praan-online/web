import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Patientdashbody() {
  const [prescriptions, setprescriptions] = useState([])

  useEffect(() => {
    fetchPrescriptions()
  }, [])
  const fetchPrescriptions = async ()=>{
    try {
      let response = await axios.get(`/api/prescriptions?phone=${localStorage.getItem('phone')}`)
      console.log(response)
      setprescriptions(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
     <div>
        <p className='px-4 text-lg underline underline-offset-4'>
            Prescriptions</p>
            <ul className="list-disc px-10">
              {
                prescriptions?.map(p=>{
                  if(p.type==="prescription"){
                    return <li>{p.name} - <a href={`/uploads/${p.file}`}>show file</a></li>
                  }}
                )
              }
            </ul>
            Reports
            <ul className="list-disc px-10">
              {
                prescriptions?.map(p=>{
                  if(p.type==="report"){
                    return <li>{p.name} - <a href={`/uploads/${p.file}`}>show file</a></li>
                  }}
                )
              }
            </ul>
        {/* <p className="px-4 underline underline-offset-4">Graphical Report . . . . .</p> */}
        <img src="/img/graph.png" className='w-5/12'/>
    </div>
  )
}