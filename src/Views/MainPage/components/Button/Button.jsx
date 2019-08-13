import React from 'react';
import { withStyles, Typography, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import BasicButton from '@material-ui/core/Button';
import icons from 'icons';
import styles from './Button.style';

const Button = ({
  classes,
  text,
  icon,
  color,
  onClick,
}) => (
  <BasicButton
    className={classes.button}
    variant="contained"
    style={{ backgroundColor: `${color}` }}
    onClick={onClick}
  >
    <Grid className={classes.iconContainer}>
      <img src={icons[icon]} alt="icon" />
    </Grid>
    <Typography>
      {text}
    </Typography>
  </BasicButton>
);

Button.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  text: 'button',
  icon: 'date',
  color: '',
};

export default withStyles(styles)(Button);
