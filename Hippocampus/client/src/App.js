import React from 'react'
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import SignIn from './SignIn'
import Header from './Header'
import Routes from "./Routes"

function App(){
  return (
    <div className="app">
      <Header></Header>
      <Routes></Routes>
    </div>
    )
}
export default App