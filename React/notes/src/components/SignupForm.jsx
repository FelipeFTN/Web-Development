import React, { Component } from "react"

export class SignupForm extends Component {
    render(){
        return (
            <form>
                <input type="text" placeholder="Titulo" />
                <textarea placeholder="Escreva sua nota"></textarea>
                <button>Criar Nota</button>
            </form>
        )
    }
}