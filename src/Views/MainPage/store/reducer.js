import {
  TEST,
  CHANGE_COLOR,
  ADD_STARTED,
  ADD_SUCCESS,
  ADD_FAILURE,
} from './types';

const initialState = {
  testowo: ':)',
  color: 'rgba(225, 205, 225, 0.9)',
  data: 'Hi',
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        testowo: 'hehe',
      };
    case CHANGE_COLOR: {
      const { payload } = action;
      return {
        ...state,
        color: payload,
      };
    }
    case ADD_STARTED:
      return {
        ...state,
        loading: true,
      };
    case ADD_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        loading: false,
        error: null,
        data: payload,
      };
    }
    case ADD_FAILURE: {
      const { payload } = action;
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }
    default:
      return state;
  }
};
