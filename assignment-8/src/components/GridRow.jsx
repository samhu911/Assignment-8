import React from 'react';
import GridColumn from './GridColumn';
import { v4 as uuidv4 } from 'uuid';

function GridRow(props) {
  let columns = [];

  for (let i = 0; i < props.columns; i++) {
    columns.push(<GridColumn key={uuidv4()} color={props.color} />);
  }

  return <tr>{columns}</tr>;
}

export default GridRow;