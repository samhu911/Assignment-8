import React, { Component } from 'react';
import GridRow from './GridRow';
import { v4 as uuidv4 } from 'uuid'; //uuidv4 is the key to track the grid

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
      rows: 0,
      columns: 1,
    };
  }

  componentDidUpdate() {
    if(this.props.color !== this.state.color)
    {
      this.setState({color: this.props.color}); // it will reset the color if I change to different color.
    }
  }

  addRow = () => {
    this.setState({ rows: this.state.rows + 1 });
  };

  addColumn = () => {
    this.setState({ columns: this.state.columns + 1 });
  };

  removeRow = () => {
    this.setState({ rows: this.state.rows - 1 });
  };

  removeColumn = () => {
    this.setState({ columns: this.state.columns - 1 });
  };

  render() {
    let grid = []; 

    if (!grid) {
      return <p></p>;
    } else {
      for (let i = 0; i < this.state.rows; i++) {
        grid.push(<GridRow key={uuidv4()} columns={this.state.columns} color={this.state.color} />);
      }
    }

    return (
      <div>
        <button onClick={this.addRow}>Add Row</button>
        <button onClick={this.addColumn}>Add Column</button>
        <button onClick={this.removeRow}>Remove Row</button>
        <button onClick={this.removeColumn}>Remove Column</button>
        <table>
          <tbody>{grid}</tbody>
        </table>
      </div>
    );
  }
}

export default Grid;