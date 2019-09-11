import React from "react";
import FolderList from "../FolderPage/folder-list/FolderList";

export default class MainSidebar extends React.Component {
  render() {
    return (
      <section className="Nav">
        <FolderList state={this.props.state} />
      </section>
    );
  }
}
