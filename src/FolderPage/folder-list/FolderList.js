import React from 'react';
import dataStore from '../../dummy-store'
import FolderItem from './FolderItem'

export default class FolderList extends React.Component {

    generateFolderItems() {
        let folderList = dataStore.folders.map(folder => {
            return <FolderItem name={folder.name} id={folder.id} />
        })
        return folderList;
    }

    render() {
        return (
            <ul>
                {this.generateFolderItems()}
            </ul>
        )
    }
}