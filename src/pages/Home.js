import React, { Component } from "react";
import floorplanExample from "./assets/floorplan-example.svg";
import dashboardExample from "./assets/dashboard-example.svg";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.secondSectionRef = null;
    this.setSectionRef = (element) => {
      this.secondSectionRef = element;
    };
    this.autoScrolldown = () => {
      this.secondSectionRef.scrollIntoView({ behavior: "smooth" });
    };
  }

  render() {
    return (
      <>
        <header>
          <div className="navbar-options">
            <div className="navbar-option">
              <h5>About</h5>
            </div>
            <div className="navbar-option">
              <h5>Support</h5>
            </div>
            <div className="navbar-option">
              <h5>Contact</h5>
            </div>
            <div className="navbar-option getstarted">
              <Link to="/start">
                <h5>Get Started</h5>
              </Link>
            </div>
          </div>
        </header>
        <div className="app">
          <section className="first-section-wrapper">
            <div className="blurb-wrapper">
              <h1>Confer</h1>
              <h2>Office Smarter</h2>
              <p>
                One service to manage your entire office. Reserve conference
                rooms, keep track of office equipment, and more. Get started for
                free today.
              </p>
              <button className="getstarted-button">
                <span>Get Started</span>
              </button>
            </div>
            <div className="tooltip-wrapper" onClick={this.autoScrolldown}>
              ↓ Scroll
            </div>
          </section>
          <section className="second-section-wrapper" ref={this.setSectionRef}>
            <div className="content-wrapper">
              <h1>Upload a floorplan, and we'll do the rest</h1>
              <p>Don't have one? We'll help you create one in minutes.</p>
              <img
                src={floorplanExample}
                className="image"
                alt="example of a floorplan"
              />
            </div>
          </section>
          <section className="third-section-wrapper">
            <div className="content-wrapper">
              <h1>Manage the Office all in one place </h1>
              <p>Our dashboard helps you keep track of all your equipment</p>
              <img
                src={dashboardExample}
                className="laptop"
                alt="example of dashboard tool on Macbook"
              />
            </div>
          </section>
          <section className="fourth-section-wrapper">
            <h1>Questions?</h1>
            <h2>
              feel free to email us:{" "}
              <a href="mailto:quinn@qpxdesign.com">quinn@qpxdesign.com</a>
            </h2>
          </section>
          <section className="footer">© Copyright 2022 - Confer Inc.</section>
        </div>
      </>
    );
  }
}
