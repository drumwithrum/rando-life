import { TEST, CHANGE_COLOR } from './types';

export function testAction() {
  return { type: TEST };
}

export function changeColor(color) {
  return { type: CHANGE_COLOR, payload: color };
}
