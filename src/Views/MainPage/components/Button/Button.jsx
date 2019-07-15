import React from 'react';
import { withStyles, Typography, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { default as BasicButton } from '@material-ui/core/Button';
import icons from 'icons';
import styles from './Button.style';

const Button = ({ classes, text, icon, color, onClick }) => (
  <BasicButton
    className={classes.button}
    variant="contained"
    style={{ backgroundColor: `${color}` }}
    onClick={onClick}
  >
    <Grid xs={2} className={classes.iconContainer}>
      <img src={icons[icon]} alt=":<" />
    </Grid>
    <Typography>
      {text}
    </Typography>
  </BasicButton>
);

Button.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
};

export default withStyles(styles)(Button);
