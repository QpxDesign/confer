import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { IoIosCreate } from "react-icons/io";
export default function Start() {
  return (
    <div className="floorplanSelectionMenu-wrapper">
      <div className="choices-wrapper">
        <div className="choice">
          <AiOutlineCloudUpload className="icon" />
          <h1>Upload Floorplan</h1>
        </div>
        <div className="vl"></div>
        <div className="choice">
          <IoIosCreate className="icon" />
          <h1>Create Floorplan</h1>
        </div>
      </div>
    </div>
  );
}
