import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import styles from './Decorations.style';

const Decorations = ({ classes }) => (
  <Grid container className={classes.wrapper}>
    <figure className={classes.circle} />
    <figure className={classes.circle2} />
    <figure className={classes.circle3} />
    <figure className={classes.circle4} />
    <figure className={classes.circle5} />
    <figure className={classes.circle6} />
    <figure className={classes.circle7} />
    <figure className={classes.circle8} />
  </Grid>
);

Decorations.propTypes = {
  classes: PropTypes.object.isRequired,
};

Decorations.defaultProps = {
};

export default withStyles(styles)(Decorations);
