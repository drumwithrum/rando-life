import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { default as BasicButton } from '@material-ui/core/Button';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import pagesSettings from 'config/pagesSettings';
import styles from './SubmitButton.style';
import { getYearFact, getRandomFact, getMathFact } from '../../../store/actions';

class SubmitButton extends Component {
  handleClick = () => {
    const {
      value,
      getYearFact,
      page,
      getRandomFact,
      getMathFact,
    } = this.props;
    const {
      year,
      math,
      random,
    } = pagesSettings;
    switch (page) {
      case year.id:
        return (getYearFact(value));
      case math.id:
        return (getMathFact(value));
      case random.id:
        return (getRandomFact());
      default:
        return (<p>:C</p>);
    }
  }

  render() {
    const { classes, page } = this.props;
    return (
      <BasicButton
        className={classes.button}
        variant="contained"
        color="white"
        onClick={this.handleClick}
        style={{ color: (pagesSettings[page].color), backgroundColor: (pagesSettings[page].colorPale) }}
      >
        <p>{page} Fact</p>
      </BasicButton>
    );
  }
}

SubmitButton.propTypes = {
  classes: PropTypes.object.isRequired,
  getRandomFact: PropTypes.func.isRequired,
  getYearFact: PropTypes.func.isRequired,
  getMathFact: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
};

SubmitButton.defaultProps = {
};

const mapDispatchToProps = {
  getRandomFact,
  getYearFact,
  getMathFact,
};

const mapStateToProps = state => ({
  page: state.mainPage.page,
});

const composedSubmitButton = compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(SubmitButton);

export default composedSubmitButton;
