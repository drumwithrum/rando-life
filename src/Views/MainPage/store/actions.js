import axios from 'axios';
import {
  CHANGE_PAGE,
  ADD_SUCCESS,
  ADD_STARTED,
  ADD_FAILURE,
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

export function addStarted() {
  return { type: ADD_STARTED };
}
export function addFailure(error) {
  return { type: ADD_FAILURE, payload: error };
}

export function getRandomFactRequest() {
  return { type: GET_RANDOM_FACT_REQUEST };
}

export function getRandomFactSuccess(response) {
  return { type: GET_RANDOM_FACT_SUCCESS, payload: response };
}

export function getRandomFactFailure(error) {
  return { type: GET_RANDOM_FACT_FAILURE, payload: error };
}

export function getRandomFact() {
  return async (dispatch) => {
    const apiTest = axios.create({
      method: 'GET',
      baseURL: 'https://numbersapi.p.rapidapi.com/random/trivia',
      headers: {
        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
        'X-RapidAPI-Key': 'a0e5fcc8d4msh1ec1af95e384ca6p1a79aajsnc6d3c773f4c0',
      },
      params: {
        json: true,
      },
    });
    try {
      dispatch(getRandomFactRequest());
      const response = await apiTest();
      dispatch(getRandomFactSuccess(response));
    } catch (error) {
      dispatch(getRandomFactFailure(error));
    }
  };
}
export function getDateFactRequest() {
  return { type: GET_DATE_FACT_REQUEST };
}

export function getDateFactSuccess(response) {
  return { type: GET_DATE_FACT_SUCCESS, payload: response };
}

export function getDateFactFailure(error) {
  return { type: GET_DATE_FACT_FAILURE, payload: error };
}

export function getDateFact(day, month) {
  return async (dispatch) => {
    const apiTest = axios.create({
      method: 'GET',
      baseURL: `https://numbersapi.p.rapidapi.com/${month}/${day}/date`,
      headers: {
        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
        'X-RapidAPI-Key': 'a0e5fcc8d4msh1ec1af95e384ca6p1a79aajsnc6d3c773f4c0',
      },
      params: {
        json: true,
      },
    });
    try {
      dispatch(getDateFactRequest());
      const response = await apiTest();
      dispatch(getDateFactSuccess(response));
    } catch (error) {
      dispatch(getDateFactFailure(error));
    }
  };
}
export function getYearFactRequest() {
  return { type: GET_YEAR_FACT_REQUEST };
}

export function getYearFactSuccess(response) {
  return { type: GET_YEAR_FACT_SUCCESS, payload: response };
}

export function getYearFactFailure(error) {
  return { type: GET_YEAR_FACT_FAILURE, payload: error };
}

export function getYearFact(year) {
  return async (dispatch) => {
    const apiTest = axios.create({
      method: 'GET',
      baseURL: `https://numbersapi.p.rapidapi.com/${year}/year`,
      headers: {
        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
        'X-RapidAPI-Key': 'a0e5fcc8d4msh1ec1af95e384ca6p1a79aajsnc6d3c773f4c0',
      },
      params: {
        json: true,
      },
    });
    try {
      dispatch(getYearFactRequest());
      const response = await apiTest();
      dispatch(getYearFactSuccess(response));
    } catch (error) {
      dispatch(getYearFactFailure(error));
    }
  };
}

export function getMathFactRequest() {
  return { type: GET_MATH_FACT_REQUEST };
}

export function getMathFactSuccess(response) {
  return { type: GET_MATH_FACT_SUCCESS, payload: response };
}

export function getMathFactFailure(error) {
  return { type: GET_MATH_FACT_FAILURE, payload: error };
}

export function getMathFact(number) {
  return async (dispatch) => {
    const apiTest = axios.create({
      method: 'GET',
      baseURL: `https://numbersapi.p.rapidapi.com/${number}/math`,
      headers: {
        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
        'X-RapidAPI-Key': 'a0e5fcc8d4msh1ec1af95e384ca6p1a79aajsnc6d3c773f4c0',
      },
      params: {
        json: true,
      },
    });
    try {
      dispatch(getMathFactRequest());
      const response = await apiTest();
      dispatch(getMathFactSuccess(response));
    } catch (error) {
      dispatch(getMathFactFailure(error));
    }
  };
}

export function changePage(pageName) {
  return { type: CHANGE_PAGE, payload: pageName };
}

export function addSuccess(data) {
  return { type: ADD_SUCCESS, payload: data };
}
