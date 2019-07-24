import React, { PureComponent } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import styles from './Random.style';
import SubmitButton from '../SubmitButton';
import { getRandomFact } from '../../../store/actions';

class Random extends PureComponent {
  render() {
    const { randomFact, classes } = this.props;
    return (
      <Grid className={classes.wrapper}>
        <SubmitButton />
        <Typography className={classes.text}>{randomFact}</Typography>
      </Grid>
    );
  }
}

Random.propTypes = {
  classes: PropTypes.object.isRequired,
  getRandomFact: PropTypes.func.isRequired,
  randomFact: PropTypes.string.isRequired,
};

Random.defaultProps = {
};

const mapDispatchToProps = {
  getRandomFact,
};

const mapStateToProps = state => ({
  randomFact: state.mainPage.randomFact,
});

const composedRandom = compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(Random);

export default composedRandom;
