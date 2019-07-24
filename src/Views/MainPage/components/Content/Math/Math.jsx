import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import styles from './Math.style';

const Math = ({ classes }) => (
  <Grid container className={classes.wrapper}>
    This is your Math component :(
  </Grid>
);

Math.propTypes = {
  classes: PropTypes.object.isRequired,
};

Math.defaultProps = {
};

export default withStyles(styles)(Math);
