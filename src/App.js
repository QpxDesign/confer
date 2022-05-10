import "./App.css";
import Start from "./pages/Start";
import Home from "./pages/Home";
import Create from "./pages/Create"
import {
  BrowserRouter as Router,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<Start />} />
          <Route path="/create/upload" element={<Create mode={"upload"}/>} />
          <Route path="/create/designer" element={<Create mode={"designer"}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
