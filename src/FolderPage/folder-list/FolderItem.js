import React from 'react';

export default class FolderItem extends React.Component {


    // takes in this.props.name and this.props.id
    render() {
        return (
            <li key={this.props.id}>
                <h2>{this.props.name}</h2>
            </li>
        )
    }
}