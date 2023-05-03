import { useState } from "react";
import axios from 'axios'

export default function DiabetesAlert() {
  const [level, setLevel] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [phone, setphone] = useState('')

  const handleInputChange = (event) => {
    setLevel(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response = await axios.post(`/api/diabetes`,{
        level, phone
      })
      console.log(response)
      alert('saved')
      // setprescriptions(response.data)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="bg-gray-200 w-full h-screen">
      <h1>Diabetes Alert System</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your diabetes level:
          <input type="number" value={level} onChange={e=>setLevel(e.target.value)} />
        </label>
        <label>
          Phone :
          <input type="number" value={phone} onChange={e=>setphone(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {showAlert && (
        <div className="alert">
          <p>Your diabetes level is high ({level}). Please consult your doctor.</p>
        </div>
      )}
      <style jsx>{`
        h1 {
          text-align: center;
        }
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        label {
          margin-bottom: 1rem;
        }
        input {
          margin-left: 0.5rem;
        }
        button {
          margin-top: 1rem;
        }
        .alert {
          background-color: #ffff;
          padding: 1rem;
          margin-top: 1rem;
          border-radius: 0.5rem;
        }
      `}</style>
    </div>
  );
}
