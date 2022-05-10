import React, { Component } from "react";
import { Link } from "react-router-dom";

import { AiOutlineCloudUpload } from "react-icons/ai";
import { IoIosCreate } from "react-icons/io";
import { BsArrowLeft } from "react-icons/bs";

export default class Start extends Component {
  render() {
    return (
      <>
        <div className="floorplanSelectionMenu-wrapper">
          <Link to="/">
            <div className="back-button">
              <BsArrowLeft className="icon" />
              Back
            </div>
          </Link>
          <div className="choices-wrapper">
            <Link to="/create/upload">
              <div className="choice">
                <AiOutlineCloudUpload className="icon" />
                <h1>Upload Floorplan</h1>
              </div>
            </Link>
            <div className="vl"></div>
            <Link to="/create/designer">
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
