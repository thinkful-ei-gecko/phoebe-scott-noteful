import React from 'react';
import MainPage from './MainPage/MainPage'
import FolderPage from './FolderPage/FolderPage'
import dataStore from './dummy-store'
import NotePage from './NotePage/NotePage'
import { Route, Link } from 'react-router-dom'

class App extends React.Component {
  state = {
    data: dataStore,
    activeFolderId: null,
    activeNoteId: 'cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1'
  }

  render() {
    return (
      <>
        <header>
          <Link to='/' ><h1>Noteful</h1></Link>
        </header>
        <main className='App'>
          <Route exact path='/' render={() =>
            <MainPage state={this.state} />
          }
          />

        <Route exact path='/notes/:noteId' render={(routeProps) => 
          <NotePage
            note={this.state.data.notes.find(note => note.id === routeProps.match.params.noteId)} 
          />
          }
        /> 
        </main>
      </>
    );
  }
}

export default App;