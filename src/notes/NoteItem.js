import React from 'react';
import {Link} from 'react-router-dom';

export default class NoteItem extends React.Component {


    // takes in this.props.name and this.props.id and this.props.modified
    render() {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let dateModified = new Date(this.props.modified).toLocaleString('en-US', options);
        return (
            <li key={this.props.id}>
                <Link to={`/notes/${this.props.id}`}>
                    <h2>{this.props.name}</h2>
                </Link>

                <p>{dateModified}</p>
                <button className="delete">Delete Note</button>
            </li>
        )
    }
}