import React, {useState} from 'react';
import Axios from 'axios';
import './App.css';

function App() {

  const [userEmailReg, setUserEmailReg] = useState('')
  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const register = () => {
    Axios.post('http://localhost:3001/register', {userEmail: userEmailReg, username: usernameReg, password: passwordReg,}).then((response) => {console.log(response)})
  }

  const login = () => {
    Axios.post('http://localhost:3001/login', {username: username, password: password}).then((response) => {console.log(response)})
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
        <input type="text" placeholder="Login" onChange={(e)=>{
          setUsername(e.target.value)
        }} />
        <input type="password" placeholder="Password" onChange={(e)=>{
          setPassword(e.target.value)
        }}/>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default App;
