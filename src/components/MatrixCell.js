import React, { Component } from 'react';
import {connect} from 'react-redux';
import {dec_chooseGrid,enc_chooseGrid,setOutput} from '../AC';
class MatrixCell extends Component {
  handleClick = (id) => {
    const {mode,input,D_matrix,E_matrix,count} = this.props
    if (mode === 0){
      this.props.dec_chooseGrid(id);
      this.props.setOutput(D_matrix,mode);
    } else {
      this.props.enc_chooseGrid(id,input,count);
      this.props.setOutput(E_matrix,mode);
    }
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
      backgroundColor:active===true?'#EF5350':visited===true?'#BCAAA4':'white',
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
  input:state.enc.input,
  D_matrix: state.dec.matrix,
  E_matrix: state.enc.matrix,
  E_count:state.enc.count
}),{dec_chooseGrid,enc_chooseGrid,setOutput})(MatrixCell);
