import React, { Component } from 'react';
import { Navbar } from './Navbar';
import { Subscribe } from './Subscribe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Subscribe />
      </div>
    );
  }
}

export default App;
