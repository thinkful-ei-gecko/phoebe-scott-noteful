import React from "react";
import NoteItem from "./NoteItem";

export default class NoteList extends React.Component {
  generateNoteItems() {
    console.log(this.props.folderId)
    let noteList = [];
    if (this.props.folderId !== null) {
        noteList = this.props.state.data.notes.filter(note => {
          return (this.props.folderId === note.folderId)
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
