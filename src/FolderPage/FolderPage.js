import React from "react";
import FolderList from "../FolderPage/folder-list/FolderList";
import NoteList from "../notes/NoteList";

export default class FolderPage extends React.Component {
  render() {
    return (
      <>
        <header>
          <h1>Noteful</h1>
        </header>
        <main>
          <section className="Nav">
              <FolderList state={this.props.state}/>
          </section>
            
          <section>
              <NoteList state={this.props.state}/>
          </section>
        </main>
      </>
    );
  }
}
