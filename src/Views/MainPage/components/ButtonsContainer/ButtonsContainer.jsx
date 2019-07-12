import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import styles from './ButtonsContainer.style';
import Button from '../Button';

const ButtonsContainer = ({ classes }) => (
  <Grid container className={classes.wrapper}>
    <Button text="Date fact" icon="date" />
    <Button text="Year fact" icon="year" />
    <Button text="Math fact" icon="math" />
    <Button text="Random fact" icon="random" />
  </Grid>
);

ButtonsContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

ButtonsContainer.defaultProps = {
};

export default withStyles(styles)(ButtonsContainer);
