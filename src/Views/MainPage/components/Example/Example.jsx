import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import styles from './Example.style';


const Example = ({ classes }) => (
  <Grid container className={classes.wrapper}>
    This is your example component : )
  </Grid>
);

Example.propTypes = {
  classes: PropTypes.object.isRequired,
};

Example.defaultProps = {
};

export default withStyles(styles)(Example);
