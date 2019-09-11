import React from 'react';
import FolderItem from './FolderItem'

export default class FolderList extends React.Component {

    generateFolderItems() {
        let folderList = this.props.state.data.folders.map(folder => {
            return <FolderItem name={folder.name} id={folder.id} />
        })
        return folderList;
    }

    render() {
        return (
            <div className="folder-list">
                <ul>
                {this.generateFolderItems()}
                </ul>
                <button className="add-folder">Add Folder</button>
            </div>
        )
    }
}