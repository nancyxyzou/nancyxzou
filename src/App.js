// Filename - src/App.js
// routing and rendering different pages

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import About from "./components/About";


function App() {
  return (
    <div>
      <Router>
        <div style={{ display: 'flex' }}>
          <Routes>
            <Route path="/about" element ={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;