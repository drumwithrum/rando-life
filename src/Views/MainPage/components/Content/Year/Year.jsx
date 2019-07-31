import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Input from '../Input';
import styles from './Year.style';
import SubmitButton from '../SubmitButton';
import { getYearFact } from '../../../store/actions';

class Year extends Component {
  state = {
    year: '',
    input: {
      touched: false,
      errorText: 'Try something under 2018',
    },
  }

  handleChangeYear = (e) => {
    this.setState({
      year: e.target.value,
    });
  }

  render() {
    const { classes, yearFact } = this.props;
    const { year, input } = this.state;
    return (
      <Grid className={classes.wrapper}>
        <Input
          value={year}
          onChange={this.handleChangeYear}
          page="Year"
          example=""
          input={input}
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
