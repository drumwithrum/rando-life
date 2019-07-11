import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';
import MainPage from './MainPage';

const theme = createMuiTheme();
const history = createBrowserHistory();

const store = configureStore();

const Views = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={() => <MainPage text="hehe xd" />} />
        </Switch>
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>
);

export default Views;
