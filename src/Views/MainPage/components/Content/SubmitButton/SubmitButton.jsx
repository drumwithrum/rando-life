import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import { default as BasicButton } from '@material-ui/core/Button';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import colors from 'config/colors';
import Grid from '@material-ui/core/Grid';
import styles from './SubmitButton.style';
import { getYearFact, getRandomFact } from '../../../store/actions';

class SubmitButton extends Component {
  handleClick = () => {
    const { value, getYearFact, page, getRandomFact } = this.props;
    const {
      start,
      date,
      year,
      math,
      random,
    } = colors;
    switch (page) {
      case start.id:
        return (console.log(page));
      case date.id:
        return (console.log(page));
      case year.id:
        return (getYearFact(value));
      case math.id:
        return (console.log(page));
      case random.id:
        return (getRandomFact());
      default:
        return (<p>:C</p>);
    }
  }

  render() {
    const { classes, page } = this.props;
    console.log(this.props);
    return (
      <BasicButton
        className={classes.button}
        variant="contained"
        size="small"
        onClick={this.handleClick}
        style={{ color: (colors[page].color) }}
      >
        <p>{page} Fact</p>
      </BasicButton>
    );
  }
}

SubmitButton.propTypes = {
  classes: PropTypes.object.isRequired,
  getYearFact: PropTypes.func.isRequired,
  getRandomFact: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
};

SubmitButton.defaultProps = {
};

const mapDispatchToProps = {
  getYearFact,
  getRandomFact,
};

const mapStateToProps = state => ({
  page: state.mainPage.page,
});

const composedYear = compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(SubmitButton);

export default composedYear;
