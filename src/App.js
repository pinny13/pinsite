import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as pg from './playground';

function App() {
  return (
    <div className="App">
      <div>
        <div>List length: {pg.getListLength_5()}</div>
        <div>Biggest year: {pg.getYearWithMostPeople()}</div>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
