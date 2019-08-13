import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import styles from './Input.style';

class Input extends PureComponent {
  state = {
    error: false,
  }

  handleBlur = () => {
    const { input: { isReady, touched } } = this.props;
    this.setState({ error: !touched && !isReady });
  };

  render() {
    const {
      classes,
      value,
      onChange,
      example,
      page,
      input,
    } = this.props;
    const { error } = this.state;
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
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="outlined"
          color="inherit"
          inputProps={{
            onBlur: () => this.handleBlur(),
          }}
        />
        {error ? <div className={classes.alert}>{input.errorText}</div> : null}
      </Grid>
    );
  }
}

Input.propTypes = {
  page: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  example: PropTypes.string.isRequired,
};

Input.defaultProps = {
};

const mapDispatchToProps = {
};

const mapStateToProps = state => ({
  page: state.mainPage.page,
});

const composedInput = compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(Input);

export default composedInput;
