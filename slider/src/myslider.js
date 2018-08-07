import React, { Component } from 'react';

class MySlider extends Component {
  handleChange = (event) => {
    const selectionValue = event.target.value;
    this.props.selectionUpdate(selectionValue);
  }

  render() {
    console.log(this.props);
    return (
    <input type="range" min="0" max="10" name="slider" id="range-slider" step="1" onChange={this.handleChange} />
    );
  }
}

export default MySlider;