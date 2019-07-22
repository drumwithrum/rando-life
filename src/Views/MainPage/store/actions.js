import {
  TEST,
  CHANGE_COLOR,
  ADD_SUCCESS,
  ADD_STARTED,
  ADD_FAILURE,
} from './types';

export function testAction() {
  return { type: TEST };
}

export function changeColor(color) {
  return { type: CHANGE_COLOR, payload: color };
}

export function addSuccess(data) {
  return { type: ADD_SUCCESS, payload: data };
}

export function addStarted() {
  return { type: ADD_STARTED };
}

export function addFailure(error) {
  return { type: ADD_FAILURE, payload: error };
}
