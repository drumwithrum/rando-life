import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import { default as BasicButton } from '@material-ui/core/Button';
import pagesSettings from 'config/pagesSettings';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Input from '../Input';
import styles from './Year.style';
import { getYearFact } from '../../../store/actions';

class Year extends Component {
  state = {
    year: '',
    input: {
      touched: false,
      errorText: '',
    },
  }

  handleChangeYear = (e) => {
    this.setState({
      year: e.target.value,
    });
  }

  handleClick = () => {
    const { year } = this.state;
    const { getYearFact } = this.props;
    getYearFact(year);
  }

  render() {
    const { classes, yearFact, page } = this.props;
    const { year, input } = this.state;
    return (
      <Grid className={classes.wrapper}>
        <Grid xs={12} className={classes.gridTop}>
          <Input
            value={year}
            onChange={this.handleChangeYear}
            page="Year"
            example=""
            input={input}
          />
          <BasicButton
            className={classes.button}
            variant="contained"
            onClick={this.handleClick}
            style={{ color: (pagesSettings[page].color), backgroundColor: (pagesSettings[page].colorPale) }}
          >
            <p>Year Fact</p>
          </BasicButton>
        </Grid>
        <Grid xs={11} className={classes.gridBot}>
          <Typography className={classes.text}>
            {yearFact}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

Year.propTypes = {
  classes: PropTypes.object.isRequired,
  yearFact: PropTypes.string.isRequired,
  getYearFact: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
};

Year.defaultProps = {
};

const mapDispatchToProps = {
  getYearFact,
};

const mapStateToProps = state => ({
  yearFact: state.mainPage.yearFact,
  page: state.mainPage.page,
});

const composedYear = compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(Year);

export default composedYear;
