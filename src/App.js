// Filename - src/App.js
// routing and rendering different pages

import React from "react";
import './App.css';

import Landing from "./components/Landing";
import Nav from "./components/Nav";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects"


function App() {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Landing />
        <Nav />
        <About />
        <Timeline />
        <Projects />
      </div>
    </div>
  );
}

export default App;