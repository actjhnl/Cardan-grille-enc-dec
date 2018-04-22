import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import {Main} from './components'
import {setMode,buildMatrix} from './AC';
//material-ui
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {AppBar,Typography,Tabs } from 'material-ui';
import { Tab } from 'material-ui/Tabs';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class App extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  componentWillUpdate(){
    this.props.setMode(this.state.value);
    const {mode, D_sizeMatrix, E_sizeMatrix} = this.props;
    //this.props.buildMatrix(mode === 0 ? D_sizeMatrix : E_sizeMatrix,mode);
  }
  componentDidUpdate(){
    this.props.setMode(this.state.value);
    const {mode, D_sizeMatrix, E_sizeMatrix} = this.props;
    //this.props.buildMatrix(mode === 0 ? D_sizeMatrix : E_sizeMatrix,mode);
  }
  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Tabs value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
          >
            <Tab label="Decryption" />
            <Tab label="Encryption" />
          </Tabs>
        </AppBar>
        <Main/>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

const materialWrapper = withStyles(styles);
const reduxWrapper = connect(state=>({
    mode:state.mode,
    D_sizeMatrix:state.dec.sizeMatrix,
    E_sizeMatrix:state.enc.sizeMatrix,
}),{setMode,buildMatrix});

export default compose(materialWrapper,reduxWrapper)(App);
