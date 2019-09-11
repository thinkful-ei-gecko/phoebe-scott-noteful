import React from 'react';
import NoteItem from '../notes/NoteItem'

export default class NotePage extends React.Component {
    findNote() {
        console.log(this.props.state.data)
        return this.props.state.data.notes.find(note => {
            return (this.props.state.activeNoteId === note.id)
        })
    }

    render() {
        // let note = this.findNote();

        return (
            <>
                <section className="Nav">
                    <button class="go-back">Go Back</button>
                    {/* <h2>{folder.name}</h2> */}
                </section>

                <section>

                    <NoteItem name={this.props.note.name} modified={this.props.note.modified} id={this.props.note.id} />
                    <p>{this.props.note.content}</p>

                </section>
            </>
        )
    }
}