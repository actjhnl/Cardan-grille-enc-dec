import React, { Component } from 'react';
import MatrixCell from './MatrixCell'
const styles = {
  display:'flex',
  flexDirection:'row',
  flexWrap:'nowrap',
  justifyContent:'center'
}
class MatrixRow extends Component {
  render() {
    const cell = this.props.row.map(el=>{
        return <MatrixCell cell={el} key={el.id}/>
    })
    return (
      <div style={styles}>
        {cell}
      </div>
    );
  }
}

export default MatrixRow;
