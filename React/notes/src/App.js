import React, { Component } from 'react';
import { NoteList } from './components/Notes'
import { SignupForm } from './components/SignupForm';

class App extends Component {
  render(){
    return (
      <section>
      <SignupForm />
      <NoteList />
      </section>
      );
    }
  }
export default App;  