import React from 'react';
import {NavLink} from 'react-router-dom';
import './FolderItem.css'

export default class FolderItem extends React.Component {


    // takes in this.props.name and this.props.id
    render() {
        return (
            <li key={this.props.id}>
                <NavLink to={`/folders/${this.props.id}`}>
                    <h2>{this.props.name}</h2>
                </NavLink>
            </li>
        )
    }
}