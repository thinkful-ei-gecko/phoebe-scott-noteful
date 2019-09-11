import React from 'react';
import {Link} from 'react-router-dom';

export default class FolderItem extends React.Component {


    // takes in this.props.name and this.props.id
    render() {
        return (
            <li key={this.props.id}>
                <Link to={`/folders/${this.props.id}`}>
                    <h2>{this.props.name}</h2>
                </Link>
            </li>
        )
    }
}