import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Car from './Car';
// import MouseTrail from './mouse-trail';
import { mazdaHonk, priusHonk } from './honks';


class App extends Component {
  
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <Car color="red" onHonk={priusHonk} />
          <Car color="blue" onHonk={mazdaHonk} />
      </div>
    );
  }
}

export default App;
