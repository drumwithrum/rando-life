import React, { PureComponent } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import styles from './Random.style';
import SubmitButton from '../SubmitButton';

class Random extends PureComponent {
  render() {
    const { randomFact, classes } = this.props;
    return (
      <Grid className={classes.wrapper}>
        <Grid xs={12} className={classes.gridTop}>
          <SubmitButton />
        </Grid>
        <Grid xs={11} className={classes.gridBot}>
          <Typography className={classes.text}>
            {randomFact}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

Random.propTypes = {
  classes: PropTypes.object.isRequired,
  randomFact: PropTypes.string.isRequired,
};

Random.defaultProps = {
};

const mapDispatchToProps = {
};

const mapStateToProps = state => ({
  randomFact: state.mainPage.randomFact,
});

const composedRandom = compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(Random);

export default composedRandom;
