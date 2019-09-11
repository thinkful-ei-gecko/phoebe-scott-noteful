import React from "react";
import NoteList from "../notes/NoteList";

export default class FolderPage extends React.Component {
  
  
  render() {
    return (
      <section>
        <NoteList state={this.props.state} folderId={this.props.folderId} />
      </section>
    );
  }
}
