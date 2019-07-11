import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import mainPage from '../Views/MainPage/store/reducer';

const reducers = history => combineReducers({
  mainPage,
  router: connectRouter(history),
});

export default reducers;
