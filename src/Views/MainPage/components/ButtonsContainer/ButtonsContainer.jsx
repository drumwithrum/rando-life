import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import colors from 'config/colors';
import styles from './ButtonsContainer.style';
import Button from '../Button';
import { changeColor } from '../../store/actions';

class ButtonsContainer extends Component {
  handleClick = (color) => {
    const { changeColor } = this.props;
    changeColor(color);
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.wrapper}>
        <Button text="Date fact" icon="date" color={colors.blue} onClick={() => this.handleClick(colors.blue)} />
        <Button text="Year fact" icon="year" color={colors.pink} onClick={() => this.handleClick(colors.pink)} />
        <Button text="Math fact" icon="math" color={colors.orange} onClick={() => this.handleClick(colors.orange)} />
        <Button text="Random fact" icon="random" color={colors.green} onClick={() => this.handleClick(colors.green)} />
      </Grid>
    );
  }
}

// do ustawiana typów propsów (obect,string itp.)
ButtonsContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  test: PropTypes.string.isRequired,
  changeColor: PropTypes.string.isRequired,
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
  changeColor,
};

// laczy wsztskie hoc (higher order components)
const composedButtonsContainer = compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(ButtonsContainer);

export default composedButtonsContainer;
