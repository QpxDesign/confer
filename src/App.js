import "./App.css";
import { useRef } from "react";
import floorplanExample from "./assets/floorplan-example.svg";
import dashboardExample from "./assets/dashboard-example.svg";
function App() {
  function autoScrolldown() {
    secondSectionRef.current.scrollIntoView({ behavior: "smooth" });
  }
  const secondSectionRef = useRef(null);
  return (
    <div className="app">
      <section className="first-section-wrapper">
        <div className="blurb-wrapper">
          <h1>Confer</h1>
          <h2>Office Smarter</h2>
          <ul>
            <li>Magically manage coworking spaces</li>
            <li>Find free spaces in seconds</li>
            <li>Detailed analytics of space-usage</li>
            <li>Keep track of office equipment</li>
          </ul>
          <button className="getstarted-button">Get Started</button>
        </div>
        <div className="tooltip-wrapper" onClick={() => autoScrolldown()}>
          ↓ Scroll
        </div>
      </section>
      <section className="second-section-wrapper" ref={secondSectionRef}>
        <div className="content-wrapper">
          <h1>Upload a floorplan, and we'll do the rest</h1>
          <p>Don't have one? We'll help you create one in minutes.</p>
          <img src={floorplanExample} className="image" />
        </div>
      </section>
      <section className="third-section-wrapper">
        <div className="content-wrapper">
          <h1>Manage the Office all in one place </h1>
          <p>Our dashboard helps you keep track of all your equipment</p>
          <img src={dashboardExample} className="laptop" />
        </div>
      </section>
      <section className="fourth-section-wrapper">
        <h1>Questions?</h1>
        <h2>
          feel free to email us:
          <a href="mailto:quinn@qpxdesign.com">quinn@qpxdesign.com</a>
        </h2>
      </section>
      <section className="footer"></section>
    </div>
  );
}

export default App;
