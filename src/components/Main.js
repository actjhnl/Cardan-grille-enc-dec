import React, { Component } from 'react';
import {SideBar,Content} from './';
//material-ui
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  }
});

class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <SideBar/>
        <Content/>
      </div>
    );
  }
}
Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
