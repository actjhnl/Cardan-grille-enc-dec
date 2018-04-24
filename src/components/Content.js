import React, { Component } from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import {Matrix,Output} from './';
//material-ui
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#0D47A1',
    padding: theme.spacing.unit * 3,
    minWidth: 0,
  },
  toolbar: theme.mixins.toolbar,
});

class Content extends Component {
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Matrix/>
        <Output/>
      </main>
    );
  }
}
Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
