import React, {useState} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Axios from 'axios';

function SignIn() {
  const [userEmail, setUserEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loginStatus, setLoginStatus] = useState('')


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
      <Navbar/>
      <center>
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
        <a href="/registro">Não tem uma conta? Crie uma já!</a>
      </center>
    </div>
  );
}

export default SignIn;
