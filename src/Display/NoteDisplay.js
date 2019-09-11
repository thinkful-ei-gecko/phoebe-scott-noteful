import React from 'react';
import NoteItem from '../notes/NoteItem'
import { Route } from 'react-router-dom'
import NoteSidebar from '../Sidebar/NoteSidebar'

export default class NotePage extends React.Component {
    findNote() {
        console.log(this.props.state.data)
        return this.props.state.data.notes.find(note => {
            return (this.props.state.activeNoteId === note.id)
        })
    }

    render() {
        let folderName = this.props.state.data.folders.find(folder => this.props.note.folderId === folder.id).name;

        return (
            <>
                <Route path="/notes" render={() =>
                    <NoteSidebar folderName={folderName} />
                }
                />

                <section>

                    <NoteItem name={this.props.note.name} modified={this.props.note.modified} id={this.props.note.id} />
                    <p>{this.props.note.content}</p>

                </section>
            </>
        )
    }
}