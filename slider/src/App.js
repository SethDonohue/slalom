import React, { Component } from 'react';
import './App.css';
import MySlider from './myslider';

class App extends Component {
  state = {
    current: 0,
  }

  handleUpdate = (value) => {
    console.log(value);
    this.setState({
      current:value,
    })
  }
  render() {
    return (
      <div className="App">
        <MySlider selectionUpdate={this.handleUpdate}/>
        <h1> {this.state.current}</h1>
      </div>
    );
  }
}

export default App;
