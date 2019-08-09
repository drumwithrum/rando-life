import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import pagesSettings from 'config/pagesSettings';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ButtonsContainer, Content, Decorations } from './components/index';
import styles, { gradient } from './MainPage.style';

class MainPage extends PureComponent {
  render() {
    const { classes, page } = this.props;
    return (
      <Grid container className={classes.wrapper} style={gradient(pagesSettings[page].colorPale)}>
        <Decorations />
        <Grid className={classes.mainContainer} xs={10}>
          <ButtonsContainer />
          <Content />
        </Grid>
        <Grid className={classes.footer} style={{ backgroundColor: `${pagesSettings[page].color}`, opacity: '0.8' }} xs={10}>
          <Typography>Rando-life</Typography>
        </Grid>
      </Grid>
    );
  }
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
  page: PropTypes.string.isRequired,
};

MainPage.defaultProps = {
};

const mapStateToProps = state => ({
  color: state.mainPage.color,
  page: state.mainPage.page,
});

const mapDispatchToProps = {
};

const composedMainPage = compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(MainPage);

export default composedMainPage;
