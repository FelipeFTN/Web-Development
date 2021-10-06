import React, {useState} from 'react';
import Axios from 'axios';

function Signin() {

  const [userEmailReg, setUserEmailReg] = useState('')
  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')

  const [userEmail, setUserEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loginStatus, setLoginStatus] = useState('')

  const register = () => {
    Axios.post('http://localhost:3001/register', {userEmail: userEmailReg, username: usernameReg, password: passwordReg,}).then((response) => {
    console.log(response)})
  }

  const login = () => {
    Axios.post('http://localhost:3001/login', {userEmail: userEmail, password: password}).then((response) => {
      if(response.data.message){
        setLoginStatus(response.data.message)        
      }else{
        window.location.href = "http://localhost:3000/" // Redirecionar para A pagina principal
      }
  })
}
  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <label>Email</label>
        <input type="text" onChange={(e)=>{
          setUserEmailReg(e.target.value)
        }}/>
        <label>Username</label>
        <input type="text" onChange={(e) => {
          setUsernameReg(e.target.value)
        }
        }/>
        <label>Password</label>
        <input type="text" onChange={(e) => {
          setPasswordReg(e.target.value)
        }
        }/>
        <button onClick={register}>Register</button>
      </div>
      <br/>
      <div className="login">
        <h1>Login</h1>
        <input type="text" placeholder="Email" onChange={(e)=>{
          setUserEmail(e.target.value)
        }} />
        <input type="password" placeholder="Password" onChange={(e)=>{
          setPassword(e.target.value)
        }}/>
        <button onClick={login}>Login</button>
      </div>
      <h1>{ loginStatus }</h1>
    </div>
  );
}

export default Signin;
