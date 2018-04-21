import React, { Component } from 'react';
import {connect} from 'react-redux';
import {chooseGrid,setOutput} from '../AC';
class MatrixCell extends Component {
  handleClick = (id) => {
    const {mode,chooseGrid,setOutput,D_matrix} = this.props
    chooseGrid(id,mode);
    setOutput(D_matrix,mode);// это же только для дешифровки
  }
  render() {
    const {active,visited,value,id} = this.props.cell;
    const styles = {
      width:'30px',
      height:'30px',
      border:'1px solid black',
      borderCollapse: 'collapse',
      alignContent:'flex-start',
      cursor:'pointer',
      backgroundColor:active===true?'#4caf50':visited===true?'#424242':'#D0CECD',
      textAlign:'center',
      fontSize:'24px',
      color:'#212121'
    }
    return (
      <div style={styles} onClick={()=>this.handleClick(id)}>
        {value}
      </div>
    );
  }
}

export default connect(state=>({
  mode:state.mode,
  D_matrix: state.dec.matrix,
  E_matrix: state.enc.matrix,
}),{chooseGrid,setOutput})(MatrixCell);
