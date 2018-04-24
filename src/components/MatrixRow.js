import React, { Component } from 'react';
import MatrixCell from './MatrixCell'
const styles = {
  width:'30px',
  height:'30px',
  border:'1px solid black',
  borderCollapse: 'collapse',
  alignContent:'flex-start',
}
class MatrixRow extends Component {
  render() {
    const cell = this.props.row.map(el=>{
        return <MatrixCell cell={el} key={el.id}/>
    })
    return (
      <div style={{display:'flex',
      flexDirection:'row',
      flexWrap:'nowrap',
      justifyContent:'center'}}>
        {cell}
      </div>
    );
  }
}

export default MatrixRow;
