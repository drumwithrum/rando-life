import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import startingPage from '../Views/StartingPage/store/reducer';

const reducers = (history) => combineReducers({
  startingPage,
  router: connectRouter(history),
});

export default reducers;
