import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import {Main} from './components'
import {setMode} from './AC';
//material-ui
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {AppBar,Typography,Tabs } from 'material-ui';
import { Tab } from 'material-ui/Tabs';

import {styles} from './AppStyle'

class App extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  componentWillUpdate(){
    this.props.setMode(this.state.value);
  }
  componentDidUpdate(){
    this.props.setMode(this.state.value);
  }
  render() {
    const {classes}= this.props;
    return (
      <div className={classes.appFrame}>
        <AppBar position="absolute" className={classes.appBar}>
          <Tabs value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="inherit"
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
const reduxWrapper = connect(null,{setMode});

export default compose(materialWrapper,reduxWrapper)(App);
