import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './style.css'

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
       const fetchUsers = async () => {
        try{
        const response = await axios.get('/api/users/find');
        setUsers(response.data);
       }catch(error){
        console.log('Error Fetching users',error)
       }
    }
       fetchUsers();

    },[])
  return (
    <div className="users-table-container">
     <h1 className='head'>USERS LIST</h1>
     <table  className="users-table" >
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user,index) => (
                <tr>
                    <td>{index+1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                </tr>
            ))}
        </tbody>
     </table>
    </div>
  )
}

export default Users
