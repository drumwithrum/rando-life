import { createBrowserHistory } from 'history';
import { createStore } from 'redux';
import rootReducer from 'store';
import middleware from 'store/middleware';

export const history = createBrowserHistory();

export default (preloadedState) => (
  createStore(
    rootReducer(history),
    preloadedState,
    middleware(history),
  )
);
