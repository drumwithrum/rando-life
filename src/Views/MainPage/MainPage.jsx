import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { ButtonsContainer } from './components/index';
import styles, { gradient } from './MainPage.style';
import {
  testAction,
  addSuccess,
  addStarted,
  addFailure,
} from './store/actions';

class MainPage extends Component {
  async componentDidMount() {
    // axios.get('https://jsonplaceholder.typicode.com/users')
    //   .then((res) => {
    //     console.log(res);
    //   });
    const apiTest = axios.create({
      method: 'GET',
      baseURL: 'https://numbersapi.p.rapidapi.com/random/trivia',
      headers: {
        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
        'X-RapidAPI-Key': 'a0e5fcc8d4msh1ec1af95e384ca6p1a79aajsnc6d3c773f4c0',
      },
      params: {
        json: true,
      },
    });
    try {
      const response = await apiTest();
      console.log(response.data);
      const { addSuccess } = this.props;
      addSuccess(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { classes, text, color, data } = this.props;
    return (
      <Grid container className={classes.wrapper} style={gradient(color)}>
        <Grid className={classes.header} xs={10}>
          <Typography className={classes.title}>Rando-life</Typography>
        </Grid>
        <Grid className={classes.buttonsContainer} xs={9}>
          <ButtonsContainer />
        </Grid>
        <Grid className={classes.mainContainer} xs={9}>
          <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            style={{ backgroundColor: 'white', width: '40%', margin: '30px' }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Grid style={{ marginTop: '50px' }}>
            <Typography>
              {data}
            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.footer} style={{ backgroundColor: `${color}`, opacity: '0.8' }} xs={9}>
          <Typography>Footer</Typography>
        </Grid>
      </Grid>
    );
  }
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string,
  testAction: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  addSuccess: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

MainPage.defaultProps = {
  text: 'Witam na mojej stronie :)',
};

const mapStateToProps = state => ({
  color: state.mainPage.color,
  data: state.mainPage.data,
  loading: state.mainPage.loading,
  error: state.mainPage.error,
});

const mapDispatchToProps = {
  testAction,
  addSuccess,
  addStarted,
  addFailure,
};

const composedMainPage = compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(MainPage);

export default composedMainPage;
