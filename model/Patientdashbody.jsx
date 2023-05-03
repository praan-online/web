import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Patientdashbody() {
  const [prescriptions, setprescriptions] = useState([])
  const [lastLevel, setlastLevel] = useState({})

  useEffect(() => {
    fetchPrescriptions()
    fetchLevels()
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
  function isDiabetesNormal(a1cLevel) {
    if (a1cLevel <= 99) {
      return "Normal";
    } else if (a1cLevel >= 100 && a1cLevel <= 125) {
      return "Prediabetes";
    } else {
      return "Diabetes";
    }
  }
  const fetchLevels = async ()=>{
    try {
      let response = await axios.get(`/api/diabetes?phone=${localStorage.getItem('phone')}`)
      console.log(response)
      // setprescriptions(response.data)
      setlastLevel(response.data)
      let string = isDiabetesNormal(response.data.level)
      if(string === 'Diabetes'){
        alert('You are diabetic')
      }
      console.log(string)
    } catch (error) {
      console.log(error)
    }
  }

  return (
     <div className="bg-gray-200 w-full h-screen">
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
            <div>
              Level: {lastLevel?.level} as of {new Date(lastLevel?.recordedAt).toString()}
            </div>
        {/* <p className="px-4 underline underline-offset-4">Graphical Report . . . . .</p> */}
        <img src="/img/graph.png" className='w-5/12'/>
    </div>
  )
}