import React from 'react'
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/users');
  }
  return (
    <div>
      <h1>MERN ASSIGNMENT</h1>
      <button onClick={handleClick}>Click to See Users Data</button>
    </div>
  )
}

export default Home
