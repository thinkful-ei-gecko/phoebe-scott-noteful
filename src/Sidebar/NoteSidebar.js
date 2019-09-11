import React from "react";

export default class NoteSidebar extends React.Component {
  //get folder name

  render() {

    return (
      <section className="Nav">
        <button class="go-back">Go Back</button>
        <h2>{this.props.folderName}</h2>
      </section>
    );
  }
}
