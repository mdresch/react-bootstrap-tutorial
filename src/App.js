import React from 'react';
import './App.css';
import './js/neumorphism.js';

import Navbar from './partials/_navigation';
import Head from './partials/_head';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <head />
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
