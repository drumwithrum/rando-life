import React from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import pagesSettings from 'config/pagesSettings';
import Date from './Date';
import Year from './Year';
import Math from './Math';
import Random from './Random';
import styles from './Content.style';

class Content extends React.PureComponent {
  renderContent = () => {
    const { page } = this.props;
    const {
      date,
      year,
      math,
      random,
    } = pagesSettings;
    switch (page) {
      case date.id:
        return (<Date />);
      case year.id:
        return (<Year />);
      case math.id:
        return (<Math />);
      case random.id:
        return (<Random />);
      default:
        return (<p>:C</p>);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.wrapper}>
        {this.renderContent()}
      </Grid>
    );
  }
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
  page: PropTypes.string.isRequired,
};

Content.defaultProps = {
};

const mapStateToProps = state => ({
  page: state.mainPage.page,
});

const mapDispatchToProps = {
};

const composedContent = compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(Content);

export default composedContent;
