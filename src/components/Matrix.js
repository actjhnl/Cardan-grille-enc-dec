import React, { Component } from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import uuid from 'uuid/v4';
import {rotate,updateOutput,incCount,reset} from '../AC'
import {MatrixRow} from './';
//material-ui
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {Paper,Card,Button } from 'material-ui';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import {Undo,Clear,Redo} from '@material-ui/icons';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  matrix: {
     margin:'0 auto',
  },
  button: {
    margin: theme.spacing.unit
  },
  panel:theme.mixins.gutters({
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: theme.spacing.unit * 3,
  })

});

class Matrix extends Component {
  handleRotate = () => {
    const {D_matrix,E_matrix,D_count,E_count,mode} = this.props;
    this.props.rotate(mode);
    this.props.updateOutput(mode === 0 ? D_matrix : E_matrix,mode);
    const c = mode === 0 ? D_count : E_count;
    if(c < 4)
      this.props.incCount(mode);
    else this.props.reset(mode);
  }
  render() {
    const { classes,mode,D_matrix,E_matrix,reset } = this.props;
    const m = mode === 0 ? D_matrix : E_matrix;
    const mtrx = m.map(i=>{
      return <MatrixRow row={i} key={uuid()}/>
    });
    return (
      <div>

          <div className={classes.matrix} style={{width: `calc(40px * ${m})`}}>
            {mtrx}
          </div>
          <BottomNavigation
            showLabels
            className={classes.panel}
          >
            <BottomNavigationAction label="Rotate left" icon={<Undo />}/>
            <BottomNavigationAction label="Reset" icon={<Clear />} onClick={()=>{reset(mode)}}/>
            <BottomNavigationAction label="Rotate right" icon={<Redo />} onClick={this.handleRotate} />
          </BottomNavigation>

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
    D_sizeMatrix:state.dec.sizeMatrix,
    E_sizeMatrix:state.enc.sizeMatrix,
    D_matrix: state.dec.matrix,
    E_matrix: state.enc.matrix,
    D_count:state.dec.count,
    E_count:state.enc.count
}),{rotate,updateOutput,incCount,reset});

export default compose(materialWrapper,reduxWrapper)(Matrix);
