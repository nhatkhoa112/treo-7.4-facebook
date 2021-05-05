import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <h1>Coderbook</h1>
      </div>
    </Router>
  );
}

export default App;
