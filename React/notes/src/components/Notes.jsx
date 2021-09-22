import React, { Component } from "react"
import CreateNotes from "./CreateNotes"

export class NoteList extends Component {
    render(){
        return(
            <ul>
                <li>
                    <CreateNotes/>
                </li>
                <li>
                    <CreateNotes />
                </li>
                <li>
                    <CreateNotes />
                </li>
            </ul>
        )
    }
}