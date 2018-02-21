import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Header
        </header>
        <div className="container">
          <div className="row">
            <div className="col">
              1 of 2
            </div>
            <div className="col">
              1 of 2
            </div>
          </div>
          <div className="row">
            <div className="col">
              1 of 3
            </div>
            <div className="col">
              1 of 3
            </div>
            <div className="col">
              1 of 3
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
