import React from "react";
import MainDisplay from "./Display/MainDisplay";
import MainSidebar from "./Sidebar/MainSidebar";
import FolderDisplay from "./Display/FolderDisplay";
import NoteDisplay from "./Display/NoteDisplay";
import { Route, Link } from "react-router-dom";
import dataStore from "./dummy-store";

class App extends React.Component {
  state = {
    data: dataStore,
    activeFolderId: null,
    activeNoteId: "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1"
  };

  render() {
    return (
      <>
        <header>
          <Link to="/">
            <h1>Noteful</h1>
          </Link>
        </header>
        <main className="App">
          <ul className="Sidebar">
            {/* <MainSidebar state={this.state} /> */}

            <Route
              exact
              path="/"
              render={() =>
                <MainSidebar
                  state={this.state}
                />
              }
            />
            <Route path="/folders" render={() =>
              <MainSidebar
                state={this.state}
              />
            }
            />

          </ul>
          <section className="Main">
            <Route
              exact
              path="/"
              render={routeProps => <MainDisplay state={this.state} />}
            />
            <Route
              exact
              path="/folders/:folderId"
              render={routeProps => (
                <FolderDisplay
                  state={this.state}
                  folderId={routeProps.match.params.folderId}
                />
              )}
            />
            <Route
              exact
              path="/notes/:noteId"
              render={routeProps => (
                <NoteDisplay
                  note={this.state.data.notes.find(note => note.id === routeProps.match.params.noteId)}
                  state={this.state}
                />
              )}
            />
          </section>
        </main>
      </>
    );
  }
}

export default App;
