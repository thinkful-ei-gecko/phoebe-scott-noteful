import React from "react";
import NoteList from "../notes/NoteList";

export default class MainPage extends React.Component {
  render() {
    return (
      <section>
        <NoteList state={this.props.state} folderId={null}/>
      </section>
    );
  }
}
