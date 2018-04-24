import React, { Component } from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import {setInputText} from '../AC'
//material-ui
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {Paper,Typography} from 'material-ui';

const styles = theme => ({
  root: theme.mixins.gutters({
    margin:1,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor:'#212121',
    padding:0
  }),
  text: {
    width:'100%',
    fontSize:'20px',
    backgroundColor:'#D0CECD',
    resize:'none',
    padding:'10',
    marginLeft:'-10'
  }
});

class Output extends Component {
  state = {
    inputText:''
  }
  handleChange = (e) => {
    this.setState({
      inputText:e.target.value
    })
  }
  componentWillUpdate(){
    this.props.setInputText(this.state.inputText)
  }
  componentDidUpdate(){
    this.props.setInputText(this.state.inputText)
  }
  render() {
    const { classes,D_output,mode } = this.props;
    return (
      <div>
      <Paper className={classes.root} elevation={1}>
        <textarea value={mode===0 ? D_output : this.state.inputText}
                  rows='8'
                  className={classes.text}
                  onChange={mode === 1 && this.handleChange}
        />
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
    input: state.enc.input,
    mode: state.mode,
    D_output: state.dec.output
}),{setInputText});

export default compose(materialWrapper,reduxWrapper)(Output);
