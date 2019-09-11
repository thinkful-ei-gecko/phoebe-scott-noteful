import React from 'react';
// import MainPage from './MainPage/MainPage'
import FolderPage from './FolderPage/FolderPage'
import dataStore from './dummy-store'

class App extends React.Component {
  state = {
    data: dataStore,
    activeFolderId: 'b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1',
  }

  render () {
    return (
      <main className='App'>
          <FolderPage state={this.state}/>
      </main>
    );
  }
}

export default App;