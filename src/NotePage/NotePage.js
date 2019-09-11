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
        let note = this.findNote();
        return (
            <>
                <header>
                    <h1>Noteful</h1>
                </header>
                <main>
                    <section className="Nav">
                        <button class="go-back">Go Back</button>
                        {/* <h2>{folder.name}</h2> */}
                    </section>

                    <section>
                        <>
                            <NoteItem name={note.name} modified={note.modified} id={note.id}/>
                            <p>{note.content}</p>
                        </>
                    </section>
                </main>
            </>
        )
    }
}