import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import styles from './Year.style';
import SubmitButton from '../SubmitButton';
import { getYearFact } from '../../../store/actions';

class Year extends Component {
  state = {
    year: '',
  }

  // async componentDidMount() {
  //   const { getYearFact } = this.props;
  //   getYearFact(1273);
  // }

  handleYear = (e) => {
    this.setState({
      year: e.target.value,
    });
  }

  render() {
    const { classes, yearFact } = this.props;
    const { year } = this.state;
    return (
      <Grid className={classes.wrapper}>
        <TextField
          id="filled-number"
          label="Year"
          type="number"
          value={year}
          onChange={this.handleYear}
          className={classes.textField}
          style={{ backgroundColor: 'white' }}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="filled"
        />
        <SubmitButton value={year} />
        <Typography style={{ fontSize: '24px' }}>
          {yearFact}
        </Typography>
      </Grid>
    );
  }
}

Year.propTypes = {
  classes: PropTypes.object.isRequired,
  getYearFact: PropTypes.func.isRequired,
  yearFact: PropTypes.string.isRequired,
};

Year.defaultProps = {
};

const mapDispatchToProps = {
  getYearFact,
};

const mapStateToProps = state => ({
  yearFact: state.mainPage.yearFact,
});

const composedYear = compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(Year);

export default composedYear;

