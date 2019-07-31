import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import { default as BasicButton } from '@material-ui/core/Button';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import pagesSettings from 'config/pagesSettings';
import Input from '../Input';
import styles from './Date.style';
import { getDateFact } from '../../../store/actions';

class Date extends Component {
  state = {
    date: '',
    day: '',
    month: '',
    input: {
      isReady: false,
      touched: false,
      errorText: 'Try something like 02.06 or 03,05',
    },
  }

  handleChangeDate = (e) => {
    const { input, day, month } = this.state;
    const pattern = /^([0-2][0-9]|3[0-1])[-.,](0[0-9]|1[0-2])$/;
    const dateSplit = e.target.value.match(pattern);
    this.setState({
      date: e.target.value,
    });
    if (pattern.test(e.target.value)) {
      this.setState({
        input: { ...input, isReady: true },
        day: dateSplit[1],
        month: dateSplit[2],
      });
    } else {
      this.setState({
        input: { ...input, isReady: false },
      });
    }
  }

  handleClick = () => {
    const { month, input: { isReady }, day } = this.state;
    const { getDateFact } = this.props;
    if (isReady === true) {
      getDateFact(day.replace(/^0+/, ''), month.replace(/^0+/, ''));
    }
  }

  render() {
    const { classes, dateFact, page } = this.props;
    const { date, input } = this.state;
    return (
      <Grid className={classes.wrapper}>
        <Input
          value={date}
          onChange={this.handleChangeDate}
          example="dd.mm"
          page="Date"
          input={input}
        />
        <BasicButton
          className={classes.button}
          variant="contained"
          onClick={this.handleClick}
          style={{ color: (pagesSettings[page].color) }}
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
