import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import pagesSettings from 'config/pagesSettings';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ButtonsContainer, Content } from './components/index';
import styles, { gradient } from './MainPage.style';
import {
  addSuccess,
  addStarted,
  addFailure,
} from './store/actions';

class MainPage extends PureComponent {
  render() {
    const { classes, page } = this.props;
    return (
      <Grid container className={classes.wrapper} style={gradient(pagesSettings[page].color)}>
        <Grid className={classes.header} xs={10}>
          <Typography className={classes.title}>Rando-life</Typography>
        </Grid>
        <Grid className={classes.buttonsContainer} xs={9}>
          <ButtonsContainer />
        </Grid>
        <Grid className={classes.mainContainer} xs={9}>
          <Content />
        </Grid>
        <Grid className={classes.footer} style={{ backgroundColor: `${pagesSettings[page].color}`, opacity: '0.8' }} xs={9}>
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
  addSuccess: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

MainPage.defaultProps = {
  text: 'Witam na mojej stronie :)',
};

const mapStateToProps = state => ({
  color: state.mainPage.color,
  data: state.mainPage.data,
  loading: state.mainPage.loading,
  error: state.mainPage.error,
  page: state.mainPage.page,
});

const mapDispatchToProps = {
  addSuccess,
  addStarted,
  addFailure,
};

const composedMainPage = compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(MainPage);

export default composedMainPage;
