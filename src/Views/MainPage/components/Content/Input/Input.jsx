import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './Input.style';

class Input extends PureComponent {
  state = {
    opacity: '0',
  }

  losesFocus = () => {
    console.log(this.props);
    const { input: { isReady, touched } } = this.props;
    if (touched === false && isReady === false) {
      this.setState({
        opacity: '1',
      });
    } else {
      this.setState({
        opacity: '0',
      });
    }
  };

  render() {
    const {
      classes,
      value,
      onChange,
      page,
      example,
      input,
    } = this.props;
    const { opacity } = this.state;
    return (
      <Grid container className={classes.wrapper}>
        <TextField
          id="filled-date"
          label={page}
          type="number"
          placeholder={example}
          value={value}
          onChange={onChange}
          className={classes.textField}
          style={{ backgroundColor: 'white' }}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="filled"
          inputProps={{
            onBlur: () => this.losesFocus(),
          }}
        />
        <Typography
          className={classes.alert}
          style={{ opacity: `${opacity}` }}
        >
          {input.errorText}
        </Typography>
      </Grid>
    );
  }
}

export default withStyles(styles)(Input);
