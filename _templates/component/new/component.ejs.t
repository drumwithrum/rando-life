---
to: src/Views/MainPage/components/<%= name %>/<%= name %>.jsx
---
import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import styles from './<%= name %>.style';

const <%= name %> = ({ classes }) => (
  <Grid container className={classes.wrapper}>
    This is your <%= name %> component :(
  </Grid>
);

<%= name %>.propTypes = {
  classes: PropTypes.object.isRequired,
};

<%= name %>.defaultProps = {
};

export default withStyles(styles)(<%= name %>);
