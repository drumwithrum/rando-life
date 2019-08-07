import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Input from '../Input';
import styles from './Math.style';
import SubmitButton from '../SubmitButton';

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

  render() {
    const { classes, mathFact } = this.props;
    const { number, input } = this.state;
    return (
      <Grid className={classes.wrapper}>
        <Grid xs={12} className={classes.gridTop}>
          <Input
            value={number}
            onChange={this.handleChangeNumber}
            page="Number"
            example=""
            input={input}
          />
          <SubmitButton value={number} />
        </Grid>
        <Grid xs={11} className={classes.gridBot} style={{ border: '1px solid rgba(255, 180, 60, 0.2)' }}>
          <Typography style={{ fontSize: '24px', color: 'rgba(255, 180, 60, 0.9)' }}>
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
};

Math.defaultProps = {
};

const mapDispatchToProps = {
};

const mapStateToProps = state => ({
  mathFact: state.mainPage.mathFact,
});

const composedMath = compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(Math);

export default composedMath;
