import {
  TEST,
  CHANGE_COLOR,
  CHANGE_PAGE,
  ADD_STARTED,
  ADD_SUCCESS,
  ADD_FAILURE,
  GET_RANDOM_FACT_REQUEST,
  GET_RANDOM_FACT_SUCCESS,
  GET_RANDOM_FACT_FAILURE,
  GET_YEAR_FACT_REQUEST,
  GET_YEAR_FACT_SUCCESS,
  GET_YEAR_FACT_FAILURE,
} from './types';

const initialState = {
  testowo: ':)',
  color: 'rgba(225, 205, 225, 0.9)',
  randomFact: '',
  yearFact: '',
  loading: false,
  error: null,
  page: 'start',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        testowo: 'hehe',
      };
    case GET_RANDOM_FACT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_RANDOM_FACT_SUCCESS: {
      const { payload: { data } } = action;
      return {
        ...state,
        loading: false,
        error: null,
        randomFact: data,
      };
    }
    case GET_RANDOM_FACT_FAILURE: {
      const { payload } = action;
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }
    case GET_YEAR_FACT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_YEAR_FACT_SUCCESS: {
      const { payload: { data } } = action;
      return {
        ...state,
        loading: false,
        error: null,
        yearFact: data,
      };
    }
    case GET_YEAR_FACT_FAILURE: {
      const { payload } = action;
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }
    case CHANGE_COLOR: {
      const { payload } = action;
      return {
        ...state,
        color: payload,
      };
    }
    case CHANGE_PAGE: {
      const { payload } = action;
      return {
        ...state,
        page: payload,
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
