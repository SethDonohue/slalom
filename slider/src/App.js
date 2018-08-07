import React, { Component } from 'react';
import './App.css';
import MySlider from './myslider';

class App extends Component {
  state = {
    current: 0,
  }

  render() {
    return (
      <div className="App">
        <MySlider />
        <h1> {this.state.current}</h1>
      </div>
    );
  }
}

export default App;
