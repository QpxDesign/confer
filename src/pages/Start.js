import React, { Component } from "react";
import { Link } from "react-router-dom";
import UploadMenu from "./components/UploadMenu";

import { AiOutlineCloudUpload } from "react-icons/ai";
import { IoIosCreate } from "react-icons/io";
import { BsArrowLeft } from "react-icons/bs";

export default class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: false,
    };
  }
  render() {
    return (
      <>
        <UploadMenu display={this.state.shown} />
        <div className="floorplanSelectionMenu-wrapper">
          <Link to="/">
            <div className="back-button">
              <BsArrowLeft className="icon" />
              Back
            </div>
          </Link>
          <div
            className="choices-wrapper"
            onClick={() => this.setState({ shown: true })}
          >
            <div className="choice">
              <AiOutlineCloudUpload className="icon" />
              <h1>Upload Floorplan</h1>
            </div>
            <div className="vl"></div>
            <Link to="/create">
              <div className="choice">
                <IoIosCreate className="icon" />
                <h1>Create Floorplan</h1>
              </div>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
