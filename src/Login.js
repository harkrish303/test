import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { color } from '@mui/system';
import React,{ useState } from 'react'

document.body.style.backgroundImage= "url('pexels-estudio-polaroid-3112004.jpg')";
document.body.style.backgroundSize = "cover";
function Login() {
    const[Username, setUsername]= useState('');
    const[password, setpassword]= useState('');
    const[Error,setError]=useState(false);
    const formHandler=(event)=>
    {
      event.preventDefault();
      if(Username.length==0 || password.length==0)
      { 
        setError(true);
      }
      if(Username && password)
      { 
        const loginobj={
            name:Username,
            pwd:password
        }
        console.log(loginobj);
        
      }
    }
  return (
    <div>
    <center><h2 style={{color:'white'}}>Login Page</h2>
    
    <form onSubmit={formHandler}>
    <p style={{color:'white'}}>Email Id:<input type="text" value={Username} placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/><br/></p>
   <div>
    {Error && Username.length==0?
    <label style={{color:'red'}}>Email Id is required</label>:""}
    </div>
    <p style={{color:'white'}}>passwopmrd :<input type="password" value={password} placeholder="password" onChange={(e)=>setpassword(e.target.value)}/><br/></p>
    <div>
    {Error && password.length==0?
    <label style={{color:'red'}}>
    Password is required</label>:""}
    </div>
    <button type="submit">Login</button><br/>
    <h4 style={{color:'white'}}> or </h4>
    <h5 style={{color:'white'}}>Didn't have an account</h5>
    <button type="submit">Create an Account</button>
    </form>  
    </center>
    </div>
  )
}
export default Login
