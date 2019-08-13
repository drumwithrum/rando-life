import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import BasicButton from '@material-ui/core/Button';
import pagesSettings from 'config/pagesSettings';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Input from '../Input';
import styles from './Math.style';
import { getMathFact } from '../../../store/actions';

class Math extends Component {
  state = {
    number: '',
    input: {
      touched: false,
      errorText: '',
    },
  }

  handleChangeNumber = (e) => {
    this.setState({
      number: e.target.value,
    });
  }

  handleClick = () => {
    const { number } = this.state;
    const { getMathFact } = this.props;
    getMathFact(number);
  }

  render() {
    const { classes, mathFact, page } = this.props;
    const { number, input } = this.state;
    return (
      <Grid className={classes.wrapper}>
        <Grid xs={12} className={classes.gridTop} item>
          <Input
            value={number}
            onChange={this.handleChangeNumber}
            page="Number"
            example=""
            input={input}
          />
          <BasicButton
            className={classes.button}
            variant="contained"
            onClick={this.handleClick}
            style={{
              color: (pagesSettings[page].color),
              backgroundColor: (pagesSettings[page].colorPale),
            }}
          >
            <p>Math Fact</p>
          </BasicButton>
        </Grid>
        <Grid xs={11} className={classes.gridBot} item>
          <Typography className={classes.text}>
            {mathFact}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

Math.propTypes = {
  classes: PropTypes.object.isRequired,
  mathFact: PropTypes.string.isRequired,
  getMathFact: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
};

Math.defaultProps = {
};

const mapDispatchToProps = {
  getMathFact,
};

const mapStateToProps = state => ({
  mathFact: state.mainPage.mathFact,
  page: state.mainPage.page,
});

const composedMath = compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(Math);

export default composedMath;
