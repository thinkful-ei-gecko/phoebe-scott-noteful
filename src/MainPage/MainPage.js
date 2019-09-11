import React from "react";
import FolderList from "../FolderPage/folder-list/FolderList";
import NoteList from "../notes/NoteList";

export default class MainPage extends React.Component {
  render() {
    return (
      <>
          <section className="Nav">
            <FolderList state={this.props.state}/>
          </section>

          <section>
            <NoteList state={this.props.state}/>
          </section>
      </>
    );
  }
}
