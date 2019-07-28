import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import styles from './Math.style';
import SubmitButton from '../SubmitButton';
import { getMathFact } from '../../../store/actions';

class Math extends Component {
  state = {
    number: '',
  }

  handleChangeNumber = (e) => {
    this.setState({
      number: e.target.value,
    });
  }

  render() {
    const { classes, mathFact } = this.props;
    const { number } = this.state;
    return (
      <Grid className={classes.wrapper}>
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          value={number}
          onChange={this.handleChangeNumber}
          className={classes.textField}
          style={{ backgroundColor: 'white' }}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="filled"
        />
        <SubmitButton value={number} />
        <Typography style={{ fontSize: '24px' }}>
          {mathFact}
        </Typography>
      </Grid>
    );
  }
}

Math.propTypes = {
  classes: PropTypes.object.isRequired,
  getMathFact: PropTypes.func.isRequired,
  mathFact: PropTypes.string.isRequired,
};

Math.defaultProps = {
};

const mapDispatchToProps = {
  getMathFact,
};

const mapStateToProps = state => ({
  mathFact: state.mainPage.mathFact,
});

const composedMath = compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(Math);

export default composedMath;
