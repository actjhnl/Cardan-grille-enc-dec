import React, { Component } from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';
//material-ui
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {Paper,Typography} from 'material-ui';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 0,
    paddingBottom: 0,
  }),
});

class Output extends Component {
  render() {
    const { classes,D_output,mode } = this.props;
    return (
      <div>
      <Paper className={classes.root} elevation={1}>
        <textarea value={mode===0 ? D_output : 'текст для шифрования'} rows='10'  style={{width:'100%',fontSize:'20px',backgroundColor:'#D0CECD',resize:'none'}}/>
      </Paper>
    </div>
    );
  }
}
Output.propTypes = {
  classes: PropTypes.object.isRequired,
};

const materialWrapper = withStyles(styles);
const reduxWrapper = connect(state=>({
    mode: state.mode,
    D_output: state.dec.output
}),{});

export default compose(materialWrapper,reduxWrapper)(Output);
