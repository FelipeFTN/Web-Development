import React, { Component } from 'react'
import './Home.css'


let texto = "Hello World"

class Home extends Component {


    render(){
        return(
            <div>
                <h1>{texto}</h1>
                <input type="text" placeholder={texto}/>
            </div>
        )
    }
}

export default Home
