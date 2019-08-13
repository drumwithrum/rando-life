import React, { PureComponent } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import BasicButton from '@material-ui/core/Button';
import pagesSettings from 'config/pagesSettings';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import styles from './Random.style';
import { getRandomFact } from '../../../store/actions';

class Random extends PureComponent {
  handleClick = () => {
    const { getRandomFact } = this.props;
    getRandomFact();
  }

  render() {
    const { randomFact, classes, page } = this.props;
    return (
      <Grid className={classes.wrapper}>
        <Grid xs={12} className={classes.gridTop} item>
          <BasicButton
            className={classes.button}
            variant="contained"
            onClick={this.handleClick}
            style={{
              color: (pagesSettings[page].color),
              backgroundColor: (pagesSettings[page].colorPale),
            }}
          >
            <p>Random Fact</p>
          </BasicButton>
        </Grid>
        <Grid xs={11} className={classes.gridBot} item>
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
  getRandomFact: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
};

Random.defaultProps = {
};

const mapDispatchToProps = {
  getRandomFact,
};

const mapStateToProps = state => ({
  randomFact: state.mainPage.randomFact,
  page: state.mainPage.page,
});

const composedRandom = compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(Random);

export default composedRandom;
