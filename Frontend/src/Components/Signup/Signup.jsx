import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './signup.css'

function Signup() {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: ''
    });
    const navigate = useNavigate();

    const [newUser, setNewUser] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault(); //prevent page reload on form submission
        console.log(formData)
        try{
            const response = await axios.post('/api/users',formData);

            setNewUser(response.data);

            //clear the form 
            setFormData({
                 name: '',
                 email: '',
                 age: ''
            });
            console.log('New user added',response.data);
            navigate("/");
        }catch(error){
            console.error('Error submitting form',error)
        }
    }

  
  return (
    <div>
      <h2 className='title'>Submit a New User</h2>

      <form onSubmit={handleSubmit} className='form'>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({...formData,name:e.target.value})}
            required
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData,email:e.target.value})}
            required
          />
        </div>

        <div>
          <label>Age: </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={(e) => setFormData({...formData,age:e.target.value})}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Signup
