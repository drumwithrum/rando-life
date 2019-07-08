import React from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { testAction } from './store/actions';
import styles from './StartingPage.style';

const StartingPage = ({ classes, text, testAction }) => (
  <div className={classes.wrapper}>
    {text}
    <button onClick={testAction}>click me!</button>
  </div>
);

StartingPage.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string,
  testAction: PropTypes.func.isRequired,
};

StartingPage.defaultProps = {
  text: 'Witam na mojej stronie :)',
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  testAction,
};

const composedStartingPage = compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(StartingPage);

export default composedStartingPage;
