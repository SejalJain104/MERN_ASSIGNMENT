import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Users from './Components/UsersTable/Users';
import Signup from './Components/Signup/Signup';
import Test from './Components/Signup/Test';

function App() {

  return (
    
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/users' element={<Users/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/fetch' element={<Test/>}></Route>
        </Routes>
     </BrowserRouter>
    
  )
}

export default App
