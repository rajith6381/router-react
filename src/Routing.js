import React from 'react'
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Login from './Login'
import Profile from './Profile'

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='*' element={<Navigate to="/profile"></Navigate>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )

}

export default Routing
