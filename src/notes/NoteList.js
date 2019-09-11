import React from "react";
import NoteItem from "./NoteItem";

export default class NoteList extends React.Component {
  generateNoteItems() {
    let noteList = [];
    if (this.props.state.activeFolderId !== null) {
        noteList = this.props.state.data.notes.filter(note => {
          return (this.props.state.activeFolderId === note.folderId)
        })
    } else {
        noteList = this.props.state.data.notes
    }
    noteList = noteList.map(note => {
        return (
          <NoteItem name={note.name} id={note.id} modified={note.modified} />
        );
      });
      return noteList;
    }
  

  render() {
    return (
      <div className="note-list">
        <ul>{this.generateNoteItems()}</ul>
        <button className="add-note">Add note</button>
      </div>
    );
  }
}
