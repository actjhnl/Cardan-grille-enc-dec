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
  }
  componentDidUpdate(){
    this.props.setMode(this.state.value);
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
    mode:state.mode
}),{setMode});

export default compose(materialWrapper,reduxWrapper)(App);
