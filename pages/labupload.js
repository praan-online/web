import React, {useState, useEffect} from 'react'
import axios from 'axios'
export default function 
() {
  const [name, setname] = useState('')
  const [desc, setdesc] = useState('')
  const [phone, setphone] = useState('')
  const [file, setfile] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault();
   try {
     
    // Create a new FormData object
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('desc', desc);
    formData.append('phone', phone);
    formData.append('type', 'report')

    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event) => {
        console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
      },
    };
    // Send the file to the API
    let response = await axios.post('/api/upload-doc', formData,config)
    console.log(response)
    alert("UPLOADED")
   } catch (error) {
    console.log(error)
    alert("Error !!")
   }
  };

  return (
    <div className="bg-[url('/img/hpic.jpg')] flex flex-row items-center justify-center py-36">
        <div className='rounded-xl flex flex-row  w-72 h-96 bg-gradient-to-r from-sky-500 to-emerald-300'>
            <form  encType="multipart/form-data" onSubmit={handleSubmit} className='px-4 text-black'>
                <p className='py-4 text-lg'>Upload Lab Report</p>
                <label for="name" >Name</label><br/>
                <input value={name} onChange={e=>setname(e.target.value)} type="text" id="name" name="name"/><br/>
                <label for="desc">Description</label><br/>
                <input value={desc} onChange={e=>setdesc(e.target.value)} type="text" id="desc" name="desc"/> <br/>
                <input onChange={e=>setfile(e.target.files[0])} type="file" id="desc" name="desc"/> <br/>
                <label for="desc">Phone</label><br/>
                <input value={phone} onChange={e=>setphone(e.target.value)} type="number" /><br/>
                <button className='rounded-md bg-teal-500 w-60 mt-3 drop-shadow-lg '>upload</button>       
            </form>
            
        </div>
    </div>
  )
}