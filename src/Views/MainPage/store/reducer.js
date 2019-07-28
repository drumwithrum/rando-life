import {
  TEST,
  CHANGE_PAGE,
  GET_RANDOM_FACT_REQUEST,
  GET_RANDOM_FACT_SUCCESS,
  GET_RANDOM_FACT_FAILURE,
  GET_DATE_FACT_REQUEST,
  GET_DATE_FACT_SUCCESS,
  GET_DATE_FACT_FAILURE,
  GET_YEAR_FACT_REQUEST,
  GET_YEAR_FACT_SUCCESS,
  GET_YEAR_FACT_FAILURE,
  GET_MATH_FACT_REQUEST,
  GET_MATH_FACT_SUCCESS,
  GET_MATH_FACT_FAILURE,
} from './types';

const initialState = {
  testowo: ':)',
  color: 'rgba(225, 205, 225, 0.9)',
  randomFact: '',
  dateFact: '',
  yearFact: '',
  mathFact: '',
  loading: false,
  error: null,
  page: 'date',
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
    case GET_DATE_FACT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_DATE_FACT_SUCCESS: {
      const { payload: { data } } = action;
      return {
        ...state,
        loading: false,
        error: null,
        dateFact: data,
      };
    }
    case GET_DATE_FACT_FAILURE: {
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
    case GET_MATH_FACT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_MATH_FACT_SUCCESS: {
      const { payload: { data } } = action;
      return {
        ...state,
        loading: false,
        error: null,
        mathFact: data,
      };
    }
    case GET_MATH_FACT_FAILURE: {
      const { payload } = action;
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }
    case CHANGE_PAGE: {
      const { payload } = action;
      return {
        ...state,
        page: payload,
      };
    }
    default:
      return state;
  }
};
