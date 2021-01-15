  import React from 'react';

function GridColumn(props) {
  const handleCellClick = (event) => {
    event.target.style.backgroundColor = props.color;
  }
  return <td style={style} onClick={handleCellClick}></td>;
}

const style = {
  border: '1px solid black',
  width: '100px',
  height: '100px',
};

export default GridColumn;