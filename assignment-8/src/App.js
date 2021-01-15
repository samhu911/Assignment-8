import React, { Component } from 'react';
import Grid from './components/Grid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {color: "white"};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({color: event.target.value});// able to change color.
  } 
  // Select a color from dropdown menu of colors
  render() {
    return (
      <div>
        <select value={this.state.color} onChange={this.handleChange}>
        <option value="none">---</option>        
        <option value="black">Black</option>
        <option value="blue">Blue</option>
        <option value="gray">Gray</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="orange">Orange</option>
      </select>
      <Grid color={this.state.color} />
      </div>
    );
  }
}

export default App;
