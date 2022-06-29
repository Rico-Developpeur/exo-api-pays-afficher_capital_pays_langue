import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Country from "./components/Country";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* route à segment dynamique */}
          <Route path="/countries/:country" element={<Country />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
