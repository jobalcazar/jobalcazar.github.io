import React from 'react';
import Main from './components/main'
import About from './components/about'
import Projects from './components/projects';
import Navbarcomp from './components/navbar';
import HomePage from './components/homepage';
import Experience from './components/experience';
// import './App.css';
// import './index.css';

function App() {
  return (
    <div id="App">
      <Navbarcomp/>
      <HomePage />
      <About/>
      {/* <Projects/> */}
      <Experience/>
    </div>
  );
}

export default App;
