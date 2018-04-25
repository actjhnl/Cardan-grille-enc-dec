import React, { Component } from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import uuid from 'uuid/v4';
import {RenderingRelevantOutputAfterRotate,incCount,reset,RenderingRelevantOutput,rotate} from '../../AC'
import MatrixRow from './MatrixRow';
//material-ui
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {Paper,Card,Button } from 'material-ui';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import {Undo,Clear,Redo} from '@material-ui/icons';

import {styles} from './MatrixStyle';

class Matrix extends Component {
  handleRotate = () => {
    const {D_matrix,E_matrix,D_count,E_count,mode,input} = this.props;
    mode === 0 && this.props.rotate();
    mode == 1 && this.props.rotate(input,E_count)
    this.props.RenderingRelevantOutputAfterRotate(mode === 0 ? D_matrix : E_matrix,mode);
    mode === 1 && this.props.RenderingRelevantOutput(E_matrix,mode)
    const c = mode === 0 ? D_count : E_count;
    if(c < 4){
      this.props.incCount(mode);
    }
    else this.props.reset(mode);
  }
  render() {
    const { classes,mode,D_matrix,E_matrix,D_sizeMatrix,E_sizeMatrix,reset } = this.props;
    const m = mode === 0 ? D_matrix : E_matrix;
    const ms = mode === 0 ? D_sizeMatrix : E_sizeMatrix;
    const mtrx = m.map(i=>{
      return <MatrixRow row={i} key={uuid()}/>
    });
    return (
      <div>
          <Paper className={classes.root} elevation={4}>
              <div className={classes.wrapper}>
                <div style={{display:'flex',alignItems:'center'}}>
                  <Paper style={{height:'100%'}} className={classes.panel}>
                    <BottomNavigationAction label="Rotate" icon={<Undo />} style={{color:'#212121',height:'100%'}}/>
                  </Paper>
                </div>
                <div>{mtrx}</div>
                <div style={{display:'flex',alignItems:'center'}}>
                  <Paper style={{height:'100%'}} className={classes.panel}>
                    <BottomNavigationAction label="Rotate" icon={<Redo />} onClick={this.handleRotate} style={{color:'#212121',height:'100%'}}/>
                  </Paper>
                </div>
              </div>
              <div style={{display:'flex',justifyContent:'center'}}>
                <BottomNavigation showLabels style={{width: `calc(32 * ${ms}px)`}} className={classes.panel}>
                  <BottomNavigationAction label="Reset" icon={<Clear />} onClick={()=>{reset(mode)}} style={{color:'#212121'}}/>
                </BottomNavigation>
              </div>
          </Paper>
      </div>
    );
  }
}
Matrix.propTypes = {
  classes: PropTypes.object.isRequired,
};

const materialWrapper = withStyles(styles);
const reduxWrapper = connect(state=>({
    mode:state.mode,
    input:state.enc.input,
    D_sizeMatrix:state.dec.sizeMatrix,
    E_sizeMatrix:state.enc.sizeMatrix,
    D_matrix: state.dec.matrix,
    E_matrix: state.enc.matrix,
    D_count:state.dec.count,
    E_count:state.enc.count
}),{RenderingRelevantOutputAfterRotate,incCount,reset,RenderingRelevantOutput,rotate});

export default compose(materialWrapper,reduxWrapper)(Matrix);
