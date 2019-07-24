import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import styles from './Date.style';

class Date extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.wrapper}>
        <TextField
          id="filled-number"
          label="Date"
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="filled"
        />
      </Grid>
    );
  }
}

Date.propTypes = {
  classes: PropTypes.object.isRequired,
};

Date.defaultProps = {
};


export default withStyles(styles)(Date);
