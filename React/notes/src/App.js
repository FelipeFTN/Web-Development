import React from 'react';
import { NoteList } from './components/Notes'
function App() {
  return (
    <section>
    <form>
      <input type="text" name="title" id="titleField" placeholder="Titulo"/>
      <textarea name="message" id="messageField" cols="30" rows="10" placeholder="Mensagem">
      </textarea>
      <button>Criar Nota</button>
    </form>
    <NoteList/>
    </section>
  );
}
export default App;