import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { default as BasicButton } from '@material-ui/core/Button';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import colors from 'config/colors';
import styles from './Date.style';
import { getDateFact } from '../../../store/actions';

class Date extends Component {
  state = {
    date: '',
    day: '',
    month: '',
    error: true,
  }

  handleChangeDate = (e) => {
    const { error, day, month } = this.state;
    this.setState({
      date: e.target.value,
    });
    const pattern = /^([0-2][0-9]|3[0-1])[-.,](0[0-9]|1[0-2])$/;
    const dateSplit = e.target.value.match(pattern);
    if (pattern.test(e.target.value)) {
      this.setState({
        error: false,
        day: dateSplit[1],
        month: dateSplit[2],
      });
    } else {
      this.setState({
        error: true,
      });
    }
  }

  handleClick = () => {
    const { month, error, day } = this.state;
    const { getDateFact } = this.props;
    if (error === false) {
      console.log(day.replace(/^0+/, ''));
      console.log(month);
      getDateFact(day.replace(/^0+/, ''), month.replace(/^0+/, ''));
    } else {
      alert('pole zostało źle wypełnione');
    }
  }

  render() {
    const { classes, dateFact, page } = this.props;
    const { date } = this.state;
    return (
      <Grid className={classes.wrapper}>
        <TextField
          id="filled-date"
          label="Date"
          type="number"
          placeholder="dd.mm"
          value={date}
          onChange={this.handleChangeDate}
          className={classes.textField}
          style={{ backgroundColor: 'white' }}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="filled"
        />
        <BasicButton
          className={classes.button}
          variant="contained"
          onClick={this.handleClick}
          style={{ color: (colors[page].color) }}
        >
          Date Fact
        </BasicButton>
        <Typography style={{ fontSize: '24px' }}>
          {dateFact}
        </Typography>
      </Grid>
    );
  }
}

Date.propTypes = {
  classes: PropTypes.object.isRequired,
  getDateFact: PropTypes.func.isRequired,
  dateFact: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

Date.defaultProps = {
};

const mapDispatchToProps = {
  getDateFact,
};

const mapStateToProps = state => ({
  dateFact: state.mainPage.dateFact,
  page: state.mainPage.page,
});

const composedDate = compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(Date);

export default composedDate;
