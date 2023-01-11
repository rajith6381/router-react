import React from 'react'
import{Link,useNavigate} from "react-router-dom"
const Login = () => {

    const navi=useNavigate();
    const navigate = ()=>{
        navi("/profile")
    }
  return (
    <div>
      rajith<Link to="/profile">profile</Link>
      <button onClick={()=>navigate()}>click to profile</button>
    </div>
  )
}

export default Login
