import React, { useEffect } from 'react'
import axios from 'axios'

function test() {
    useEffect(() => {
        const fetchUsers = async () => {
         try{
         const response = await axios.get('/api/user/sejaljain229693@gmail.com');
         console.log(response.data);
        //  setUsers(response.data);
        }catch(error){
         console.log('Error Fetching users',error)
        }
     }
        fetchUsers();
 
     },[])
  return (
    <div>
      USER
    </div>
  )
}

export default test
