import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import styles from './ButtonsContainer.style';
import Button from '../Button';
import { changeColor } from '../../store/actions';

class ButtonsContainer extends Component {
  handleClick = () => {
    console.log(this.props);
    const { changeColor } = this.props;
    changeColor();
    }

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.wrapper}>
        <Button text="Date fact" icon="date" color="#6370A4" onClick={this.handleClick} />
        <Button text="Year fact" icon="year" color="#EC82A8" onClick={this.handleClick} />
        <Button text="Math fact" icon="math" color="#FFC66E" onClick={this.handleClick} />
        <Button text="Random fact" icon="random" color="#F9F871" onClick={this.handleClick} />
      </Grid>
    );
  }
}

//do ustawiana typów propsów (obect,string itp.)
ButtonsContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  test: PropTypes.string.isRequired,
  changeColor: PropTypes.string.isRequired,
};

//domyslna wartosc propsow
ButtonsContainer.defaultProps = {
};

//sciagasz se state do pliku z Reduxa
const mapStateToProps = state => ({
  test: state.mainPage.testowo,

});

//rozglaszasz akcje ktroe trafjaja do poropsow
const mapDispatchToProps = {
  changeColor,
};

//laczy wsztskie hoc (higher order components)
const composedButtonsContainer = compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(ButtonsContainer);

export default composedButtonsContainer;
