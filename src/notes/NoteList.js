import React from 'react';
import dataStore from '../dummy-store'
import NoteItem from './NoteItem'


export default class NoteList extends React.Component {

    generateNoteItems() {
        let noteList = dataStore.notes.map(note => {
            return <NoteItem name={note.name} id={note.id} modified={note.modified} />
        })
        return noteList;
    }

    render() {
        return (
            <ul>
                {this.generateNoteItems()}
            </ul>
        )
    }
}