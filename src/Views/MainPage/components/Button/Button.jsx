import React from 'react';
import { withStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { default as BasicButton } from '@material-ui/core/Button';
import icons from 'icons';
import styles from './Button.style';

const Button = ({ classes, text, icon}) => (
  <BasicButton
    className={classes.button}
    color="default"
    variant="contained"
  >
    <img src={icons[icon]} alt=":<" />
    <Typography>
      {text}
    </Typography>
  </BasicButton>
);

Button.propTypes = {
  classes: PropTypes.object.isRequired,
};

Button.defaultProps = {
};

export default withStyles(styles)(Button);
