import React from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonsContainer from './components/ButtonsContainer.jsx';
import { testAction } from './store/actions';
import styles from './MainPage.style';


const MainPage = ({ classes, text, testAction }) => (
  <Grid container className={classes.wrapper}>
    <Grid className={classes.header} xs={12}>
      <Typography className={classes.title}>Rando-life</Typography>
    </Grid>
    <Grid className={classes.buttonsContainer}>
      <ButtonsContainer />
    </Grid>
  </Grid>
);

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string,
  testAction: PropTypes.func.isRequired,
};

MainPage.defaultProps = {
  text: 'Witam na mojej stronie :)',
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  testAction,
};

const composedMainPage = compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(MainPage);

export default composedMainPage;
