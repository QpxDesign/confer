import React, { Component } from "react";
import UploadMenu from "./components/UploadMenu";
import Designer from "./components/Designer";

export default class Create extends Component {
  render() {
    if (this.props.mode == "upload") {
      return <UploadMenu />;
    }
    if (this.props.mode == "designer") {
      return <Designer />;
    }
  }
}
