import React, { Component } from "react";
import { MdDriveFolderUpload } from "react-icons/md";
export default class UploadMenu extends Component {
  constructor(props) {
    super(props);
    this.closeMenu = () => {
      this.props.display = false;
    };
  }

  render() {
    if (this.props.display) {
      return (
        <>
          <div className="uploadmenu-wrapper">
            <header>
              <button className="closeButton" onClick={this.closeMenu}>
                X
              </button>
              <label>Upload Floorplan</label>
            </header>
            <div className="dropzone">
              <input
                type="file"
                className="icon"
                name="fileUploadDropbox"
              ></input>
              <div className="tooltip">
                <MdDriveFolderUpload className="icon" />
                <h1>drag and drop, or click and select a file.</h1>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}
