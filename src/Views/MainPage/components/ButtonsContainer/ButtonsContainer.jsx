import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import pagesSettings from 'config/pagesSettings';
import styles from './ButtonsContainer.style';
import Button from '../Button';
import { changePage } from '../../store/actions';

class ButtonsContainer extends Component {
  handleClick = (color, pageName) => {
    const { changePage } = this.props;
    changePage(pageName);
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.wrapper}>
        <Button text="Date fact" icon="date" color={pagesSettings.date.color} onClick={() => this.handleClick(pagesSettings.date.color, pagesSettings.date.id)} />
        <Button text="Year fact" icon="year" color={pagesSettings.year.color} onClick={() => this.handleClick(pagesSettings.year.color, pagesSettings.year.id)} />
        <Button text="Math fact" icon="math" color={pagesSettings.math.color} onClick={() => this.handleClick(pagesSettings.math.color, pagesSettings.math.id)} />
        <Button text="Random fact" icon="random" color={pagesSettings.random.color} onClick={() => this.handleClick(pagesSettings.random.color, pagesSettings.random.id)} />
      </Grid>
    );
  }
}

// do ustawiana typów propsów (obect,string itp.)
ButtonsContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  test: PropTypes.string.isRequired,
  changePage: PropTypes.func.isRequired,
};

// domyslna wartosc propsow
ButtonsContainer.defaultProps = {
};

// sciagasz se state do pliku z Reduxa
const mapStateToProps = state => ({
  test: state.mainPage.testowo,
});

// rozglaszasz akcje ktroe trafjaja do poropsow
const mapDispatchToProps = {
  changePage,
};

// laczy wsztskie hoc (higher order components)
const composedButtonsContainer = compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(ButtonsContainer);

export default composedButtonsContainer;
